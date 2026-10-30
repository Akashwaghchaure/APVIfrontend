import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import Logo from "@/components/common/Logo";
import { COMPANY_INFO, NAV_ITEMS } from "@/data/site-content";
import { SOLUTIONS_DATA } from "@/data/solutions";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              {COMPANY_INFO.description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-navy-900 border border-navy-800 text-xs text-sky-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Power Generation &amp; Clean Energy Engineering
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions &amp; Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SOLUTIONS_DATA.map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions#${sol.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                    <span className="truncate">{sol.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-sky-400 hover:text-sky-300 text-xs font-semibold flex items-center gap-1 pt-1"
                >
                  <span>Explore Representative Studies</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters &amp; Inquiries
            </h3>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.generalEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.generalEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`tel:${COMPANY_INFO.contact.phonePrimary.replace(/\s+/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.contact.phonePrimary}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneSecondary.replace(/\s+/g, "")}`}
                    className="hover:text-slate-300 text-[11px] text-slate-400 transition-colors"
                  >
                    {COMPANY_INFO.contact.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>
                  {COMPANY_INFO.contact.operatingDays} |{" "}
                  {COMPANY_INFO.contact.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy-900 bg-navy-900/40 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300 font-semibold">Corporate Advisory: </strong>
            {COMPANY_INFO.disclaimer} All technical specifications and parameters are subject to site-specific verification.
          </p>
        </div>
      </div>

      <div className="bg-navy-950/90 py-5 border-t border-navy-900 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Corporate Registration: India</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Engineering Desk
            </Link>
            <span>•</span>
            <Link href="/solutions" className="hover:text-slate-300 transition-colors">
              Capabilities
            </Link>
            <span>•</span>
            <Link
              href="/admin"
              className="text-sky-400 hover:text-sky-300 font-medium transition-colors inline-flex items-center gap-1"
            >
              <span>Admin Panel</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

