// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white p-3 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/Logo.png"
                alt="Evergreen Logix"
                className="w-10 h-10 rounded-xl"
              />
              <div>
                <span className="font-bold text-lg">Evergreen</span>
                <span className="font-bold text-lg text-emerald-400">Logix</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sustainable logistics solutions for a greener tomorrow. We deliver
              reliability, innovation, and care for the planet.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Office No. 110, Bharat Chambars,
Baroda Street Back Side Masjid Bundar East, Mumbai- 400009</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a href="tel:+911234567890" className="hover:text-emerald-400 transition-colors">
                  +91 1234567890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:info@evergreenlogix.com" className="hover:text-emerald-400 transition-colors">
                  info@evergreenlogix.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/refund-cancellation" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>

          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Evergreen Logix. Developed by First Track Solution Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;