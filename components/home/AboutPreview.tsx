import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Target, CheckCircle2, Award, Users } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { COMPANY_INFO } from "@/data/site-content";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-navy-950 p-3 sm:p-4">
              <div className="relative h-[280px] sm:h-[360px] w-full bg-navy-950 rounded-xl overflow-hidden">
                <Image
                  src="/images/anthropogenic-windmill.jpg"
                  alt="Anthropogenic Windmill Special Purpose Machine schematic diagram"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-3 p-3.5 bg-navy-900/90 rounded-lg border border-navy-800 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 block tracking-wider">
                    Proprietary Machine Blueprint
                  </span>
                  <span className="font-semibold text-white">
                    Anthropogenic Windmill — Artificial Low Pressure Chamber
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  24*7*365
                </span>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-steel-200 rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-surface rounded-2xl -z-10 hidden sm:block" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              badge="Air powervision India"
              title="A Team of 5 Engineers Pioneering Continuous Green Power"
              subtitle="Overcoming the major discontinuity in hydroelectric and wind power to generate energy 24*7*365 days."
            />

            <div className="space-y-4 text-body text-base leading-relaxed">
              <p>
                <strong>Power is foundation.</strong> It is the underpinning of modern life, the spark that sets progress in motion, moving the world forward. At HIT, we are advancing tenaciously, building up energy innovations without bounds and enhancing the power systems we rely upon today.
              </p>
              <p className="text-sm text-body/90">
                Our organization&apos;s main aim is to move the world toward <strong>Clean and Green energy</strong>. We have already successfully implemented an operational <strong>2MW wind power plant in Pune, Maharashtra</strong>. Our mission is to make 1/2 of the world&apos;s power by using the cleanest and purest forms of energy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <Target className="w-4 h-4 text-steel-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Our Mission
                  </h4>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Make 1/2 of the world&apos;s power using the cleanest, purest, and continuous forms of energy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Proven in Pune
                  </h4>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  Successfully implemented an active <strong>2MW wind power plant</strong> in Pune, Maharashtra.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-steel-600 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface hover:bg-slate-100 text-navy-900 border border-slate-200 font-semibold text-sm transition-colors"
              >
                <Users className="w-4 h-4 text-steel-600" />
                <span>Careers &amp; Internships</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

