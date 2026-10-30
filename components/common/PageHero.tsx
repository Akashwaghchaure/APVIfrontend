import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbLabel,
}: PageHeroProps) {
  return (
    <section className="relative bg-navy-950 py-16 lg:py-24 text-white overflow-hidden border-b border-navy-800">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-steel-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-sky-300 font-semibold">{breadcrumbLabel}</span>
        </nav>

        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-steel-900/90 border border-steel-700/80 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            {badge}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

