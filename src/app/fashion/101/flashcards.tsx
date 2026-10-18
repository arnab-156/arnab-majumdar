"use client";

import { useMemo, useState } from "react";

import type { Chapter } from "./cards-data";

const pill = (active: boolean) =>
  `rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] transition ${
    active
      ? "border-lotus-indigo bg-lotus-indigo text-lotus-paper"
      : "border-lotus-indigo/25 text-lotus-indigo hover:border-lotus-indigo/60 dark:border-lotus-paper/25 dark:text-lotus-paper"
  }`;

const controlButton =
  "rounded-xl border border-lotus-indigo/30 px-4 py-2 text-sm font-semibold text-lotus-indigo transition hover:-translate-y-[2px] hover:border-lotus-indigo/60 disabled:opacity-40 disabled:hover:translate-y-0 dark:border-lotus-paper/25 dark:text-lotus-paper";

const shuffled = <T,>(items: T[]) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

/**
 * One deck at a time: pick a chapter (or all), click the card to flip it,
 * step through with the buttons or arrow keys, and mark the ones you know so
 * the deck shrinks to what is left.
 */
export const Flashcards = ({ chapters }: { chapters: Chapter[] }) => {
  const [chapterId, setChapterId] = useState<string>("all");
  const [order, setOrder] = useState<number[] | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<string>>(new Set());

  const deck = useMemo(() => {
    const source = chapterId === "all" ? chapters : chapters.filter((c) => c.id === chapterId);
    const all = source.flatMap((c) =>
      c.cards.map((card, i) => ({ ...card, key: `${c.id}-${i}`, chapter: c.title })),
    );
    const ordered = order ? order.map((i) => all[i]).filter(Boolean) : all;
    return ordered.filter((card) => !known.has(card.key));
  }, [chapters, chapterId, order, known]);

  const total = useMemo(
    () =>
      (chapterId === "all" ? chapters : chapters.filter((c) => c.id === chapterId)).reduce(
        (sum, c) => sum + c.cards.length,
        0,
      ),
    [chapters, chapterId],
  );

  const card = deck[Math.min(index, deck.length - 1)];

  const go = (step: number) => {
    if (!deck.length) return;
    setFlipped(false);
    setIndex((i) => (i + step + deck.length) % deck.length);
  };

  const pickChapter = (id: string) => {
    setChapterId(id);
    setOrder(null);
    setIndex(0);
    setFlipped(false);
  };

  const shuffle = () => {
    setOrder(shuffled(Array.from({ length: total }, (_, i) => i)));
    setIndex(0);
    setFlipped(false);
  };

  const markKnown = () => {
    if (!card) return;
    setKnown((prev) => new Set(prev).add(card.key));
    setFlipped(false);
    setIndex((i) => (deck.length > 1 ? i % (deck.length - 1) : 0));
  };

  const reset = () => {
    setKnown(new Set());
    setOrder(null);
    setIndex(0);
    setFlipped(false);
  };

  const done = total - deck.length;

  return (
    <div
      className="mx-auto max-w-3xl outline-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div className="flex flex-wrap gap-2" aria-label="Chapters">
        <button type="button" className={pill(chapterId === "all")} onClick={() => pickChapter("all")}>
          All
        </button>
        {chapters.map((c, i) => (
          <button
            type="button"
            key={c.id}
            className={pill(chapterId === c.id)}
            onClick={() => pickChapter(c.id)}
            title={c.title}
          >
            {i + 1}. {c.title}
          </button>
        ))}
      </div>

      {/* Progress: how much of this deck is marked known. */}
      <div className="mt-6 flex items-center gap-3 text-sm text-lotus-ink/70 dark:text-lotus-paper/70">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-lotus-indigo/10 dark:bg-white/10">
          <div
            className="h-full bg-lotus-madder transition-all"
            style={{ width: total ? `${(done / total) * 100}%` : "0%" }}
          />
        </div>
        <span>
          {done}/{total} known
        </span>
      </div>

      {card ? (
        <>
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="mt-6 block w-full [perspective:1200px]"
            aria-label={flipped ? "Show question" : "Show answer"}
          >
            <div
              className={`relative min-h-[18rem] w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                flipped ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              <div className="absolute inset-0 flex flex-col rounded-2xl border border-lotus-indigo/15 bg-white p-8 text-left shadow-xl [backface-visibility:hidden] dark:border-lotus-paper/15 dark:bg-[#1b1d22]">
                <span className="text-xs uppercase tracking-[0.2em] text-lotus-madder">{card.chapter}</span>
                <span className="my-auto font-nyu-ultra text-2xl leading-snug md:text-3xl">{card.front}</span>
                <span className="text-xs text-lotus-ink/50 dark:text-lotus-paper/50">Click to flip</span>
              </div>
              <div className="absolute inset-0 flex flex-col rounded-2xl bg-lotus-indigo p-8 text-left text-lotus-paper shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <span className="text-xs uppercase tracking-[0.2em] text-lotus-paper/60">{card.front}</span>
                <span className="my-auto text-lg leading-8 md:text-xl">{card.back}</span>
              </div>
            </div>
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              <button type="button" className={controlButton} onClick={() => go(-1)} disabled={deck.length < 2}>
                ← Prev
              </button>
              <button type="button" className={controlButton} onClick={() => go(1)} disabled={deck.length < 2}>
                Next →
              </button>
            </div>
            <span className="text-sm text-lotus-ink/60 dark:text-lotus-paper/60">
              {Math.min(index, deck.length - 1) + 1} of {deck.length}
            </span>
            <div className="flex gap-2">
              <button type="button" className={controlButton} onClick={shuffle}>
                Shuffle
              </button>
              <button
                type="button"
                className="rounded-xl bg-lotus-madder px-4 py-2 text-sm font-semibold text-lotus-paper transition hover:-translate-y-[2px]"
                onClick={markKnown}
              >
                I know this
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-lotus-madder/50 p-10 text-center">
          <p className="font-nyu-ultra text-2xl">Deck complete</p>
          <p className="mt-2 text-lotus-ink/70 dark:text-lotus-paper/70">You marked every card in this deck as known.</p>
          <button type="button" className={`${controlButton} mt-4`} onClick={reset}>
            Start over
          </button>
        </div>
      )}
    </div>
  );
};
