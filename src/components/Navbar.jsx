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
    { name: "HOME", path: "/" },
    { name: "TRACKING", path: "/tracking" },
    { name: "BLOGS", path: "/blogs" },
    { name: "PRICING", path: "/pricing" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "LOGIN", path: "/login" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-600 shadow-lg backdrop-blur-md bg-opacity-90"
            : "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900"
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        
        {/* HEIGHT REDUCED */}
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
          >
            <img
              src="/Logo.png"
              alt="Shopy Courier Logo"
              className="w-10 h-10 rounded-md group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-white font-semibold text-base tracking-wide group-hover:text-emerald-300 transition-colors duration-200">
              Shopy Courier
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link-underline text-white text-sm font-medium hover:text-emerald-300 transition-all duration-200 outline-none focus-visible:text-emerald-300
                  ${isActive ? "active text-emerald-300" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          {/* <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-md"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button> */}
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 pb-3 animate-fade-in-down">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-white text-sm font-medium py-2 px-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300
                  hover:bg-slate-700 hover:text-emerald-300 active:bg-slate-600 active:scale-[0.98]
                  ${isActive ? "bg-slate-700 text-emerald-300" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-emerald-400 to-sky-500 text-center py-2 rounded-md font-semibold text-white hover:from-emerald-500 hover:to-sky-600 transition-all duration-200 shadow-md hover:shadow-lg mt-3 focus:outline-none focus:ring-4 focus:ring-emerald-300 active:scale-[0.98]"
            >
              LOGIN
            </Link>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;