import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Building2,
  FileQuestion,
  ExternalLink,
  ShieldCheck,
  FileSpreadsheet,
  Send,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import ContactForm from "@/components/common/ContactForm";
import { COMPANY_INFO } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact Us & Google Form | Air Powervision India",
  description:
    "Get in touch with Air Powervision India at airpowervisionllp@gmail.com. Submit engineering inquiries, request continuous renewable feasibility, or access our official Google Form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Connect With Air Powervision"
        breadcrumbLabel="Contact"
        title="Get in Touch with Our Core Engineering Desk"
        subtitle="We invite industrial developers, plant managers, and clean infrastructure partners to consult with our 5-engineer innovation team."
      />

      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-sm font-bold text-navy-900 block">
                  Official Company Intake: airpowervisionllp@gmail.com
                </strong>
                <span className="text-xs text-slate-600">
                  Prefer submitting via Google Form? You can submit your requirements or resume directly into our company form.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={COMPANY_INFO.contact.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-steel-600 text-white text-xs font-bold transition-all shadow-sm"
              >
                <span>Open Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.generalEmail}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-steel-600" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-steel-600 block mb-1">
                  Inquiry Intake Desk
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                  Send Us an Engineering Inquiry
                </h2>
                <p className="mt-2 text-sm text-body">
                  Fill in your project requirements below. Your inquiry is recorded directly in our backend and dispatched to our engineering team at <strong className="text-navy-900">{COMPANY_INFO.contact.inquiriesEmail}</strong>.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-bold text-navy-900 border-b border-slate-100 pb-3">
                  Official Communication Channels
                </h3>

                <div className="space-y-5 text-sm text-body">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-steel-600" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-0.5">
                        Official Company Email
                      </strong>
                      <p className="text-xs text-slate-600">
                        Email:{" "}
                        <a
                          href={`mailto:${COMPANY_INFO.contact.generalEmail}`}
                          className="text-steel-600 hover:underline font-bold text-sm block mt-0.5"
                        >
                          {COMPANY_INFO.contact.generalEmail}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-steel-600" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-0.5">
                        Direct Phone Lines
                      </strong>
                      <p className="text-xs text-slate-600">
                        Primary:{" "}
                        <a
                          href={`tel:${COMPANY_INFO.contact.phonePrimary.replace(/\s+/g, "")}`}
                          className="text-steel-600 hover:underline font-medium"
                        >
                          {COMPANY_INFO.contact.phonePrimary}
                        </a>
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Engineering Desk:{" "}
                        <span className="text-slate-600">
                          {COMPANY_INFO.contact.phoneSecondary}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-steel-600" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-0.5">
                        Registered Office &amp; Engineering Center
                      </strong>
                      <p className="text-xs leading-relaxed text-slate-600">
                        {COMPANY_INFO.address.full}
                      </p>
                      <span className="text-[11px] text-emerald-600 font-semibold block mt-1">
                        Operational 2MW Wind Plant Location: Pune, Maharashtra
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-steel-50 text-steel-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-steel-600" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-0.5">
                        Operating Schedule
                      </strong>
                      <p className="text-xs text-slate-600">
                        {COMPANY_INFO.contact.operatingDays}
                      </p>
                      <p className="text-xs text-slate-600">
                        {COMPANY_INFO.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-steel-50/70 rounded-2xl border border-steel-200/80 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileQuestion className="w-5 h-5 text-steel-700" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Product Sizing Information to Prepare
                  </h4>
                </div>
                <p className="text-xs text-body leading-relaxed mb-3">
                  To assist our engineers in evaluating whether Anthro windmill or NeerGen hydro is optimal for your site:
                </p>
                <ul className="text-xs space-y-1.5 text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-500" />
                    Estimated electrical base-load (0.1MW, 0.5MW, or 1MW+)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-500" />
                    Available ground footprint or rooftop mounting area
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-500" />
                    Available water reservoir or current pumping infrastructure (for NeerGen)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-500" />
                    Current utility tariff and grid interconnection voltage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

