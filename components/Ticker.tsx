"use client";

import React from "react";

const Ticker = () => {
  const items = [
    "Private Finance / தனியார் கடன்",
    "MSME / சிறு தொழில்",
    "Bridge Funding / இடைநிலை கடன்",
    "CGTMSME / அரசு உத்தரவாத கடன்",
    "Unsecured – Business loans / அடமானம் இல்லாத கடன்",
  ];

  // Double the items to ensure seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#0a0a0a] py-3 overflow-hidden border-b border-[#d4af37]/20 select-none">
      <div className="flex whitespace-nowrap animate-ticker w-max">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-10"
          >
            <span className="text-[#d4af37] font-semibold text-xs tracking-[0.1em] uppercase">
              {item}
            </span>
            <div className="ml-20 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_8px_#d4af37]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
