// src/pages/About.jsx
import React from "react";
import { MessageCircle, Leaf, Globe, Users, Award, Clock, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Award, value: "99.9%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  const services = [
    { icon: Globe, title: "International Shipping", desc: "Seamless global delivery with real-time tracking" },
    { icon: Shield, title: "Smart Warehousing", desc: "Modern, secure, temperature-controlled storage" },
    { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable shipping with carbon offset" },
    { icon: Sparkles, title: "Supply Chain", desc: "End-to-end logistics planning and coordination" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1920&q=80"
          alt="About Us - Evergreen Logix"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-800/60 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Leading the Future of Logistics
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
              Sustainable, reliable, and innovative shipping solutions for a connected world.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Logistics Partner
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                <strong>Evergreen Logix</strong> is a dedicated logistics platform delivering speed, 
                safety, and operational excellence across the supply chain. Established in 
                Odisha, we focus on next-generation tracking and reliable transport solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment is to provide seamless global and local shipping experiences 
                for businesses and individuals alike, with a strong emphasis on sustainability 
                and innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl text-center border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Our Core
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mission, Vision & Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                desc: "To deliver the best logistics solutions with unmatched customer service and sustainable practices.",
                icon: Leaf,
              },
              {
                title: "Our Vision",
                desc: "Connecting the world through fast, reliable, and efficient shipping for a greener future.",
                icon: Globe,
              },
              {
                title: "Our Values",
                desc: "Integrity, innovation, sustainability, and customer-first approach in every delivery.",
                icon: Users,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="text-gray-600 mt-2">Comprehensive logistics solutions tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:-translate-y-2 hover:border-emerald-200">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We are always ready to assist you with your logistics needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;