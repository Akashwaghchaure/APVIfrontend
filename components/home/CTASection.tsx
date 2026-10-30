import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/site-content";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Let's Build a Better Energy Future",
  subtitle = "Whether you are evaluating a captive renewable installation, seeking to optimize industrial power factor, or modernizing medium-voltage switchgear, our engineering desk is ready to collaborate.",
}: CTASectionProps) {
  return (
    <section className="relative py-20 lg:py-24 bg-navy-900 text-white overflow-hidden border-t border-navy-800">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-steel-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-steel-800/90 text-sky-300 text-xs font-bold uppercase tracking-widest mb-4 border border-steel-700">
          Partner With Air Powervision India
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-steel-600 hover:bg-steel-500 text-white font-semibold text-base shadow-lg shadow-navy-950/50 hover:shadow-steel-500/30 transition-all duration-200 group"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-navy-950/70 hover:bg-navy-950 text-slate-200 hover:text-white border border-steel-700/80 font-semibold text-base transition-colors"
          >
            <span>Review Solutions</span>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-sky-400" />
            <span>Inquiries: {COMPANY_INFO.contact.inquiriesEmail}</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-sky-400" />
            <span>Direct Line: {COMPANY_INFO.contact.phonePrimary}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

