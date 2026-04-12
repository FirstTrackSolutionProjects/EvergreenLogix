import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row">
      {/* LEFT SIDE – LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 text-center md:text-left">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mb-8 text-center md:text-left">
            Login to manage your shipments
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="email-login" className="block text-sm font-medium text-gray-700 sr-only">
                Email
              </label>
              <input
                id="email-login" // Added ID for label association
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                aria-label="Email address" // Added aria-label
              />
            </div>

            <div>
              <label htmlFor="password-login" className="block text-sm font-medium text-gray-700 sr-only">
                Password
              </label>
              <input
                id="password-login" // Added ID for label association
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                aria-label="Password" // Added aria-label
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
              <label htmlFor="remember-me" className="flex items-center gap-2 text-gray-700 cursor-pointer"> {/* Added cursor-pointer */}
                <input id="remember-me" type="checkbox" className="form-checkbox text-emerald-600 focus:ring-emerald-500 rounded focus:outline-none focus:ring-2 focus:ring-emerald-300" /> {/* Added focus styles */}
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-emerald-600 hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded" // Added focus styles
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-300" // Added focus styles
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-emerald-600 font-medium hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded"> {/* Added focus styles */}
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE – IMAGE / INFO */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-emerald-600 to-sky-700 text-white items-center justify-center p-10">
        <div className="max-w-md text-center">
          <h2 className="text-4xl font-bold mb-4">
            Fast. Secure. Reliable.
          </h2>
          <p className="text-lg opacity-90">
            Track shipments, manage orders, and stay updated with real-time
            logistics insights.
          </p>

          {/* Replaced generic icon with a more modern, illustrative one if possible, or remove if not. 
              Using a placeholder illustration from a more modern source. */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png" 
            alt="Logistics illustration: Fast Delivery"
            className="mt-8 w-64 mx-auto opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
