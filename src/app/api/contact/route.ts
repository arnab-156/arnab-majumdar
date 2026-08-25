import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form handler: verify the Turnstile token, then send the message on
 * with Resend. Every secret comes from the environment — see .env.example.
 */

const MAX = { name: 120, email: 200, subject: 160, message: 5000 };

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  token?: string;
  /** Honeypot. Real people leave it empty; bots fill everything in. */
  company?: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

async function verifyTurnstile(token: string, ip: string | null) {
  // TURNSTILE_SECRET is the name already in use; the _KEY spelling is accepted
  // so either convention works.
  const secret = process.env.TURNSTILE_SECRET ?? process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: false as const, reason: "Turnstile is not configured on the server." };

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const data = (await res.json()) as {
      success: boolean;
      hostname?: string;
      "error-codes"?: string[];
    };

    if (!data.success) {
      // Cloudflare itself refused the token — usually because the host is not
      // in the widget's domain list in the Turnstile dashboard.
      console.error(
        `Turnstile rejected the token (host: ${data.hostname ?? "unknown"}, codes: ${(data["error-codes"] ?? []).join(", ") || "none"})`
      );
      return { ok: false as const, reason: "That verification did not check out. Please try again." };
    }

    // Cloudflare reports which host solved the challenge. Pinning it stops a
    // token minted on someone else's site from being spent against this one.
    // Entries may be exact ("example.com") or a wildcard ("*.vercel.app"),
    // which matters because Vercel gives every deployment a fresh hostname.
    const allowed = (process.env.TURNSTILE_HOSTNAMES ?? "")
      .split(",")
      .map((host) => host.trim().toLowerCase())
      .filter(Boolean);

    const host = data.hostname?.toLowerCase();
    const permitted =
      !allowed.length ||
      !host ||
      allowed.some((entry) =>
        entry.startsWith("*.")
          ? host === entry.slice(2) || host.endsWith(entry.slice(1))
          : host === entry
      );

    if (!permitted) {
      console.error(
        `Turnstile solved on unexpected host: ${host}. TURNSTILE_HOSTNAMES allows: ${allowed.join(", ")}`
      );
      return { ok: false as const, reason: "That verification did not check out. Please try again." };
    }

    return { ok: true as const };
  } catch {
    return { ok: false as const, reason: "Could not reach the verification service." };
  }
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Bots that fill in every field get a cheerful 200 and go nowhere.
  if (body.company) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();
  const token = (body.token ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "That email address does not look right." }, { status: 400 });
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    subject.length > MAX.subject ||
    message.length > MAX.message
  ) {
    return NextResponse.json({ error: "That message is longer than the form accepts." }, { status: 400 });
  }
  if (!token) {
    return NextResponse.json({ error: "Please complete the verification check." }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip");

  const verification = await verifyTurnstile(token, ip);
  if (!verification.ok) {
    return NextResponse.json({ error: verification.reason }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    // Deliberately vague to the caller; the detail goes to the server log.
    console.error("Contact form is missing RESEND_API_KEY, CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL.");
    return NextResponse.json({ error: "The form is not configured yet. Please try again later." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const heading = subject || `New message from ${name}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      // So a reply in the mail client goes to the sender, not to the form.
      replyTo: email,
      subject: `[arnabmajumdar.com] ${heading}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        subject ? `Subject: ${subject}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#17181a">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
          <hr style="border:none;border-top:1px solid #e5e4dd;margin:16px 0" />
          <p style="white-space:pre-line">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return NextResponse.json({ error: "The message could not be sent. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form failed:", err);
    return NextResponse.json({ error: "Something went wrong sending that. Please try again." }, { status: 500 });
  }
}
