"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPageHero = () => {
  return (
    <section className="relative w-full h-[320px] md:h-[400px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero2.png"
        alt="About Us Banner"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />





      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About Us</h1>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/80">
          <Link href="/" className="hover:text-[#d4af37] transition-colors">
            Yenommarket
          </Link>
          <svg className="w-3 h-3 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-[#d4af37] font-semibold">About Us</span>
        </nav>
      </div>
    </section>
  );
};

export default AboutPageHero;
