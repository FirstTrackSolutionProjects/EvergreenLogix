import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const RefundCancellation = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900 mb-12">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg">
          Refund & Cancellation Policy
        </h1>
      </section>

      <div className="px-6 max-w-5xl mx-auto pb-20">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 text-center">
          At <strong>Shopy Courier</strong>, we aim to provide reliable and
          efficient courier and logistics services. This Refund & Cancellation
          Policy explains when cancellations, refunds, or compensation may be
          applicable.
        </p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              1. Cancellation of Shipments
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Shipments can be canceled <strong>only before pickup is completed</strong>.
              Once the courier has picked up the package, cancellation requests
              will not be accepted.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>
                Cancellation requests must be made through your account
                dashboard or by contacting customer support.
              </li>
              <li>
                Any service or processing fees incurred before cancellation may
                be non-refundable.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              2. Refund Eligibility
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>The shipment is canceled before pickup.</li>
              <li>
                A duplicate payment or incorrect charge occurs due to a system
                or technical error.
              </li>
              <li>
                Shopy Courier is unable to provide the service due to internal
                operational issues.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              3. Non-Refundable Situations
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base">
              <li>The shipment has already been picked up or is in transit.</li>
              <li>
                Delays caused by customs clearance, weather conditions,
                strikes, natural disasters, or third-party logistics partners.
              </li>
              <li>
                Incorrect or incomplete shipment details provided by the user.
              </li>
              <li>
                Shipments restricted, delayed, or confiscated by government or
                customs authorities.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              4. Refund Processing Time
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Approved refunds will be processed within{" "}
              <strong>7–10 business days</strong> and credited to the original
              payment method used at the time of booking.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              5. Damaged or Lost Shipments
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              In the event of damage or loss, compensation may be considered
              based on the declared value of the shipment, supporting documents
              (such as invoices and photographs), and the outcome of
              investigations conducted by Shopy Courier and its logistics
              partners. Compensation is subject to applicable policies and
              third-party carrier terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Shopy Courier reserves the right to update or modify this Refund &
              Cancellation Policy at any time. Any changes will be effective
              immediately upon being posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">
              7. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              For cancellation, refund, or compensation-related queries, please
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
          Our team is available to clarify any questions you may have about refunds.
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

export default RefundCancellation;
