"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const CareerForm = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "No file chosen");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="career-form" className="py-20 px-6 md:px-20 bg-[#f8f6f1]">
      <div className="max-w-3xl mx-auto">

        {/* Section label */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 mb-12 text-center"
        >
          <div className="flex items-center border border-gray-300 px-3 py-2 gap-3 w-fit">
            <div className="w-2 h-2 bg-[#d4a017]" />
            <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">
              Apply Now
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a0a0a]">
            Send Us Your Application
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-[#d4af37] rounded-sm p-12 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#0a0a0a] mb-3">Application Submitted!</h3>
            <p className="text-gray-600">Thank you for applying. Our team will review your application and get back to you shortly.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white shadow-xl border border-gray-100 p-8 md:p-10 flex flex-col gap-5"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                required
                className="border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#d4af37] transition-colors bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email address"
                required
                className="border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#d4af37] transition-colors bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 border border-gray-200 px-3 py-3 bg-gray-50 text-sm text-gray-600 flex-shrink-0">
                  <span>🇮🇳</span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="flex-1 border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#d4af37] transition-colors bg-gray-50 focus:bg-white"
                />
              </div>
            </div>

            {/* CV Upload */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Upload Your CV <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 text-sm font-medium transition-colors flex-shrink-0"
                >
                  Choose File
                </button>
                <span className="text-sm text-gray-500 truncate">{fileName}</span>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFile}
                  className="hidden"
                />
              </div>
              <p className="text-xs text-gray-400">Accepted: PDF, DOC, DOCX (max 5MB)</p>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Subject
              </label>
              <input
                type="text"
                placeholder="e.g. Application for Sales Executive"
                className="border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#d4af37] transition-colors bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Write Your Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about yourself and why you'd like to join Yenom Market..."
                className="border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#d4af37] transition-colors bg-gray-50 focus:bg-white resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-fit mt-2 bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#f2c94c] shadow-[0_0_20px_rgba(212,160,23,0.2)] hover:bg-[#0a0a0a] text-white px-10 py-3 font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default CareerForm;
