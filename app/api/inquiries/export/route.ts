import { NextResponse } from "next/server";

export const runtime = "nodejs";

const BACKEND_BASE = process.env.BACKEND_API_URL || "http://127.0.0.1:5000/api";

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_BASE}/inquiries/export`, {
      cache: "no-store",
    });

    if (res.ok) {
      const csvContent = await res.text();
      const dateStr = new Date().toISOString().split("T")[0];
      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="air-powervision-inquiries-${dateStr}.csv"`,
          "Cache-Control": "no-store",
        },
      });
    }

    return NextResponse.json({ error: "Failed to export from backend" }, { status: res.status });
  } catch (err: any) {
    return NextResponse.json({ error: "Backend server unreachable" }, { status: 502 });
  }
}

