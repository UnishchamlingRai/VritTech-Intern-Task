import { NextResponse } from "next/server";

export function middleware(req) {
  const auth = req.cookies.get("auth");

  if (!auth && req.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}
