import React, { useState } from "react";

// Helper components (moved inside for brevity, or can be in a separate helpers file)
const Field = ({ label, placeholder = "", type = "input", options = [] }) => (
  <div>
    <label className="block mb-2 font-medium text-slate-700">{label}</label>
    {type === "select" ? (
      <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" aria-label={label}>
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
    <select className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200" aria-label={label}>
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
    alert("Calculating shipping price..."); // Basic feedback
    // In a real app, send data to backend and display results
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          <span className="text-emerald-500">—</span> Calculate Your Shipping Price
        </h2>

        {/* MAIN CARD: TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

          {/* LEFT – FORM */}
          <div className="p-6 md:p-10">
            <form className="space-y-8" onSubmit={handleSubmit}> {/* Added onSubmit handler */}

              {/* BASIC DETAILS */}
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

              {/* BOX DETAILS */}
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className="relative bg-slate-100 rounded-lg p-4 grid grid-cols-2 md:grid-cols-6 gap-3 border border-slate-200" // Increased padding, added border
                >
                  {boxes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeBox(index)}
                      className="absolute -top-3 -right-3 bg-red-500 text-white w-7 h-7 rounded-full text-xs flex items-center justify-center hover:bg-red-600 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-red-300" // Larger, more accessible button, added focus styles
                      aria-label={`Remove box ${index + 1}`} // Accessibility: Add aria-label
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

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={addBox}
                  className="border border-emerald-500 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-300" // Added focus styles
                >
                  Add More Boxes
                </button>

                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-10 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
                >
                  Submit and Compare
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT – IMAGE (FIXED SIZE) */}
          <div className="hidden md:flex relative bg-gradient-to-br from-emerald-500 to-sky-500 items-center justify-center p-8"> {/* Adjusted padding and alignment for content */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570743282436-58673f4e1f7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30"></div>
            <div className="relative z-10 text-white p-6 rounded-xl bg-black/40 backdrop-blur-sm text-center"> {/* Centered content within this div */}
              <h3 className="text-3xl font-bold mb-2">Instant Price Comparison</h3>
              <p className="text-lg">
                Enter your details to find the best shipping rates and options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
