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
import { Link } from "react-router-dom"; // Import Link

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
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
              Get In Touch!!
            </h2>

            <form className="space-y-4">
              <input className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" placeholder="Your Name" type="text" aria-label="Your Name" /> {/* Added type and aria-label */}
              <input className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" placeholder="Email" type="email" aria-label="Your Email" /> {/* Added aria-label */}
              <input className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" placeholder="Phone" type="tel" aria-label="Your Phone Number" /> {/* Added aria-label */}
              <input className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200" placeholder="Subject" type="text" aria-label="Subject" /> {/* Added type and aria-label */}
              <textarea
                className="w-full border border-gray-300 p-3 rounded-lg h-32 resize-y focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                placeholder="Your Message"
                aria-label="Your Message" // Added aria-label
              />
              <button className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300"> {/* Added focus styles */}
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-emerald-50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-4 text-gray-700 text-base">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5" />ABC, Odisha, India, Pincode: 123456
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-emerald-600" /> <a href="tel:+911234567890" className="hover:text-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded">+91 1234567890</a> {/* Added focus styles */}
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-emerald-600" /> <a href="mailto:info@shopycourier.site" className="hover:text-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded">info@shopycourier.site</a> {/* Added focus styles */}
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-4 border-t border-emerald-100">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-full"><Facebook className="w-6 h-6 text-emerald-600 hover:text-emerald-800 transition-colors" /></a> {/* Added focus styles */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-full"><Instagram className="w-6 h-6 text-emerald-600 hover:text-emerald-800 transition-colors" /></a> {/* Added focus styles */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-full"><Twitter className="w-6 h-6 text-emerald-600 hover:text-emerald-800 transition-colors" /></a> {/* Added focus styles */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-full"><Linkedin className="w-6 h-6 text-emerald-600 hover:text-emerald-800 transition-colors" /></a> {/* Added focus styles */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-600 to-sky-700 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">Let's Connect!</h2>
        <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
          We are always ready to assist you with your logistics needs.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-300"> {/* Wrapped in Link and added focus styles */}
          <MessageCircle className="w-5 h-5" />
          Get in Touch
        </Link>
      </section>
    </>
  );
};

export default Contact;
