// src/components/Capabilities.jsx
import React from "react";
import { Globe2, Building2, Ship, Package, Leaf, Shield } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Globe2,
      title: "Global Shipping",
      description: "Seamless international delivery with real-time tracking and eco-friendly options.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: "Smart Warehousing",
      description: "Modern, secure, and temperature-controlled storage with inventory management.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Ship,
      title: "Air & Sea Cargo",
      description: "Flexible cargo transport via air and sea with carbon-offset options.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Package,
      title: "Supply Chain",
      description: "End-to-end logistics planning and coordination for optimal efficiency.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable shipping solutions with reduced carbon footprint.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Advanced safety protocols and insurance for every shipment.",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold mb-4">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything You Need for
            <span className="gradient-text"> Smart Logistics</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive solutions designed to make your shipping experience seamless, sustainable, and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${capability.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;