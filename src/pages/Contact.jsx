import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="min-h-[40vh] md:min-h-[60vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10 drop-shadow-lg">
          Contact Us
        </h1>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* FORM */}
          <div className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
              Get In Touch!!
            </h2>

            <form className="space-y-4">
              
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 bg-white/90 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 placeholder-gray-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 bg-white/90 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 placeholder-gray-400"
              />

              {/* 📱 Phone with Flag */}
              <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-3 bg-white focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all duration-200">
                
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India"
                  className="w-5 h-4 mr-2 rounded-sm"
                />

                <span className="text-gray-700 text-sm mr-3 border-r pr-3">
                  +91
                </span>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full outline-none text-gray-800 placeholder-gray-400 text-sm"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 bg-white/90 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 placeholder-gray-400"
              />

              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 bg-white/90 p-3 rounded-lg h-32 resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 placeholder-gray-400"
              />

              <button className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 flex flex-col justify-between">
            
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4 text-gray-700 text-base">
                
                <p className="flex items-start gap-3 hover:translate-x-1 transition">
                  <MapPin className="w-5 h-5 text-emerald-600 mt-0.5" />
                  ABC, Odisha, India, Pincode: 123456
                </p>

                <p className="flex items-center gap-3 hover:translate-x-1 transition">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <a href="tel:+911234567890" className="hover:text-emerald-700">
                    +91 1234567890
                  </a>
                </p>

                <p className="flex items-center gap-3 hover:translate-x-1 transition">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <a href="mailto:info@shopycourier.site" className="hover:text-emerald-700">
                    info@shopycourier.site
                  </a>
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8 pt-4 border-t border-gray-200">
              
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-white rounded-full shadow hover:shadow-md hover:scale-110 transition-all duration-200"
                >
                  <Icon className="w-5 h-5 text-emerald-600" />
                </a>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 via-sky-600 to-purple-600 py-16 text-center text-white">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Let's Connect!
        </h2>

        <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
          We are always ready to assist you with your logistics needs.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-200"
        >
          <MessageCircle className="w-5 h-5" />
          Get in Touch
        </Link>
      </section>
    </>
  );
};

export default Contact;