// src/components/ShippingCalculator.jsx
import React, { useState } from "react";
import { Plus, X, Calculator, Package, MapPin, DollarSign, Truck, Send } from "lucide-react";

const ShippingCalculator = () => {
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Shipping Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Calculate Your Shipping Price
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get instant shipping estimates based on your package details and destination.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Basic Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full" />
                Shipment Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Shipping Method
                  </label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 bg-white appearance-none">
                    <option>Surface</option>
                    <option>Express</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Status
                  </label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 bg-white appearance-none">
                    <option>Forward</option>
                    <option>RTO</option>
                    <option>Reverse</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Origin Pincode
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Ex. 813210"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Destination Pincode
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Ex. 845401"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="relative" id="cod-amount-container" style={{ display: 'none' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    COD Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Payment Mode
                  </label>
                  <select 
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 bg-white appearance-none"
                    onChange={(e) => {
                      const codContainer = document.getElementById('cod-amount-container');
                      if (e.target.value === 'COD') {
                        codContainer.style.display = 'block';
                      } else {
                        codContainer.style.display = 'none';
                      }
                    }}
                  >
                    <option>Pre-paid</option>
                    <option>COD</option>
                    <option>Pickup</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Shipment Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 bg-white appearance-none">
                    <option>B2C</option>
                    <option>B2B</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Invoice Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Box Details */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full" />
                  Package Dimensions
                </h3>
                <span className="text-sm text-gray-500">{boxes.length} box{boxes.length > 1 ? 'es' : ''}</span>
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
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Weight</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Unit</label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200 bg-white">
                        <option>g</option>
                        <option>kg</option>
                      </select>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">L (cm)</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">B (cm)</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">H (cm)</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Count</label>
                      <input
                        type="number"
                        placeholder="1"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
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

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Truck, title: "Real-time Rates", desc: "Get accurate shipping costs instantly" },
            { icon: Package, title: "Multiple Couriers", desc: "Compare rates from leading carriers" },
            { icon: DollarSign, title: "Best Prices", desc: "We find the most cost-effective options" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingCalculator;