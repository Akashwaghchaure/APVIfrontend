import React from "react";
import Image from "next/image";
import { MapPin, Info, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        <div className="relative h-60 w-full overflow-hidden bg-navy-950">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

          <div className="absolute top-3 left-3">
            <span className="inline-block bg-white/95 text-navy-900 text-xs font-semibold px-2.5 py-1 rounded shadow-sm border border-slate-200">
              {project.category}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 bg-amber-500/95 text-navy-950 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
              <Info className="w-3 h-3" />
              Placeholder Profile
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center text-xs text-white/95 font-medium drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-sky-400 mr-1.5 flex-shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-navy-900 group-hover:text-steel-600 transition-colors">
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-body leading-relaxed">
            {project.description}
          </p>

          {project.scopeHighlights && project.scopeHighlights.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Engineering Highlights:
              </span>
              <ul className="space-y-1">
                {project.scopeHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-slate-600 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-500 flex-shrink-0" />
                    <span className="truncate">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <div className="bg-surface p-2.5 rounded-lg border border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
          <span className="italic">Representative concept study</span>
          <span className="font-semibold text-steel-700 flex items-center gap-0.5">
            Spec Model <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

