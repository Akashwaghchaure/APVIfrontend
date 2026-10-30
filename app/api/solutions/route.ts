import { NextRequest, NextResponse } from "next/server";
import { SOLUTIONS_DATA } from "@/data/solutions";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get("category");
  const slug = searchParams.get("slug");

  let list = SOLUTIONS_DATA;

  if (slug) {
    const item = list.find((s) => s.slug === slug);
    if (!item) {
      return NextResponse.json({ error: "Solution not found" }, { status: 404 });
    }
    return NextResponse.json({ solution: item }, { status: 200 });
  }

  if (category) {
    list = list.filter(
      (s) => s.category.toLowerCase() === category.toLowerCase()
    );
  }

  return NextResponse.json(
    {
      total: list.length,
      solutions: list,
    },
    { status: 200 }
  );
}

