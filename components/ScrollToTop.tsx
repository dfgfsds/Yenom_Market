"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrolled / height) * 100;
      setProgress(scrollProgress);

      // Show/hide button
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circumference for r=24 is ~150.8
  const circumference = 150.8;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform group hover:scale-110 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      aria-label="Scroll to top"
    >
      {/* Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="3"
          fill="transparent"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="#d4a017"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset }}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
      </svg>

      {/* Arrow */}
      <svg
        className="w-6 h-6 text-[#d4a017] relative z-10 transition-transform group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
