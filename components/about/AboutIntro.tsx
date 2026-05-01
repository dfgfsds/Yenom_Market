"use client";

import React from "react";
import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="relative w-full aspect-[4/3]">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#d4a017]/30 rounded-tl-3xl z-0" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#d4a017]/30 rounded-br-3xl z-0" />

          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl z-10">
            <Image
              src="/about/2.jpg"
              alt="Yenom Market Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: text */}
        <div className="flex flex-col gap-5">
          {/* label */}

          <div className="flex items-center border border-gray-200 px-3 py-2 gap-3 w-fit">
            <div className="w-2 h-2 bg-[#d4a017]" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              About Company
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a0a0a] leading-tight">
            YENOM MARKET
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Welcome to Yenom Market is a leading provider of innovative financial services, offering a range of solutions designed to support businesses and individuals in their financial journeys. Our mission is to create opportunities and provide strategic insights to help clients make informed decisions, secure funding, and achieve sustainable growth. Whether you’re an entrepreneur looking to scale, an investor seeking new opportunities, or a business needing financial restructuring, Yenom Market has the expertise and tools to guide you every step of the way.

          </p>


          <div className="flex items-center gap-4 pt-2">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#f2c94c] shadow-[0_0_20px_rgba(212,160,23,0.2)] text-white px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 group"
            >
              Get In Touch
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
