import Image from "next/image";
import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import styles from "../hero.module.css";

export const metadata = {
  title: "Book a time | Arnab Majumdar",
  description: "Live availability for a conversation about strategy, retail technology or teaching work.",
};

export default function Help() {
  return (
    <AnimationLayer
      as="main"
      className="flex min-h-screen flex-col bg-lotus-paper font-nyu text-lotus-ink dark:bg-[#101114] dark:text-lotus-paper overflow-x-clip"
      method="rise"
      distance={44}
      duration={760}
      threshold={0.12}
      rootMargin="0px 0px -12% 0px"
    >
      {/* HERO */}
      <section className="relative w-full overflow-hidden px-6 py-12 md:px-12 md:py-16">
        <div className={`${styles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
        <div className={`${styles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

        <AnimationLayer
          as="div"
          className="relative mx-auto max-w-3xl text-left"
          method="alternate"
          distance={48}
          threshold={0}
          rootMargin="0px"
        >
          <Reveal method="left" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="relative h-8 w-8 shrink-0">
                <Image src="/calendar.svg" alt="" fill className="object-contain" aria-hidden unoptimized />
              </span>
              <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
                Book a time
              </p>
            </div>

            <h1 className="text-4xl font-nyu-ultra leading-tight md:text-5xl">Book your spot!</h1>

            <aside className="border-l-2 border-lotus-madder py-1 pl-6">
              <p className="text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
                Planning ahead? The calendar below shows live availability and stays up to date, so
                check back any time for new openings.
              </p>
            </aside>

            <Reveal method="left" delay={220} className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 text-sm text-lotus-ink/70 dark:text-lotus-paper/70">
              <Link href="/contact" className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper">
                <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                <span className="group-hover:underline">Rather write than talk? Send a message</span>
              </Link>
              {/* Hidden once the pair wraps onto separate lines, where a
                  separator reads as a stray character. */}
              <span className="hidden sm:inline text-lotus-ink/30 dark:text-lotus-paper/30" aria-hidden>&bull;</span>
              <Link href="/" className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper">
                <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                <span className="group-hover:underline">go back to home</span>
              </Link>
            </Reveal>
          </Reveal>
        </AnimationLayer>
      </section>

      {/* CALENDAR */}
      <section className="w-full px-4 pb-16 sm:px-6 md:px-12" id="book-now">
        <Reveal className="mx-auto w-full max-w-3xl">
          {/* The calendar keeps a white ground in both themes. Google styles the
              embed itself, and inverting it turned every colour strange. */}
          <div className="overflow-hidden rounded-3xl border border-lotus-indigo/20 bg-white p-2 shadow-xl sm:p-3 dark:border-lotus-paper/15">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ25585GXBIfMQn9F7wdhXvYhNQefhyvUd3Sg9q0DdHwiD0QAYQZiCDtI0AGM3jAVZ8zhHfz06G3?gv=true"
              title="Schedule time on my calendar"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // Fills its card and grows with the viewport instead of the old
              // fixed 1200px, which overshot every phone by a mile.
              className="h-[70vh] min-h-[520px] w-full rounded-2xl border-0 md:h-[820px]"
            />
          </div>
        </Reveal>

        {/* The hero carries the way home now; below a tall calendar what is
            actually useful is a way back up to it. */}
        <Reveal className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center gap-4">
          <Link
            href="#navigation"
            className="text-lotus-indigo underline underline-offset-4 hover:no-underline dark:text-lotus-paper/80"
          >
            go to top
          </Link>
        </Reveal>
      </section>
    </AnimationLayer>
  );
}
