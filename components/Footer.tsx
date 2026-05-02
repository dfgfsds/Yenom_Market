"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* CTA BANNER */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lone-1.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-[#d4af37] text-sm font-bold uppercase tracking-widest">
              Ready to Get Funded?
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
              Let&apos;s Build Your Financial <br className="hidden md:block" /> Future Together
            </h3>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-[#d4af37] hover:bg-[#b08d2b] text-white px-10 py-4 font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER & BOTTOM BAR WITH BACKGROUND */}
      <div className="relative border-t border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/Banner-1.png"
            alt="Footer Background"
            fill
            className="object-cover "
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* COL 1: LOGO + ABOUT */}
            <div className="flex flex-col gap-6 md:col-span-1">
              <div className="bg-white p-3 rounded-lg w-fit shadow-md">
                <Image src="/logo-new-1.png" alt="Yenom Market" width={175} height={72} className="object-contain" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yenom Market is a leading financial services company specializing in business loans, private finance, MSME funding, and more.
              </p>

            </div>


            {/* COL 2: QUICK LINKS */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-[#d4af37]/30 pb-3">
                Quick Links
              </h4>
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Career", href: "/career" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#d4af37] text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-[#d4af37] inline-block transition-all group-hover:w-5" />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* COL 3: SERVICES */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-[#d4af37]/30 pb-3">
                Our Services
              </h4>
              {[
                { name: "Fund Raising in Bank and NBFC", href: "/services/fund-raising" },
                { name: "Consortium banking & Multiple banking", href: "/services/consortium-banking" },
                { name: "M & A Advisory Solutions", href: "/services/ma-advisory" },
                { name: "Bridge Funding", href: "/services/bridge-funding" },
                { name: "SME Listings", href: "/services/sme-listings" },
                { name: "Sick Industries Revival and Restructuring", href: "/services/revival" },
                { name: "Private Finance", href: "/services/private-finance" },
                { name: "IPO Advisory Services", href: "/services/ipo-advisory" },
                { name: "CIBIL", href: "/services/cibil" },
              ].map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="text-gray-400 hover:text-[#d4af37] text-sm transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-[#d4af37] inline-block transition-all group-hover:w-5" />
                  {s.name}
                </Link>
              ))}
            </div>

            {/* COL 4: CONTACT */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-[#d4af37]/30 pb-3">
                Contact Info
              </h4>
              {[
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  text: "No: 3, Swaminathan Street, West Mambalam Chennai-600033",
                },
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  text: "+917871800777",
                },
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  text: "info@yenommarket.com",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg className="w-4 h-4 mt-0.5 text-[#d4af37] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 px-6 py-6 text-center text-gray-200 text-xs">
            © {year} Yenom Market. All Rights Reserved. Developed by <Link href="https://ftdigitalsolutions.in" target="_blank" rel="noopener noreferrer" className="text-[#d4af37]  hover:text-[#b08d2b] transition-colors">FT Digital Solutions</Link>.
          </div>
        </div>
      </div>

      {/* WHATSAPP FLOAT ICON */}
      <a
        href="https://wa.me/917871800777"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[9999] bg-[#068937] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute left-16 bg-[#0a0a0a] text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
      <ScrollToTop />
    </footer>
  );
};

const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false });

export default Footer;
