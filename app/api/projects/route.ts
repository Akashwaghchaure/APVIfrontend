import { NextRequest, NextResponse } from "next/server";
import { PROJECTS_DATA } from "@/data/projects";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get("category");
  const featuredOnly = searchParams.get("featured") === "true";

  let list = PROJECTS_DATA;

  if (category && category !== "All Categories") {
    list = list.filter(
      (p) =>
        p.category.toLowerCase() === category.toLowerCase() ||
        p.categorySlug.toLowerCase() === category.toLowerCase()
    );
  }

  if (featuredOnly) {
    list = list.filter((p) => p.featured);
  }

  return NextResponse.json(
    {
      total: list.length,
      projects: list,
    },
    { status: 200 }
  );
}

