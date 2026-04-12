import React from "react";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  const handleClick = () => {
    window.open(
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
          Let’s Connect!
        </h2>

        <p className="text-base md:text-xl mb-8 opacity-90">
          We are always ready to assist you with your logistics needs.
          Contact us today!
        </p>

        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
        >
          <MessageCircle className="w-5 h-5" />
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default CTA;
