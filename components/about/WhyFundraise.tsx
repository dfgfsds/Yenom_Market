"use client";

import React from "react";
import Image from "next/image";

const bullets = [
  {
    title: "Tailored Solutions",
    desc: "Customized funding strategies that match your unique goals.",
  },
  {
    title: "Wide Network",
    desc: "Access to an extensive network of banks, NBFCs, and private financiers.",
  },
  {
    title: "End to End Support",
    desc: "From structuring to sanction — we guide you throughout our full funding journey.",
  },
  {
    title: "Expert Team",
    desc: "Skilled professionals with deep industry insights and a passion for your success.",
  },
];

const WhyFundraise = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#f8f6f1] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* RIGHT: text (order 2) */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a0a0a] leading-tight">
            Why Fundraise with Yenom Market?
          </h2>

          <div className="flex flex-col gap-5">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-4 group">
                {/* Bullet marker */}
                <div className="flex-shrink-0 w-6 h-6 mt-0.5 bg-[#d4af37] rounded-full flex items-center justify-center shadow">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-[#0a0a0a] text-base">{b.title}: </span>
                  <span className="text-gray-600 text-base">{b.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT: image (order 1) */}
        <div className="relative w-full aspect-[4/3] group order-1 md:order-2">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#d4a017]/30 rounded-tl-3xl z-0" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#d4a017]/30 rounded-br-3xl z-0" />

          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl z-10">
            <Image
              src="/about/3.webp"
              alt="Why Choose Yenom Market"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyFundraise;
