// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tracking", path: "/tracking" },
    { name: "Blogs", path: "/blogs" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100"
          : "bg-gradient-to-r from-emerald-900/80 to-emerald-800/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative">
              <img
                src="/Logo.png"
                alt="Evergreen Logix"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl group-hover:rotate-[-5deg] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>
            <div>
              <span
                className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Evergreen
              </span>
              <span
                className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-emerald-600" : "text-emerald-300"
                }`}
              >
                Logix
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? isActive
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                      : isActive
                      ? "text-white bg-white/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-gray-100"
              : "bg-emerald-900/95 backdrop-blur-xl border-b border-white/10"
          } px-4 py-3 space-y-1`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? isActive
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                    : isActive
                    ? "text-white bg-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;