// src/pages/Register.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock,
  Building,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { toast } from "react-toastify";
import register from "../services/register";
import { useAuth } from "../context/AuthContext";
import { requestRegistrationOTPService } from "../services/requestRegistrationOTP";

const Register = () => {
  const { isAuthenticated, login, verified, authLoading } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    otp: "",
  });
  const [errors, setErrors] = useState({});

  // OTP related states
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [isRequestingOtp, setIsRequestingOtp] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (authLoading) return;
    if (isAuthenticated && verified) {
      navigate("/dashboard");
    } else if (isAuthenticated) {
      navigate("/verify");
    }
  }, [isAuthenticated, verified, navigate, authLoading]);

  // OTP countdown timer
  useEffect(() => {
    let timerInterval;
    if (otpSent && otpTimer > 0) {
      timerInterval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [otpSent, otpTimer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear field-level error on change
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const validate = () => {
    let validationErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      validationErrors.fullName = "Full name should contain alphabets only";
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      validationErrors.email = "Invalid email format";
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      validationErrors.phone = "Phone number should be exactly 10 digits";
    }

    if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (showOtpField && !/^\d{6}$/.test(formData.otp.trim())) {
      validationErrors.otp = "OTP must be a 6-digit number";
    }

    return validationErrors;
  };

  // Email validity check for OTP button
  const isEmailValidForOtp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      formData.email.trim()
    );

  const handleRequestOtp = async () => {
    const trimmedEmail = formData.email.trim();
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmedEmail)
    ) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      toast.error("Please enter a valid email address.");
      return;
    }
    setErrors((prev) => ({ ...prev, email: undefined }));

    setIsRequestingOtp(true);
    try {
      const response = await requestRegistrationOTPService(trimmedEmail);
      if (response?.message) {
        toast.success(response.message);
        setOtpSent(true);
        setShowOtpField(true);
        setOtpTimer(60);
      } else {
        toast.error(response?.error || "Failed to send OTP. Please try again.");
      }
    } catch (err) {
      const errorMessage =
        typeof err === "string"
          ? err
          : err?.response?.data?.error || err?.message || "Failed to send OTP.";
      toast.error(errorMessage);
      setShowOtpField(false);
      setOtpSent(false);
    } finally {
      setIsRequestingOtp(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpSent) {
      toast.error("Please verify your email with an OTP before registering.");
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    if (!formData.otp) {
      toast.error("Please enter the OTP sent to your email.");
      return;
    }

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      password: formData.password,
      confirm_password: formData.confirmPassword,
      phone: formData.phone.trim(),
      businessName: formData.businessName.trim(),
      otp: formData.otp.trim(),
    };

    try {
      const registerResponse = await register(payload);
      if (registerResponse?.success) {
        toast.success(
          registerResponse.message || "Account created successfully!"
        );
        await login(registerResponse.token);
      } else {
        toast.error(
          registerResponse?.message || "Registration failed. Please try again."
        );
      }
    } catch (err) {
      const errorMessage =
        typeof err === "string"
          ? err
          : err?.message || "An unexpected error occurred during registration.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-4 py-10">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl shadow-xl mb-4">
            <img src="/Logo.png" alt="Evergreen Logix" className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-1">Join us &amp; start shipping smarter</p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  required
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email + Send OTP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
              {/* Send / Resend OTP Button */}
              <div className="mt-2">
                <button
                  type="button"
                  onClick={handleRequestOtp}
                  disabled={isRequestingOtp || otpTimer > 0 || !isEmailValidForOtp}
                  className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    isRequestingOtp || otpTimer > 0 || !isEmailValidForOtp
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-md hover:shadow-emerald-500/30"
                  }`}
                >
                  {isRequestingOtp
                    ? "Sending OTP..."
                    : otpSent && otpTimer > 0
                    ? `Resend OTP in ${otpTimer}s`
                    : otpSent
                    ? "Resend OTP"
                    : "Send OTP"}
                </button>
              </div>
            </div>

            {/* OTP Field — conditionally rendered */}
            {showOtpField && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Verification OTP
                </label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    maxLength={6}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Enter 6-digit OTP"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 text-center tracking-widest text-lg font-semibold"
                  />
                </div>
                {errors.otp && (
                  <p className="text-red-500 text-xs mt-1">{errors.otp}</p>
                )}
              </div>
            )}

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all duration-200 bg-white">
                  <div className="flex items-center pl-10 pr-2 border-r border-gray-200 py-3">
                    <span className="text-sm font-medium text-gray-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full px-3 py-3 outline-none text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Business Name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={otpSent && !formData.otp}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                otpSent && !formData.otp
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-600 font-semibold hover:text-emerald-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;