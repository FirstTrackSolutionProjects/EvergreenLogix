// src/pages/Contact.jsx
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
  Send,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[40vh] md:min-h-[50vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-800/60" />
        <div className="relative text-center px-4">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 border border-white/20">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg mt-2">We're here to help you 24/7</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-6">We'll get back to you within 24 hours</p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div className="flex items-center border border-gray-300 rounded-lg px-3 bg-white focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-transparent transition-all duration-200">
                  <img
                    src="https://flagcdn.com/w40/in.png"
                    alt="India"
                    className="w-5 h-4 mr-2 rounded-sm"
                  />
                  <span className="text-gray-700 text-sm mr-3 border-r pr-3">+91</span>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full outline-none text-gray-800 placeholder-gray-400 text-sm py-3"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                />

                <textarea
                  placeholder="Your Message"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg h-32 resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                />

                <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span>Office No. 110, Bharat Chambars,
Baroda Street Back Side Masjid Bundar East, Mumbai- 400009</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-white/80" />
                    <a href="tel:+911234567890" className="hover:text-emerald-200 transition-colors">
                      +91 1234567890
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white/80" />
                    <a href="mailto:info@evergreenlogix.com" className="hover:text-emerald-200 transition-colors">
                      info@evergreenlogix.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-white/80" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Working Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5 text-gray-600 hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;