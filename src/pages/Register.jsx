import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-emerald-600 via-sky-600 to-purple-500 px-4 py-12">
      
      {/* Glass Card */}
      <div className="relative w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-white border border-white/30">
        
        {/* Decorative circles - slightly adjusted sizes and positions for better flow */}
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/15 rounded-full blur-xl animate-pulse-slow opacity-70"></div> {/* Added animation */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/15 rounded-full blur-xl animate-pulse-slow-reverse opacity-70"></div> {/* Added animation */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 drop-shadow-md">
          Create Account 🚀
        </h2>
        <p className="text-center text-base opacity-90 mb-6 drop-shadow-sm">
          Join us & start shipping smarter
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 border border-transparent focus:border-emerald-500"
            aria-label="Full Name" // Added aria-label
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 border border-transparent focus:border-emerald-500"
            aria-label="Email Address" // Added aria-label
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 border border-transparent focus:border-emerald-500"
            aria-label="Password" // Added aria-label
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 border border-transparent focus:border-emerald-500"
            aria-label="Confirm Password" // Added aria-label
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-6 opacity-90 drop-shadow-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold underline hover:text-emerald-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded"> {/* Added focus styles */}
            Login
          </Link>
        </p>
      </div>

      {/* Animations for decorative circles */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) translateX(0); }
          50% { transform: scale(1.05) translateX(5px); }
        }
        @keyframes pulse-slow-reverse {
          0%, 100% { transform: scale(1) translateX(0); }
          50% { transform: scale(1.05) translateX(-5px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Register;
