"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE: IMAGE DESIGN */}
        <div className="relative">
          {/* EXPERIENCE BADGE */}
          <div className="absolute top-0 left-0 bg-black text-white p-6 z-10 shadow-xl">
            <div className="text-4xl font-bold">12+</div>
            <div className="text-sm uppercase tracking-widest mt-1 opacity-80">Year Experience</div>
          </div>

          {/* IMAGE CONTAINER WITH CIRCULAR BORDER */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto border-[1px] border-gray-200 rounded-full flex items-center justify-center p-4">
            <div className="relative w-full h-full flex gap-4">

              <div className="relative w-full h-full overflow-hidden rounded-l-full">
                <Image
                  src="/about-1.webp"
                  alt="About Yenom Market"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />


              </div>


            </div>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center border border-gray-200 px-3 py-2 gap-3 w-fit">
            <div className="w-2 h-2 bg-[#d4a017]" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              Welcome to financial freedom with Yenom Market
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a0a0a] leading-tight">
            Partner with a team dedicated to your business's success
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Yenom Market, a leading provider of innovative financial services tailored to your needs. Whether you’re an individual seeking financial freedom or a business looking to expand, our dedicated team provides expert guidance, cutting-edge tools, and unparalleled support to help you succeed.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div className="flex-1 flex gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#d4a017] rounded-md flex items-center justify-center flex-shrink-0">
                {/* ICON PLACEHOLDER */}
                <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-[22px] font-bold font-serif text-[#0a0a0a] leading-tight">Loans Approved in The<br /> Blink of an Eye!</h3>
                <p className="text-gray-500 text-base mt-2">
                  We offer rapid approvals so you can access the funds you need without delay.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 self-center md:self-end">
              <Link href="contact" className="bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#f2c94c] shadow-[0_0_20px_rgba(212,160,23,0.2)] text-white text-black px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#b08d2b] transition-all group">
                View More
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
