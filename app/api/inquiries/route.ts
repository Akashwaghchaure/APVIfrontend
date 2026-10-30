import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const BACKEND_BASE = process.env.BACKEND_API_URL || "http://127.0.0.1:5000/api";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const backendUrl = `${BACKEND_BASE}/inquiries?${searchParams.toString()}`;

    const res = await fetch(backendUrl, {
      method: "GET",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json(
      { success: false, error: "Backend service returned error", inquiries: [] },
      { status: res.status }
    );
  } catch (err: any) {
    console.error("[INQUIRIES API PROXY GET ERROR]:", err.message);
    return NextResponse.json(
      { success: false, error: "Backend server unreachable", inquiries: [] },
      { status: 502 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const id = body.id;
    if (!id) {
      return NextResponse.json({ success: false, error: "Missing inquiry ID" }, { status: 400 });
    }

    const backendUrl = `${BACKEND_BASE}/inquiries/${id}`;
    const res = await fetch(backendUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    console.error("[INQUIRIES API PROXY PATCH ERROR]:", err.message);
    return NextResponse.json(
      { success: false, error: "Failed to update inquiry on backend" },
      { status: 502 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, error: "Missing inquiry ID" }, { status: 400 });
    }

    const backendUrl = `${BACKEND_BASE}/inquiries/${id}`;
    const res = await fetch(backendUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    console.error("[INQUIRIES API PROXY DELETE ERROR]:", err.message);
    return NextResponse.json(
      { success: false, error: "Failed to delete inquiry on backend" },
      { status: 502 }
    );
  }
}

