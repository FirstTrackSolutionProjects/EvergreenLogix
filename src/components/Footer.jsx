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
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative z-10 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6 group"> {/* Made logo clickable */}
              <img src="/Logo.png" alt="Shopy Courier Logo" className="w-12 h-12 rounded-lg group-hover:scale-105 transition-transform duration-200" />
              <span className="font-bold text-lg group-hover:text-emerald-300 transition-colors duration-200">Shopy Courier</span>
            </Link>
            <p className="text-slate-300 leading-relaxed text-sm">
              Shopy Courier delivers fast, reliable, and seamless logistics
              solutions, ensuring timely and secure shipments worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">
              Contact Us
            </h3>
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>ABC, India, Odisha, Pincode: 123456</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <a href="tel:+911234567890" className="hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded"> {/* Added focus styles */}
                  +91 1234567890
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <a href="mailto:info@shopycourier.site" className="hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded"> {/* Added focus styles */}
                  info@shopycourier.site
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">
              Our Services
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li><Link to="/services/pick-drop" className="hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded">Pick & Drop</Link></li> {/* Added focus styles */}
              <li><Link to="/services/packaging" className="hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded">Packaging</Link></li>
              <li><Link to="/services/international" className="hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded">International & Domestic Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink to="/faq" label="FAQ" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/blogs" label="Blogs" />
              <FooterLink to="/privacy-policy" label="Privacy & Policy" />
              <FooterLink to="/terms-of-use" label="Terms of Use" />
              <FooterLink to="/refund-cancellation" label="Refund & Cancellation" />
            </ul>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#" // Replace with actual social media links
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Shopy Courier on ${Icon.displayName}`}
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 via-sky-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-full" // Added focus styles
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} Shopy Courier. Developed by First Track Solution Technologies, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="text-slate-300 text-sm hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded" // Added focus styles
    >
      {label}
    </Link>
  </li>
);

export default Footer;
