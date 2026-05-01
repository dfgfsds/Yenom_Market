"use client";

import React, { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Strategic Planning",
    description:
      "We begin by understanding your unique financial goals. Our experts craft a precise strategic roadmap tailored to your business needs — whether it's fundraising, expansion, or restructuring.",
  },
  {
    number: "02",
    title: "Market Research & Preparation",
    description:
      "We conduct deep market research to identify the best financial instruments, lenders, and investors for your profile. Every document and pitch is prepared to perfection to maximize approval chances.",
  },
  {
    number: "03",
    title: "Post-Funding Support",
    description:
      "Our relationship doesn't end at funding. We provide continuous post-funding advisory, compliance support, and growth monitoring to ensure you make the most of every rupee.",
  },
];

const WorkProcess = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT: heading */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center border border-gray-200 px-3 py-2 gap-3 w-fit">
            <div className="w-2 h-2 bg-[#d4a017]" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              Work Process
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a0a0a] leading-tight">
            Our Simple, Transparent <br /> Funding Process
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            We follow a proven three-step process to ensure a seamless
            experience from start to finish. No jargon, no hidden fees — just
            clear, expert-driven financial guidance.
          </p>

          {/* DECORATIVE LINE */}
          <div className="flex items-center gap-4 mt-2">
            <div className="h-[2px] w-12 bg-[#d4af37]" />
            <span className="text-sm text-gray-400 tracking-widest uppercase">Yenom Market</span>
          </div>
        </div>

        {/* RIGHT: accordion */}
        <div className="flex flex-col gap-0 divide-y divide-gray-200 border border-gray-200">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? -1 : i)}
              className="w-full text-left group"
            >
              <div
                className={`flex items-center gap-6 px-8 py-6 transition-all duration-300 ${active === i
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <span
                  className={`text-4xl font-bold transition-colors duration-300 ${active === i ? "text-[#d4af37]" : "text-gray-200 group-hover:text-[#d4af37]"
                    }`}
                >
                  {step.number}
                </span>
                <span className={`text-xl font-bold flex-1 transition-colors duration-300 ${active === i ? "text-[#d4af37]" : "text-gray-600 group-hover:text-[#d4af37]"}`}>{step.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${active === i ? "rotate-180 text-[#d4af37]" : "text-gray-400"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div
                className={`grid transition-all duration-500 ease-in-out ${active === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="px-8 py-4 text-gray-500 text-base leading-relaxed bg-gray-50 border-t border-gray-100">
                    {step.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
