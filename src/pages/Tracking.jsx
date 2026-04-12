import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for Contact Us
import { MessageCircle, Search } from "lucide-react";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleTrack = () => {
    if (!trackingId.trim()) {
      alert("Please enter a Tracking ID.");
      return;
    }
    // In a real application, you'd make an API call here and navigate to a results page
    alert(`Tracking ID: ${trackingId}. (This would lead to a tracking results page in a real application)`);
    // navigate(`/tracking-results?id=${trackingId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* TOP TRACKING AREA */}
      <section className="flex flex-col items-center justify-center py-20 md:py-28 bg-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 text-center">
          Track Your Parcel in Real-Time
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-xl px-4">Enter your tracking ID below to get the latest updates on your shipment status.</p>


        <div className="flex flex-col sm:flex-row items-center bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md">
          <input
            type="text"
            placeholder="Enter Tracking Id/AWB"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="px-6 py-4 w-full sm:w-72 bg-transparent outline-none text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
            aria-label="Enter Tracking ID or AWB number" // Accessibility: Add aria-label
          />
          <button
            onClick={handleTrack}
            className="flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all duration-200 border-l border-emerald-500 sm:border-l sm:border-gray-200 w-full sm:w-auto justify-center focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
          >
            <Search className="w-5 h-5" />
            Track
          </button>
        </div>
      </section>

      {/* BLUE CONNECT SECTION */}
      <section className="bg-gradient-to-br from-emerald-600 to-sky-700 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow-md">Let’s Connect!</h2>
        <p className="max-w-2xl mx-auto mb-10 text-base md:text-lg opacity-90">
          We are always ready to assist you with your logistics needs.
          Contact us today!
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300" // Wrapped in Link and added focus styles
        >
          <MessageCircle className="w-5 h-5" />
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Tracking;
