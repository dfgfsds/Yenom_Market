"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 1000, suffix: "+", label: "Loans Approved" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

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

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="text-4xl md:text-5xl font-bold text-[#d4af37] ">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/70 uppercase tracking-widest font-medium text-center">
        {label}
      </div>
    </div>
  );
}

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0a0a0a] py-16 px-6 border-t border-[#d4af37]/20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center divide-x divide-white/10">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} start={started} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
