import { head } from "@vercel/blob";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Serves one image out of the private İstanbul blob store.
 *
 * That store is private, so its URLs answer 403 to a browser and cannot go
 * straight into <Image>. This resolves a pathname to its blob URL server-side
 * and streams the bytes back with the token attached.
 *
 * Note this exists only because the store is private. Make it public and every
 * one of these images can be linked directly, and this route can be deleted.
 */

/** Nothing outside the İstanbul set is reachable through here. */
const ALLOWED_PREFIX = "istanbul_gie";

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("pathname");

  if (!pathname) {
    return NextResponse.json({ error: "Missing pathname" }, { status: 400 });
  }

  // Without this the route would happily resolve anything in the store, and a
  // traversal-looking pathname should never reach the blob API at all. The
  // prefix is matched case-insensitively because the images have been uploaded
  // both "istanbul_gie" and "Istanbul_gie".
  if (!pathname.toLowerCase().startsWith(ALLOWED_PREFIX) || pathname.includes("..")) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const token = process.env.ISTANBUL_READ_WRITE_TOKEN;
  if (!token) {
    console.error("ISTANBUL_READ_WRITE_TOKEN is not set; İstanbul images cannot be served.");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  try {
    const blob = await head(pathname, { token });

    const upstream = await fetch(blob.url, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (!upstream.ok || !upstream.body) {
      return new NextResponse("Not found", { status: 404 });
    }

    return new NextResponse(upstream.body, {
      headers: {
        "Content-Type": blob.contentType ?? "application/octet-stream",
        // The bytes never change once uploaded, and the pathname is the key,
        // so this can sit in the CDN rather than costing a call per view.
        "Cache-Control": "public, max-age=3600, s-maxage=86400, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
