"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Ticker from "./Ticker";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* TOP BANNER */}
      <div className="bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a] text-[#d4af37] py-1.5 px-6 text-center text-xs sm:text-sm font-bold tracking-wide shadow-sm">
        Yenom – Formerly known as <span className="text-gray-100 text-[12px] sm:text-[15px] underline animate-blink">Money Market</span>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-new-1.png"
            alt="Yenom Market Logo"
            width={175}
            height={72}
            className="w-auto h-14 sm:h-[80px] object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium text-gray-700">
          <Link href="/" className={`relative group py-2 transition-colors ${pathname === "/" ? "text-[#d4af37]" : "hover:text-[#d4af37]"}`}>
            Home
            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>

          <Link href="/about" className={`relative group py-2 transition-colors ${pathname === "/about" ? "text-[#d4af37]" : "hover:text-[#d4af37]"}`}>
            About Us
            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>

          <div
            className="py-2 flex items-center gap-1 cursor-pointer transition-colors"
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          >
            <span className={`relative ${pathname.startsWith("/services") ? "text-[#d4af37]" : "hover:text-[#d4af37]"}`}>
              Services
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${pathname.startsWith("/services") || isMegaMenuOpen ? "w-full" : "w-0 group-hover:w-full"}`}></span>
            </span>
            <svg className={`w-4 h-4 mt-[1px] transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} fill="none" stroke="#d4a017" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" />
            </svg>

            {/* MEGA MENU */}
            {isMegaMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMegaMenuOpen(false);
                  }}
                />
                <div
                  className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-2 border-[#d4af37] z-50 animate-in fade-in slide-in-from-top-2 duration-300 cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-6">
                      <Link href="/services/fund-raising" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/fund-raising" ? "bg-[#d4a017] text-white" : "bg-[#d4a017]/10 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/fund-raising" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v14.25A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75V19.5" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6m-6 4h6m-6 4h3" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/fund-raising" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>Fund Raising in Bank and NBFC</span>
                      </Link>
                      <Link href="/services/consortium-banking" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/consortium-banking" ? "bg-[#d4a017] text-white" : "bg-red-50 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/consortium-banking" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/consortium-banking" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>Consortium banking & Multiple banking</span>
                      </Link>
                      <Link href="/services/ma-advisory" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/ma-advisory" ? "bg-[#d4a017] text-white" : "bg-red-50 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/ma-advisory" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/ma-advisory" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>M & A Advisory Solutions</span>
                      </Link>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="flex flex-col gap-6">
                      <Link href="/services/bridge-funding" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/bridge-funding" ? "bg-[#d4a017] text-white" : "bg-red-50 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/bridge-funding" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/bridge-funding" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>Bridge Funding</span>
                      </Link>
                      <Link href="/services/sme-listings" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/sme-listings" ? "bg-[#d4a017] text-white" : "bg-red-50 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/sme-listings" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/sme-listings" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>SME Listings</span>
                      </Link>
                      <Link href="/services/revival" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/revival" ? "bg-[#d4a017] text-white" : "bg-red-50 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/revival" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125zm0 0a6.002 6.002 0 00-4.717-5.837m5.66 1.047a5.963 5.963 0 00-3.333-1.304m-3.333 4.017a6.002 6.002 0 01-4.717-5.837m-5.66 1.047a5.963 5.963 0 013.333-1.304m0 5.816a5.974 5.974 0 012.251-1.304m0 0a5.964 5.964 0 003.333-1.304m-3.333 1.304a5.974 5.974 0 002.251-1.304" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/revival" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>Sick Industries Revival and Restructuring</span>
                      </Link>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="flex flex-col gap-6">
                      <Link href="/services/private-finance" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/private-finance" ? "bg-[#d4a017] text-white" : "bg-red-50 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/private-finance" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/private-finance" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>Private Finance</span>
                      </Link>
                      <Link href="/services/ipo-advisory" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/ipo-advisory" ? "bg-[#d4a017] text-white" : "bg-red-50 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/ipo-advisory" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/ipo-advisory" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>IPO Advisory Services</span>
                      </Link>
                      <Link href="/services/cibil" onClick={() => setIsMegaMenuOpen(false)} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center transition-colors ${pathname === "/services/cibil" ? "bg-[#d4a017] text-white" : "bg-red-50 text-red-700"}`}>
                          <svg className={`w-6 h-6 ${pathname === "/services/cibil" ? "stroke-white" : "stroke-[#d4a017]"}`} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.548 4.075 10.588 9 12.132 4.925-1.544 9-6.584 9-12.132 0-1.327-.253-2.597-.715-3.756A12.014 12.014 0 0112 2.714z" />
                          </svg>
                        </div>
                        <span className={`text-base font-bold transition-colors ${pathname === "/services/cibil" ? "text-[#d4af37]" : "text-[#0a0a0a] group-hover/item:text-[#d4a017]"}`}>CIBIL</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <Link href="/career" className={`relative group py-2 transition-colors ${pathname === "/career" ? "text-[#d4af37]" : "hover:text-[#d4af37]"}`}>
            Career
            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${pathname === "/career" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>

          <Link href="/contact" className={`relative group py-2 transition-colors ${pathname === "/contact" ? "text-[#d4af37]" : "hover:text-[#d4af37]"}`}>
            Contact
            <span className={`absolute bottom-0 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
        </nav>

        {/* RIGHT BUTTON (DESKTOP) */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#d4a017] via-[#d4a017] to-[#f2c94c]  text-white px-5 py-2 rounded-md font-medium hover:from-[#d4af37] hover:to-[#f2c94c] transition-all shadow-[0_0_20px_rgba(212,160,23,0.2)]">
            Let’s Talk
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="#d4a017"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Container */}
        <div className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="font-serif font-bold text-lg text-[#0a0a0a]">YENOM MARKET</span>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
              <Link href="/" onClick={() => setIsOpen(false)} className={`block text-lg transition-colors ${pathname === "/" ? "text-[#d4af37] font-bold" : "text-gray-700 font-medium"}`}>
                Home
              </Link>

              <Link href="/about" onClick={() => setIsOpen(false)} className={`block text-lg transition-colors ${pathname === "/about" ? "text-[#d4af37] font-bold" : "text-gray-700 font-medium"}`}>
                About Us
              </Link>

              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center justify-between w-full text-lg transition-colors ${pathname.startsWith("/services") ? "text-[#d4af37] font-bold" : "text-gray-700 font-medium"}`}
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="#d4a017" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-4 ml-2 flex flex-col gap-4 border-l-2 border-[#d4af37]/10 pl-4 animate-in slide-in-from-top-2 duration-300">
                    {[
                      { name: "Fund Raising in Bank and NBFC", slug: "fund-raising" },
                      { name: "Consortium banking & Multiple banking", slug: "consortium-banking" },
                      { name: "M & A Advisory Solutions", slug: "ma-advisory" },
                      { name: "Bridge Funding", slug: "bridge-funding" },
                      { name: "SME Listings", slug: "sme-listings" },
                      { name: "Sick Industries Revival and Restructuring", slug: "revival" },
                      { name: "Private Finance", slug: "private-finance" },
                      { name: "IPO Advisory Services", slug: "ipo-advisory" },
                      { name: "CIBIL", slug: "cibil" }
                    ].map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setIsOpen(false)}
                        className={`text-sm transition-colors ${pathname === `/services/${s.slug}` ? "text-[#d4af37] font-bold" : "text-gray-600 hover:text-[#d4af37]"}`}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/career" onClick={() => setIsOpen(false)} className={`block text-lg transition-colors ${pathname === "/career" ? "text-[#d4af37] font-bold" : "text-gray-700 font-medium"}`}>
                Career
              </Link>

              <Link href="/contact" onClick={() => setIsOpen(false)} className={`block text-lg font-bold transition-colors ${pathname === "/contact" ? "text-[#d4af37] font-bold" : "text-gray-600 hover:text-[#d4af37]"}`}>
                Contact
              </Link>
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-gray-100">
              <Link href="tel:+917871800777" className="w-full bg-[#d4af37] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#d4af37]/20 active:scale-95 transition-all">
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <Ticker />
    </header>
  );
}
