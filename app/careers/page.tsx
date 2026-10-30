import React from "react";
import type { Metadata } from "next";
import {
  Users,
  Award,
  Zap,
  Leaf,
  FileCheck2,
  Mail,
  ExternalLink,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";
import CTASection from "@/components/home/CTASection";
import { COMPANY_INFO } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Careers & Student Trainee Intake | HIT India",
  description:
    "Explore career and internship opportunities at HIT India. Equal opportunity employer hiring talented engineers to build continuous 24*7*365 renewable energy systems.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers at HIT India"
        breadcrumbLabel="Careers"
        title="Build the Future of 24*7*365 Continuous Clean Energy"
        subtitle="We believe in hiring the best, and providing the best atmosphere for them to grow and contribute to our company's growth."
      />

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Equal Opportunity Employer
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
                Empowering Engineers to Pioneer Breakthrough Energy Solutions
              </h2>

              <p className="text-body text-base leading-relaxed">
                Thank you for your interest in <strong>HIT India</strong>. We are an equal opportunity employer with a strong value system. We believe in hiring the best, and providing the best atmosphere for them to grow and contribute to our company&apos;s growth.
              </p>

              <p className="text-body text-sm leading-relaxed text-slate-600">
                Founded by a core team of 5 engineers, our mission is to make 1/2 of the world&apos;s power by harnessing continuous renewable energy without the drawbacks of intermittent weather dependency. From Anthropogenic Windmills to closed-loop NeerGen hydro, our engineers work at the bleeding edge of thermodynamics and machine design.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-3.5 bg-surface rounded-xl border border-slate-200">
                  <span className="block font-black text-xl text-navy-900">5</span>
                  <span className="text-xs text-slate-500 font-semibold">Specialized Engineers</span>
                </div>
                <div className="p-3.5 bg-surface rounded-xl border border-slate-200">
                  <span className="block font-black text-xl text-steel-600">2 MW</span>
                  <span className="text-xs text-slate-500 font-semibold">Proven Pune Plant</span>
                </div>
                <div className="p-3.5 bg-surface rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                  <span className="block font-black text-xl text-emerald-600">24/7/365</span>
                  <span className="text-xs text-slate-500 font-semibold">Non-Stop Energy Focus</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-950 text-white rounded-2xl p-8 border border-navy-800 space-y-6 shadow-card">
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-sky-400" />
                <span>Official Careers Channel</span>
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Students, researchers, and professional engineers can submit their resumes either through the application form below or directly to our official company inbox:
              </p>

              <div className="p-4 bg-navy-900 rounded-xl border border-navy-800 text-center">
                <span className="text-[11px] text-slate-400 uppercase tracking-widest block mb-1">
                  Direct Inquiries &amp; Resumes
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.contact.careersEmail}`}
                  className="text-lg font-bold text-sky-400 hover:text-sky-300 tracking-wider transition-colors"
                >
                  {COMPANY_INFO.contact.careersEmail}
                </a>
              </div>

              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Transparent merit-based technical evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Hands-on prototype R&amp;D and field plant exposure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Equal opportunity workplace committed to innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Candidate Intake"
            title="Submit Your Resume / Profile"
            subtitle="Whether you are an engineering student seeking your final-year project/internship or an experienced power systems professional, we look forward to hearing from you."
            align="center"
          />

          <CareerApplicationForm />
        </div>
      </section>

      <CTASection
        title="Ready to Build Clean & Green Power With Us?"
        subtitle="Connect with HIT India today to discover active project mandates, collaborative research, and industrial internships."
      />
    </>
  );
}

