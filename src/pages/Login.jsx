// src/pages/Login.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import loginService from "../services/login";
import ForgotPasswordModal from "../components/ForgotPasswordModal";

const LoginForm = () => {
  const { isAuthenticated, login, verified, authLoading } = useAuth();
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const toggleForgotPasswordModal = () => {
    setForgotPasswordModal((prev) => !prev);
  };

  useEffect(() => {
    if (authLoading) return;
    if (isAuthenticated && verified) {
      navigate("/dashboard");
    } else if (isAuthenticated) {
      navigate("/verify");
    }
  }, [isAuthenticated, verified, navigate, authLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { email, password };
      const loginResponse = await loginService(formData);
      if (loginResponse.success) {
        login(loginResponse.token);
        toast.success("Login Successful");
      } else {
        toast.error(loginResponse.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An unexpected error occurred.");
    }
  };

  return (
    <>
      {forgotPasswordModal && (
        <ForgotPasswordModal onClose={toggleForgotPasswordModal} />
      )}

      <div className="py-5 flex flex-col justify-center items-center px-4">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl shadow-xl mb-3">
            <img src="/Logo.png" alt="Evergreen Logix" className="w-10 h-10" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Welcome <span className="text-emerald-600">Back</span>
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Login to manage your shipments
          </p>
        </div>

        <div className="w-full max-w-md">
          <div className="bg-white py-6 md:py-10 px-6 rounded-xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 text-sm md:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right text-sm">
                <button
                  type="button"
                  onClick={toggleForgotPasswordModal}
                  className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline transition-colors duration-200"
                >
                  Forgot your password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                Sign in
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              <Link to="/register">
                <div className="text-center text-sm my-4 text-gray-500">
                  New User?{" "}
                  <span className="text-emerald-600 font-semibold hover:text-emerald-700 hover:underline transition-colors duration-200">
                    Create a new account!
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Login = () => {
  return (
    <div className="bg-[#f8fafc] font-inter p-2 md:p-6 min-h-[calc(100vh-86px)] flex items-center justify-center">
      {/* <div className="block md:flex max-w-5xl mx-auto w-full rounded-xl shadow-2xl overflow-hidden"> */}
        <div className="md:w-1/2 border-gray-100 border md:h-auto bg-white flex flex-col justify-center">
          <LoginForm />
        </div>
        {/* <div className="md:w-1/2 bg-neutral-50 border border-gray-100 flex items-center justify-center p-4">
          <img
            src="/images/login.gif"
            className="w-full object-contain h-auto max-h-[500px] rounded-lg shadow-md"
            alt="Login Illustration"
          />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Login;