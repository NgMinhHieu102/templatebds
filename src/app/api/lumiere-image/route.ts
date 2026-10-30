import { NextRequest, NextResponse } from "next/server";
import path from "node:path";

export function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("url");
  if (!raw) return new NextResponse("Missing image URL", { status: 400 });

  const decoded = decodeURIComponent(raw);
  const fileName = path.posix.basename(new URL(decoded, "https://local.invalid").pathname);
  const pathname = decoded.includes("/uploads/")
    ? `/images/lumiere/${fileName}`
    : decoded.startsWith("/")
      ? decoded
      : null;

  if (!pathname || pathname.includes("..")) {
    return new NextResponse("Unsupported image URL", { status: 400 });
  }

  return NextResponse.redirect(new URL(pathname, request.url), 307);
}
