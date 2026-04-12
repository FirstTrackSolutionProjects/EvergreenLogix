import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What services does Shopy Courier offer?",
    a: "Shopy Courier offers domestic and international shipping, real-time tracking, express delivery, and comprehensive logistics solutions including warehousing and supply chain management.",
  },
  {
    q: "How can I track my shipment?",
    a: "You can easily track your shipment using the tracking ID provided after booking. Simply enter it on our dedicated tracking page to get real-time updates.",
  },
  {
    q: "What is the estimated delivery time for local and international shipments?",
    a: "Local shipments usually take 1–3 business days, while international shipments depend on the destination and typically take 5–10 business days.",
  },
  {
    q: "How do I schedule a shipment?",
    a: "You can schedule a shipment by logging into your account, selecting 'Book a Shipment', and following the guided steps on our platform.",
  },
  {
    q: "What are your shipping rates?",
    a: "Shipping rates depend on package size, weight, destination, and chosen service. For an accurate estimate, please use our shipping calculator on the pricing page.",
  },
  {
    q: "Is Shopy Courier available worldwide?",
    a: "Yes, Shopy Courier offers international shipping services to a wide range of countries, connecting you globally with ease.",
  },
  {
    q: "How do I contact customer support?",
    a: "Our customer support team is available 24/7. You can reach us via phone at +91 1234567890, email at info@shopycourier.site, or through the contact form on our website.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section for FAQ */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-gradient-to-r from-emerald-500 to-sky-600 mb-12">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-8">

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className="bg-gray-100 hover:bg-gray-200 rounded-xl px-6 py-5 cursor-pointer transition-colors duration-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300" // Enhanced hover, border, and added focus styles
              tabIndex={0} // Make div focusable for keyboard navigation
              onKeyDown={(e) => { // Handle keyboard (Enter/Space) to toggle
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActive(active === i ? null : i);
                }
              }}
              aria-expanded={active === i} // Accessibility: Indicate expanded state
              aria-controls={`faq-answer-${i}`} // Accessibility: Link question to answer
              role="button" // Accessibility: Indicate it's an interactive element
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg md:text-xl text-slate-800">{item.q}</h3>
                <span className="text-2xl font-bold text-emerald-600">
                  {active === i ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </div>

              {active === i && (
                <p id={`faq-answer-${i}`} className="mt-4 text-gray-700 leading-relaxed text-base md:text-lg animate-fade-in">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* LETS CONNECT SECTION */}
      <section className="bg-gradient-to-br from-emerald-600 to-sky-700 text-white py-20 text-center px-4 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">Still have questions?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg opacity-90">
          Our support team is ready to assist you. Don't hesitate to reach out!
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
        >
          <MessageCircle className="w-5 h-5" />
          Get in Touch
        </Link>
      </section>

      {/* Animation for FAQ answer */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
