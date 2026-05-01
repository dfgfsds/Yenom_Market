"use client";

import React from "react";
import Link from "next/link";

const sidebarServices = [
  { name: "Fund Raising in Bank and NBFC", slug: "fund-raising" },
  { name: "Bridge Funding", slug: "bridge-funding" },
  { name: "Private Finance", slug: "private-finance" },
  { name: "Consortium banking & Multiple banking", slug: "consortium-banking" },
  { name: "SME Listings", slug: "sme-listings" },
  { name: "IPO Advisory Services", slug: "ipo-advisory" },
  { name: "M & A Advisory Solutions", slug: "ma-advisory" },
  { name: "Sick Industries Revival and Restructuring", slug: "revival" },
  { name: "CIBIL", slug: "cibil" },
];

interface ServiceSidebarProps {
  currentSlug: string;
}

const ServiceSidebar = ({ currentSlug }: ServiceSidebarProps) => {
  return (
    <div className="flex flex-col gap-10">

      {/* Our Services Menu */}
      <div className="bg-[#f8f6f1] p-8 border-t-4 border-[#d4af37]">
        <h3 className="text-xl font-serif font-bold text-[#0a0a0a] mb-6">Our Services</h3>
        <div className="flex flex-col gap-2">
          {sidebarServices.map((s) => {
            const isActive = currentSlug === s.slug;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group flex items-center justify-between px-4 py-3 transition-all ${isActive
                  ? "bg-[#d4af37] text-white font-bold"
                  : "bg-white text-gray-700 hover:bg-[#d4af37] hover:text-white"
                  }`}
              >
                <span className="text-sm">{s.name}</span>
                <svg
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? "text-white" : "text-[#d4af37] group-hover:text-white"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Get In Touch Mini Form */}
      <div className="bg-[#f8f6f1] p-8 border-t-4 border-[#d4af37]">
        <h3 className="text-xl font-serif font-bold text-[#0a0a0a] mb-6">Get In Touch</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-700 bg-white"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-700 bg-white"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-700 bg-white"
          />
          <textarea
            rows={4}
            placeholder="Your message (optional)"
            className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-red-700 bg-white resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#f2c94c]  text-white  font-bold py-3 uppercase tracking-wider transition-all text-sm"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
};

export default ServiceSidebar;
