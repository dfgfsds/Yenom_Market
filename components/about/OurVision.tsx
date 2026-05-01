"use client";

import React from "react";
import Image from "next/image";

const OurVision = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT: text */}
        <div className="flex flex-col gap-6">
          {/* label */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#d4af37]" />
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.2em]">
              Our Vision
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a0a0a] leading-tight">
            Our Vision
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Our vision is to be the most trusted and accessible financial services partner in the nation — empowering every client with smart, innovative, and reliable financial solutions. We aspire to be the definitive resource for businesses, individuals, and investors who seek to thrive in an ever-evolving marketplace.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            We believe that financial freedom is a right, not a privilege. By combining technology, expertise, and a deep understanding of markets, we aim to democratize access to quality financial services across India, driving growth, security, and success in every financial journey we undertake.
          </p>
        </div>

        {/* RIGHT: image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl group">
          <Image
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
            alt="Our Vision"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </section>
  );
};

export default OurVision;
