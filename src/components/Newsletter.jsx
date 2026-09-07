// src/components/Newsletter.jsx
import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="w-full bg-gradient-to-br from-emerald-600 to-emerald-800 py-24">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
          📬 Newsletter
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
          Stay Updated with Evergreen Logix
        </h2>

        <p className="text-base md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest updates on sustainable logistics,
          shipping innovations, and industry insights delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
        >
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 transition-all duration-200"
              aria-label="Email address for newsletter subscription"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-white"
          >
            Subscribe
            <Send className="w-5 h-5" />
          </button>
        </form>

        <p className="text-white/60 text-sm mt-6">
          ✨ No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;