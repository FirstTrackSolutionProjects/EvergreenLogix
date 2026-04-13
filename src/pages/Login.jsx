import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* IMAGE SECTION */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <img
          src="/images/login.jpg"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    

      {/* FORM SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mb-6">
            Login to manage your shipments
          </p>

          <form className="space-y-5">

            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-emerald-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="accent-emerald-600" />
                Remember me
              </label>

              <Link to="/forgot-password" className="text-emerald-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 active:scale-95 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-emerald-600 font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;