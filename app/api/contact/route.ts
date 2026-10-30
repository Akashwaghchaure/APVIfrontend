import { NextRequest, NextResponse } from "next/server";
import { validateContactInput } from "@/lib/validation/contact";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { createInquiry } from "@/lib/db/inquiries";

export async function POST(request: NextRequest) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const rateCheck = checkRateLimit(ip, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many inquiries submitted from this connection.",
          message: `Please wait ${rateCheck.resetInSeconds} seconds before submitting another inquiry.`,
        },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Malformed JSON payload.",
        },
        { status: 400 }
      );
    }

    const validation = validateContactInput(body);
    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKEND_API_URL || "http://127.0.0.1:5000/api/contact";
    try {
      const backendResponse = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.sanitizedData),
        signal: AbortSignal.timeout(2500),
      });

      if (backendResponse.ok) {
        const backendData = await backendResponse.json();
        return NextResponse.json(backendData, { status: 201 });
      }
    } catch {
      // Backend server may be offline or not started; fall through to local fallback
    }

    const newInquiry = await createInquiry({
      ...validation.sanitizedData,
      ipAddress: ip,
      emailNotificationSent: false,
    });

    return NextResponse.json(
      {
        success: true,
        referenceId: newInquiry.referenceId,
        inquiryId: newInquiry.id,
        createdAt: newInquiry.createdAt,
        mode: "Local Storage Fallback",
        message:
          "Your inquiry has been successfully registered with our engineering desk. An engineer will follow up shortly.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Critical error in /api/contact handler:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
        message: "An unexpected error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}

