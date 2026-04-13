import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
      title: "CONNECTING YOU TO THE WORLD, ONE SHIPMENT AT A TIME",
    },
    {
      image: "https://images.unsplash.com/photo-1606964212858-c215029db704?w=1920&q=80",
      title: "YOUR TRUSTED LOGISTIC PARTNER IN WORLDWIDE SMART WAY",
    },
    {
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80",
      title: "DELIVERING SPEED, RELIABILITY AND EXCELLENCE",
    },
    {
      image: "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?w=1920&q=80",
      title: "FAST AND SECURE GLOBAL SHIPPING SOLUTIONS",
    },
    {
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?w=1920&q=80",
      title: "OPTIMIZE YOUR BUSINESS WITH OUR LOGISTICS EXPERTISE",
    },
  ];

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // SWIPE HANDLERS
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // swipe left
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // swipe right
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div
      id="home"
      className="relative h-[calc(80vh-4rem)] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-6 max-w-5xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button
                  onClick={() => navigate("/blogs")}
                  className="bg-slate-700 text-white px-8 py-3 md:py-4 text-base md:text-lg rounded-full hover:bg-slate-600 hover:scale-105 transition"
                >
                  DISCOVER MORE
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="bg-emerald-500 text-white px-8 py-3 md:py-4 text-base md:text-lg rounded-full hover:bg-emerald-600 hover:scale-105 transition"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;