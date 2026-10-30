import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({
  variant = "dark",
  className = "",
  showSubtitle = true,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-steel-500 rounded-lg ${className}`}
      aria-label="Air Powervision India Homepage"
    >
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg
          viewBox="0 0 52 52"
          className="w-full h-full transform transition-transform duration-300 group-hover:rotate-45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="26"
            cy="26"
            r="23"
            stroke={isLight ? "#38BDF8" : "#244B80"}
            strokeWidth="1.5"
            strokeOpacity={isLight ? "0.35" : "0.3"}
            strokeDasharray="4 2"
          />
          <path
            d="M26 6C26 6 36 14 36 26C30 24 28 20 26 6Z"
            fill={isLight ? "#FFFFFF" : "#0B1730"}
          />
          <path
            d="M46 26C46 26 38 36 26 36C28 30 32 28 46 26Z"
            fill={isLight ? "#38BDF8" : "#244B80"}
          />
          <path
            d="M26 46C26 46 16 38 16 26C22 28 24 32 26 46Z"
            fill="#0284C7"
          />
          <path
            d="M6 26C6 26 14 16 26 16C24 22 20 24 6 26Z"
            fill={isLight ? "#93C5FD" : "#38BDF8"}
          />
          <circle
            cx="26"
            cy="26"
            r="5"
            fill={isLight ? "#0B1730" : "#FFFFFF"}
            stroke={isLight ? "#38BDF8" : "#0B1730"}
            strokeWidth="2"
          />
          <circle cx="26" cy="26" r="2" fill="#0284C7" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`text-lg font-black tracking-wider uppercase ${
              isLight ? "text-white" : "text-navy-900"
            }`}
          >
            AIR
          </span>
          <span
            className={`text-lg font-black tracking-wider uppercase ${
              isLight ? "text-sky-400" : "text-steel-600"
            }`}
          >
            POWERVISION
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-sky-600 dark:text-sky-400">
              INDIA
            </span>
            <span
              className={`text-[9px] font-medium tracking-wider uppercase ${
                isLight ? "text-slate-400" : "text-slate-500"
              }`}
            >
              • ENERGY SOLUTIONS
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

