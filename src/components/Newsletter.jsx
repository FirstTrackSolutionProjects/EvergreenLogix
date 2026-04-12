import React, { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with: ${email}`); // Provide visual feedback to the user
    setEmail("");
  };

  return (
    <section className="w-full bg-gradient-to-br from-indigo-700 to-purple-600 py-24">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">

        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
          Stay Updated with Shopy Courier
        </h2>

        <p className="text-base md:text-xl opacity-90 mb-10">
          Subscribe to our newsletter and get the latest updates on logistics
          and shipping.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
        >
          {/* Email Input */}
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/20 border-2 border-white text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 transition-all duration-200" // Adjusted focus ring to brand color
              aria-label="Email address for newsletter subscription" // Accessibility: Add aria-label
            />
          </div>

          {/* Subscribe Button */}
          <button
            type="submit"
            className="bg-white text-emerald-600 hover:bg-emerald-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white" // Added focus styles
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;
