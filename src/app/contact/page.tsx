import Image from "next/image";
import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import { AgentConcierge } from "./agent-concierge";
import { ContactForm } from "./contact-form";
import styles from "../hero.module.css";
import { heroOutlineButtonStyle, heroPrimaryButtonStyle } from "../utility/stylevariables";

export const metadata = {
  title: "Contact & Book a Time | Arnab Majumdar",
  description:
    "Send a message or book a live conversation about strategy, retail technology, accessibility, or education work.",
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
      <section className="relative w-full overflow-hidden px-6 py-12 md:px-12 md:py-16">
        <div className={`${styles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
        <div className={`${styles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

        <Reveal method="left" className="relative mx-auto max-w-3xl text-left">
          <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
            Get in touch
          </p>
          <h1 className="mt-2 font-nyu-ultra text-4xl leading-tight md:text-5xl">Contact</h1>
          <aside className="mt-4 border-l-2 border-lotus-madder py-1 pl-6">
            <p className="text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
              Strategy, retail technology, accessibility, or teaching work — write a message below and it
              comes straight to my inbox, or book a live conversation directly on my calendar.
            </p>
          </aside>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href="#assistant" className={heroPrimaryButtonStyle}>
              Chat with AI Concierge
            </Link>
            <Link href="#send-message" className={heroOutlineButtonStyle}>
              Send a message
            </Link>
            <Link href="#book-now" className={`${heroOutlineButtonStyle} gap-2`}>
              <Image
                src="/calendar.svg"
                alt=""
                width={18}
                height={18}
                aria-hidden
                unoptimized
              />
              Book a time
            </Link>
          </div>

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

      {/* AI CONCIERGE */}
      <section id="assistant" className="w-full scroll-mt-24 px-6 pb-12 md:px-12">
        <Reveal>
          <AgentConcierge />
        </Reveal>
      </section>

      {/* MESSAGE FORM */}
      <section id="send-message" className="w-full scroll-mt-24 px-6 pb-16 md:px-12">
        {/* Read here rather than in the client component: TURNSTILE_SITE_KEY
            has no NEXT_PUBLIC_ prefix, so only the server can see it. Passing
            it down is safe — a Turnstile site key is public by design, and
            appears in the markup of every site that uses one. */}
        <Reveal>
          <ContactForm siteKey={process.env.TURNSTILE_SITE_KEY ?? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
        </Reveal>
      </section>

      {/* CALENDAR BOOKING */}
      <section
        id="book-now"
        aria-labelledby="book-now-heading"
        className="w-full scroll-mt-24 bg-lotus-paper-deep px-4 py-16 dark:bg-[#16181c] sm:px-6 md:px-12"
      >
        <div className="mx-auto w-full max-w-3xl text-left">
          <Reveal className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="relative h-7 w-7 shrink-0">
                <Image src="/calendar.svg" alt="" fill className="object-contain" aria-hidden unoptimized />
              </span>
              <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
                Live availability
              </p>
            </div>
            <h2 id="book-now-heading" className="font-nyu-ultra text-3xl leading-tight md:text-4xl">
              Book a time
            </h2>
            <p className="text-lotus-ink/80 dark:text-lotus-paper/80">
              Planning ahead? The calendar below shows live availability and stays up to date, so
              check back any time for new openings.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            {/* The calendar keeps a white ground in both themes. Google styles the
                embed itself, and inverting it turned every colour strange. */}
            <div className="overflow-hidden rounded-3xl border border-lotus-indigo/20 bg-white p-2 shadow-xl sm:p-3 dark:border-lotus-paper/15">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ25585GXBIfMQn9F7wdhXvYhNQefhyvUd3Sg9q0DdHwiD0QAYQZiCDtI0AGM3jAVZ8zhHfz06G3?gv=true"
                title="Schedule time on my calendar"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="h-[70vh] min-h-[520px] w-full rounded-2xl border-0 md:h-[820px]"
              />
            </div>
          </Reveal>

          <Reveal className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="#navigation"
              className="text-lotus-indigo underline underline-offset-4 hover:no-underline dark:text-lotus-paper/80"
            >
              go to top
            </Link>
          </Reveal>
        </div>
      </section>
    </AnimationLayer>
  );
}
