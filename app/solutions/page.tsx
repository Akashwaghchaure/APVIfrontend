import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  FileCheck2,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import CTASection from "@/components/home/CTASection";
import DynamicIcon from "@/components/common/DynamicIcon";
import { SOLUTIONS_DATA } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Continuous Renewable Technologies & Products | HIT India",
  description:
    "Explore HIT India's proprietary Anthropogenic Windmill (Anthro-0.1MW, 0.5MW, 1MW) and NeerGen Hydroelectric generation technologies delivering 24*7*365 continuous clean energy.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Proprietary Technology &amp; Products"
        breadcrumbLabel="Products &amp; Tech"
        title="24*7*365 Continuous Clean &amp; Green Energy Technologies"
        subtitle="Overcoming the discontinuity in wind and hydro power generation to deliver predictable, non-stop electricity 365 days a year."
      />

      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-steel-700">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Mission: Make 1/2 of the World&apos;s Power from Clean Sources</span>
              </div>
              <p className="text-sm text-body leading-relaxed">
                By engineering low-pressure airflow acceleration (Anthropogenic Windmills) and closed-loop hydraulic head optimization (NeerGen Hydro), our 5-engineer team transforms intermittent renewables into dependable 24/7/365 industrial base-load generation.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-steel-600 text-white text-xs font-semibold transition-colors"
            >
              <span>Consult with Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SOLUTIONS_DATA.map((solution, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={solution.id}
                id={solution.slug}
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-5 relative min-h-[340px] lg:min-h-full bg-navy-950 flex flex-col justify-between p-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={solution.imageUrl}
                      alt={solution.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-contain p-4 bg-navy-950"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      <span className="inline-block bg-navy-900/90 text-white backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded border border-white/20 uppercase tracking-wider">
                        {solution.category}
                      </span>
                    </div>

                    <div className="relative z-10 text-white mt-auto pt-16">
                      <div className="w-12 h-12 rounded-xl bg-white/95 text-steel-700 flex items-center justify-center mb-3 shadow-lg">
                        <DynamicIcon
                          name={solution.iconName}
                          className="w-6 h-6"
                        />
                      </div>
                      <span className="text-xs text-slate-300 block">
                        Architecture: {solution.id}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-steel-600 uppercase tracking-widest block mb-2">
                        Pioneered by HIT India • 24*7*365 Clean Power
                      </span>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4">
                        {solution.title}
                      </h2>

                      <p className="text-sm sm:text-base text-body leading-relaxed mb-6">
                        {solution.fullDescription}
                      </p>

                      {solution.productModels && (
                        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                            <Zap className="w-4 h-4 text-steel-600" />
                            <span>Standard Commercial Product Capacities:</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {solution.productModels.map((pm, pmIdx) => (
                              <div
                                key={pmIdx}
                                className="bg-white p-3 rounded-lg border border-slate-200 text-xs shadow-sm"
                              >
                                <span className="block font-mono font-bold text-sm text-navy-900">
                                  {pm.model}
                                </span>
                                <span className="block font-semibold text-emerald-600 text-[11px] mt-0.5">
                                  {pm.powerOutput}
                                </span>
                                <span className="block text-[10px] text-slate-500 mt-1 leading-tight">
                                  {pm.idealFor}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-steel-600" />
                            <span>Core Advantages</span>
                          </h3>
                          <ul className="space-y-2">
                            {solution.keyBenefits.map((benefit, bIdx) => (
                              <li
                                key={bIdx}
                                className="text-xs text-body flex items-start gap-2"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-steel-500 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                            <FileCheck2 className="w-4 h-4 text-steel-600" />
                            <span>Engineering Scope</span>
                          </h3>
                          <ul className="space-y-2">
                            {solution.scopeOfWork.map((scope, sIdx) => (
                              <li
                                key={sIdx}
                                className="text-xs text-body flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-steel-400 flex-shrink-0 mt-1.5" />
                                <span>{scope}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                          Deployment Sectors:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {solution.applications.map((app, aIdx) => (
                            <span
                              key={aIdx}
                              className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium border border-slate-200"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <span className="text-xs text-slate-400 italic">
                        {solution.note}
                      </span>
                      <Link
                        href={`/contact`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-steel-600 text-white text-xs font-semibold transition-colors"
                      >
                        <span>Inquire About {solution.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Deploy 24*7*365 Clean Power at Your Facility"
        subtitle="Speak with our 5-engineer innovation team to evaluate Anthro windmill sizing, NeerGen hydro closed-loops, or utility grid tie-in."
      />
    </>
  );
}

