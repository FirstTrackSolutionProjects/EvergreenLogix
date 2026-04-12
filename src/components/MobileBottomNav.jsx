import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, IndianRupee, MessageCircle, User } from "lucide-react";

const MobileBottomNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Track", path: "/tracking", icon: Search },
    { name: "Pricing", path: "/pricing", icon: IndianRupee },
    { name: "Contact", path: "/contact", icon: MessageCircle },
    { name: "Login", path: "/login", icon: User },
  ];

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 w-full z-50 transition-all duration-300 border-t
        ${
          isScrolled
            ? "bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-600 border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
            : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-slate-700 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]"
        }`}
    >
      <div className="flex justify-around items-center h-16 relative">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full transition-all duration-200 relative
                ${isActive 
                  ? "text-white" 
                  : isScrolled ? "text-white/60" : "text-slate-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={20} className={`transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`} />
                  <span className={`text-[10px] font-bold mt-1 uppercase tracking-wider transition-all
                    ${isActive ? "opacity-100" : "opacity-80"}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <div className="absolute bottom-1 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_white]" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;