// middleware.ts

import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ACCESS_TOKEN_COOKIES_KEY } from "./constants";
import { middleware as paraglideMiddleware } from "@/lib/i18n"

export function middleware(request: NextRequest) {
  if (new URL(request.url).pathname !== '/login') {
    const accessToken = cookies().get(ACCESS_TOKEN_COOKIES_KEY)
    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return paraglideMiddleware(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}