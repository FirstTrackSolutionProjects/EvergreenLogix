// src/pages/FAQ.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, MessageCircle, HelpCircle, Search } from "lucide-react";

const faqs = [
  {
    q: "What services does Evergreen Logix offer?",
    a: "Evergreen Logix offers domestic and international shipping, real-time tracking, express delivery, and comprehensive logistics solutions including warehousing, supply chain management, and eco-friendly shipping options.",
  },
  {
    q: "How can I track my shipment?",
    a: "You can easily track your shipment using the tracking ID provided after booking. Simply enter it on our dedicated tracking page to get real-time updates on your package location and status.",
  },
  {
    q: "What is the estimated delivery time for local and international shipments?",
    a: "Local shipments usually take 1–3 business days, while international shipments depend on the destination and typically take 5–10 business days. Express shipping options are also available for faster delivery.",
  },
  {
    q: "How do I schedule a shipment?",
    a: "You can schedule a shipment by logging into your account, selecting 'Book a Shipment', and following the guided steps on our platform. New customers can register in just 2 minutes.",
  },
  {
    q: "What are your shipping rates?",
    a: "Shipping rates depend on package size, weight, destination, and chosen service. For an accurate estimate, please use our shipping calculator on the pricing page.",
  },
  {
    q: "Is Evergreen Logix available worldwide?",
    a: "Yes, Evergreen Logix offers international shipping services to over 150+ countries, connecting you globally with ease and reliability.",
  },
  {
    q: "How do I contact customer support?",
    a: "Our customer support team is available 24/7. You can reach us via phone at +91 1234567890, email at info@evergreenlogix.com, or through the contact form on our website.",
  },
  {
    q: "What makes Evergreen Logix eco-friendly?",
    a: "Evergreen Logix is committed to sustainability through eco-friendly packaging, carbon offset shipping options, electric delivery vehicles, and optimized routes to reduce emissions.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(faq =>
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to the most common questions about our logistics services.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900">No results found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(active === i ? null : i)}
                className={`bg-white rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 border ${
                  active === i 
                    ? "border-emerald-200 shadow-lg shadow-emerald-500/10" 
                    : "border-gray-200 hover:border-emerald-200 hover:shadow-md"
                } focus:outline-none focus:ring-2 focus:ring-emerald-300`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActive(active === i ? null : i);
                  }
                }}
                aria-expanded={active === i}
                aria-controls={`faq-answer-${i}`}
                role="button"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                      active === i ? "text-emerald-600" : "text-gray-400"
                    }`} />
                    <h3 className={`font-semibold text-lg md:text-xl ${
                      active === i ? "text-emerald-600" : "text-gray-800"
                    }`}>
                      {item.q}
                    </h3>
                  </div>
                  <span className={`flex-shrink-0 transition-all duration-300 ${
                    active === i ? "text-emerald-600" : "text-gray-400"
                  }`}>
                    {active === i ? <Minus size={24} /> : <Plus size={24} />}
                  </span>
                </div>

                {active === i && (
                  <div className="mt-4 pl-9">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg animate-fade-in border-l-4 border-emerald-500 pl-4">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Still Have Questions */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Still Have Questions?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-white/90">
            Our support team is ready to assist you. Don't hesitate to reach out!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;