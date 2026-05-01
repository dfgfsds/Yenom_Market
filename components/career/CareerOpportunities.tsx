"use client";

import React from "react";
import Image from "next/image";

const points = [
  {
    label: "Flexible Earnings",
    highlight: true,
    text: "Boost your income with a part-time job.",
  },
  {
    label: "Students Welcome",
    highlight: true,
    text: "Learn, earn, and grow—all while managing your studies.",
  },
  {
    label: "Work from Home",
    highlight: true,
    text: "Enjoy the convenience of remote work, tailored to your schedule.",
  },
];

const CareerOpportunities = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Team Opportunities"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a0a0a] leading-tight">
            Unlock Opportunities with Us!
          </h2>

          <div className="flex flex-col gap-4">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* Gold dot bullet */}
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#d4af37]" />
                <p className="text-gray-700 text-base leading-relaxed">
                  <span className="font-bold text-[#0a0a0a]">{p.label}: </span>
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-base leading-relaxed border-l-4 border-[#d4af37] pl-4 italic">
            Start your journey toward financial independence and essential learning opportunities today!
          </p>

          {/* Scroll-to-form CTA */}
          <a
            href="#career-form"
            className="w-fit bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#f2c94c] shadow-[0_0_20px_rgba(212,160,23,0.2)] text-white px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 group mt-2"
          >
            Apply Now
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CareerOpportunities;
