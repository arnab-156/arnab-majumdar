"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { AgentDraft, AgentLink, AgentResponsePayload } from "../api/agent/route";
import { heroOutlineButtonStyle, heroPrimaryButtonStyle } from "../utility/stylevariables";

type Turn = {
  role: "user" | "assistant";
  content: string;
  suggestedLinks?: AgentLink[];
  draft?: AgentDraft | null;
  recommendCalendar?: boolean;
};

const STARTER_PROMPTS = [
  "How can Arnab help my business or organization?",
  "Tell me about his NYU Stern MBA & courses",
  "What is his retail tech & accessibility background?",
  "Help me draft a message to Arnab",
  "I'd like to schedule a meeting",
];

export const AgentConcierge = () => {
  const [turns, setTurns] = useState<Turn[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Arnab's AI Concierge. Ask me anything about his work in strategy, retail technology, WCAG accessibility, education, or his NYU Stern Executive MBA — or tell me what you're working on and I'll pre-fill the message form below or point you to his calendar.",
      suggestedLinks: [
        { label: "Send a message (#send-message)", href: "#send-message" },
        { label: "Book a time (#book-now)", href: "#book-now" },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextTurns: Turn[] = [...turns, { role: "user", content: trimmed }];
    setTurns(nextTurns);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextTurns.map((t) => ({ role: t.role, content: t.content })),
        }),
      });

      const data = (await response.json()) as AgentResponsePayload;
      setTurns([
        ...nextTurns,
        {
          role: "assistant",
          content:
            data.reply ||
            "I'd be happy to help you connect with Arnab using the message form or calendar below.",
          suggestedLinks: data.suggestedLinks,
          draft: data.draft,
          recommendCalendar: data.recommendCalendar,
        },
      ]);
    } catch {
      setTurns([
        ...nextTurns,
        {
          role: "assistant",
          content:
            "You can write to Arnab directly in the message form below, or pick a live slot on his calendar right underneath.",
          suggestedLinks: [
            { label: "Send a message", href: "#send-message" },
            { label: "Book a time", href: "#book-now" },
          ],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const applyDraftToForm = (draft: AgentDraft) => {
    window.dispatchEvent(
      new CustomEvent("arnab:prefill-contact", {
        detail: draft,
      })
    );
    const formSection = document.getElementById("send-message");
    formSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-lotus-indigo/20 bg-white/80 p-6 text-left shadow-xl backdrop-blur dark:border-lotus-paper/15 dark:bg-white/5 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-lotus-indigo/25">
            <Image src="/headshot.png" alt="" fill sizes="44px" className="object-cover" aria-hidden />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
              Interactive Concierge
            </p>
            <h2 className="font-nyu-ultra text-xl leading-tight md:text-2xl">
              Chat with Arnab&apos;s Agent First
            </h2>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
          Online
        </span>
      </div>

      {/* Starter prompt pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {STARTER_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={loading}
            onClick={() => sendMessage(prompt)}
            className="rounded-full border border-lotus-indigo/25 bg-lotus-paper px-3 py-1.5 text-xs font-semibold text-lotus-indigo transition hover:-translate-y-[1px] hover:border-lotus-indigo/60 disabled:opacity-50 dark:border-lotus-paper/20 dark:bg-white/10 dark:text-lotus-paper"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Conversation feed */}
      <div
        className="mt-5 max-h-[380px] space-y-4 overflow-y-auto rounded-2xl border border-lotus-indigo/15 bg-lotus-paper/80 p-4 dark:border-lotus-paper/10 dark:bg-black/30"
        aria-live="polite"
      >
        {turns.map((turn, index) => (
          <div
            key={index}
            className={`flex flex-col ${turn.role === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                turn.role === "user"
                  ? "bg-lotus-indigo text-lotus-paper shadow-sm"
                  : "border border-lotus-indigo/15 bg-white text-lotus-ink shadow-sm dark:border-lotus-paper/15 dark:bg-zinc-900 dark:text-lotus-paper"
              }`}
            >
              <p className="whitespace-pre-line">{turn.content}</p>

              {turn.suggestedLinks && turn.suggestedLinks.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {turn.suggestedLinks.map((link) => (
                    <Link
                      key={`${link.href}-${link.label}`}
                      href={link.href}
                      className="inline-flex items-center gap-1 rounded-lg border border-lotus-indigo/25 bg-lotus-paper/70 px-2.5 py-1 text-xs font-semibold text-lotus-indigo underline-offset-2 hover:underline dark:border-lotus-paper/20 dark:bg-white/10 dark:text-lotus-paper"
                    >
                      {link.label} &rarr;
                    </Link>
                  ))}
                </div>
              )}

              {(turn.draft || turn.recommendCalendar) && (
                <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-lotus-indigo/10 pt-3 dark:border-lotus-paper/10">
                  {turn.draft && (
                    <button
                      type="button"
                      onClick={() => applyDraftToForm(turn.draft!)}
                      className="inline-flex items-center rounded-xl bg-lotus-indigo px-3.5 py-2 text-xs font-semibold text-lotus-paper shadow transition hover:bg-lotus-ink"
                    >
                      Pre-fill message form below
                    </button>
                  )}
                  {turn.recommendCalendar && (
                    <Link
                      href="#book-now"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-lotus-indigo/30 px-3.5 py-2 text-xs font-semibold text-lotus-indigo transition hover:border-lotus-indigo/60 dark:border-lotus-paper/25 dark:text-lotus-paper"
                    >
                      Book a time on calendar
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-start">
            <div className="rounded-2xl border border-lotus-indigo/15 bg-white px-4 py-2.5 text-xs text-lotus-ink/70 dark:border-lotus-paper/15 dark:bg-zinc-900 dark:text-lotus-paper/70">
              Thinking&hellip;
            </div>
          </div>
        )}
      </div>

      {/* Input form */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage(input);
        }}
        className="mt-4 flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="concierge-input" className="sr-only">
          Ask Arnab&apos;s AI Concierge
        </label>
        <input
          id="concierge-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about Arnab's work, or describe what you'd like to collaborate on…"
          maxLength={400}
          className="flex-1 rounded-xl border border-lotus-indigo/25 bg-white px-3.5 py-2.5 text-sm text-lotus-ink shadow-sm transition placeholder:text-lotus-ink/40 focus:outline-none focus:ring-2 focus:ring-lotus-indigo dark:bg-white/5 dark:text-lotus-paper dark:placeholder:text-lotus-paper/40"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className={`${heroPrimaryButtonStyle} justify-center disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Ask Agent
        </button>
      </form>
    </div>
  );
};
