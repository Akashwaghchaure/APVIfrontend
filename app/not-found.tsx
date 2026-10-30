import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-card p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-steel-50 border border-steel-100 text-steel-700 flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8 text-steel-600" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-steel-600 block mb-1">
            Error 404
          </span>
          <h1 className="text-2xl font-black text-navy-900">
            Page Not Found
          </h1>
          <p className="mt-2 text-sm text-body leading-relaxed">
            The engineering page or document you requested does not exist or has been relocated within our directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-steel-600 text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-surface hover:bg-slate-100 text-navy-900 border border-slate-200 text-xs font-semibold transition-colors"
          >
            <span>Explore Solutions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

