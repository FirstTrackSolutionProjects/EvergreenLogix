// src/pages/RefundCancellation.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, RefreshCw, XCircle, Clock, AlertCircle, Shield, CheckCircle, Mail, DollarSign } from "lucide-react";

const RefundCancellation = () => {
  const sections = [
    {
      icon: XCircle,
      title: "1. Cancellation of Shipments",
      content: "Shipments can be canceled only before pickup is completed. Once the courier has picked up the package, cancellation requests will not be accepted.",
      points: [
        "Cancellation requests must be made through your account dashboard or by contacting customer support.",
        "Any service or processing fees incurred before cancellation may be non-refundable.",
      ],
    },
    {
      icon: RefreshCw,
      title: "2. Refund Eligibility",
      content: "Refunds may be issued in the following cases:",
      points: [
        "The shipment is canceled before pickup.",
        "A duplicate payment or incorrect charge occurs due to a system or technical error.",
        "Evergreen Logix is unable to provide the service due to internal operational issues.",
      ],
    },
    {
      icon: AlertCircle,
      title: "3. Non-Refundable Situations",
      content: "Refunds will not be issued in the following situations:",
      points: [
        "The shipment has already been picked up or is in transit.",
        "Delays caused by customs clearance, weather conditions, strikes, natural disasters, or third-party logistics partners.",
        "Incorrect or incomplete shipment details provided by the user.",
        "Shipments restricted, delayed, or confiscated by government or customs authorities.",
      ],
    },
    {
      icon: Clock,
      title: "4. Refund Processing Time",
      content: "Approved refunds will be processed within 7–10 business days and credited to the original payment method used at the time of booking. You will receive a confirmation email once the refund is processed.",
    },
    {
      icon: Shield,
      title: "5. Damaged or Lost Shipments",
      content: "In the event of damage or loss, compensation may be considered based on the declared value of the shipment, supporting documents (such as invoices and photographs), and the outcome of investigations conducted by Evergreen Logix and its logistics partners. Compensation is subject to applicable policies and third-party carrier terms.",
    },
    {
      icon: RefreshCw,
      title: "6. Changes to This Policy",
      content: "Evergreen Logix reserves the right to update or modify this Refund & Cancellation Policy at any time. Any changes will be effective immediately upon being posted on this page. We encourage you to review this policy periodically.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Policies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Refund & Cancellation Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Understand our policies for cancellations, refunds, and compensation.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-center border-b border-gray-200 pb-8">
            At <strong>Evergreen Logix</strong>, we aim to provide reliable and
            efficient courier and logistics services. This Refund & Cancellation
            Policy explains when cancellations, refunds, or compensation may be
            applicable.
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {section.content}
                      </p>
                      {section.points && (
                        <ul className="space-y-2 text-gray-700">
                          {section.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-500 mt-1.5">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Last updated: January 12, 2026
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Need Help With a Refund?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-white/90">
            Contact our support team for assistance with refunds or cancellations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <DollarSign className="w-5 h-5" />
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundCancellation;