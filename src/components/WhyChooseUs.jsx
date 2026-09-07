// src/components/WhyChooseUs.jsx
import React from "react";
import { Shield, Lock, Clock, Headphones, Leaf, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Reliability",
      description: "Consistent, dependable logistics solutions you can count on.",
      image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=600&q=80",
    },
    {
      icon: Lock,
      title: "Secure Handling",
      description: "Advanced safety protocols for every shipment.",
      image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?w=600&q=80",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Optimized network ensures fast, accurate deliveries.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?w=600&q=80",
    },
    {
      icon: Headphones,
      title: "24/7 Assistance",
      description: "Round-the-clock support for real-time updates.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable practices for a greener planet.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "AI-powered logistics for smarter operations.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The <span className="gradient-text">Evergreen</span> Advantage
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            What makes us the preferred choice for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;