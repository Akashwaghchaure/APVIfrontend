import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import DynamicIcon from "./DynamicIcon";
import { SolutionItem } from "@/data/solutions";

interface SolutionCardProps {
  solution: SolutionItem;
  detailed?: boolean;
}

export default function SolutionCard({
  solution,
  detailed = false,
}: SolutionCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:border-steel-400/50">
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-navy-950">
        <Image
          src={solution.imageUrl}
          alt={solution.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-block bg-navy-900/90 text-white backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded border border-white/10 uppercase tracking-wider">
            {solution.category}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 w-12 h-12 rounded-lg bg-white/95 text-steel-700 flex items-center justify-center shadow-lg border border-slate-100 group-hover:bg-steel-600 group-hover:text-white transition-colors duration-300">
          <DynamicIcon name={solution.iconName} className="w-6 h-6" />
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-navy-900 group-hover:text-steel-600 transition-colors duration-200">
            {solution.title}
          </h3>

          <p className="mt-3 text-sm text-body leading-relaxed">
            {detailed ? solution.fullDescription : solution.shortDescription}
          </p>

          {solution.productModels && (
            <div className="mt-4 pt-3 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Standard Product Ratings:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {solution.productModels.map((pm, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono font-bold bg-steel-50 text-steel-700 px-2 py-0.5 rounded border border-steel-200"
                  >
                    {pm.model}
                  </span>
                ))}
              </div>
            </div>
          )}

          {detailed && (
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-5">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                  Key Advantages:
                </h4>
                <ul className="space-y-1.5">
                  {solution.keyBenefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-body flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-steel-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                  Target Applications:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {solution.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-surface text-steel-800 px-2 py-0.5 rounded border border-slate-200 font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/solutions#${solution.slug}`}
            className="inline-flex items-center text-sm font-semibold text-steel-600 hover:text-navy-900 gap-1.5 group-hover:gap-2.5 transition-all"
          >
            <span>Learn More &amp; Specs</span>
            <ArrowRight className="w-4 h-4 text-steel-500 group-hover:text-steel-600 transition-transform" />
          </Link>

          <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wide">
            24*7*365 Clean
          </span>
        </div>
      </div>
    </div>
  );
}

