import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 mb-12">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
          Privacy Policy
        </h1>
      </section>

      <div className="px-6 max-w-5xl mx-auto pb-20">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 text-center">
          At <strong>Shopy Courier</strong>, we value your trust and are committed
          to protecting your privacy. This Privacy Policy explains how we collect,
          use, and safeguard your personal information when you use our website,
          application, or services.
        </p>

        {/* 1 */}
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-slate-900">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          We may collect personal information such as your name, email address,
          phone number, pickup and delivery address, and shipment details when you
          register, place an order, track a shipment, or contact our support team.
        </p>

        {/* 2 */}
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-slate-900">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
          <li>To process and deliver your shipments</li>
          <li>To provide real-time tracking and shipment updates</li>
          <li>To communicate service-related information</li>
          <li>To improve our platform and user experience</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>

        {/* 3 */}
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-slate-900">
          3. Data Security
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          Shopy Courier uses secure systems and industry-standard measures to
          protect your personal information from unauthorized access, misuse, or
          disclosure.
        </p>

        {/* 4 */}
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-slate-900">
          4. Sharing of Information
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          We do not sell or rent your personal information. Your data may be
          shared only with trusted logistics partners or service providers when
          necessary to complete deliveries or comply with legal obligations.
        </p>

        {/* 5 */}
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-slate-900">
          5. Cookies
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          Our website may use cookies to enhance user experience, analyze usage,
          and improve functionality. You can manage cookie preferences through
          your browser settings.
        </p>

        {/* 6 */}
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-slate-900">
          6. Your Rights
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          You have the right to access, update, or delete your personal
          information at any time. To exercise these rights, please contact us at{" "}
          <a
            href="mailto:support@shopycourier.site"
            className="text-emerald-600 underline hover:text-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded" // Added focus styles
          >
            support@shopycourier.site
          </a>
        </p>

        {/* 7 */}
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-slate-900">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          Shopy Courier may update this Privacy Policy periodically. Any changes
          will be posted on this page, and continued use of our services indicates
          acceptance of the updated policy.
        </p>

        {/* 8 */}
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-slate-900">
          8. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed text-base">
          If you have any questions or concerns about this Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:support@shopycourier.site"
            className="text-emerald-600 underline hover:text-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded" // Added focus styles
          >
            support@shopycourier.site
          </a>
        </p>

        <p className="text-sm text-gray-500 mt-10 text-center">
          Last updated: January 12, 2026
        </p>
      </div>

      {/* Generic CTA for policy pages */}
      <section className="bg-gradient-to-br from-emerald-600 to-sky-700 text-white py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">Need More Information?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg opacity-90">
          Our team is available to clarify any questions you may have about our policies.
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

export default PrivacyPolicy;
