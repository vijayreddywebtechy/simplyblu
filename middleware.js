import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuthenticated = Boolean(req.cookies.get("isAuthenticated")?.value);

  const publicRoutes = [
    "/",
    "/simplyblu",
    "/simplyblu/select-suits",
    "/auth/callback",
  ];
  const pathname = req.nextUrl.pathname;

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  // If NOT authenticated & trying to access protected routes → send to login
  if (!isAuthenticated && !isPublic) {
    return NextResponse.redirect(new URL("/simplyblu", req.url));
  }

  return NextResponse.next();
}
