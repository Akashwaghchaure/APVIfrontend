import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/common/PageHero";
import CTASection from "@/components/home/CTASection";
import ProjectsPortfolio from "@/components/projects/ProjectsPortfolio";

export const metadata: Metadata = {
  title: "Representative Projects & Studies | Engineering Architecture",
  description:
    "Review representative engineering case studies, conceptual layouts, and feasibility topologies for Air Powervision India.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        badge="Representative Case Studies"
        breadcrumbLabel="Projects"
        title="Conceptual Projects &amp; Engineering Studies"
        subtitle="Explore sample system layouts, captive power installations, and substation topologies engineered for industrial performance."
      />

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsPortfolio />
        </div>
      </section>

      <CTASection
        title="Have a Specific Project in Mind?"
        subtitle="Let our engineering team assess your technical requirements, load constraints, and grid connectivity feasibility."
      />
    </>
  );
}

