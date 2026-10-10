// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';

const CARGO_APK_URL =
  'https://evergreen-logix-cargo-artifacts.s3.ap-south-1.amazonaws.com/delivery-partner-app/v1.0.0/evergreen-logix-cargo-delivery-partner-v1.0.0.apk';

// ─────────────────────────────────────────────────────────────────────────────
// Local icon helpers (so Footer doesn't depend on Navbar exports)
// ─────────────────────────────────────────────────────────────────────────────
const DownloadIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

const CheckIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m5 12 5 5L20 7" />
  </svg>
);

const Spinner = ({ className = 'w-4 h-4' }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={`animate-spin ${className}`}
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="currentColor"
      strokeOpacity="0.25"
      strokeWidth="3"
    />
    <path
      d="M21 12a9 9 0 0 0-9-9"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Reusable APK download button with press + loading feedback
// ─────────────────────────────────────────────────────────────────────────────
const ApkDownloadButton = ({ href, size = 'sm', onClick, label = 'Download APK' }) => {
  const [state, setState] = useState('idle'); // idle | loading | done

  const handleClick = (e) => {
    e.preventDefault();
    if (state === 'loading') return;

    setState('loading');

    // Cross-origin `download` attribute is ignored by browsers, so we
    // force a programmatic anchor click with target="_blank". The browser
    // will actually start the download instead of silently doing nothing.
    try {
      const a = document.createElement('a');
      a.href = href;
      a.rel = 'noopener noreferrer';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error('Failed to trigger APK download:', err);
    }

    setTimeout(() => {
      setState('done');
      setTimeout(() => setState('idle'), 1600);
    }, 600);

    onClick?.();
  };

  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 ' +
    'select-none touch-manipulation active:scale-[0.97] focus:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-emerald-400 focus-visible:ring-offset-2';

  const sizing =
    size === 'lg' ? 'px-5 py-3 text-base w-full' : 'px-4 py-2.5 text-sm w-full';

  const looks = {
    idle: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/40 hover:from-emerald-600 hover:to-emerald-700',
    loading: 'bg-emerald-600 text-white shadow-md cursor-wait opacity-95',
    done: 'bg-emerald-700 text-white shadow-md',
  }[state];

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-busy={state === 'loading'}
      aria-live="polite"
      className={`${base} ${sizing} ${looks}`}
    >
      {state === 'idle' && (
        <>
          <DownloadIcon />
          {label}
        </>
      )}
      {state === 'loading' && (
        <>
          <Spinner />
          Preparing…
        </>
      )}
      {state === 'done' && (
        <>
          <CheckIcon />
          Downloading
        </>
      )}
    </button>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                <span className="font-bold text-lg text-emerald-400">
                  Logix
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sustainable logistics solutions for a greener tomorrow. We
              deliver reliability, innovation, and care for the planet.
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
                <span>
                  Office No. 110, Bharat Chambars, Baroda Street Back Side
                  Masjid Bundar East, Mumbai- 400009
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <a
                  href="tel:+918433872243"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +91 8433872243
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a
                  href="mailto:info@evergreenlogix.com"
                  className="hover:text-emerald-400 transition-colors"
                >
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
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-cancellation"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Download App ─────────────── */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">
              Download App
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Delivery Partner mobile app — scan the QR code or tap below to
              download the APK.
            </p>

            <div className="flex flex-col items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <QRCodeCanvas value={CARGO_APK_URL} size={120} level="M" />
              </div>

              <ApkDownloadButton
                href={CARGO_APK_URL}
                size="lg"
                label="Download APK"
              />

              <a
                href="https://cargo.evergreenlogix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-emerald-400 transition-colors underline"
              >
                Visit EvergreenLogix Cargo →
              </a>
            </div>
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
              <FaFacebook className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>

          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Evergreen Logix. Developed by First
            Track Solution Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;