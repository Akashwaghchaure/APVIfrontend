import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import SolutionCard from "@/components/common/SolutionCard";
import { SOLUTIONS_DATA } from "@/data/solutions";

export default function SolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionTitle
            badge="Draft Solution Categories"
            title="Core Energy &amp; Engineering Solutions"
            subtitle="Configurable technical capabilities designed to support continuous, clean, and optimized industrial power."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold text-steel-600 hover:text-navy-900 group"
            >
              <span>View All Practice Areas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS_DATA.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} detailed={false} />
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-4 border border-slate-200 flex items-center justify-between flex-wrap gap-4 text-xs text-body">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-steel-500 flex-shrink-0" />
            <span>
              <strong>Note on Service Categories:</strong> These four practice areas represent our primary engineering domains. Detailed scopes and capacities are customized to verified client mandates.
            </span>
          </div>

          <Link
            href="/contact"
            className="text-steel-600 hover:text-navy-900 font-semibold underline underline-offset-4"
          >
            Inquire About Custom Engineering
          </Link>
        </div>
      </div>
    </section>
  );
}

