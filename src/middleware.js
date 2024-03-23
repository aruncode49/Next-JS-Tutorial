import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  console.log(req.url);
  return NextResponse.redirect(new URL("/blog", req.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
