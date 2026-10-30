import React from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "left",
  inverted = false,
  className = "",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-widest uppercase mb-3 ${
            inverted
              ? "bg-steel-800/80 text-sky-300 border border-steel-700"
              : "bg-steel-50 text-steel-700 border border-steel-100"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          {badge}
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          inverted ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverted ? "text-slate-300" : "text-body"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

