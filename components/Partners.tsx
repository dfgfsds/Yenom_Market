"use client";

import React from "react";
import Image from "next/image";

// Displaying HDFC Bank as the primary strategic partner as requested


const Partners = () => {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* HEADING */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center border border-gray-200 px-3 py-2 gap-3 w-fit">
            <div className="w-2 h-2 bg-[#d4a017]" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Strategic Partner</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a0a0a] text-center">
            Empowered by Industry Leaders
          </h2>
        </div>

        {/* SINGLE HIGHLIGHTED LOGO */}
        <div className="flex justify-center w-full">
          <div className="relative group p-8 md:p-12 rounded-3xl bg-white border-2 border-[#d4a017]/30 shadow-[0_20px_50px_rgba(212,160,23,0.1)] hover:shadow-[0_30px_60px_rgba(212,160,23,0.2)] hover:border-[#d4a017] transition-all duration-500 animate-fade-in">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a017]/5 to-transparent rounded-3xl -z-10" />
            
            <div className="w-48 md:w-64 h-24 flex items-center justify-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg"
                alt="HDFC Bank"
                width={240}
                height={80}
                className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            
            <div className="mt-6 text-center">
              <span className="text-[#d4a017] font-bold uppercase tracking-[0.2em] text-[10px]">Primary Banking Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
