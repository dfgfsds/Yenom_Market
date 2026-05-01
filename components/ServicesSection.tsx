"use client";

import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Fund Raising in Bank and NBFC",
    active: false,
    icon: "M3 21h18M3 10h18M5 10v11m4-11v11m6-11v11m4-11v11M12 3L2 10h20L12 3z"
  },
  {
    title: "Bridge Funding",
    active: false,
    icon: "M3 12h18M3 12l4-4m-4 4l4 4m14-4l-4-4m4 4l-4 4"
  },
  {
    title: "Private Finance",
    active: true,
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  },
  {
    title: "Consortium banking & Multiple banking",
    active: false,
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
  },
  {
    title: "SME Listings",
    active: false,
    icon: "M22 12h-4l-3 9L9 3l-3 9H2"
  },
  {
    title: "IPO Advisory Services",
    active: false,
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  },
  {
    title: "M&A Advisory Solutions",
    active: false,
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m15-13a4 4 0 11-8 0 4 4 0 018 0zm3 10v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
  },
  {
    title: "Sick Industries Revival and Restructuring",
    active: false,
    icon: "M13 2L3 14h9v8l10-12h-9l9-8z"
  },
  {
    title: "CIBIL",
    active: false,
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 11H7V9h4V7h2v2h4v3h-4v2h4v2h-4v2h-2v-2H7v-3h4v-2z"
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-20 overflow-hidden min-h-[800px] flex flex-col items-center">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lone-1.jpg"
          alt="Services Background"
          fill
          className="object-fill"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 px-4 w-full flex flex-col items-center">
        {/* TOP LABEL */}
        <div className="border border-white/30 px-4 py-1 mb-6">
          <span className="text-white text-xs font-bold flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white" />
            Our Services
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-2xl md:text-5xl font-serif text-white text-center mb-10 md:mb-16 leading-tight">
          Fast, Flexible and Hassle-Free Loans.
        </h2>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 w-full border-t border-l border-white/20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 md:p-10 border-r border-b border-white/20 flex flex-col gap-4 md:gap-6 transition-all duration-500 overflow-hidden ${service.active
                ? "bg-white/10 text-white hover:text-black z-20 shadow-2xl"
                : "bg-transparent text-white hover:text-black"
                }`}
            >
              {/* HOVER SWEEP BACKGROUND */}
              <div className={`absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0`} />

              <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 transition-colors duration-500">
                <svg className={`w-full h-full text-white group-hover:text-black`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={service.icon} />
                </svg>
              </div>

              <h3 className={`relative z-10 text-base md:text-2xl font-serif font-bold leading-tight transition-colors duration-500 text-white group-hover:text-black`}>
                {service.title}
              </h3>

              <a
                href="#"
                className={`relative z-10 text-sm font-bold  transition-colors duration-500 text-white group-hover:text-red-600`}
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
