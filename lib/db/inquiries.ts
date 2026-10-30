import fs from "fs/promises";
import path from "path";

export type InquiryStatus = "new" | "in_review" | "contacted" | "closed";

export interface InquiryRecord {
  id: string;
  referenceId: string;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceInterest: string;
  message: string;
  status: InquiryStatus;
  ipAddress?: string;
  emailNotificationSent: boolean;
  notes?: string;
}

const DB_FILE_PATH = path.join(process.cwd(), "data", "inquiries-db.json");

async function ensureDbFile(): Promise<void> {
  try {
    await fs.access(DB_FILE_PATH);
  } catch {
    const dir = path.dirname(DB_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DB_FILE_PATH, JSON.stringify([], null, 2), "utf8");
  }
}

export function generateReferenceId(): string {
  const year = new Date().getFullYear();
  const randomChars = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `APV-${year}-${randomChars}`;
}

export async function getAllInquiries(): Promise<InquiryRecord[]> {
  await ensureDbFile();
  try {
    const raw = await fs.readFile(DB_FILE_PATH, "utf8");
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch (error) {
    console.error("Failed to read inquiries DB:", error);
    return [];
  }
}

export async function getInquiryById(idOrRef: string): Promise<InquiryRecord | null> {
  const all = await getAllInquiries();
  return (
    all.find((inq) => inq.id === idOrRef || inq.referenceId === idOrRef) || null
  );
}

export async function createInquiry(data: {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceInterest: string;
  message: string;
  ipAddress?: string;
  emailNotificationSent?: boolean;
}): Promise<InquiryRecord> {
  await ensureDbFile();
  const all = await getAllInquiries();

  const now = new Date().toISOString();
  const newRecord: InquiryRecord = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    referenceId: generateReferenceId(),
    createdAt: now,
    updatedAt: now,
    fullName: data.fullName.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    companyName: data.companyName ? data.companyName.trim() : undefined,
    serviceInterest: data.serviceInterest.trim(),
    message: data.message.trim(),
    status: "new",
    ipAddress: data.ipAddress,
    emailNotificationSent: !!data.emailNotificationSent,
  };

  all.unshift(newRecord);

  const tempPath = `${DB_FILE_PATH}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(all, null, 2), "utf8");
  await fs.rename(tempPath, DB_FILE_PATH);

  return newRecord;
}

export async function updateInquiry(
  id: string,
  updates: {
    status?: InquiryStatus;
    notes?: string;
    emailNotificationSent?: boolean;
  }
): Promise<InquiryRecord | null> {
  await ensureDbFile();
  const all = await getAllInquiries();
  const index = all.findIndex((item) => item.id === id || item.referenceId === id);

  if (index === -1) return null;

  const current = all[index];
  const updatedRecord: InquiryRecord = {
    ...current,
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  all[index] = updatedRecord;

  const tempPath = `${DB_FILE_PATH}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(all, null, 2), "utf8");
  await fs.rename(tempPath, DB_FILE_PATH);

  return updatedRecord;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  await ensureDbFile();
  const all = await getAllInquiries();
  const filtered = all.filter((item) => item.id !== id && item.referenceId !== id);

  if (filtered.length === all.length) return false;

  const tempPath = `${DB_FILE_PATH}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(filtered, null, 2), "utf8");
  await fs.rename(tempPath, DB_FILE_PATH);

  return true;
}

export async function exportInquiriesAsCSV(): Promise<string> {
  const all = await getAllInquiries();

  const headers = [
    "Reference ID",
    "Created Date (UTC)",
    "Status",
    "Full Name",
    "Work Email",
    "Phone",
    "Company",
    "Service Area",
    "Message",
    "IP Address",
    "Email Dispatched",
    "Admin Notes",
  ];

  const escapeCSV = (str?: string) => {
    if (!str) return '""';
    const escaped = str.replace(/"/g, '""');
    return `"${escaped}"`;
  };

  const rows = all.map((inq) => [
    escapeCSV(inq.referenceId),
    escapeCSV(inq.createdAt),
    escapeCSV(inq.status),
    escapeCSV(inq.fullName),
    escapeCSV(inq.email),
    escapeCSV(inq.phone),
    escapeCSV(inq.companyName || "N/A"),
    escapeCSV(inq.serviceInterest),
    escapeCSV(inq.message.replace(/\r?\n/g, " ")),
    escapeCSV(inq.ipAddress || "N/A"),
    escapeCSV(inq.emailNotificationSent ? "Yes" : "No"),
    escapeCSV(inq.notes || ""),
  ]);

  return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
}

