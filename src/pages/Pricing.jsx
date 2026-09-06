// src/pages/Pricing.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

// Helper Components
const Field = ({ label, placeholder = "", type = "input", options = [] }) => (
  <div>
    <label className="block mb-2 font-medium text-slate-700">{label}</label>
    {type === "select" ? (
      <select 
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" 
        aria-label={label}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.toLowerCase()}>{opt}</option>
        ))}
      </select>
    ) : (
      <input
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
        placeholder={placeholder}
        type={type}
        aria-label={label}
      />
    )}
  </div>
);

const SmallField = ({ label, placeholder = "0", type = "text" }) => (
  <div>
    <label className="block text-xs mb-1 text-slate-600">{label}</label>
    <input
      className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200"
      placeholder={placeholder}
      type={type}
      aria-label={label}
    />
  </div>
);

const SmallSelect = ({ label }) => (
  <div>
    <label className="block text-xs mb-1 text-slate-600">{label}</label>
    <select 
      className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200" 
      aria-label={label}
    >
      <option>g</option>
      <option>kg</option>
    </select>
  </div>
);

const Pricing = () => {
  const [boxes, setBoxes] = useState([
    { weight: "", unit: "g", l: "", b: "", h: "", count: 1 },
  ]);

  const addBox = () => {
    setBoxes([
      ...boxes,
      { weight: "", unit: "g", l: "", b: "", h: "", count: 1 },
    ]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Calculating shipping price...");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-sky-600 to-purple-600 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Calculate Your Shipping Cost
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Get an instant estimate for your shipment. Enter your details below.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form - Takes 2/3 of space */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Basic Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                      Shipment Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Field label="Shipping Method" type="select" options={["Surface", "Express"]} />
                      <Field label="Status" type="select" options={["Forward", "RTO", "Reverse"]} />
                      <Field label="Origin Pincode" placeholder="Ex. 813210" />
                      <Field label="Destination Pincode" placeholder="Ex. 845401" />
                      <Field label="COD Amount" placeholder="0" type="number" />
                      <Field label="Payment Mode" type="select" options={["Pre-paid", "COD", "Pickup"]} />
                      <Field label="Shipment Type" type="select" options={["B2C", "B2B"]} />
                      <Field label="Invoice Amount" placeholder="0" type="number" />
                    </div>
                  </div>

                  {/* Box Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-emerald-500 rounded-full"></span>
                      Package Dimensions
                    </h3>
                    {boxes.map((box, index) => (
                      <div
                        key={index}
                        className="relative bg-slate-50 rounded-lg p-4 grid grid-cols-2 md:grid-cols-6 gap-3 border border-slate-200 mb-3"
                      >
                        {boxes.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeBox(index)}
                            className="absolute -top-3 -right-3 bg-red-500 text-white w-7 h-7 rounded-full text-xs flex items-center justify-center hover:bg-red-600 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
                            aria-label={`Remove box ${index + 1}`}
                          >
                            ✕
                          </button>
                        )}
                        <SmallField label="Weight" placeholder="0" type="number" />
                        <SmallSelect label="Unit" />
                        <SmallField label="L (cm)" placeholder="0" type="number" />
                        <SmallField label="B (cm)" placeholder="0" type="number" />
                        <SmallField label="H (cm)" placeholder="0" type="number" />
                        <SmallField label="Count" placeholder="1" type="number" />
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={addBox}
                      className="border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    >
                      + Add Box
                    </button>
                    <button
                      type="submit"
                      className="bg-emerald-500 text-white px-10 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300 flex-1"
                    >
                      Calculate Shipping Cost
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar - Takes 1/3 of space */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-emerald-500 to-sky-600 rounded-2xl p-6 text-white sticky top-24">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <span className="text-3xl">📦</span>
                  </div>
                  <h3 className="text-xl font-bold">Why Choose Us?</h3>
                  <p className="text-white/80 text-sm mt-1">Get the best rates with our shipping calculator</p>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Real-time rate comparison",
                    "No hidden charges",
                    "Multiple courier options",
                    "Bulk discounts available",
                    "Easy booking process"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80 text-center">
                    Need help? <br />
                    <Link to="/contact" className="font-semibold underline hover:text-white transition-colors">
                      Contact our team
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;