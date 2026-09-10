// src/pages/Pricing.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Calculator, Package, MapPin, DollarSign, Truck, Send, Plus, X, Clock, Globe, Shield, Sparkles } from "lucide-react";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_APP_API_URL;

// ── ComparePrices modal ────────────────────────────────────────────────────────
const ComparePrices = ({ method, boxes, status, origin, dest, payMode, codAmount, isB2B, invoiceAmount, onClose }) => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}/shipment/domestic/price`, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ method, boxes, status, origin, dest, payMode, codAmount, isB2B, invoiceAmount, priceCalc: true }),
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        setPrices(result.prices || []);
      } catch (e) {
        console.error('Failed to fetch prices:', e);
        setError('Failed to load prices. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchPrices();
  }, [method, boxes, status, origin, dest, payMode, codAmount, isB2B, invoiceAmount]);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col relative">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">CHOOSE YOUR SERVICE</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl font-light leading-none transition-colors duration-200" aria-label="Close">&times;</button>
        </div>
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {loading && (
            <div className="flex justify-center items-center h-full min-h-[100px] text-gray-600">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Loading prices...
            </div>
          )}
          {error && <div className="text-red-600 text-center p-4 bg-red-50 rounded-md">{error}</div>}
          {!loading && !error && prices.length === 0 && (
            <div className="text-center text-gray-600 p-4 bg-gray-50 rounded-md">No prices found for the selected criteria.</div>
          )}
          {!loading && !error && prices.length > 0 && prices.map((price, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex justify-between items-center border border-gray-200">
              <div>
                <div className="font-semibold text-lg text-gray-800">
                  {`${price.name}${price.publicServiceName ? ` - ${price.publicServiceName}` : ''}`}
                  {price.weight && <span className="text-sm font-normal text-gray-600 ml-2">({price.weight})</span>}
                </div>
                {price.chargableWeight && (
                  <div className="text-sm text-gray-500 mt-1">Chargable Weight: {price.chargableWeight} gm</div>
                )}
              </div>
              <div className="text-2xl font-bold text-emerald-600">₹{Math.round(price.price)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper Components
const Field = ({ label, placeholder = "", type = "input", options = [], optionValues = null, icon: Icon, name, value, onChange, maxLength }) => (
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
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((opt, i) => (
            <option key={i} value={optionValues ? optionValues[i] : opt.toLowerCase()}>{opt}</option>
          ))}
        </select>
      ) : (
        <input
          className={`w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 ${Icon ? 'pl-10' : ''}`}
          placeholder={placeholder}
          type={type}
          aria-label={label}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
      )}
    </div>
  </div>
);

const SmallField = ({ label, placeholder = "0", type = "text", icon: Icon, name, value, onChange }) => (
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
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

const SmallSelect = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
    <select 
      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none transition-all duration-200 bg-white appearance-none"
      aria-label={label}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="g">g</option>
      <option value="kg">kg</option>
    </select>
  </div>
);

const Pricing = () => {
  const [boxes, setBoxes] = useState([
    { weight: 0, length: 0, breadth: 0, height: 0, weight_unit: 'g', quantity: 1 },
  ]);
  const [formData, setFormData] = useState({
    method: 'Surface',
    status: 'Delivered',
    origin: '',
    dest: '',
    payMode: 'Pre-paid',
    codAmount: 0,
    invoiceAmount: 0,
    isB2B: false,
  });
  const [showCompare, setShowCompare] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : name === 'isB2B'
            ? value === 'true'
            : type === 'number'
              ? value === '' ? '' : parseFloat(value)
              : value,
    }));
  };

  const handleBoxChange = (index, e) => {
    const { name, value, type } = e.target;
    setBoxes((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [name]: type === 'number'
          ? value === '' ? '' : (name === 'quantity' ? parseInt(value, 10) : parseFloat(value))
          : value,
      };
      return updated;
    });
  };

  const addBox = () => {
    setBoxes((prev) => [...prev, { weight: 0, length: 0, breadth: 0, height: 0, weight_unit: 'g', quantity: 1 }]);
  };

  const removeBox = (index) => {
    setBoxes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!/^\d{6}$/.test(formData.origin) || !/^\d{6}$/.test(formData.dest)) {
      toast.error('Origin and Destination pincodes must be 6 digits.');
      isValid = false;
    }
    if (formData.isB2B && formData.invoiceAmount < 1) {
      toast.error('Invoice Amount must be at least 1 for B2B shipments.');
      isValid = false;
    }
    if (formData.payMode === 'COD' && formData.codAmount < 1) {
      toast.error('COD Amount must be at least 1 for COD shipments.');
      isValid = false;
    }
    boxes.forEach((box, i) => {
      if (!box.weight || isNaN(parseFloat(box.weight)) || parseFloat(box.weight) <= 0) {
        toast.error(`Box ${i + 1}: Weight is required and must be greater than 0.`);
        isValid = false;
      }
      if (!box.length || !box.breadth || !box.height ||
        parseFloat(box.length) <= 0 || parseFloat(box.breadth) <= 0 || parseFloat(box.height) <= 0) {
        toast.error(`Box ${i + 1}: Length, Breadth, and Height must be greater than 0.`);
        isValid = false;
      }
      if (!box.quantity || parseInt(box.quantity) < 1) {
        toast.error(`Box ${i + 1}: Quantity must be at least 1.`);
        isValid = false;
      }
    });

    if (isValid) setShowCompare(true);
  };

  const features = [
    { icon: Truck, title: "Real-time Rates", desc: "Get accurate shipping costs instantly" },
    { icon: Globe, title: "Multiple Carriers", desc: "Compare rates from leading couriers" },
    { icon: Shield, title: "Secure Shipping", desc: "Insured and tracked shipments" },
    { icon: Clock, title: "Fast Delivery", desc: "Express options available" },
  ];

  return (
    <>
      {showCompare && (
        <ComparePrices
          {...formData}
          boxes={boxes}
          onClose={() => setShowCompare(false)}
        />
      )}
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
                <form className="space-y-8" onSubmit={handleSubmit} noValidate>
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
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                      />
                      <Field 
                        label="Status" 
                        type="select" 
                        options={["Forward"]} 
                        icon={Clock}
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      />
                      <Field 
                        label="Origin Pincode" 
                        placeholder="Ex. 813210" 
                        icon={MapPin}
                        name="origin"
                        value={formData.origin}
                        onChange={handleChange}
                        maxLength={6}
                      />
                      <Field 
                        label="Destination Pincode" 
                        placeholder="Ex. 845401" 
                        icon={MapPin}
                        name="dest"
                        value={formData.dest}
                        onChange={handleChange}
                        maxLength={6}
                      />
                      <Field 
                        label="Payment Mode" 
                        type="select" 
                        options={["Pre-paid", "COD", "Pickup"]} 
                        icon={DollarSign}
                        name="payMode"
                        value={formData.payMode}
                        onChange={handleChange}
                      />
                      {formData.payMode === 'COD' && (
                        <Field 
                          label="COD Amount" 
                          placeholder="0" 
                          type="number" 
                          icon={DollarSign}
                          name="codAmount"
                          value={formData.codAmount}
                          onChange={handleChange}
                        />
                      )}
                      <Field 
                        label="Shipment Type" 
                        type="select" 
                        options={["B2C", "B2B"]} 
                        icon={Package}
                        name="isB2B"
                        value={formData.isB2B}
                        onChange={handleChange}
                        optionValues={[false, true]}
                      />
                      <Field 
                        label="Invoice Amount" 
                        placeholder="0" 
                        type="number" 
                        icon={DollarSign}
                        name="invoiceAmount"
                        value={formData.invoiceAmount}
                        onChange={handleChange}
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
                          <SmallField label="Weight" placeholder="0" type="number" name="weight" value={box.weight} onChange={(e) => handleBoxChange(index, e)} />
                          <SmallSelect label="Unit" name="weight_unit" value={box.weight_unit} onChange={(e) => handleBoxChange(index, e)} />
                          <SmallField label="L (cm)" placeholder="0" type="number" name="length" value={box.length} onChange={(e) => handleBoxChange(index, e)} />
                          <SmallField label="B (cm)" placeholder="0" type="number" name="breadth" value={box.breadth} onChange={(e) => handleBoxChange(index, e)} />
                          <SmallField label="H (cm)" placeholder="0" type="number" name="height" value={box.height} onChange={(e) => handleBoxChange(index, e)} />
                          <SmallField label="Count" placeholder="1" type="number" name="quantity" value={box.quantity} onChange={(e) => handleBoxChange(index, e)} />
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
    </>
  );
};

export default Pricing;