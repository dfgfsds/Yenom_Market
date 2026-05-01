"use client";

import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sathish Kumar",
    title: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Yenom Market helped me secure a business loan in record time. Their team was professional, transparent, and genuinely cared about my business growth. I highly recommend their services.",
    rating: 5,
  },
  {
    name: "Monisha Devi",
    title: "Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "I was struggling with CIBIL issues and no bank would approve my loan. Yenom Market's experts resolved my case step-by-step and got me funded. Amazing service!",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    title: "MSME Founder",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "The team at Yenom Market is incredibly knowledgeable. They guided me through the entire fundraising process and the bridge funding they arranged saved my business at a critical time.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-16 md:py-24 px-4 md:px-20 bg-[#f9fafb] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP LABEL */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center border border-gray-200 px-3 py-2 gap-3 w-fit">
            <div className="w-2 h-2 bg-[#d4a017]" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0a0a0a] leading-tight px-2">
            Trusted by Businesses Across India
          </h2>
          <div className="flex items-center gap-2 mt-4 justify-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                  <Image
                    src={`https://randomuser.me/api/portraits/thumb/men/${i + 10}.jpg`}
                    alt="user"
                    fill
                    sizes="32px"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-500 font-medium flex flex-wrap justify-center gap-1">
              <span className="text-[#0a0a0a] font-bold">500+</span> Reviews on
              <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
                Google
                <svg viewBox="0 0 48 48" className="w-4 h-4">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS SLIDER */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* NAV BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-[-10px] md:left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hidden sm:flex items-center justify-center z-10 hover:bg-[#d4af37] hover:text-white transition-all border border-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-[-10px] md:right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg hidden sm:flex items-center justify-center z-10 hover:bg-[#d4af37] hover:text-white transition-all border border-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="overflow-hidden py-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 md:p-12 rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col relative">
                    <div className="absolute top-8 right-10">
                      <svg viewBox="0 0 48 48" className="w-8 h-8 opacity-90">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-6 mb-8">

                      <div>
                        <div className="font-bold text-[#0a0a0a] text-xl md:text-2xl flex items-center gap-2">
                          {t.name}
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">{t.title}</div>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-[#fbbc05]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-8 italic font-medium">
                      &ldquo;{t.review}&rdquo;
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-tighter">Verified</span>
                        <div className="h-1 w-1 bg-gray-300 rounded-full" />
                        <span className="text-[10px] md:text-xs text-gray-400">Google Review</span>
                      </div>
                      <span className="text-[10px] md:text-xs text-gray-400 font-medium">Published 2 months ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${i === current ? "w-10 h-2 bg-[#d4af37]" : "w-2 h-2 bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
