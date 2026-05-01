"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Feature {
  id: string;
  title: string;
  text: string;
}

interface ServiceData {
  title: string;
  description1: string;
  description2: string;
  image1: string;
  image2: string;
  features: Feature[];
  benefits?: string[];
}

interface ServiceContentProps {
  data: ServiceData;
}

// Icon map for fund-raising features
const featureIcons: Record<string, React.ReactNode> = {
  CGTMSE: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  MSME: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  "UNSECURED": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
    </svg>
  ),
};

const getFeatureIcon = (title: string): React.ReactNode => {
  const upperTitle = title.toUpperCase();
  const key = Object.keys(featureIcons).find((k) =>
    upperTitle.includes(k)
  );
  return key ? featureIcons[key as keyof typeof featureIcons] : (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
};

// Animated counter hook
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 2000, suffix: "Cr+", label: "Funds Raised" },
];

// fund-raising specific highlights
const fundHighlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Secured Loans",
    desc: "Working Capital & MSME Funding",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "CGTMSE Funding",
    desc: "Collateral-free credit guarantees",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Unsecured Loans",
    desc: "No collateral business funding",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Equity Funding",
    desc: "Investor connections & relations",
  },
];

const ServiceContent = ({ data }: ServiceContentProps) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const c0 = useCountUp(stats[0].value, 1800, statsVisible);
  const c1 = useCountUp(stats[1].value, 1800, statsVisible);
  const c2 = useCountUp(stats[2].value, 1800, statsVisible);
  const c3 = useCountUp(stats[3].value, 1800, statsVisible);
  const counts = [c0, c1, c2, c3];

  const isFundRaising = data.title.toLowerCase().includes("fund");

  return (
    <div className="flex flex-col gap-0">

      {/* ─── Hero Banner Image with overlay text ─── */}
      <div className="relative w-full h-[380px] overflow-hidden rounded-2xl shadow-2xl">
        <Image src={data.image1} alt={data.title} fill className="object-cover scale-105 hover:scale-100 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight max-w-xl">
            {data.title}
          </h2>
        </div>
      </div>

      {/* ─── Quick Highlights (fund-raising specific) ─── */}
      {/* {isFundRaising && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {fundHighlights.map((h, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] border border-white/10 rounded-xl p-4 text-white overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-[#d4af37] mb-3">{h.icon}</div>
              <p className="font-bold text-sm leading-snug">{h.title}</p>
              <p className="text-white/50 text-xs mt-1">{h.desc}</p>
            </div>
          ))}
        </div>
      )} */}

      {/* ─── Description 1 with decorative line ─── */}
      <div className="mt-10 relative">
        <div className="flex items-start gap-5">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-1 h-1 rounded-full bg-[#d4af37]" />
            <div className="w-0.5 flex-1 bg-gradient-to-b from-[#d4af37] to-transparent mt-1" style={{ minHeight: "80px" }} />
          </div>
          <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
            {data.description1}
          </p>
        </div>
      </div>

      {/* ─── Stats Row ─── */}
      {/* <div
        ref={statsRef}
        className="mt-10 bg-gradient-to-r from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((s, i) => (
          <div key={i} className="text-center group">
            <div className="text-3xl md:text-4xl font-extrabold text-[#d4af37] tabular-nums">
              {counts[i]}
              <span className="text-xl">{s.suffix}</span>
            </div>
            <div className="text-white/60 text-xs uppercase tracking-widest mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div> */}

      {/* ─── Image 2 with side text ─── */}
      <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
        <div className="relative h-[280px] rounded-xl overflow-hidden shadow-xl">
          <Image src={data.image2} alt="Service Detail" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-12 h-1 bg-[#d4af37] rounded-full" />
          <blockquote className="text-gray-700 leading-relaxed text-[15px] md:text-base">
            {data.description2}
          </blockquote>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#f2c94c] shadow-[0_0_20px_rgba(212,160,23,0.2)] text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-all duration-300 w-fit"
          >
            Get Funded Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ─── Benefits Section ─── */}
      {data.benefits && data.benefits.length > 0 && (
        <div className="mt-12 bg-[#fdfaf3] p-8 rounded-2xl border border-[#d4af37]/10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-0.5 bg-[#d4af37]" />
            <h3 className="text-xl font-serif font-bold text-[#0a0a0a] uppercase tracking-wider">
              Key Benefits
            </h3>
            <div className="flex-1 h-0.5 bg-gray-100" />
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {data.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <div className="w-6 h-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <svg className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-gray-700 text-[15px] leading-relaxed font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ─── Feature Cards ─── */}
      <div className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-0.5 bg-[#d4af37]" />
          <h3 className="text-xl font-serif font-bold text-[#0a0a0a] uppercase tracking-wider">
            Key Offerings
          </h3>
          <div className="flex-1 h-0.5 bg-gray-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.features.map((f, idx) => (
            <div
              key={f.id}
              className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top gradient bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#d4af37] to-[#f5d98c]" />
              <div className="p-7">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white">
                  {getFeatureIcon(f.title)}
                </div>


                <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#0a0a0a] mb-3">
                  {f.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>


              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CTA Banner ─── */}
      {/* <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#1a0a00] to-[#2a1000] p-10 text-white text-center shadow-2xl">
    
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-[3px] mb-4">
            <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
            Ready to Scale?
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
            Turn Your Vision Into Reality
          </h3>
          <p className="text-white/60 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            With expert guidance, strategic planning, and seamless execution — Yenom Market ensures your fundraising journey is smooth, efficient, and result-driven.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c49b27] text-white font-bold uppercase tracking-widest text-sm px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/40 hover:shadow-xl"
            >
              Start Your Journey
            </Link>
            <Link
              href="/services/fund-raising"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-bold uppercase tracking-widest text-sm px-8 py-3.5 rounded-lg transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default ServiceContent;
