// src/components/Testimonials.jsx
import React from "react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Kumar",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      quote: "Evergreen Logix has been an absolute pleasure to work with. Professional, reliable, and timely! Their sustainable approach is a game-changer.",
      rating: 5
    },
    {
      name: "Sneha Patel",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      quote: "Their global shipping services have helped expand my business. Truly world-class and their commitment to sustainability is inspiring.",
      rating: 5
    },
    {
      name: "Rajesh Sharma",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      quote: "The real-time tracking and customer support are exceptional. Evergreen Logix makes shipping stress-free and environmentally responsible.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-2">Real stories from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-emerald-500 mb-4 opacity-50" />
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                “{item.quote}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-sm"
                />
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {item.name}
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < (item.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;