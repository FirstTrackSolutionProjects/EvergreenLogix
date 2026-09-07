// src/pages/TermsOfUse.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, FileCheck, Scale, Shield, Users, AlertCircle, BookOpen, Mail, Sparkles } from "lucide-react";

const TermsOfUse = () => {
  const sections = [
    {
      icon: FileCheck,
      title: "1. Acceptance of Terms",
      content: "By using Evergreen Logix services, you confirm that you have read, understood, and agreed to these Terms of Use. If you do not agree with any part of these terms, you must discontinue use of our services immediately.",
    },
    {
      icon: BookOpen,
      title: "2. Services Provided",
      content: "Evergreen Logix provides logistics and courier services, including order pickup, shipment delivery, shipment tracking, and related support services. These terms apply to all users of our platform.",
    },
    {
      icon: Users,
      title: "3. User Responsibilities",
      content: [
        "Provide accurate, complete, and up-to-date information",
        "Comply with all applicable laws and regulations",
        "Use the platform only for lawful purposes",
        "Protect your account credentials and activity",
        "Ensure proper packaging and labeling of shipments",
      ],
    },
    {
      icon: AlertCircle,
      title: "4. Prohibited Activities",
      content: [
        "Illegal, fraudulent, or unauthorized use of our services",
        "Shipping prohibited or hazardous goods",
        "Unauthorized access to systems or data",
        "Impersonation or misuse of identity",
        "Interfering with or disrupting our services",
      ],
    },
    {
      icon: Scale,
      title: "5. Limitation of Liability",
      content: "Evergreen Logix shall not be liable for any indirect, incidental, or consequential damages. Delays or losses caused by third-party partners, natural events, or circumstances beyond our control are not our responsibility.",
    },
    {
      icon: Shield,
      title: "6. Intellectual Property",
      content: "All content on the Evergreen Logix platform, including text, graphics, logos, icons, and images, is the intellectual property of Evergreen Logix. Unauthorized use is strictly prohibited.",
    },
    {
      icon: FileCheck,
      title: "7. Termination of Use",
      content: "Evergreen Logix reserves the right to suspend or terminate access to its services at any time if these Terms of Use are violated. We will notify you of any such action.",
    },
    {
      icon: BookOpen,
      title: "8. Changes to Terms",
      content: "These Terms of Use may be updated periodically. Continued use of our services constitutes acceptance of the revised terms. We encourage you to review these terms regularly.",
    },
    {
      icon: Scale,
      title: "9. Governing Law",
      content: "These Terms of Use shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction where Evergreen Logix operates.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Terms of Use
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Understand the terms and conditions that govern your use of our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-center border-b border-gray-200 pb-8">
            Welcome to <strong>Evergreen Logix</strong>. By accessing or using our
            website, mobile application, or services, you agree to comply with and
            be bound by these Terms of Use. Please read them carefully before using
            our platform.
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
            Have Questions About Our Terms?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-white/90">
            Our team is here to clarify any questions you may have.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;