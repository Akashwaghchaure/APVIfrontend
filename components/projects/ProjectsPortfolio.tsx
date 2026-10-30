"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/common/ProjectCard";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";
import { Info, Filter } from "lucide-react";

const CATEGORIES = [
  "All Categories",
  "Renewable Energy",
  "Power Generation",
  "Infrastructure",
  "Engineering Solutions",
] as const;

export default function ProjectsPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

  const filteredProjects =
    selectedCategory === "All Categories"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <div className="space-y-10">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900 leading-relaxed">
          <strong className="font-semibold block mb-0.5">
            Representative Engineering Profiles
          </strong>
          To uphold corporate accuracy, the installations below are model configurations and representative feasibility studies. Client-specific installations, site names, and proprietary telemetry will be published following standard non-disclosure clearances.
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 pb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900 uppercase tracking-wider mr-2 hidden sm:flex">
          <Filter className="w-3.5 h-3.5 text-steel-600" />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-navy-900 text-white shadow-sm"
                  : "bg-white text-navy-900 border border-slate-200 hover:border-steel-400 hover:bg-slate-50"
              }`}
            >
              {category}
              <span
                className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-steel-700 text-slate-100"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {category === "All Categories"
                  ? PROJECTS_DATA.length
                  : PROJECTS_DATA.filter((p) => p.category === category).length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8">
          <p className="text-sm text-slate-500">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

