"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/herosction1.webp",
    title: "Our Trusted Partner for Simple and Secure in Loans",
    description: "Yenom Market is here to help you access the right loan",
  },
  {
    image: "/hero2.png",
    title: "Loans that Work for You, Not Against You",
    description: "Get the funding you need, fast and easily, with Yenom Market",
  },
  {
    image: "/herosction2.webp",
    title: "Maximize Value, Minimize Surprises",
    description: "Yenom Market provides the in-depth analysis you need to secure the success of your business ventures",
  },
  {
    image: "/herosction3.webp",
    title: "Your Trusted Partner in Raising Funds for Success",
    description: "Yenom Market, we specialize in connecting businesses with the right investors and funding solutions.",
  },

];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[750px] overflow-hidden bg-black">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* CONTENT OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start z-10">
        <div className="w-full md:w-2/3 lg:w-1/2 px-4 md:px-20">
          <div className="bg-black/30 md:bg-black/40 backdrop-blur-sm md:backdrop-blur-md p-5 md:p-10 rounded-xl border-l-4 border-[#d4af37] animate-in fade-in slide-in-from-left-5 duration-700">
            <span className="text-[#d4af37] font-bold text-[10px] md:text-sm tracking-widest uppercase mb-2 md:mb-3 block">
              YENOM MARKET
            </span>
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6 leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-gray-200 text-sm md:text-lg mb-5 md:mb-8 max-w-md line-clamp-4 md:line-clamp-none leading-relaxed">
              {slides[current].description}
            </p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-[#d4af37] hover:bg-[#b08d2b] text-white px-6 md:px-8 py-3 md:py-4 rounded-md font-bold text-sm md:text-base transition-all transform hover:scale-105 shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>



      {/* THUMBNAILS (DESKTOP ONLY) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-20">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-14 h-14 rounded-full border-2 transition-all overflow-hidden relative shadow-lg ${current === i ? "border-[#d4af37] scale-125 z-10" : "border-white/30 opacity-60 hover:opacity-100"
              }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
              sizes="56px"
            />
          </button>
        ))}
      </div>

      {/* MOBILE DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 md:hidden z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? "bg-[#d4af37] w-8" : "bg-white/40 w-3"
              }`}
          />
        ))}
      </div>


      <div className="absolute hidden md:block bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-[#d4af37] transition-all duration-[5000ms] ease-linear"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default Hero;
