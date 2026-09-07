// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Shield, Lock, Eye, Cookie, Users, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "1. Information We Collect",
      content: "We may collect personal information such as your name, email address, phone number, pickup and delivery address, and shipment details when you register, place an order, track a shipment, or contact our support team.",
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      content: [
        "To process and deliver your shipments",
        "To provide real-time tracking and shipment updates",
        "To communicate service-related information",
        "To improve our platform and user experience",
        "To comply with legal and regulatory requirements",
      ],
    },
    {
      icon: Lock,
      title: "3. Data Security",
      content: "Evergreen Logix uses secure systems and industry-standard measures to protect your personal information from unauthorized access, misuse, or disclosure. We employ encryption, secure servers, and regular security audits.",
    },
    {
      icon: Users,
      title: "4. Sharing of Information",
      content: "We do not sell or rent your personal information. Your data may be shared only with trusted logistics partners or service providers when necessary to complete deliveries or comply with legal obligations.",
    },
    {
      icon: Cookie,
      title: "5. Cookies",
      content: "Our website may use cookies to enhance user experience, analyze usage, and improve functionality. You can manage cookie preferences through your browser settings.",
    },
    {
      icon: Shield,
      title: "6. Your Rights",
      content: "You have the right to access, update, or delete your personal information at any time. To exercise these rights, please contact us at support@evergreenlogix.site",
    },
    {
      icon: Lock,
      title: "7. Changes to This Policy",
      content: "Evergreen Logix may update this Privacy Policy periodically. Any changes will be posted on this page, and continued use of our services indicates acceptance of the updated policy.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Privacy
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we protect your data.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-center border-b border-gray-200 pb-8">
            At <strong>Evergreen Logix</strong>, we value your trust and are committed
            to protecting your privacy. This Privacy Policy explains how we collect,
            use, and safeguard your personal information when you use our website,
            application, or services.
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
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-2 text-gray-700">
                          {section.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-500 mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
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
            Need More Information?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-white/90">
            Our team is available to clarify any questions you may have about our policies.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;