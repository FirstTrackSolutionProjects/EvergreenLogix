// src/pages/Pricing.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Calculator, Package, MapPin, DollarSign, Truck, Send, Plus, X, Clock, Globe, Shield, Sparkles } from "lucide-react";

// Helper Components
const Field = ({ label, placeholder = "", type = "input", options = [], icon: Icon, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      )}
      {type === "select" ? (
        <select 
          className={`w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 bg-white appearance-none ${Icon ? 'pl-10' : ''}`}
          aria-label={label}
          onChange={onChange}
        >
          {options.map((opt, i) => (
            <option key={i} value={opt.toLowerCase()}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          className={`w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 ${Icon ? 'pl-10' : ''}`}
          placeholder={placeholder}
          type={type}
          aria-label={label}
        />
      )}
    </div>
  </div>
);

const SmallField = ({ label, placeholder = "0", type = "text", icon: Icon }) => (
  <div>
    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
      )}
      <input
        className={`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200 ${Icon ? 'pl-8' : ''}`}
        placeholder={placeholder}
        type={type}
        aria-label={label}
      />
    </div>
  </div>
);

const SmallSelect = ({ label }) => (
  <div>
    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
    <select 
      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200 bg-white appearance-none"
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

  const features = [
    { icon: Truck, title: "Real-time Rates", desc: "Get accurate shipping costs instantly" },
    { icon: Globe, title: "Multiple Carriers", desc: "Compare rates from leading couriers" },
    { icon: Shield, title: "Secure Shipping", desc: "Insured and tracked shipments" },
    { icon: Clock, title: "Fast Delivery", desc: "Express options available" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Pricing Calculator
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Calculate Your Shipping Cost
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Get instant estimates based on weight, dimensions, and destination. 
            Transparent pricing with no hidden charges.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form - Takes 2/3 of space */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Basic Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></span>
                      Shipment Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field 
                        label="Shipping Method" 
                        type="select" 
                        options={["Surface", "Express"]} 
                        icon={Truck}
                      />
                      <Field 
                        label="Status" 
                        type="select" 
                        options={["Forward", "RTO", "Reverse"]} 
                        icon={Clock}
                      />
                      <Field 
                        label="Origin Pincode" 
                        placeholder="Ex. 813210" 
                        icon={MapPin}
                      />
                      <Field 
                        label="Destination Pincode" 
                        placeholder="Ex. 845401" 
                        icon={MapPin}
                      />
                      <div id="cod-amount-field" style={{ display: 'none' }}>
                        <Field 
                          label="COD Amount" 
                          placeholder="0" 
                          type="number" 
                          icon={DollarSign}
                        />
                      </div>
                      <Field 
                        label="Payment Mode" 
                        type="select" 
                        options={["Pre-paid", "COD", "Pickup"]} 
                        icon={DollarSign}
                        onChange={(e) => {
                          const codField = document.getElementById('cod-amount-field');
                          if (e.target.value === 'cod') {
                            codField.style.display = 'block';
                          } else {
                            codField.style.display = 'none';
                          }
                        }}
                      />
                      <Field 
                        label="Shipment Type" 
                        type="select" 
                        options={["B2C", "B2B"]} 
                        icon={Package}
                      />
                      <Field 
                        label="Invoice Amount" 
                        placeholder="0" 
                        type="number" 
                        icon={DollarSign}
                      />
                    </div>
                  </div>

                  {/* Box Details */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></span>
                        Package Dimensions
                      </h3>
                      <span className="text-sm text-gray-500">
                        {boxes.length} box{boxes.length > 1 ? 'es' : ''}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {boxes.map((box, index) => (
                        <div
                          key={index}
                          className="relative bg-gray-50 rounded-2xl p-5 grid grid-cols-2 md:grid-cols-6 gap-3 border border-gray-200 hover:border-emerald-200 transition-colors duration-200"
                        >
                          {boxes.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeBox(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full text-sm flex items-center justify-center hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-red-500/30"
                              aria-label={`Remove box ${index + 1}`}
                            >
                              <X className="w-4 h-4" />
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
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={addBox}
                      className="flex items-center justify-center gap-2 border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <Plus className="w-5 h-5" />
                      Add Box
                    </button>
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-[1.02] flex-1"
                    >
                      <Calculator className="w-5 h-5" />
                      Calculate Shipping Cost
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar - Takes 1/3 of space */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 text-white sticky top-24 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
                    <span className="text-4xl">📦</span>
                  </div>
                  <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                  <p className="text-white/80 text-sm mt-1">Get the best rates with our shipping calculator</p>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Real-time rate comparison",
                    "No hidden charges",
                    "Multiple courier options",
                    "Bulk discounts available",
                    "Easy booking process",
                    "24/7 customer support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80 text-center">
                    Need help? <br />
                    <Link to="/contact" className="font-semibold underline hover:text-white transition-colors inline-flex items-center gap-1">
                      Contact our team
                      <Send className="w-3 h-3" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {features.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">
            Have Questions About Pricing?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check our FAQ page for answers to common questions about shipping costs and policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/faq"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              View FAQ
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;