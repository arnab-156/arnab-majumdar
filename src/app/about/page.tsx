import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import { ConnectPanel } from "../components/connect-panel";
import { heroOutlineButtonStyle } from "../utility/stylevariables";
import styles from "../hero.module.css";

// One measure for the whole essay, so the prose reads as a column rather than
// as tiles. Every paragraph shares the opening paragraph's larger setting, so
// the essay reads at one size from "I work at..." through to the last line.
const proseStyle = "text-xl md:text-2xl leading-relaxed text-gray-900 dark:text-gray-50 font-nyu-thin";

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
      <section className="relative w-full overflow-hidden bg-lotus-paper text-lotus-ink dark:bg-[#101114] dark:text-lotus-paper py-16 px-6 md:px-12">
        <div className={`${styles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
        <div className={`${styles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

        <AnimationLayer
          as="div"
          className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center text-left"
          method="alternate"
          distance={48}
          threshold={0}
          rootMargin="0px"
        >
          <Reveal method="left" className="space-y-4">
            <p className="uppercase tracking-[0.3em] text-sm text-lotus-indigo dark:text-lotus-paper/70">
              Sustainability &amp; Retail Tech Leader
            </p>
            <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">About Arnab</h1>

            {/* Moved up from the foot of the essay, in place of the old lede.
                Same treatment /experiences gives its "Focus areas" block:
                indigo label, madder rule. */}
            <aside className="border-l-2 border-lotus-madder pl-6 py-1">
              <p className="text-xs uppercase tracking-[0.3em] text-lotus-indigo dark:text-lotus-paper/70">
                Gallup CliftonStrengths
              </p>
              <p className="mt-3 text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
                Input, Achiever, Ideation, Futuristic, Learner.
              </p>
            </aside>

            {/* Button then underline link, as every hero here pairs them. The
                LinkedIn link that used to sit here now lives in the
                ConnectPanel opposite, so it is not offered twice in one hero. */}
            <Reveal method="left" delay={220} className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/experiences" className={heroOutlineButtonStyle}>
                  See experiences
                </Link>
                <Link href="/" className="underline underline-offset-4 text-lotus-indigo dark:text-lotus-paper/80">
                  go back to home
                </Link>
              </div>

              {/* Credential links in the homepage hero's style. The education
                  section lives on /experiences, so the first reaches across to
                  its anchor; the second goes to the NYU page as it does on the
                  homepage. */}
              <div className="space-y-2 text-sm text-lotus-ink/70 dark:text-lotus-paper/70">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <Link
                    href="/experiences#my-education"
                    className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper"
                  >
                    <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                    <span className="group-hover:underline">See my education</span>
                  </Link>
                  {/* Hidden once the two links wrap onto their own lines, where a
                      separator between them reads as a stray character. */}
                  <span className="hidden sm:inline text-lotus-ink/30 dark:text-lotus-paper/30" aria-hidden>&bull;</span>
                  <Link
                    href="/nyu"
                    className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper"
                  >
                    <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                    <span className="group-hover:underline">Follow my NYU Journey</span>
                  </Link>
                </div>

                {/* Its own row at every width, rather than joining the wrap
                    above — this one is an action, not a credential. */}
                <div>
                  <Link
                    href="/help"
                    className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper"
                  >
                    <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                    <span className="group-hover:underline">Contact me</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </Reveal>

          {/* The same tile /experiences carries, so the portrait and the
              LinkedIn route look identical on both pages. */}
          <Reveal method="right" delay={140} className="relative">
            <ConnectPanel />
          </Reveal>
        </AnimationLayer>
      </section>

      {/* ESSAY */}
      <section className="w-full px-6 md:px-12 py-16 text-left">
        <div className="mx-auto max-w-2xl space-y-8">
          <Reveal>
            <p className={proseStyle}>
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

          {/* "Focus areas" moved to the /experiences hero; the Gallup
              strengths moved up into this page's own hero. */}
        </div>
      </section>

    </AnimationLayer>
  );
}
