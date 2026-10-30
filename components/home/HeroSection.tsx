import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/site-content";

export default function HeroSection() {
  return (
    <section className="relative min-h-[640px] lg:min-h-[740px] flex items-center justify-center bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85"
          alt="High-voltage energy infrastructure and clean power systems"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />

        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Pioneering 24*7*365 Continuous Clean &amp; Green Energy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Powering Progress Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-steel-200">
              Smarter Energy Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            Overcoming the major discontinuity in hydroelectric and wind power to generate clean, green electricity 24 hours a day, 7 days a week, 365 days a year.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-steel-600 hover:bg-steel-500 text-white font-semibold text-base shadow-lg shadow-steel-900/50 hover:shadow-steel-600/30 transition-all duration-200 group"
            >
              <span>Explore Anthro &amp; NeerGen Tech</span>
              <ArrowRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 font-semibold text-base backdrop-blur-sm transition-all duration-200"
            >
              <span>View 2MW Pune Project</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800/80 border border-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="block font-bold text-white uppercase tracking-wider">
                  24*7*365
                </span>
                <span className="text-slate-400">Continuous Generation</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800/80 border border-white/10 flex items-center justify-center text-sky-400 flex-shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="block font-bold text-white uppercase tracking-wider">
                  2MW in Pune
                </span>
                <span className="text-slate-400">Proven Operational Plant</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800/80 border border-white/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="block font-bold text-white uppercase tracking-wider">
                  Anthro &amp; NeerGen
                </span>
                <span className="text-slate-400">Proprietary Products</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800/80 border border-white/10 flex items-center justify-center text-teal-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="block font-bold text-white uppercase tracking-wider">
                  5 Engineers
                </span>
                <span className="text-slate-400">Core Technical Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

