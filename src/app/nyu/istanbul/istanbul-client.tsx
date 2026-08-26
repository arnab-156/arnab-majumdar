'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { themes, organisations, videos, type Org } from "./istanbul-data";
import styles from "./istanbul.module.css";

const classNames = (...v: Array<string | false | null | undefined>) => v.filter(Boolean).join(" ");

const navBtn =
  "rounded-full border border-purple-200 p-2 text-purple-100 transition hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent";

/**
 * Section 2 — the post-departure deck, one card at a time. Sixteen cards is a
 * lot to scroll past, so it is a deck you step through and can skip whole.
 */
export const ThemeDeck = () => {
  const [index, setIndex] = useState(0);
  const total = themes.length;
  const theme = themes[index];

  const go = (next: number) => setIndex((next + total) % total);

  return (
    <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.28em] text-purple-200">
          Theme {index + 1} of {total}
        </p>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous theme" className={navBtn}>
            ‹
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next theme" className={navBtn}>
            ›
          </button>
        </div>
      </div>

      {/* Keyed so each change replays the slide rather than swapping text. */}
      <div key={index} className={`${styles.slideIn} mt-5 min-h-[240px]`}>
        <h3 className="font-nyu-ultra text-2xl leading-tight text-white md:text-3xl">{theme.title}</h3>
        <ul className="mt-4 space-y-3">
          {theme.points.map((point) => (
            <li key={point} className="flex gap-3 text-purple-50">
              <span className="mt-[0.7em] h-px w-4 shrink-0 bg-purple-300" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {themes.map((t, i) => (
          <button
            key={t.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to ${t.title}`}
            aria-current={i === index}
            className={classNames(
              "h-2 w-2 rounded-full transition",
              i === index ? "bg-purple-200" : "bg-white/25 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Section 5 — a tile per video. Nothing embeds until it is chosen, so the page
 * does not pull three players on load.
 */
export const VideoWall = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <div
          key={video.id}
          className="overflow-hidden rounded-2xl border border-purple-200/30 bg-white/5 p-4 backdrop-blur"
        >
          <h3 className="font-semibold text-white">{video.title}</h3>
          <p className="mt-1 text-sm text-purple-100">{video.note}</p>

          <div className="mt-4">
            {playing === video.id ? (
              // Shorts are vertical, so the usual 16:9 is flipped.
              <div className="flex justify-center">
                <YouTubeEmbed videoid={video.id} height={560} width={315} />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(video.id)}
                className="group relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden rounded-xl bg-black/40"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt=""
                  fill
                  aria-hidden
                  unoptimized
                  className="object-cover opacity-70 transition group-hover:opacity-90"
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-xl text-[#2e0068] shadow-lg transition group-hover:scale-110">
                  ▶
                </span>
                <span className="sr-only">Play {video.title}</span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const OrgCard = ({ org, duplicate }: { org: Org; duplicate?: boolean }) => (
  <li
    className="me-6 flex w-[280px] shrink-0 flex-col rounded-2xl bg-white/95 p-5 text-left shadow-lg"
    {...(duplicate ? { "aria-hidden": true } : {})}
  >
    <p className="font-nyu-ultra text-sm uppercase leading-tight text-[#2e0068]">{org.name}</p>
    <ul className="mt-3 space-y-2">
      {org.speakers.map((s) => (
        <li key={s} className="text-xs leading-relaxed text-gray-700">
          {s}
        </li>
      ))}
    </ul>
    {org.href && !duplicate && (
      <Link
        href={org.href}
        target="_blank"
        rel="noreferrer"
        className="mt-3 text-xs font-semibold text-purple-800 underline underline-offset-4"
      >
        Visit
      </Link>
    )}
  </li>
);

/**
 * Section 4 — the hosts, scrolling like the client strip on /lotus. The track
 * holds the list twice so the -50% loop has no seam; the second copy is hidden
 * from assistive tech.
 */
export const CompanyMarquee = () => (
  <div className={`${styles.marquee} relative overflow-hidden`}>
    <ul className={`${styles.marqueeTrack} flex w-max list-none items-stretch`}>
      {organisations.map((o) => (
        <OrgCard key={o.name} org={o} />
      ))}
      {organisations.map((o) => (
        <OrgCard key={`${o.name}-dup`} org={o} duplicate />
      ))}
    </ul>
  </div>
);
