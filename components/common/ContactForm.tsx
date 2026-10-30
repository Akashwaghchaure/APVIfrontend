"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  RefreshCw,
  ShieldCheck,
  Check,
  Clock,
  FileText,
} from "lucide-react";
import { SOLUTIONS_DATA } from "@/data/solutions";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceInterest?: string;
  message?: string;
  server?: string;
}

interface SubmissionResponse {
  referenceId: string;
  message: string;
  emailDispatched?: boolean;
  emailMode?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);

  const validateClientSide = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid work email address.";
    }

    const phoneDigits = formData.phone.replace(/[^0-9+]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (phoneDigits.length < 8) {
      newErrors.phone = "Please enter a valid telephone number (at least 8 digits).";
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = "Please select a service or sector of interest.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project or inquiry requirements.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors] || errors.server) {
      setErrors((prev) => ({ ...prev, [name]: undefined, server: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateClientSide()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const backendEndpoint =
        process.env.NEXT_PUBLIC_BACKEND_URL
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`
          : "/api/contact";

      const response = await fetch(backendEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors({
            server: result.message || result.error || "Submission failed. Please check your connection.",
          });
        }
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setSubmissionResult(result);
      setSubmittedData({ ...formData });
    } catch (networkError) {
      console.error("Inquiry submission error:", networkError);
      setErrors({
        server: "Network communication error. Unable to reach backend service.",
      });
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setSubmittedData(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      serviceInterest: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-10">
      <div className="mb-6 bg-slate-50 border-l-4 border-steel-600 p-4 rounded-r-lg flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-navy-900">
            Backend API Active: Real Database Storage &amp; Email Dispatch
          </span>
        </div>
        <span className="text-[11px] text-slate-500 font-mono">
          Route: /api/contact
        </span>
      </div>

      {errors.server && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Server Response:</strong>
            <span>{errors.server}</span>
          </div>
        </div>
      )}

      {submissionResult && submittedData ? (
        <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-6 text-emerald-900 animate-fadeIn">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-emerald-950">
                Inquiry Successfully Logged &amp; Registered!
              </h3>
              <p className="text-xs text-emerald-700">
                Saved permanently in the Air Powervision inquiry database.
              </p>
            </div>
          </div>

          <div className="my-5 p-4 bg-white rounded-lg border border-emerald-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">
                Official Reference Number
              </span>
              <strong className="text-xl font-mono text-navy-900 tracking-wider">
                {submissionResult.referenceId}
              </strong>
            </div>

            <div className="text-xs text-slate-600 flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded border border-slate-200">
              <Clock className="w-3.5 h-3.5 text-steel-600" />
              <span>Response Window: 24-48 Hours</span>
            </div>
          </div>

          <p className="text-sm text-emerald-800 leading-relaxed mb-4">
            {submissionResult.message}
          </p>

          <div className="bg-white/80 rounded-lg p-4 border border-emerald-200/60 text-xs space-y-2 text-slate-700">
            <div>
              <span className="font-semibold text-navy-900">Contact Person:</span>{" "}
              {submittedData.fullName}
            </div>
            <div>
              <span className="font-semibold text-navy-900">Registered Email:</span>{" "}
              {submittedData.email}
            </div>
            <div>
              <span className="font-semibold text-navy-900">Phone Number:</span>{" "}
              {submittedData.phone}
            </div>
            {submittedData.companyName && (
              <div>
                <span className="font-semibold text-navy-900">Company:</span>{" "}
                {submittedData.companyName}
              </div>
            )}
            <div>
              <span className="font-semibold text-navy-900">Selected Practice Area:</span>{" "}
              {submittedData.serviceInterest}
            </div>
            <div>
              <span className="font-semibold text-navy-900">Message Overview:</span>{" "}
              {submittedData.message}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-steel-600 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit Another Engineering Inquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2"
              >
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                aria-invalid={!!errors.fullName}
                className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                    : "border-slate-300 focus:border-steel-600 focus:ring-steel-100 bg-white"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2"
              >
                Work Email <span className="text-rose-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                aria-invalid={!!errors.email}
                className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                    : "border-slate-300 focus:border-steel-600 focus:ring-steel-100 bg-white"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2"
              >
                Phone Number <span className="text-rose-600">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98XXX XXXXX"
                aria-invalid={!!errors.phone}
                className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                    : "border-slate-300 focus:border-steel-600 focus:ring-steel-100 bg-white"
                }`}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2"
              >
                Company Name <span className="text-slate-400 font-normal normal-case">(Optional)</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                autoComplete="organization"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enterprise or Industrial Facility"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-navy-900 placeholder-slate-400 focus:border-steel-600 focus:ring-2 focus:ring-steel-100 focus:outline-none bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="serviceInterest"
              className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2"
            >
              Service of Interest <span className="text-rose-600">*</span>
            </label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              aria-invalid={!!errors.serviceInterest}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 focus:outline-none focus:ring-2 transition-all ${
                errors.serviceInterest
                  ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                  : "border-slate-300 focus:border-steel-600 focus:ring-steel-100 bg-white"
              }`}
            >
              <option value="">Select an engineering capability or solution</option>
              {SOLUTIONS_DATA.map((sol) => (
                <option key={sol.id} value={sol.title}>
                  {sol.title} ({sol.category})
                </option>
              ))}
              <option value="General Technical Consultation">
                General Technical Consultation / Feasibility
              </option>
              <option value="Substation & Grid Engineering">
                Substation &amp; Grid Engineering
              </option>
              <option value="Other Project Inquiries">
                Other Project Inquiries
              </option>
            </select>
            {errors.serviceInterest && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.serviceInterest}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2"
            >
              Project Specifications or Message <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your estimated capacity requirements, site location, timeline, or engineering questions..."
              aria-invalid={!!errors.message}
              className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.message
                  ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                  : "border-slate-300 focus:border-steel-600 focus:ring-steel-100 bg-white"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-steel-600 text-white font-semibold rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting to Engineering Desk...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Inquiry</span>
                </>
              )}
            </button>
            <p className="mt-2.5 text-xs text-slate-500">
              Your inquiry will be logged directly to our backend database and dispatched to the duty engineering lead.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

