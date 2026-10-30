import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Award,
  Users,
  Zap,
  Globe2,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import CTASection from "@/components/home/CTASection";
import DynamicIcon from "@/components/common/DynamicIcon";
import {
  COMPANY_INFO,
  CORE_VALUES,
  CAPABILITIES,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "About Us & Engineering Mission | HIT India",
  description:
    "Learn Air powervision India: a team of 5 engineers advancing 24*7*365 continuous clean energy. Successfully implemented 2MW wind plant in Pune, Maharashtra.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Air powervision India"
        breadcrumbLabel="About Us"
        title="Power is Foundation — Engineering Continuous 24*7*365 Clean Energy"
        subtitle="Power is the underpinning of modern life, the spark that sets progress in motion, moving the world forward."
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle
                badge="Who We Are"
                title="A Team of 5 Engineers Harnessing Pure Renewable Energy"
                subtitle="Dedicated to solving the major limitation of intermittent power generation."
              />

              <div className="space-y-4 text-body leading-relaxed text-base">
                <p>
                  We are a specialized team of <strong>5 engineers</strong> working on the harnessing of renewable energy sources. Our primary focus is to overcome the major disadvantage of discontinuity in power generation from hydroelectric and wind power, enabling the generation of electrical energy <strong>24*7*365 days</strong>.
                </p>
                <p>
                  Our organization&apos;s main aim is to move the world toward <strong>Clean and Green energy</strong>. Unlike conventional systems that halt when wind speed drops or rivers run dry, our proprietary fluid-dynamic and closed-loop hydraulic head solutions deliver reliable baseline power around the clock.
                </p>
                <p>
                  We have already proven this execution capability on the ground by <strong>successfully implementing an operational 2MW wind power plant in Pune, Maharashtra</strong>.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-surface p-4 rounded-xl border border-slate-200/80">
                  <span className="block text-2xl font-black text-navy-900">
                    5
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Core Energy Engineers
                  </span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-slate-200/80">
                  <span className="block text-2xl font-black text-steel-600">
                    2.0 MW
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Implemented in Pune
                  </span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                  <span className="block text-2xl font-black text-emerald-600">
                    24*7*365
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Continuous Power
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-navy-950 p-4">
                <div className="relative h-[320px] sm:h-[400px] w-full bg-navy-950 rounded-xl overflow-hidden">
                  <Image
                    src="/images/anthropogenic-windmill.jpg"
                    alt="Anthropogenic Windmill Special Purpose Machine diagram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>

                <div className="mt-4 p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs text-slate-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sky-400 uppercase tracking-wider text-[11px]">
                      Special Purpose Machine (SPM) Blueprint
                    </span>
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 text-[10px]">
                      PATENTED ARCHITECTURE
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    Artificially creating low pressure so air flows with high velocity in one direction, yielding uninterrupted 24*7*365 power.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-surface border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Strategic Vision"
            title="Aims and Objectives"
            subtitle="At HIT, we are advancing tenaciously, building up energy innovations without bounds and enhancing the power systems we rely upon today."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-steel-50 border border-steel-100 flex items-center justify-center text-steel-700 mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  Our Mission is to make <strong>1/2 of the world&apos;s power</strong> by using the cleanest and purest form of energy sources. We are committed to demonstrating that green energy can deliver reliable, non-stop baseline generation without relying on dirty fuels.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-steel-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Global Clean Transition Mandate</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 mb-6">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  Global Energy Commitment
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  The worldwide energy scene is advancing. Through our consistent organization with our clients, our pledge to convey capacity to individuals around the globe is one thing that will never show signs of change.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-sky-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Pledge to Convey Capacity Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Organizational Values"
            title="The Principles That Drive Our Work"
            subtitle="Grounding our decisions in accountability, technical accuracy, and safety."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-surface border border-slate-200/90 shadow-soft hover:border-steel-400/60 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-steel-700 flex items-center justify-center mb-5">
                  <DynamicIcon name={val.iconName} className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-navy-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-xs text-body leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-surface border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              badge="Engineering Focus"
              title="Core Engineering Competencies"
              subtitle="End-to-end technical competencies spanning early concept design to operational power quality audits."
              className="mb-0"
            />
            <Link
              href="/solutions"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-steel-600 hover:text-navy-900"
            >
              <span>Explore Anthro &amp; NeerGen Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-soft"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-steel-600 bg-steel-50 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-navy-900">
                    {cap.title}
                  </h4>
                </div>
                <p className="text-xs text-body leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-steel-100 text-steel-700 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex-1 text-sm text-body leading-relaxed">
              <h4 className="text-base font-bold text-navy-900 mb-1">
                Careers &amp; Student Engineering Trainees at Air Powervision India
              </h4>
              <p className="text-xs text-slate-600">
                We are an equal opportunity employer with a strong value system. We believe in hiring the best, and providing the best atmosphere for them to grow and contribute to our company&apos;s growth.
              </p>
            </div>
            <Link
              href="/careers"
              className="flex-shrink-0 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-steel-600 text-white text-xs font-semibold transition-colors"
            >
              Submit Resume / Google Form
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Collaborate With Air Powervision India"
        subtitle="Partner with our 5-engineer innovation team to deploy continuous 24*7*365 renewable power systems."
      />
    </>
  );
}

