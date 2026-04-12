import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
      title: "CONNECTING YOU TO THE WORLD, ONE SHIPMENT AT A TIME",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606964212858-c215029db704?w=1920&q=80",
      title: "YOUR TRUSTED LOGISTIC PARTNER IN WORLDWIDE SMART WAY",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80",
      title: "DELIVERING SPEED, RELIABILITY AND EXCELLENCE",
    },
    {
      image:
        "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?w=1920&q=80",
      title: "FAST AND SECURE GLOBAL SHIPPING SOLUTIONS",
    },
    {
      image:
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?w=1920&q=80",
      title: "OPTIMIZE YOUR BUSINESS WITH OUR LOGISTICS EXPERTISE",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div id="home" className="relative h-[calc(100vh-5rem)] w-full group overflow-hidden"> 
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/60" /> {/* Increased overlay for better text readability and consistency */}
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-6 max-w-5xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-10 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* Discover */}
                <button
                  onClick={() => navigate("/blogs")}
                  className="
                    bg-slate-700 text-white px-10 py-4 md:py-5 text-lg rounded-full
                    transition-all duration-300 ease-out
                    hover:bg-slate-600 hover:scale-105 hover:shadow-xl
                    active:scale-95 border-2 border-slate-700 hover:border-slate-600 font-semibold
                    focus:outline-none focus:ring-4 focus:ring-slate-300
                  " // Added focus styles
                >
                  DISCOVER MORE
                </button>

                {/* Login */}
                <button
                  onClick={() => navigate("/login")}
                  className="
                    bg-emerald-500 text-white px-10 py-4 md:py-5 text-lg rounded-full
                    transition-all duration-300 ease-out
                    hover:bg-emerald-600 hover:scale-105 hover:shadow-emerald-500/40 hover:shadow-xl
                    active:scale-95 border-2 border-emerald-500 hover:border-emerald-600 font-semibold
                    focus:outline-none focus:ring-4 focus:ring-emerald-300
                  " // Added focus styles
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              h-3 transition-all duration-300 rounded-full cursor-pointer
              ${index === currentSlide 
                ? "w-10 bg-emerald-500 shadow-lg shadow-emerald-500/50" 
                : "w-3 bg-white/40 hover:bg-white/60"
              }
              focus:outline-none focus:ring-2 focus:ring-emerald-300
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
