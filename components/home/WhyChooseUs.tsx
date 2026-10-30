import React from "react";
import {
  Wrench,
  ShieldCheck,
  Cpu,
  Users2,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { VALUE_PROPOSITIONS } from "@/data/site-content";

export default function WhyChooseUs() {
  const iconList = [Wrench, ShieldCheck, Cpu, Users2];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Value Proposition"
          title="Engineered for Performance and Dependability"
          subtitle="Our engineering philosophy centers on verified technical standards, resilient electrical architectures, and long-term client collaboration."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = iconList[idx % iconList.length];

            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-steel-400/60 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-steel-50 border border-steel-100/80 text-steel-700 flex items-center justify-center mb-6 group-hover:bg-steel-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-steel-600 transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-sm text-body leading-relaxed mb-4">
                    {prop.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-normal border-t border-slate-100 pt-3">
                    {prop.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-steel-700">
                    {prop.metric}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    {prop.metricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 max-w-3xl mx-auto p-4 rounded-xl bg-surface border border-slate-200/80 text-center text-xs text-body flex items-center justify-center gap-2.5">
          <ShieldAlert className="w-4 h-4 text-steel-600 flex-shrink-0" />
          <span>
            <strong>Standards Adherence:</strong> All proposed electrical and renewable configurations conform strictly with applicable Central Electricity Authority (CEA) guidelines and Indian Electricity Grid Codes.
          </span>
        </div>
      </div>
    </section>
  );
}

