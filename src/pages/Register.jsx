import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-sky-600 to-purple-500 px-4 py-10">

      {/* CARD */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-white border border-white/30">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Create Account 🚀
        </h2>
        <p className="text-center text-sm opacity-90 mb-6">
          Join us & start shipping smarter
        </p>

        <form className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />

          {/* Phone Number */}
        <div className="flex items-center w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus-within:ring-2 focus-within:ring-emerald-500">

          {/* Flag */}
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India"
            className="w-5 h-4 mr-2 rounded-sm"
          />

          {/* Country Code */}
          <span className="text-gray-700 mr-3 border-r pr-3 text-sm">
            +91
          </span>

          {/* Input */}
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-md"
          />
        </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 pr-12 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-emerald-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 pr-12 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-emerald-600"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg active:scale-95"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6 opacity-90">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold underline hover:text-emerald-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;