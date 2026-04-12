import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 mb-12">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
          Terms of Use
        </h1>
      </section>

      <div className="px-6 max-w-5xl mx-auto pb-20">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 text-center">
          Welcome to <strong>Shopy Courier</strong>. By accessing or using our
          website, mobile application, or services, you agree to comply with and
          be bound by these Terms of Use. Please read them carefully before using
          our platform.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              By using Shopy Courier services, you confirm that you have read,
              understood, and agreed to these Terms of Use. If you do not agree
              with any part of these terms, you must discontinue use of our
              services immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              2. Services Provided
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Shopy Courier provides logistics and courier services, including
              order pickup, shipment delivery, shipment tracking, and related
              support services. These terms apply to all users of our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>Provide accurate, complete, and up-to-date information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use the platform only for lawful purposes</li>
              <li>Protect your account credentials and activity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              4. Prohibited Activities
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>Illegal, fraudulent, or unauthorized use</li>
              <li>Shipping prohibited or hazardous goods</li>
              <li>Unauthorized access to systems or data</li>
              <li>Impersonation or misuse of identity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Shopy Courier shall not be liable for any indirect, incidental, or
              consequential damages. Delays or losses caused by third-party
              partners, natural events, or circumstances beyond our control are
              not our responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              All content on the Shopy Courier platform, including text,
              graphics, logos, icons, and images, is the intellectual property of
              Shopy Courier. Unauthorized use is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              7. Termination of Use
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Shopy Courier reserves the right to suspend or terminate access to
              its services at any time if these Terms of Use are violated.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              8. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              These Terms of Use may be updated periodically. Continued use of
              our services constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              9. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              These Terms of Use shall be governed by and interpreted in
              accordance with the laws applicable in the jurisdiction where
              Shopy Courier operates.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              10. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              If you have any questions regarding these Terms of Use, please
              contact us at{" "}
              <a
                href="mailto:support@shopycourier.site"
                className="text-emerald-600 underline hover:text-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded" // Added focus styles
              >
                support@shopycourier.site
              </a>
            </p>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-10 text-center">
          Last updated: January 12, 2026
        </p>
      </div>

      {/* Generic CTA for policy pages */}
      <section className="bg-gradient-to-br from-emerald-600 to-sky-700 text-white py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">Need More Information?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg opacity-90">
          Our team is available to clarify any questions you may have about our terms.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
        >
          <MessageCircle className="w-5 h-5" />
          Contact Support
        </Link>
      </section>
    </div>
  );
};

export default TermsOfUse;
