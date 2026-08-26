'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { themes, organisations, videos, type Org, type VideoTile } from "./istanbul-data";
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

const widths = [
  { name: "phone", query: "(max-width: 639px)" },
  { name: "tablet", query: "(min-width: 640px) and (max-width: 1023px)" },
] as const;

const subscribeToWidth = (changed: () => void) => {
  const lists = widths.map(({ query }) => window.matchMedia(query));
  lists.forEach((mq) => mq.addEventListener("change", changed));
  return () => lists.forEach((mq) => mq.removeEventListener("change", changed));
};

const readWidth = () =>
  widths.find(({ query }) => window.matchMedia(query).matches)?.name ?? "desktop";

/**
 * Which of Tailwind's sizes we are at, so the sliding sections can decide how
 * much fits on one screen. Read from the same breakpoints as the grid classes
 * they pair with, so a batch always fills its rows exactly.
 *
 * Subscribed rather than read in an effect, so the first client render already
 * knows the size — a link that opens one video by name needs the batch size to
 * be right the moment it lands, not a frame later.
 */
const useBreakpoint = () => useSyncExternalStore(subscribeToWidth, readWidth, () => "desktop");

/** One video at a time on a phone, a 2x2 batch on a tablet, a row of three. */
const videosPerBatch: Record<string, number> = { phone: 1, tablet: 4, desktop: 3 };

const Tile = ({
  video,
  playing,
  onPlay,
  reachable,
}: {
  video: VideoTile;
  playing: boolean;
  onPlay: () => void;
  reachable: boolean;
}) => (
  <div className="overflow-hidden rounded-2xl border border-purple-200/30 bg-white/5 p-4 backdrop-blur">
    <h3 className="font-semibold text-white">{video.title}</h3>
    <p className="mt-1 text-sm text-purple-100">{video.note}</p>

    <div className="mt-4">
      {playing ? (
        // Shorts are vertical, so the usual 16:9 is flipped. The box is sized
        // like the thumbnail it replaces, which keeps a batch's tiles level.
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black/40">
          <YouTubeEmbed
            videoid={video.id}
            height={400}
            width={700}
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={onPlay}
          // A tile in an off-screen batch is still in the document, so it is
          // taken out of the tab order rather than left as a hidden stop.
          tabIndex={reachable ? undefined : -1}
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
);

/**
 * Section 5 — a tile per video, a batch per screen, and the next batch slides
 * in from the right. Nothing embeds until it is chosen, so the page does not
 * pull three players on load.
 */
export const VideoWall = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  const [batch, setBatch] = useState(0);
  const perBatch = videosPerBatch[useBreakpoint()];
  const wall = useRef<HTMLDivElement>(null);

  // A link anywhere on the page can name a video by its slug — "#reading-cup"
  // brings the wall into view with that one already playing. The hash is put
  // back afterwards so pressing the same link a second time still fires.
  useEffect(() => {
    const open = () => {
      const slug = window.location.hash.slice(1);
      const index = slug ? videos.findIndex((v) => v.slug === slug) : -1;
      if (index < 0) return;

      setBatch(Math.floor(index / perBatch));
      setPlaying(videos[index].id);
      wall.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    };

    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, [perBatch]);

  const batches = useMemo(() => {
    const out: VideoTile[][] = [];
    for (let i = 0; i < videos.length; i += perBatch) out.push(videos.slice(i, i + perBatch));
    return out;
  }, [perBatch]);

  // Widening the window can leave the current batch past the end of the new,
  // shorter set, so the index is clamped on the way out rather than stored.
  const current = Math.min(batch, batches.length - 1);
  const single = perBatch === 1;

  const go = (next: number) => {
    setBatch((next + batches.length) % batches.length);
    // Whatever was playing has just left the screen; stop it rather than let
    // it carry on from off-stage.
    setPlaying(null);
  };

  return (
    <div ref={wall}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {batches.map((group, i) => (
            <div
              key={group[0].id}
              className="grid w-full shrink-0 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3"
              aria-hidden={i !== current}
            >
              {group.map((video) => (
                <Tile
                  key={video.id}
                  video={video}
                  playing={playing === video.id}
                  reachable={i === current}
                  onPlay={() => setPlaying(video.id)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {batches.length > 1 && (
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.28em] text-purple-200">
              {single
                ? `Video ${current + 1} of ${videos.length}`
                : `Set ${current + 1} of ${batches.length}`}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {batches.map((group, i) => (
                  <button
                    key={group[0].id}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to ${single ? "video" : "set"} ${i + 1}`}
                    aria-current={i === current}
                    className={classNames(
                      "h-2 w-2 rounded-full transition",
                      i === current ? "bg-purple-200" : "bg-white/25 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>

              {/* Arrows for the batched sizes; phones get the button below. */}
              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => go(current - 1)}
                  aria-label="Previous videos"
                  className={navBtn}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => go(current + 1)}
                  aria-label="Next videos"
                  className={navBtn}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* One video at a time on a phone, stepped by tapping. */}
          <button
            type="button"
            onClick={() => go(current + 1)}
            className="rounded-full border border-purple-200 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:hidden"
          >
            {current === batches.length - 1 ? "Back to the first" : "Show next"}
          </button>
        </div>
      )}
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

export type Panel = {
  src: string;
  alt: string;
  /** A photograph of a room is worth naming; a page of a booklet is not. */
  caption?: { name: string; note: string };
};

const PanelFrame = ({ panel }: { panel: Panel }) => (
  <figure
    className={classNames(
      "relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/40",
      panel.caption ? "h-[32rem]" : "h-[20rem] md:h-[30rem]"
    )}
  >
    {/* One is shot on a phone and comes out portrait, the next is a spread and
        comes out wide, so the frame is a fixed shape with the picture sat
        inside it whole, over a blurred copy of itself. Nothing is cropped. */}
    <Image
      src={panel.src}
      alt=""
      aria-hidden
      fill
      unoptimized
      className="scale-110 object-cover opacity-40 blur-2xl"
    />
    <Image
      src={panel.src}
      alt={panel.alt}
      fill
      unoptimized
      className={classNames("object-contain p-4", panel.caption && "pb-20")}
    />
    {panel.caption && (
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-5 pt-12">
        <p className="font-nyu-ultra text-lg leading-tight text-white md:text-xl">
          {panel.caption.name}
        </p>
        <p className="mt-1 text-sm text-purple-100">{panel.caption.note}</p>
      </figcaption>
    )}
  </figure>
);

/**
 * A run of photographs — the hosts' own rooms between sections 4 and 2, the
 * booklet pages inside section 3. A phone gets one at a time, sliding in from
 * the right; anything wider has room to show them side by side.
 */
export const PhotoStrip = ({ panels }: { panels: Panel[] }) => {
  const [index, setIndex] = useState(0);
  const oneAtATime = useBreakpoint() === "phone";

  // Every panel is on screen at once above the phone breakpoint, so there is
  // nothing to step through and the track stays put.
  const current = oneAtATime ? Math.min(index, panels.length - 1) : 0;
  const stepping = oneAtATime && panels.length > 1;

  if (panels.length === 0) return null;

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {oneAtATime ? (
            panels.map((panel, i) => (
              <div key={panel.src} className="w-full shrink-0" aria-hidden={i !== current}>
                <PanelFrame panel={panel} />
              </div>
            ))
          ) : (
            <div
              className={classNames(
                "grid w-full shrink-0 items-start gap-6",
                panels.length > 1 && "md:grid-cols-2"
              )}
            >
              {panels.map((panel) => (
                <PanelFrame key={panel.src} panel={panel} />
              ))}
            </div>
          )}
        </div>
      </div>

      {stepping && (
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.28em] text-purple-200">
              {current + 1} of {panels.length}
            </p>
            <div className="flex items-center gap-2">
              {panels.map((panel, i) => (
                <button
                  key={panel.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${panel.alt}`}
                  aria-current={i === current}
                  className={classNames(
                    "h-2 w-2 rounded-full transition",
                    i === current ? "bg-purple-200" : "bg-white/25 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIndex((current + 1) % panels.length)}
            className="rounded-full border border-purple-200 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {current === panels.length - 1 ? "Back to the first" : "Show next"}
          </button>
        </div>
      )}
    </div>
  );
};
