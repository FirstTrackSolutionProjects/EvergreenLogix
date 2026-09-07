// src/components/Statistics.jsx
import React from "react";
import { Users, Package, ShoppingBag, Globe, Award, Clock } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Trusted Clients",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Package,
      value: "50,000+",
      label: "Orders Delivered",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: ShoppingBag,
      value: "2,500+",
      label: "Active Sellers",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries Served",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Award,
      value: "99.9%",
      label: "Delivery Success Rate",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Customer Support",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Driving Logistics Excellence
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Numbers that reflect our commitment to quality and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-extrabold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;