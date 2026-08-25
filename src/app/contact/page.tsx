import Image from "next/image";
import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import { ContactForm } from "./contact-form";
import styles from "../hero.module.css";

export const metadata = {
  title: "Contact | Arnab Majumdar",
  description: "Send a message about strategy, retail technology, accessibility or education work.",
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

        <Reveal method="left" className="relative mx-auto max-w-2xl text-left">
          <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
            Get in touch
          </p>
          <h1 className="mt-2 font-nyu-ultra text-4xl leading-tight md:text-5xl">Contact</h1>
          <aside className="mt-4 border-l-2 border-lotus-madder py-1 pl-6">
            <p className="text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
              Strategy, retail technology, accessibility, or teaching work — write here and it comes
              straight to my inbox. If you would rather talk,{" "}
              {/* Same calendar mark the footer used to carry, so the booking
                  route keeps its familiar icon now that the footer links here. */}
              <Link
                href="/help"
                className="inline-flex items-baseline gap-1.5 text-lotus-indigo underline underline-offset-4 dark:text-lotus-paper"
              >
                <Image
                  src="/calendar.svg"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden
                  unoptimized
                  className="translate-y-[3px]"
                />
                book a time instead
              </Link>
              .
            </p>
          </aside>

          {/* Same credential-link treatment the other heroes use. Only the way
              home lives here — the lede above already offers the booking
              route, and two links to /help in one hero is one too many. */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-lotus-ink/70 dark:text-lotus-paper/70">
            <Link href="/" className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper">
              <span className="h-px w-5 bg-lotus-madder" aria-hidden />
              <span className="group-hover:underline">go back to home</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="w-full px-6 pb-20 md:px-12">
        {/* Read here rather than in the client component: TURNSTILE_SITE_KEY
            has no NEXT_PUBLIC_ prefix, so only the server can see it. Passing
            it down is safe — a Turnstile site key is public by design, and
            appears in the markup of every site that uses one. */}
        <Reveal>
          <ContactForm siteKey={process.env.TURNSTILE_SITE_KEY ?? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
        </Reveal>
      </section>

    </AnimationLayer>
  );
}
