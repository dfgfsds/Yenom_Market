"use client";

import React from "react";
import Image from "next/image";

const features = [
  { label: "Expertise", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { label: "Collaboration", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Results-Driven", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Strategic Approach", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { label: "Innovation", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Customer Satisfaction", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

        {/* LEFT SIDE: IMAGE with gold accent */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
            <Image
              src="https://www.flyingsolo.com.au/wp-content/uploads/2021/01/growth-3.jpg"
              alt="Why Choose Yenom Market"
              fill
              className="object-cover"
            />
          </div>
          {/* Gold accent box */}
          <div className="absolute -bottom-6 -right-6 bg-[#000] p-6 text-white shadow-xl hidden md:block">
            <div className="text-3xl font-bold">12+</div>
            <div className="text-xs uppercase tracking-widest opacity-90">Years Trusted</div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex items-center border border-gray-200 px-3 py-2 gap-3 w-fit">
            <div className="w-2 h-2 bg-[#d4a017]" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a0a0a] leading-tight">
            Choosing Business partnering with a team dedicated to your Business success
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            We are committed to making your fundraising journey seamless and successful.
            With a team of seasoned experts, we offer tailored strategies designed to meet your unique financial needs.
            Our extensive network ensures you access the best funding opportunities.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 group">
                <div className="flex-shrink-0 w-9 h-9 bg-[#000] rounded-md flex items-center justify-center group-hover:bg-[#d4a017] transition-colors">
                  <svg className="w-4 h-4 text-[#fff] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <span className="text-gray-700 font-semibold text-sm transition-colors group-hover:text-black">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>


        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
