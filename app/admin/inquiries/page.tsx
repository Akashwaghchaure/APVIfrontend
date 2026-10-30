"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Inbox,
  Search,
  Filter,
  Download,
  RefreshCw,
  Eye,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Building2,
  Trash2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Shield,
} from "lucide-react";
import PageHero from "@/components/common/PageHero";
import { InquiryRecord, InquiryStatus } from "@/lib/db/inquiries";

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [summary, setSummary] = useState({
    total: 0,
    newCount: 0,
    inReviewCount: 0,
    contactedCount: 0,
    closedCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryRecord | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const url = new URL("/api/inquiries", window.location.origin);
      if (statusFilter !== "all") {
        url.searchParams.set("status", statusFilter);
      }
      if (search.trim()) {
        url.searchParams.set("search", search.trim());
      }

      const res = await fetch(url.toString());
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
        if (data.summary) {
          setSummary(data.summary);
        }
      }
    } catch (err) {
      console.error("Failed to load inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchInquiries();
  };

  const handleStatusChange = async (id: string, newStatus: InquiryStatus) => {
    setActionLoading(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setNotification(`Inquiry updated to status: ${newStatus.replace("_", " ").toUpperCase()}`);
        setTimeout(() => setNotification(null), 3000);
        await fetchInquiries();
        if (selectedInquiry && selectedInquiry.id === id) {
          setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this inquiry record?")) return;

    setActionLoading(true);
    try {
      const res = await fetch(`/api/inquiries?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setNotification("Inquiry deleted successfully.");
        setTimeout(() => setNotification(null), 3000);
        setSelectedInquiry(null);
        await fetchInquiries();
      }
    } catch (err) {
      console.error("Failed to delete inquiry:", err);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <PageHero
        badge="Internal Portal"
        breadcrumbLabel="Admin Desk"
        title="Engineering Inquiries &amp; Client Management"
        subtitle="Real-time intake stream of industrial feasibility requests, solar/power consultations, and contact submissions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {notification && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-600 text-white text-xs font-semibold flex items-center justify-between shadow-md animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-200" />
              <span>{notification}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-soft">
            <span className="text-xs text-slate-500 block uppercase tracking-wider font-semibold">
              Total Inquiries
            </span>
            <span className="text-2xl font-black text-navy-900 mt-1 block">
              {summary.total}
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-soft">
            <span className="text-xs text-amber-600 block uppercase tracking-wider font-semibold">
              New Unread
            </span>
            <span className="text-2xl font-black text-amber-600 mt-1 block">
              {summary.newCount}
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-soft">
            <span className="text-xs text-sky-600 block uppercase tracking-wider font-semibold">
              In Review
            </span>
            <span className="text-2xl font-black text-sky-600 mt-1 block">
              {summary.inReviewCount}
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-soft">
            <span className="text-xs text-emerald-600 block uppercase tracking-wider font-semibold">
              Contacted
            </span>
            <span className="text-2xl font-black text-emerald-600 mt-1 block">
              {summary.contactedCount}
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-soft col-span-2 sm:col-span-1">
            <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">
              Closed
            </span>
            <span className="text-2xl font-black text-slate-600 mt-1 block">
              {summary.closedCount}
            </span>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-soft mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, company, ref ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-xs text-navy-900 placeholder-slate-400 focus:border-steel-600 focus:ring-1 focus:ring-steel-600 outline-none"
            />
          </form>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs text-navy-900 font-medium focus:outline-none focus:border-steel-600"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="in_review">In Review</option>
                <option value="contacted">Contacted</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <button
              type="button"
              onClick={fetchInquiries}
              disabled={loading}
              className="p-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
              title="Refresh Records"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>

            <a
              href="/api/inquiries/export"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-900 hover:bg-steel-600 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-slate-500 text-xs">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-steel-600 mb-2" />
              <span>Loading registered inquiries...</span>
            </div>
          ) : inquiries.length === 0 ? (
            <div className="p-16 text-center text-slate-500">
              <Inbox className="w-10 h-10 mx-auto text-slate-300 mb-3" />
              <h4 className="text-sm font-bold text-navy-900">No Inquiries Found</h4>
              <p className="text-xs text-slate-500 mt-1">
                Submissions made from the Contact page will be cataloged here automatically.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-steel-600 hover:underline font-semibold"
                >
                  <span>Open Contact Form to Submit Test Inquiry</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 uppercase tracking-wider font-bold text-[11px]">
                    <th className="py-3.5 px-4">Ref Code</th>
                    <th className="py-3.5 px-4">Contact Info</th>
                    <th className="py-3.5 px-4">Practice Domain</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Received</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {inquiries.map((inq) => {
                    const statusBadgeColors = {
                      new: "bg-amber-50 text-amber-800 border-amber-200",
                      in_review: "bg-sky-50 text-sky-800 border-sky-200",
                      contacted: "bg-emerald-50 text-emerald-800 border-emerald-200",
                      closed: "bg-slate-100 text-slate-700 border-slate-200",
                    };

                    return (
                      <tr
                        key={inq.id}
                        className="hover:bg-slate-50/70 transition-colors"
                      >
                        <td className="py-3.5 px-4 font-mono font-bold text-navy-900">
                          {inq.referenceId}
                        </td>
                        <td className="py-3.5 px-4">
                          <strong className="block text-navy-900 font-semibold">
                            {inq.fullName}
                          </strong>
                          <span className="text-slate-500 block">{inq.email}</span>
                          <span className="text-[11px] text-slate-400">{inq.phone}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 font-medium">
                          {inq.serviceInterest}
                          {inq.companyName && (
                            <span className="block text-[11px] text-slate-400">
                              {inq.companyName}
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${
                              statusBadgeColors[inq.status] || "bg-slate-50 text-slate-700"
                            }`}
                          >
                            {inq.status.replace("_", " ")}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500">
                          {new Date(inq.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3.5 px-4 text-right space-x-2">
                          <button
                            type="button"
                            onClick={() => setSelectedInquiry(inq)}
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-100 hover:bg-steel-50 text-navy-900 hover:text-steel-700 font-semibold text-[11px] transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Details</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(inq.id)}
                            className="p-1.5 rounded text-rose-500 hover:bg-rose-50 transition-colors"
                            title="Delete Record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {selectedInquiry && (
          <div className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-fadeIn max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-steel-600 block mb-1">
                    {selectedInquiry.referenceId}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900">
                    {selectedInquiry.fullName}
                  </h3>
                  <span className="text-xs text-slate-500">
                    Received: {new Date(selectedInquiry.createdAt).toLocaleString()}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedInquiry(null)}
                  className="text-slate-400 hover:text-navy-900 p-1 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface p-4 rounded-xl border border-slate-200/80">
                  <div>
                    <strong className="text-slate-500 uppercase block tracking-wider text-[10px] mb-0.5">
                      Work Email:
                    </strong>
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className="text-steel-600 font-semibold hover:underline"
                    >
                      {selectedInquiry.email}
                    </a>
                  </div>
                  <div>
                    <strong className="text-slate-500 uppercase block tracking-wider text-[10px] mb-0.5">
                      Phone Number:
                    </strong>
                    <a
                      href={`tel:${selectedInquiry.phone.replace(/\s+/g, "")}`}
                      className="text-steel-600 font-semibold hover:underline"
                    >
                      {selectedInquiry.phone}
                    </a>
                  </div>
                  <div>
                    <strong className="text-slate-500 uppercase block tracking-wider text-[10px] mb-0.5">
                      Company / Facility:
                    </strong>
                    <span className="text-navy-900 font-semibold">
                      {selectedInquiry.companyName || "Not Specified"}
                    </span>
                  </div>
                  <div>
                    <strong className="text-slate-500 uppercase block tracking-wider text-[10px] mb-0.5">
                      Practice Area:
                    </strong>
                    <span className="text-navy-900 font-semibold">
                      {selectedInquiry.serviceInterest}
                    </span>
                  </div>
                </div>

                <div>
                  <strong className="text-slate-500 uppercase block tracking-wider text-[10px] mb-1.5">
                    Engineering Specifications / Inquired Scope:
                  </strong>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-body text-xs whitespace-pre-wrap leading-relaxed">
                    {selectedInquiry.message}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-navy-900">Change Status:</span>
                    {(["new", "in_review", "contacted", "closed"] as InquiryStatus[]).map(
                      (st) => (
                        <button
                          key={st}
                          type="button"
                          disabled={actionLoading || selectedInquiry.status === st}
                          onClick={() => handleStatusChange(selectedInquiry.id, st)}
                          className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors capitalize ${
                            selectedInquiry.status === st
                              ? "bg-navy-900 text-white"
                              : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                          }`}
                        >
                          {st.replace("_", " ")}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDelete(selectedInquiry.id)}
                    className="text-rose-600 hover:text-rose-700 text-xs font-semibold flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Record</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

