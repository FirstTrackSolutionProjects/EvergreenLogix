// src/App.jsx
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingChatbot from "./components/FloatingChatbot";

// Home components
import HeroCarousel from "./components/HeroCarousel";
import Capabilities from "./components/Capabilities";
import MissionVision from "./components/MissionVision";
import WhyChooseUs from "./components/WhyChooseUs";
import Statistics from "./components/Statistics";
import ShippingCalculator from "./components/ShippingCalculator";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import CTA from "./components/CTA";
import ScrollToTop from "./components/ScrollToTop";
import MobileBottomNav from "./components/MobileBottomNav";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tracking from "./pages/Tracking";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import RefundCancellation from "./pages/RefundCancellation";

function Home() {
  return (
    <>
      <HeroCarousel />
      <Capabilities />
      <MissionVision />
      <WhyChooseUs />
      <Statistics />
      <ShippingCalculator />
      <Newsletter />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="pt-20 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/refund-cancellation" element={<RefundCancellation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
      <MobileBottomNav />
      <FloatingChatbot />
    </>
  );
}

export default App;