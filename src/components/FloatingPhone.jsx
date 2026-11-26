// src/components/FloatingPhone.jsx
import React from "react";
import { Phone } from "lucide-react";

const FloatingPhone = () => {
  return (
    <a
      href="tel:+918530470626"
      aria-label="Call +91 85304 70626"
      title="Call +91 85304 70626"
      className="fixed bottom-44 md:bottom-28 right-4 md:right-8 z-40 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110">
          <Phone className="w-6 h-6" />
        </div>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
        <span className="hidden md:block pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          Call +91 85304 70626
        </span>
      </div>
    </a>
  );
};

export default FloatingPhone;
