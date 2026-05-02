"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceHeroProps {
  title: string;
  backgroundImage?: string;
}

const ServiceHero = ({ title, backgroundImage }: ServiceHeroProps) => {
  return (
    <section className="relative w-full h-[250px] md:h-[400px] overflow-hidden bg-gray-900">
      {/* Background image using CSS for maximum mobile compatibility */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: `url("/img-2.jpeg")`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />



      {/* Centered content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center px-6"
      >
        <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">{title}</h1>
        <nav className="flex items-center justify-center gap-2 text-sm text-white/80">

          <Link href="/" className="hover:text-[#d4af37] transition-colors">
            Yenommarket
          </Link>
          <svg className="w-3 h-3 text-white/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span className="text-[#d4af37] font-semibold">{title}</span>
        </nav>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
