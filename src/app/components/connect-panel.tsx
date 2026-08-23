import Image from "next/image";
import Link from "next/link";

/**
 * "Let's connect" panel — the portrait over the LinkedIn link, in the shell the
 * homepage's "New Learnings!" card uses. Shared by the /experiences and /about
 * heroes so the two carry the same tile rather than two drifting copies.
 *
 * The caller supplies the entrance animation (wrap it in a `Reveal`) and the
 * grid cell; this renders the card and nothing around it.
 */
export const ConnectPanel = () => (
  <div className="rounded-3xl border border-lotus-indigo/20 bg-white/70 p-6 shadow-xl backdrop-blur dark:border-lotus-paper/15 dark:bg-white/5">
    <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
      Let&apos;s connect
    </p>

    <div className="mt-5 flex flex-col items-center gap-5">
      <span className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-lotus-indigo/25">
        <Image
          src="/headshot.png"
          alt="Portrait of Arnab Majumdar"
          fill
          sizes="112px"
          className="object-cover"
        />
      </span>

      <Link
        href="https://www.linkedin.com/in/arnab156/"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-3 rounded-xl border border-lotus-indigo/30 bg-white/60 px-4 py-3 text-sm font-semibold text-lotus-indigo shadow-sm transition hover:-translate-y-[2px] hover:border-lotus-indigo/60 dark:border-lotus-paper/25 dark:bg-white/5 dark:text-lotus-paper"
      >
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
          <Image src="/linkedin.svg" alt="" fill className="object-contain p-2" aria-hidden />
        </span>
        <span>
          Click to go to LinkedIn!
          <span className="block text-xs font-normal text-lotus-ink/60 group-hover:underline dark:text-lotus-paper/60">
            Opens in new tab
          </span>
        </span>
      </Link>
    </div>
  </div>
);
