"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="relative py-24 px-6 md:px-20 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gray-100" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gray-100" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gray-100" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

        {/* LEFT COLUMN: CONTACT INFO (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-gray-200 px-3 py-2 gap-3 w-fit">
              <div className="w-2 h-2 bg-[#d4a017]" />
              <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Reach Out
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a0a0a] leading-tight">
              We&apos;re here to <br />
              <span className="text-[#d4af37]">Empower</span> your goals
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Have questions about our financial services? Our experts are standing by to provide the guidance you need.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {[
              {
                icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                title: "Visit Our Office",
                value: "No: 3, Swaminathan Street, West Mambalam, Chennai- 600033",
                delay: "delay-100"
              },
              {
                icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
                title: "Call Us Anytime",
                value: "+91 78718 00777",
                delay: "delay-200"
              },
              {
                icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
                title: "Email Correspondence",
                value: "info@yenommarket.com",
                delay: "delay-300"
              }
            ].map((item, i) => (
              <div key={i} className={`flex gap-6 group p-6 rounded-2xl transition-all duration-500 hover:bg-gray-50 border border-transparent hover:border-gray-200 ${item.delay}`}>
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-[#d4af37]/40 to-[#d4af37]/5 flex items-center justify-center text-[#d4af37] text-boldgit init group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-6 h-6 font-bold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-[#0a0a0a] font-bold text-lg tracking-tight">{item.title}</h4>
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-900 transition-colors">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: FORM (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="relative p-8 md:p-12 rounded-[2rem] bg-[#f8f6f1] border border-gray-200 shadow-xl overflow-hidden group">
            {/* Ambient light effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[80px] group-hover:bg-[#d4af37]/10 transition-all duration-700" />

            {submitted ? (
              <div className="py-20 text-center animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#b08d2b] rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#0a0a0a] mb-4">Transmission Received</h3>
                <p className="text-gray-600 text-lg max-w-sm mx-auto">Thank you for reaching out. A dedicated specialist will contact you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-[#d4af37] font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-[f8f6f1] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-[#000000] uppercase tracking-[0.2em]">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-[#000000]  uppercase tracking-[0.2em]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-[#000000]  uppercase tracking-[0.2em]">Subject</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 appearance-none focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/20 transition-all">
                    <option>General Enquiry</option>
                    <option>Business Loan</option>
                    <option>Bridge Funding</option>
                    <option>IPO Advisory</option>
                    <option>Private Finance</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-[#000000]  uppercase tracking-[0.2em]">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we assist you?"
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-fit bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#d4a017] shadow-[0_0_20px_rgba(212,160,23,0.2)] hover:from-[#e5c158] hover:to-[#d4af37] text-white px-10 py-3 rounded-sm font-semibold  tracking-[0.2em] text-sm md:text-[16px] transition-all hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* MAP SECTION: Stylized with light theme integration */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 md:mt-24 max-w-7xl mx-auto overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 shadow-xl relative group"
      >
        <div className="relative w-full h-[350px] md:h-[450px]">
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.8860302366597!2d80.21629717507773!3d13.042925787279032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzM0LjUiTiA4MMKwMTMnMDcuOSJF!5e0!3m2!1sen!2sin!4v1778130824986!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

