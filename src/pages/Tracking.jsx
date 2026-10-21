// src/pages/Tracking.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Search, Package, MapPin, Clock, CheckCircle } from "lucide-react";

const API_URL = import.meta.env.VITE_APP_API_URL;

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingEvents, setTrackingEvents] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async (event) => {
    event.preventDefault();
    const awb = trackingId.trim();

    if (!awb) {
      setError("Please enter a Tracking ID.");
      setTrackingEvents(null);
      return;
    }

    setIsTracking(true);
    setError("");
    setTrackingEvents(null);

    try {
      const response = await fetch(`${API_URL}/shipment/track`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ awb }),
      });
      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to track this shipment. Please try again.");
      }

      if (!Array.isArray(result.data)) {
        throw new Error("The tracking service returned an invalid response.");
      }

      setTrackingEvents(result.data);
    } catch (trackingError) {
      setError(
        trackingError instanceof Error
          ? trackingError.message
          : "Unable to track this shipment. Please try again."
      );
    } finally {
      setIsTracking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Track Your Shipment
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Real-Time Tracking
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Enter your tracking ID to get instant updates on your shipment status.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleTrack} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-1 w-full">
                <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter Tracking ID / AWB"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 text-gray-800"
                  aria-label="Enter Tracking ID or AWB number"
                />
              </div>
              <button
                type="submit"
                disabled={isTracking || !API_URL}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
              >
                {isTracking ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Tracking...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Track
                  </>
                )}
              </button>
            </div>
            {!API_URL && (
              <p className="mt-4 text-sm text-red-600" role="alert">
                Shipment tracking is not configured. Please contact support.
              </p>
            )}
            {error && (
              <p className="mt-4 text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
          </form>

          {trackingEvents !== null && (
            <section
              className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-8"
              aria-live="polite"
              aria-labelledby="tracking-results-heading"
            >
              <h2 id="tracking-results-heading" className="mb-6 text-2xl font-bold text-gray-900">
                Tracking results for {trackingId.trim()}
              </h2>
              {trackingEvents.length === 0 ? (
                <p className="text-gray-600">No tracking updates are available for this shipment yet.</p>
              ) : (
                <ol className="space-y-6">
                  {trackingEvents.map((trackingEvent, index) => {
                    const eventDate = trackingEvent.timestamp
                      ? new Date(trackingEvent.timestamp)
                      : null;
                    const formattedTimestamp =
                      eventDate && !Number.isNaN(eventDate.getTime())
                        ? eventDate.toLocaleString()
                        : trackingEvent.timestamp;

                    return (
                      <li key={`${trackingEvent.timestamp}-${trackingEvent.status}-${index}`} className="relative flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div className="min-w-0 flex-1 border-b border-gray-100 pb-5">
                          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                            <h3 className="font-semibold text-gray-900">{trackingEvent.status}</h3>
                            {formattedTimestamp && (
                              <time className="text-sm text-gray-500">{formattedTimestamp}</time>
                            )}
                          </div>
                          {trackingEvent.description && (
                            <p className="mt-1 text-gray-600">{trackingEvent.description}</p>
                          )}
                          {trackingEvent.location && (
                            <p className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="h-4 w-4 shrink-0" />
                              {trackingEvent.location}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </section>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: "Live Location", desc: "Track your package in real-time" },
              { icon: Clock, title: "Estimated Delivery", desc: "Know exactly when it arrives" },
              { icon: CheckCircle, title: "Status Updates", desc: "Get notified at every step" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">Need Help?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-white/90">
          Our support team is here to assist you 24/7.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          Contact Support
        </Link>
      </section>
    </div>
  );
};

export default Tracking;