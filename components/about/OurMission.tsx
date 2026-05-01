"use client";

import React from "react";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#f8f6f1] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: image with MISSION overlay */}
        <div className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl group">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
            alt="Our Mission"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark overlay + MISSION text */}
          <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-white">
              {/* Target/mission icon */}
              <svg className="w-16 h-16 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <span className="text-3xl font-bold font-serif tracking-widest uppercase mt-2">Mission</span>
            </div>
          </div>
        </div>

        {/* RIGHT: text */}
        <div className="flex flex-col gap-6">
          {/* label */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em]">
              Our Mission
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a0a0a] leading-tight">
            Our Mission
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Our mission is to empower businesses and individuals by providing innovative, tailored financial solutions that drive growth and success. We are committed to offering expert advice, strategic insights, and opportunities across a wide range of financial areas including Mergers &amp; Acquisitions, IPO advisory, private finance, and fund raising.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            We strive to build lasting relationships with our clients, providing them with the tools, resources, and knowledge they need to make sound financial decisions — today and for generations to come.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurMission;
