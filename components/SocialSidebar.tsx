"use client";

import React from "react";

const SocialSidebar = () => {
  const socialLinks = [
    { name: "Facebook", color: "bg-[#1877F2]", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "Twitter", color: "bg-[#1DA1F2]", d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    { name: "LinkedIn", color: "bg-[#0A66C2]", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
    { name: "YouTube", color: "bg-[#FF0000]", d: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 001.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]">
      {/* SOCIAL ICONS (LEFT) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-auto">
        {socialLinks.map((s, i) => (
          <div
            key={i}
            className={`${s.color} w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg border border-white/20`}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d={s.d} />
            </svg>
          </div>
        ))}
        <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg border border-white/20">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
          </svg>
        </div>
      </div>

      {/* ENQUIRY TAB (RIGHT) */}
      {/* <div className="absolute right-0 top-1/3 pointer-events-auto">
        <div className="bg-[#d4af37] text-white py-4 px-1.5 rounded-l-md font-bold text-[11px] uppercase [writing-mode:vertical-lr] tracking-[0.2em] cursor-pointer hover:pr-3 transition-all shadow-xl border-y border-l border-white/20">
          FOR ENQUIRY
        </div>
      </div> */}
    </div>
  );
};

export default SocialSidebar;
