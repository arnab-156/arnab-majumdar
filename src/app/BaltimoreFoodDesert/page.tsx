import Image from "next/image";
import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import heroStyles from "../hero.module.css";

const title = "Where does Baltimore buy its groceries? | Baltimore Grocery Survey";
const description =
  "A 5-minute survey about where Baltimore residents shop, how they get there, and what they buy. No name required.";

export const metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

const SURVEY_URL = "https://form.jotform.com/263075465995068";

const stats = [
  {
    value: "28",
    caption: "full supermarkets among more than 500 grocery listings in Baltimore's business data",
  },
  {
    value: "77%",
    caption: "of city land is more than half a mile from a full supermarket",
  },
  {
    value: "1 in 4",
    caption: "Baltimore residents lived in a Healthy Food Priority Area in 2018",
  },
];

/** Opens the Jotform survey in a new tab. */
const SurveyButton = () => (
  <a
    href={SURVEY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-12 items-center rounded-xl bg-lotus-indigo px-6 py-3 text-base font-semibold text-lotus-paper shadow-lg transition hover:-translate-y-[2px] hover:bg-lotus-ink focus:outline-none focus:ring-2 focus:ring-lotus-indigo focus:ring-offset-2 focus:ring-offset-lotus-paper dark:bg-lotus-paper dark:text-lotus-indigo dark:hover:bg-white"
  >
    Take the 5-minute survey
  </a>
);

const eyebrow = "text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70";
const sectionHeading = "font-nyu-ultra text-3xl md:text-4xl";
const bodyText = "max-w-3xl text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85";

export default function BaltimoreFoodDesertPage() {
  return (
    <AnimationLayer
      as="main"
      className="flex min-h-screen flex-col overflow-x-clip font-nyu text-lotus-ink dark:text-lotus-paper"
      method="rise"
      distance={44}
      duration={760}
      threshold={0.12}
      rootMargin="0px 0px -12% 0px"
    >
      {/* HERO: kept compact so the survey button sits above the fold on phones. */}
      <section className="relative w-full overflow-hidden bg-lotus-paper px-6 pb-12 pt-14 dark:bg-[#101114] md:px-12 md:py-16">
        <div className={`${heroStyles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
        <div className={`${heroStyles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.5fr_0.5fr]">
          <div>
            <p className={eyebrow}>Research · Baltimore food access</p>
            <h1 className="mt-2 font-nyu-ultra text-4xl leading-tight md:text-6xl">
              Where does Baltimore buy its groceries?
            </h1>
            <aside className="mt-6 border-l-2 border-lotus-madder py-1 pl-6">
              <p className={bodyText}>
                I&apos;m Arnab Majumdar, and I study food access in Baltimore. Business data shows where food is sold.
                This survey asks where people actually shop, how they get there, and what would make fresh food easier
                to buy close to home.
              </p>
            </aside>
            <div className="mt-8">
              <SurveyButton />
              <p className="mt-3">
                <small className="text-sm text-lotus-ink/70 dark:text-lotus-paper/70">
                  Opens in Jotform. For adults 18 and older in the Baltimore area.
                </small>
              </p>
            </div>
          </div>

          {/* Beside the intro on desktop; below the button on phones, so the
              button stays above the fold. youtube-nocookie keeps YouTube from
              setting cookies until someone presses play. */}
          <figure className="mx-auto w-full max-w-[280px]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/2ZQQG0cRIc4"
              title="Baltimore Food Desert, a YouTube Short by Arnab Majumdar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="aspect-[9/16] w-full rounded-2xl border border-lotus-indigo/15 bg-lotus-ink shadow-xl dark:border-lotus-paper/15"
            ></iframe>
          </figure>
        </div>
      </section>

      {/* WHAT THE DATA SHOWS */}
      <section className="w-full bg-lotus-paper-deep px-6 py-16 dark:bg-[#16181c] md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className={sectionHeading}>What the data shows</h2>
          </Reveal>

          <AnimationLayer
            as="div"
            className="mt-8 grid gap-6 md:grid-cols-3"
            method="rise"
            distance={44}
            stagger={80}
            staggerCycle={3}
          >
            {stats.map((stat) => (
              <Reveal
                key={stat.value}
                as="div"
                className="rounded-2xl border border-lotus-indigo/15 bg-white/60 p-6 shadow-md dark:border-lotus-paper/15 dark:bg-white/5"
              >
                <p className="font-nyu-ultra text-5xl leading-none text-lotus-madder md:text-6xl">{stat.value}</p>
                <p className="mt-4 text-base leading-7 text-lotus-ink/80 dark:text-lotus-paper/80">{stat.caption}</p>
              </Reveal>
            ))}
          </AnimationLayer>
        </div>
      </section>

      {/* ABOUT THE SURVEY */}
      <section className="w-full bg-lotus-paper px-6 py-16 dark:bg-[#101114] md:px-12">
        <div className="mx-auto max-w-6xl space-y-14">
          <Reveal>
            <h2 className={sectionHeading}>What the survey asks</h2>
            <p className={`mt-4 ${bodyText}`}>
              It takes about 5 minutes and has 23 quick questions about where you shop, how you get there, what you
              buy, and roughly what you spend. You don&apos;t give your name, and only your ZIP code is required. At
              the end, you can choose to join a short, optional receipt study.
            </p>
          </Reveal>

          <Reveal>
            <h2 className={sectionHeading}>Who should take it</h2>
            <p className={`mt-4 ${bodyText}`}>
              Anyone 18 or older who lives in Baltimore City or Baltimore County. We especially want to hear from West
              Baltimore, East Baltimore, Brooklyn, and Curtis Bay, the areas farthest from a full supermarket.
            </p>
          </Reveal>

          <Reveal>
            <h2 className={sectionHeading}>How your answers are used</h2>
            <ul className={`mt-4 list-disc space-y-3 pl-6 marker:text-lotus-madder ${bodyText}`}>
              <li>Results are reported only as totals by ZIP code, never one person at a time.</li>
              <li>
                We don&apos;t ask your name. Contact details are collected only if you volunteer for the receipt
                study, and they&apos;re never shared.
              </li>
              <li>
                This research is run by Lotus Fruits / Coppin State University to help bring fresh food closer to home
                through Lotus Fruits.
              </li>
            </ul>
          </Reveal>

          <Reveal className="flex flex-wrap items-center gap-8">
            <SurveyButton />
            {/* For scanning off a projected screen at a talk, so phones don't need it. */}
            <figure className="hidden items-center gap-4 sm:flex">
              <Image
                src="/baltimore-grocery-survey-qr.svg"
                alt="QR code linking to the Baltimore Grocery Survey"
                width={128}
                height={128}
                className="rounded-lg border border-lotus-indigo/15 bg-white p-1 shadow-md"
                unoptimized
              />
              <figcaption className="max-w-[10rem] text-sm text-lotus-ink/70 dark:text-lotus-paper/70">
                Scan to open the survey on your phone.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="w-full bg-lotus-indigo px-6 py-14 text-lotus-paper md:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-nyu-ultra text-2xl md:text-3xl">Questions?</h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-lotus-paper px-5 py-3 text-sm font-semibold text-lotus-indigo shadow-lg transition hover:-translate-y-[2px] hover:bg-white focus:outline-none focus:ring-2 focus:ring-lotus-paper focus:ring-offset-2 focus:ring-offset-lotus-indigo"
          >
            Go to contact page
          </Link>
        </Reveal>
      </section>

      <footer className="w-full bg-lotus-paper-deep px-6 py-8 pb-24 dark:bg-[#16181c] md:px-12 lg:pb-16">
        <p className="mx-auto max-w-6xl">
          <small className="text-xs leading-6 text-lotus-ink/70 dark:text-lotus-paper/70">
            Sources: SimplyAnalytics business data for Baltimore City, August 2026; Johns Hopkins Center for a Livable
            Future and Baltimore Food Policy Initiative, <cite>Baltimore City&apos;s Food Environment: 2018 Report</cite>.
          </small>
        </p>
      </footer>
    </AnimationLayer>
  );
}
