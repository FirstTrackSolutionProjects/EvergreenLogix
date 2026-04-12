import React from "react";
import { Users, Package, ShoppingBag } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: "5000",
      label: "Trusted Clients",
      suffix: "K+",
    },
    {
      icon: Package,
      value: "10000",
      label: "Orders Delivered",
      suffix: "K+",
    },
    {
      icon: ShoppingBag,
      value: "50000",
      label: "Sellers",
      suffix: "+",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-300 to-blue-200 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Shopy Courier Superiority
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative text-center p-6 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/60
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-700/20"
              >
                {/* Floating Icon */}
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-white/70 rounded-full flex items-center justify-center
                  animate-float group-hover:scale-105 transition-transform duration-500 shadow-md"
                  aria-label={`Statistic icon for ${stat.label}`} // Accessibility: Add aria-label
                >
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>

                {/* Value */}
                <div className="text-4xl font-extrabold mb-1 text-slate-900">
                  {stat.value.slice(0, -3)}
                  {stat.suffix}
                </div>

                {/* Label */}
                <div className="text-lg font-medium text-slate-700 opacity-90">{stat.label}</div>

              </div>
            );
          })}
        </div>
      </div>

       <style>
        {`
          @keyframes float {
            0%, 20%, 40%, 60%, 80%, 100% {
              transform: translateY(0) translateX(0);
            }
            10% {
              transform: translateY(-4px) translateX(2px);
            }
            30% {
              transform: translateY(3px) translateX(-2px);
            }
            50% {
              transform: translateY(-3px) translateX(1px);
            }
            70% {
              transform: translateY(2px) translateX(-1px);
            }
            90% {
              transform: translateY(-1px) translateX(2px);
            }
          }
          .animate-float {
            animation: float 2s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Statistics;
