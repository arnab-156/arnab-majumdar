import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import { ConnectPanel } from "../components/connect-panel";

// One measure for the whole essay, so the prose reads as a column rather than
// as tiles.
const proseStyle = "text-lg leading-8 text-gray-700 dark:text-gray-200 font-nyu-thin";

export default function About() {
  return (
    <AnimationLayer
      as="main"
      className="flex min-h-screen flex-col items-center justify-between pb-60 overflow-x-clip"
      method="rise"
      distance={44}
      duration={760}
      threshold={0.12}
      rootMargin="0px 0px -12% 0px"
    >
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] text-white py-16 px-6 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

        <AnimationLayer
          as="div"
          className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center text-left"
          method="alternate"
          distance={48}
          threshold={0}
          rootMargin="0px"
        >
          <Reveal method="left" className="space-y-4">
            <p className="uppercase tracking-[0.3em] text-sm text-purple-100">About</p>
            <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">Arnab Majumdar</h1>
            <p className="text-lg md:text-xl text-purple-50 max-w-2xl">
              Sustainability &amp; Retail Tech Leader &mdash; Omnichannel Commerce, Store Experience,
              Accessibility (WCAG)
            </p>

            {/* The LinkedIn link that used to sit here now lives in the
                ConnectPanel opposite, so it is not offered twice in one hero. */}
            <Reveal method="left" delay={220} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/" className="underline text-purple-100">
                go back to home
              </Link>
            </Reveal>
          </Reveal>

          {/* The same tile /experiences carries, so the portrait and the
              LinkedIn route look identical on both pages. */}
          <Reveal method="right" delay={140} className="relative">
            <ConnectPanel />

            {/* Kept from the tile this replaced — otherwise /about loses its
                route to /experiences again. Outline in the hero's own palette,
                since lotus-indigo would be unreadable on this violet ground. */}
            <Link
              href="/experiences"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-[2px] hover:border-white/70 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              See experiences
            </Link>
          </Reveal>
        </AnimationLayer>
      </section>

      {/* ESSAY */}
      <section className="w-full px-6 md:px-12 py-16 text-left">
        <div className="mx-auto max-w-2xl space-y-8">
          <Reveal>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-900 dark:text-gray-50 font-nyu-thin">
              I work at the intersection of fashion, technology, and sustainability. My career started in
              factories and retail, launching private labels and new stores for one of India&rsquo;s largest
              retailers, and has evolved into building accessible, high-performing digital experiences for
              fashion and luxury brands. Today, I&rsquo;m an Executive MBA candidate at NYU Stern, specializing
              in Strategy, Sustainable Business &amp; Innovation, while founding and running Lotus Mahal, a
              creative and consulting studio.
            </p>
          </Reveal>

          <Reveal>
            <p className={proseStyle}>
              Through Lotus Mahal, I help organizations&mdash;from universities to restaurants to Pride
              festivals&mdash;turn strategy into measurable, tech-enabled outcomes, including institutional
              strategic planning frameworks, accessible website relaunches, and large-scale fashion
              programming.
            </p>
          </Reveal>

          <Reveal>
            <p className={proseStyle}>
              Previously, I led front-end and accessibility initiatives for Bonobos (Walmart &amp; EXPR), where
              I shipped e-commerce features that drove double-digit conversion gains and championed
              WCAG-compliant, inclusive design. Before that, at ShopRunner (FedEx Dataworks), I built core
              software frameworks that power large-scale retail technology. Earlier in my career, I served as a
              department chair, assistant professor, and instructor across multiple universities, weaving
              sustainability and technology into 100% of the fashion curriculum and helping double enrollments
              in fashion programs.
            </p>
          </Reveal>

          <Reveal>
            <p className={proseStyle}>
              My journey started with size-standardization projects for Indian consumers and has grown into a
              mission: to use technology to make fashion and consumer goods more sustainable, more inclusive,
              and more human.
            </p>
          </Reveal>

          <Reveal>
            <aside className="border-l-2 border-purple-700 dark:border-purple-400 pl-6 py-1">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-700 dark:text-purple-300">
                Focus areas
              </p>
              <p className="mt-3 text-lg leading-8 text-gray-900 dark:text-gray-50">
                Sustainable fashion &amp; consumer goods, digital strategy, e-commerce, accessibility (WCAG),
                front-end engineering, educational program-building, and brand development.
              </p>
            </aside>
          </Reveal>

          <Reveal>
            <aside className="border-l-2 border-purple-700 dark:border-purple-400 pl-6 py-1">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-700 dark:text-purple-300">
                Gallup CliftonStrengths
              </p>
              <p className="mt-3 text-lg leading-8 text-gray-900 dark:text-gray-50">
                Input, Achiever, Ideation, Futuristic, Learner.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

    </AnimationLayer>
  );
}
