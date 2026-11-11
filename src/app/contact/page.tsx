import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import { ContactCarousel } from "./contact-carousel";
import styles from "../hero.module.css";

export const metadata = {
  title: "Contact & Book a Time | Arnab Majumdar",
  description:
    "Chat with Agador (Arnab's Concierge), send a message, or book a live conversation about strategy, retail technology, accessibility, or education work.",
};

export default function ContactPage() {
  return (
    <AnimationLayer
      as="main"
      className="flex min-h-screen flex-col overflow-x-clip bg-lotus-paper font-nyu text-lotus-ink dark:bg-[#101114] dark:text-lotus-paper"
      method="rise"
      distance={44}
      duration={760}
      threshold={0.12}
      rootMargin="0px 0px -12% 0px"
    >
      {/* HERO */}
      <section className="relative w-full overflow-hidden px-6 pt-12 pb-8 md:px-12 md:pt-16 md:pb-10">
        <div className={`${styles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
        <div className={`${styles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

        <Reveal method="left" className="relative mx-auto max-w-3xl text-left">
          <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
            Get in touch
          </p>
          <h1 className="mt-2 font-nyu-ultra text-4xl leading-tight md:text-5xl">Contact</h1>
          <aside className="mt-4 border-l-2 border-lotus-madder py-1 pl-6">
            <p className="text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
              Strategy, retail technology, accessibility, or teaching work &mdash; chat with{" "}
              <strong>Agador</strong> (my AI Concierge), write a message straight to my inbox, or book a
              live conversation on my calendar.
            </p>
          </aside>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-lotus-ink/70 dark:text-lotus-paper/70">
            <Link href="/" className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper">
              <span className="h-px w-5 bg-lotus-madder" aria-hidden />
              <span className="group-hover:underline">go back to home</span>
            </Link>
            <span className="hidden sm:inline text-lotus-ink/30 dark:text-lotus-paper/30" aria-hidden>&bull;</span>
            <Link
              href="https://www.linkedin.com/in/arnab156/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper"
            >
              <span className="h-px w-5 bg-lotus-madder" aria-hidden />
              <span className="group-hover:underline">LinkedIn</span>
            </Link>
            <span className="hidden sm:inline text-lotus-ink/30 dark:text-lotus-paper/30" aria-hidden>&bull;</span>
            <Link
              href="https://bsky.app/profile/thisisarnab.bsky.social"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper"
            >
              <span className="h-px w-5 bg-lotus-madder" aria-hidden />
              <span className="group-hover:underline">Bluesky</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SLIDING CAROUSEL: CHAT -> MESSAGE -> CALENDAR */}
      <Reveal>
        <ContactCarousel siteKey={process.env.TURNSTILE_SITE_KEY ?? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
      </Reveal>
    </AnimationLayer>
  );
}
