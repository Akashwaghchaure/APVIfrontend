import React from "react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/common/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-surface border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionTitle
            badge="Representative Portfolio"
            title="Featured Engineering Concept Profiles"
            subtitle="Illustrative project designs highlighting our planned multi-domain power engineering capabilities."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-steel-600 text-sm font-bold text-navy-900 hover:text-steel-600 transition-all shadow-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-steel-500" />
            </Link>
          </div>
        </div>

        <div className="mb-8 p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 flex items-center gap-2.5">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            <strong>Placeholder Notice:</strong> The case profiles below represent conceptual engineering topologies. Official completed client projects and verified performance metrics will be published following mutual client consent.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

