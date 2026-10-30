import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const uptimeSeconds = Math.floor(process.uptime());
  let backendStatus = "offline";
  try {
    const res = await fetch("http://127.0.0.1:5000/api/health", {
      cache: "no-store",
      signal: AbortSignal.timeout(1500),
    });
    if (res.ok) {
      backendStatus = "online";
    }
  } catch {
    backendStatus = "offline (standalone frontend mode)";
  }

  return NextResponse.json(
    {
      status: "healthy",
      service: "Air Powervision India Frontend Web Application",
      timestamp: new Date().toISOString(),
      uptime: `${uptimeSeconds} seconds`,
      backendStatus,
      company: "Air Powervision India / HIT India",
      environment: process.env.NODE_ENV || "development",
    },
    { status: 200 }
  );
}

