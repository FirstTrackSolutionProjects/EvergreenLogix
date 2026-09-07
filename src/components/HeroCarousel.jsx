// src/components/HeroCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80",
      title: "Sustainable Logistics for a Greener Tomorrow",
      subtitle: "Eco-friendly shipping solutions that care for the planet",
      gradient: "from-emerald-600/90 to-emerald-900/90",
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
      title: "Global Reach, Local Touch",
      subtitle: "Connecting businesses worldwide with reliable logistics",
      gradient: "from-blue-600/90 to-emerald-800/90",
    },
    {
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80",
      title: "Smart Shipping, Smarter World",
      subtitle: "AI-powered logistics for the modern business",
      gradient: "from-purple-600/90 to-emerald-700/90",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div
      id="home"
      className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-6 max-w-5xl animate-slide-up">
              <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
                🌿 Evergreen Logix
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-light">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/tracking")}
                  className="group bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 text-base md:text-lg rounded-full hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 flex items-center gap-2 justify-center font-semibold"
                >
                  Track Shipment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="group bg-gradient-to-r from-emerald-400 to-emerald-600 text-white px-8 py-4 text-base md:text-lg rounded-full hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-12 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;