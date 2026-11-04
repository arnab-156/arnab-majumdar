import { NextResponse, type NextRequest } from "next/server";

/**
 * Routes are case-sensitive, so a URL typed or read out at a talk in the
 * wrong case would 404. Send any casing of these paths to the real one.
 */
const canonicalPaths = ["/BaltimoreFoodDesert"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const canonical = canonicalPaths.find(
    (path) => path.toLowerCase() === pathname.replace(/\/$/, "").toLowerCase()
  );

  if (canonical && canonical !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = canonical;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, API routes and files with an extension.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
