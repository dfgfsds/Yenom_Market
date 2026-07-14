"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.yenommarket.com/lead/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ full_name: "", phone_number: "", service: "", message: "" });
        setTimeout(() => {
          close();
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Show after 5 seconds (5,000 ms) for quick verification
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 10);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center px-4 transition-all duration-500 ${isVisible ? "bg-black/60 backdrop-blur-sm" : "bg-transparent backdrop-blur-0"
        }`}
    >
      <div
        className={`bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-500 transform relative ${isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"
          }`}
      >
        {/* GLOBAL CLOSE BUTTON */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-[10001] text-white md:text-gray-400 bg-black/20 md:bg-transparent p-2 rounded-full md:p-0 hover:scale-110 transition-transform"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT SIDE: BANNER */}
        <div className="md:w-[50%] relative bg-[#0a0a0a] p-8 flex flex-col justify-end min-h-[250px]">
          <Image
            src="/herosction1.webp"
            alt="Banner"
            fill
            className="object-cover opacity-40"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col gap-4">
            <Image src="/logo-new-1.png" alt="Logo" width={120} height={45} className="object-contain mb-2 " />
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
              Yenom Market <br /> Financial Advisory
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Expert guidance for your business growth and financial stability.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="md:w-[50%] p-6 md:p-6 relative bg-white">

          <h2 className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-4 pr-8 leading-tight">
            Get Expert Loan Assistance
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all text-sm text-gray-700 bg-gray-50/50"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all text-sm text-gray-700 bg-gray-50/50"
              />
            </div>
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all text-sm text-gray-700 bg-gray-50/50 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_1rem_center] bg-no-repeat"
              >
                <option value="">Select a Service</option>
                <option value="Fund Raising">Fund Raising</option>
                <option value="Bridge Funding">Bridge Funding</option>
                <option value="Private Finance">Private Finance</option>
                <option value="MSME Loans">MSME Loans</option>
                <option value="IPO Advisory">IPO Advisory</option>
                <option value="CIBIL Consulting">CIBIL Consulting</option>
              </select>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={2}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all text-sm text-gray-700 bg-gray-50/50 resize-none"
              />
            </div>

            {submitStatus === "success" && (
              <p className="text-green-600 text-sm text-center font-medium">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 text-sm text-center font-medium">Failed to send message. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#f2c94c] hover:bg-[#056b2b] text-gray-800 py-3 rounded-lg font-bold text-base shadow-lg shadow-green-900/10 transition-all active:scale-[0.98] ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-400">
            By submitting, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
