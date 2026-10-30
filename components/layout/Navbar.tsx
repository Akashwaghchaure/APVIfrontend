"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import Logo from "@/components/common/Logo";
import { NAV_ITEMS, COMPANY_INFO } from "@/data/site-content";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              Engineering-Led Energy Infrastructure &amp; Power Generation
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">
              Official Hub: pune ,Maharashtra, India
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.contact.phonePrimary.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.contact.phonePrimary}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{COMPANY_INFO.contact.workingHours}</span>
          </div>
        </div>
      </div>

     
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200/80"
            : "bg-white py-4.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          
            <div className="flex-shrink-0">
              <Logo variant="dark" />
            </div>

          
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? "text-steel-600 bg-steel-50/70"
                        : "text-navy-900 hover:text-steel-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-steel-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

         
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-steel-600 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-steel-500 focus:ring-offset-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>
            </div>


            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-navy-900 hover:text-steel-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-steel-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

      
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-fadeIn">
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-steel-50 text-steel-700 font-bold border-l-4 border-steel-600"
                        : "text-navy-900 hover:bg-slate-50 hover:text-steel-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-100 px-2 space-y-3">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-navy-900 hover:bg-steel-600 shadow transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </Link>

                <div className="pt-2 text-xs text-slate-500 space-y-1">
                  <p>Inquiries: {COMPANY_INFO.contact.inquiriesEmail}</p>
                  <p>Direct: {COMPANY_INFO.contact.phonePrimary}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
