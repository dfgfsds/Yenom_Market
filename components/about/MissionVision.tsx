"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: DECORATIVE IMAGE SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 lg:order-1 group"
        >
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#d4a017]/30 rounded-tl-3xl z-0" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#d4a017]/30 rounded-br-3xl z-0" />

          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl z-10">
            <Image
              src="/about/4.jpg"
              alt="Yenom Market Mission"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* RIGHT: TEXT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-3 order-2 lg:order-2"
        >
          <div>
            <div className="flex items-center border border-gray-200 px-3 py-2 gap-3 w-fit mb-6">
              <div className="w-2 h-2 bg-[#d4a017]" />
              <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Our Core Values</span>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* MISSION BLOCK */}
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl font-bold text-[#0a0a0a]">Our Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower businesses and individuals by providing innovative, tailored financial solutions that drive growth and success. We are committed to offering expert advice, strategic insights, and personalized services across a wide range of financial areas, including Mergers & Acquisitions, IPO advisory, private finance, and fund raising.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-2xl font-bold text-[#0a0a0a]">Our Vision</h4>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to become a trusted leader in providing innovative and sustainable financial solutions that empower businesses and individuals to reach their fullest potential. We aspire to be the go-to partner for clients seeking to navigate the complexities of the financial world, offering expert advice and tailored strategies that foster growth, security, and success in an ever-changing marketplace.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVision;
