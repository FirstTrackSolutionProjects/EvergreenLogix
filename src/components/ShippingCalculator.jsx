import React, { useState } from "react";

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
    alert("Calculating shipping price..."); // Basic feedback
    // In a real app, send data to backend and display results
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900"> {/* Added text-slate-900 for consistency */}
          <span className="text-emerald-500">—</span> Calculate Your Shipping Price
        </h2>

        {/* CARD REPLACEMENT */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100"> {/* Responsive padding, added border and shadow */}
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
                {/* REMOVE BUTTON */}
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

                <SmallField label="Weight" placeholder="0" type="number" /> {/* Added type="number" */}
                <SmallSelect label="Unit" />
                <SmallField label="L (cm)" placeholder="0" type="number" /> {/* Added type="number" */}
                <SmallField label="B (cm)" placeholder="0" type="number" /> {/* Added type="number" */}
                <SmallField label="H (cm)" placeholder="0" type="number" /> {/* Added type="number" */}
                <SmallField label="Count" placeholder="1" type="number" /> {/* Added type="number" */}
              </div>
            ))}

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4"> {/* Added pt-4 */}
              <button
                type="button"
                onClick={addBox}
                className="border border-emerald-500 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300" // Added focus styles
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
      </div>
    </section>
  );
};

export default ShippingCalculator;

/* ---------------- HELPERS ---------------- */

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

const SmallField = ({ label, placeholder = "0", type = "text" }) => ( // Added type prop
  <div>
    <label className="block text-xs mb-1 text-slate-600">{label}</label>
    <input
      className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200"
      placeholder={placeholder}
      type={type} // Pass type prop to input
      aria-label={label} // Accessibility: Added aria-label
    />
  </div>
);

const SmallSelect = ({ label }) => (
  <div>
    <label className="block text-xs mb-1 text-slate-600">{label}</label>
    <select className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200" aria-label={label}> {/* Accessibility: Added aria-label */}
      <option>g</option>
      <option>kg</option>
    </select>
  </div>
);