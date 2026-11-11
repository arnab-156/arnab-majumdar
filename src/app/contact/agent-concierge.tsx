"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { AgentDraft, AgentLink, AgentResponsePayload } from "../api/agent/route";
import { heroPrimaryButtonStyle } from "../utility/stylevariables";

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
        "Hi! I'm Agador Spartacus, Arnab's Concierge. Ask me anything about his work in strategy, retail technology, WCAG accessibility, education, or his NYU Stern Executive MBA — or tell me what you're working on and I'll pre-fill the message form or slide you over to his calendar.",
      suggestedLinks: [
        { label: "Slide to Message Form", href: "#send-message" },
        { label: "Slide to Calendar", href: "#book-now" },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const goToSlideHash = (hash: string) => {
    window.dispatchEvent(
      new CustomEvent("arnab:contact-slide", {
        detail: { slug: hash.replace(/^#/, "") },
      })
    );
  };

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
            "I'd be happy to help you connect with Arnab using the message form or calendar slides.",
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
            "You can write to Arnab directly on the Message slide, or pick a live slot on his Calendar slide.",
          suggestedLinks: [
            { label: "Slide to Message Form", href: "#send-message" },
            { label: "Slide to Calendar", href: "#book-now" },
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
    goToSlideHash("send-message");
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-lotus-indigo/20 bg-lotus-paper p-6 text-left shadow-xl dark:border-lotus-paper/15 dark:bg-white/5 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-lotus-indigo/25">
            <Image src="/headshot.png" alt="" fill sizes="44px" className="object-cover" aria-hidden />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
              Arnab&apos;s Concierge:
            </p>
            <h2 className="font-nyu-ultra text-xl leading-tight md:text-2xl">
              Agador Spartacus
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
            className="rounded-full border border-lotus-indigo/25 bg-white/80 px-3 py-1.5 text-xs font-semibold text-lotus-indigo transition hover:-translate-y-[1px] hover:border-lotus-indigo/60 disabled:opacity-50 dark:border-lotus-paper/20 dark:bg-white/10 dark:text-lotus-paper"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Conversation feed */}
      <div
        className="mt-5 max-h-[380px] space-y-4 overflow-y-auto rounded-2xl border border-lotus-indigo/15 bg-white/70 p-4 dark:border-lotus-paper/10 dark:bg-black/30"
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
                  : "border border-lotus-indigo/15 bg-lotus-paper text-lotus-ink shadow-sm dark:border-lotus-paper/15 dark:bg-zinc-900 dark:text-lotus-paper"
              }`}
            >
              <p className="whitespace-pre-line">{turn.content}</p>

              {turn.suggestedLinks && turn.suggestedLinks.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {turn.suggestedLinks.map((link) => {
                    if (link.href.startsWith("#")) {
                      return (
                        <button
                          key={`${link.href}-${link.label}`}
                          type="button"
                          onClick={() => goToSlideHash(link.href)}
                          className="inline-flex items-center gap-1 rounded-lg border border-lotus-indigo/25 bg-white/80 px-2.5 py-1 text-xs font-semibold text-lotus-indigo underline-offset-2 hover:underline dark:border-lotus-paper/20 dark:bg-white/10 dark:text-lotus-paper"
                        >
                          {link.label} &rarr;
                        </button>
                      );
                    }
                    return (
                      <Link
                        key={`${link.href}-${link.label}`}
                        href={link.href}
                        className="inline-flex items-center gap-1 rounded-lg border border-lotus-indigo/25 bg-white/80 px-2.5 py-1 text-xs font-semibold text-lotus-indigo underline-offset-2 hover:underline dark:border-lotus-paper/20 dark:bg-white/10 dark:text-lotus-paper"
                      >
                        {link.label} &rarr;
                      </Link>
                    );
                  })}
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
                      Pre-fill message form &rarr;
                    </button>
                  )}
                  {turn.recommendCalendar && (
                    <button
                      type="button"
                      onClick={() => goToSlideHash("book-now")}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-lotus-indigo/30 px-3.5 py-2 text-xs font-semibold text-lotus-indigo transition hover:border-lotus-indigo/60 dark:border-lotus-paper/25 dark:text-lotus-paper"
                    >
                      Book a time on calendar &rarr;
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-start">
            <div className="rounded-2xl border border-lotus-indigo/15 bg-white px-4 py-2.5 text-xs text-lotus-ink/70 dark:border-lotus-paper/15 dark:bg-zinc-900 dark:text-lotus-paper/70">
              Agador is thinking&hellip;
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
          Chat with Agador
        </label>
        <input
          id="concierge-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask Agador about Arnab's work, or describe what you'd like to collaborate on…"
          maxLength={400}
          className="flex-1 rounded-xl border border-lotus-indigo/25 bg-white px-3.5 py-2.5 text-sm text-lotus-ink shadow-sm transition placeholder:text-lotus-ink/40 focus:outline-none focus:ring-2 focus:ring-lotus-indigo dark:bg-white/5 dark:text-lotus-paper dark:placeholder:text-lotus-paper/40"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className={`${heroPrimaryButtonStyle} justify-center disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Chat with Agador
        </button>
      </form>
    </div>
  );
};
