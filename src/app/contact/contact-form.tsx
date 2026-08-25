'use client'
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

import { heroPrimaryButtonStyle } from "../utility/stylevariables";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full rounded-xl border border-lotus-indigo/25 bg-white/70 px-3 py-2 text-lotus-ink shadow-sm transition placeholder:text-lotus-ink/40 hover:border-lotus-indigo/50 focus:outline-none focus:ring-2 focus:ring-lotus-indigo dark:bg-white/5 dark:text-lotus-paper dark:placeholder:text-lotus-paper/40";
const label = "text-sm font-semibold text-lotus-ink/80 dark:text-lotus-paper/80";

/**
 * The widget's site key. Public by design — it ships in the markup of every
 * site that uses Turnstile — so it is a default rather than a required env
 * var, and every deployment works without another variable to set. Override
 * with TURNSTILE_SITE_KEY when pointing at a different widget.
 */
const DEFAULT_SITE_KEY = "0x4AAAAAAEbo7qS6G6ZuDswz";

/** Sent with the token and checked server-side, per Cloudflare's guidance. */
export const TURNSTILE_ACTION = "contact";

export const ContactForm = ({ siteKey: siteKeyProp }: { siteKey?: string }) => {
  const siteKey = siteKeyProp || DEFAULT_SITE_KEY;

  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [token, setToken] = useState("");
  const [scriptReady, setScriptReady] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Explicit render, so the widget survives React re-rendering the form.
  const mountWidget = useCallback(() => {
    if (!siteKey || !widgetRef.current || !window.turnstile || widgetId.current) return;

    widgetId.current = window.turnstile.render(widgetRef.current, {
      sitekey: siteKey,
      action: TURNSTILE_ACTION,
      callback: (value: string) => setToken(value),
      "expired-callback": () => setToken(""),
      "error-callback": () => setToken(""),
      theme: "light",
    });
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey) {
      // Developer-facing only. Visitors get a working-looking form; the server
      // is what actually turns the submission away.
      console.warn(
        "No Turnstile site key reached the browser, so the widget cannot render and /api/contact will reject submissions. Set TURNSTILE_SITE_KEY (or NEXT_PUBLIC_TURNSTILE_SITE_KEY) and redeploy."
      );
    }
  }, [siteKey]);

  useEffect(() => {
    if (scriptReady) mountWidget();
    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [scriptReady, mountWidget]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const form = new FormData(event.currentTarget);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
          company: form.get("company"),
          token,
        }),
      });

      const data = await response.json();

      // Tokens are single use, so retire this one either way and let the
      // widget mint a fresh one for any following attempt.
      window.turnstile?.reset(widgetId.current ?? undefined);
      setToken("");

      if (!response.ok) {
        setError(data?.error ?? "That did not send. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
    } catch {
      setError("That did not send. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-lotus-indigo/20 bg-lotus-paper p-8 shadow-xl dark:border-lotus-paper/15 dark:bg-white/5">
        <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">Sent</p>
        <h2 className="mt-2 font-nyu-ultra text-3xl">Thank you — that reached me.</h2>
        <p className="mt-3 text-lotus-ink/80 dark:text-lotus-paper/80">
          I read everything that comes through here and reply to most of it within a few days.
        </p>
      </div>
    );
  }

  return (
    <>
      {siteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => setScriptReady(true)}
        />
      )}

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-2xl rounded-3xl border border-lotus-indigo/20 bg-lotus-paper p-6 text-left shadow-xl dark:border-lotus-paper/15 dark:bg-white/5 md:p-8"
      >
        <fieldset disabled={status === "sending"}>
          <legend className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
            Send a message
          </legend>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" required maxLength={120} autoComplete="name" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
            </div>
          </div>

          <div className="mt-4">
            <label className={label} htmlFor="contact-subject">Subject <span className="font-normal text-lotus-ink/50 dark:text-lotus-paper/50">(optional)</span></label>
            <input id="contact-subject" name="subject" maxLength={160} className={field} />
          </div>

          <div className="mt-4">
            <label className={label} htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" required rows={6} maxLength={5000} className={field} />
          </div>

          {/* Honeypot — hidden from people, tempting to bots. */}
          <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="contact-company">Company</label>
            <input id="contact-company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          {siteKey && <div ref={widgetRef} className="mt-6" />}

          {error && (
            <p className="mt-4 rounded-xl border border-lotus-madder/40 bg-lotus-madder/5 p-3 text-sm text-lotus-madder" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending" || (!!siteKey && !token)}
            className={`${heroPrimaryButtonStyle} mt-6 disabled:cursor-not-allowed disabled:opacity-50`}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {siteKey && !token && (
            <p className="mt-3 text-sm text-lotus-ink/60 dark:text-lotus-paper/60">
              The send button unlocks once the verification check passes.
            </p>
          )}
        </fieldset>
      </form>
    </>
  );
};
