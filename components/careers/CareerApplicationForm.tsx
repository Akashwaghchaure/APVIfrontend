"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  UploadCloud,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Mail,
  RefreshCw,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/site-content";

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    stream: "Mechanical Engineering",
    experienceLevel: "Student / Fresh Graduate",
    resumeLink: "",
    coverNote: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please complete all required fields (Name, Email, Phone).");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: `${formData.institution} (${formData.stream})`,
        serviceInterest: `Careers / Resume Intake (${formData.experienceLevel})`,
        message: `[CANDIDATE APPLICATION]
Stream/Discipline: ${formData.stream}
College/Institution: ${formData.institution}
Level: ${formData.experienceLevel}
Resume / Portfolio URL: ${formData.resumeLink || "Not provided / via email"}

Cover Note:
${formData.coverNote}`,
      };

      const backendEndpoint =
        process.env.NEXT_PUBLIC_BACKEND_URL
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`
          : "/api/contact";

      const res = await fetch(backendEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || data.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg(`Could not submit application. You can also send your resume directly to ${COMPANY_INFO.contact.careersEmail}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-10">
      <div className="mb-8 p-4 rounded-xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <strong className="text-navy-900 block font-semibold">
              Students &amp; Engineering Trainees Welcome
            </strong>
            <span className="text-slate-600">
              Submit your resume below or through our official Google Form.
            </span>
          </div>
        </div>

        <a
          href={`mailto:${COMPANY_INFO.contact.careersEmail}?subject=Job Application - Air Powervision India`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-sky-300 text-sky-800 text-xs font-bold hover:bg-sky-100 transition-colors shadow-sm"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email: {COMPANY_INFO.contact.careersEmail}</span>
        </a>
      </div>

      {submitted ? (
        <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 animate-fadeIn space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-bold text-navy-900">
            Resume Received Successfully!
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for your interest in HIT India. Our core engineering team will review your qualifications and reach out if your profile matches an active project mandate.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  institution: "",
                  stream: "Mechanical Engineering",
                  experienceLevel: "Student / Fresh Graduate",
                  resumeLink: "",
                  coverNote: "",
                });
              }}
              className="px-5 py-2 rounded-lg bg-navy-900 text-white text-xs font-semibold hover:bg-steel-600 transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMsg && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                Candidate Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Omkar Joshi"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-steel-600 focus:ring-1 focus:ring-steel-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                Email Address <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="omkar@college.edu or gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-steel-600 focus:ring-1 focus:ring-steel-600 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                Contact Phone <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98XXX XXXXX"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-steel-600 focus:ring-1 focus:ring-steel-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                College / University / Company
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="e.g. COEP Pune, MIT, VJTI, etc."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-steel-600 focus:ring-1 focus:ring-steel-600 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                Engineering Stream / Specialization
              </label>
              <select
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white focus:border-steel-600 outline-none"
              >
                <option value="Mechanical Engineering">Mechanical &amp; Machine Design</option>
                <option value="Aerodynamics & Fluid Dynamics">Aerodynamics &amp; Fluid Dynamics</option>
                <option value="Electrical & Power Systems">Electrical &amp; Power Systems</option>
                <option value="Hydroelectric / Civil Engineering">Hydroelectric &amp; Hydraulics</option>
                <option value="Renewable Energy Tech">Renewable Energy Systems</option>
                <option value="Instrumentation & Control">Instrumentation &amp; SCADA</option>
                <option value="Other Disciplines">Other Engineering Disciplines</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
                Experience Level
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white focus:border-steel-600 outline-none"
              >
                <option value="Student / Final Year">Student (Seeking Project / Internship)</option>
                <option value="Fresh Graduate (0-1 yrs)">Fresh Graduate Engineer (0-1 Years)</option>
                <option value="Mid-Level (2-5 yrs)">Experienced Engineer (2-5 Years)</option>
                <option value="Senior Specialist (5+ yrs)">Senior Domain Specialist (5+ Years)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
              Resume Link (Google Drive / LinkedIn / Dropbox)
            </label>
            <div className="relative">
              <UploadCloud className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleChange}
                placeholder="https://drive.google.com/file/d/... or LinkedIn profile URL"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-steel-600 outline-none"
              />
            </div>
            <p className="mt-1 text-[11px] text-slate-400">
              Ensure link sharing is set to &quot;Anyone with the link can view&quot;.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
              Brief Introduction &amp; Motivation
            </label>
            <textarea
              name="coverNote"
              rows={3}
              value={formData.coverNote}
              onChange={handleChange}
              placeholder="Tell our 5-engineer team about your technical projects, passion for continuous renewable energy, or specific skills..."
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:border-steel-600 outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-steel-600 text-white font-semibold rounded-lg text-sm transition-all shadow-md disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting Resume...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Candidate Application</span>
                </>
              )}
            </button>

            <span className="text-xs text-slate-500">
              Official Desk: <strong className="text-navy-900">{COMPANY_INFO.contact.careersEmail}</strong>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

