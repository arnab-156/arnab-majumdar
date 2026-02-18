"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { buttonStyle } from "@/app/utility/stylevariables";

type CongruenceSlide = {
  title: string;
  subtitle: string;
  body: string;
  buttonText: string;
};

const coreValues = ["Creativity", "Determination", "Justice", "Collaboration", "Love"];

const congruenceSlides: CongruenceSlide[] = [
  {
    title: "Input",
    subtitle: "What I am working with",
    body: "Context (market, politics, culture), stakeholder expectations, constraints, and the resources we actually have: time, talent, and budget. I also name non-negotiables: values, ethics, and risk limits.",
    buttonText: "Next: Strategy ->",
  },
  {
    title: "Strategy",
    subtitle: "What we choose to do, and what we choose not to do",
    body: "Clear priorities, a small set of goals, and how we plan to win. This is where I translate values into decisions, and tradeoffs into focus.",
    buttonText: "Next: Transformation ->",
  },
  {
    title: "Transformation",
    subtitle: "How work happens day-to-day",
    body: "The operating system: team norms, incentives, decision rights, rituals, communication cadence, and tools. This is where alignment becomes behavior, not slogans.",
    buttonText: "Next: Output ->",
  },
  {
    title: "Output",
    subtitle: "What success looks like, and how we measure it",
    body: "Results (growth, impact, quality), but also sustainability: trust, retention, learning speed, and wellbeing. If outputs disappoint, I loop back to find the mismatch upstream.",
    buttonText: "Restart: Input",
  },
];

const leadershipFrameworkTiles = [
  {
    title: "Resilience and bricolage (Coutu)",
    body: "Resilience is not a personality trait, it is a practiced skill. Under pressure, progress comes from resourcefulness, small experiments, and refusing to panic.",
  },
  {
    title: "Influence vs. power (Balog and Haimson)",
    body: "Power can be assigned, influence must be earned. I try to earn influence by listening well, building trust, and staying accountable to people affected by decisions.",
  },
  {
    title: "Range and the strength of generalists (Epstein)",
    body: "Being a generalist is a leadership advantage in a complex world. I connect dots across domains and bring specialists together to solve real problems.",
  },
  {
    title: "Failure-tolerant leadership (Farson and Keyes)",
    body: "Innovation requires psychological safety. I prioritize learn-fast, no-blame systems that reward learning, not perfection.",
  },
  {
    title: "High-Performance Pyramid (Loehr and Schwartz)",
    body: "Performance is built on routines that protect physical, emotional, mental, and spiritual energy. I treat my schedule like training, not a to-do list.",
  },
  {
    title: "Strengths-based leadership (Gallup CliftonStrengths)",
    body: "I lead by leaning into strengths, especially learning and curiosity, and designing workflows that make those strengths useful to others.",
  },
];

const shortTermCommitments = [
  "Establish consistent rituals supporting mental and physical fitness.",
  "Complete the EMBA curriculum with active engagement and collaboration.",
  "Fulfill my role as Class Representative with empathy and courage.",
  "Build relationships with 2-3 mentors across the NYU network.",
  "Maintain and deepen ties with family, close friends, and mentors while thoughtfully expanding my professional network.",
  "Review and adjust my Weekly Activity Plan monthly.",
];

const longTermCommitments = [
  "Lead an organization or initiative where justice, equity, and collaboration are foundational values.",
  "Build diverse, high-performing teams that balance creativity and accountability.",
  "Create a leadership culture that measures success through innovation, inclusion, and well-being.",
];

const expectations = [
  "Builds trust quickly through listening and follow-through.",
  "Creates no-blame systems that improve performance.",
  "Pushes for innovation without sacrificing people.",
  "Treats collaboration as a discipline, not a buzzword.",
];

export default function LeadershipCommitmentPlanPage() {
  const [congruenceIndex, setCongruenceIndex] = useState(0);
  const [frameworkIndex, setFrameworkIndex] = useState(0);

  const activeCongruence = congruenceSlides[congruenceIndex];
  const activeFramework = leadershipFrameworkTiles[frameworkIndex];

  const nextCongruence = () => {
    setCongruenceIndex((index) => (index + 1) % congruenceSlides.length);
  };

  const nextFramework = () => {
    setFrameworkIndex((index) => (index + 1) % leadershipFrameworkTiles.length);
  };

  return (
    <>
      <Head>
        <title>Leadership Commitment Plan | NYU Stern EMBA</title>
        <meta
          name="description"
          content="Arnab Majumdar's one-year leadership commitments plan: values, congruence model, commitments, and rituals."
        />
      </Head>

      <main className="font-nyu bg-white text-gray-900 dark:bg-black dark:text-gray-100 min-h-screen pb-12">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] text-white py-16 px-6 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

          <div className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-100">NYU Stern EMBA</p>
              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">Leadership is the act of continuously becoming.</h1>
              <p className="text-lg md:text-xl text-purple-50">
                I turn values into repeatable rituals, and rituals into results across school, work, and community.
              </p>
              <p className="text-purple-100/90 max-w-2xl">
                My leadership plan is simple: ritualize what I believe into small, achievable practices so I can grow with consistency, not burnout.
                Innovation is my engine, and belonging is my compass.
              </p>

              <div className="flex gap-3 flex-wrap">
                <Link href="/nyu#projects" className={buttonStyle}>
                  Back to NYU
                </Link>
                <Link href="#congruence-model" className="underline text-purple-100">
                  Jump to model
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl border border-white/20">
              <h2 className="text-xl font-semibold">Plan anchors</h2>
              <ul className="mt-4 space-y-2 text-sm text-purple-100">
                <li>- Values become rituals.</li>
                <li>- Rituals become systems.</li>
                <li>- Systems create resilient outcomes.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-nyu-ultra">My leadership lens (values first)</h2>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                I lead with five core values: creativity, determination, justice, collaboration, and love. These values were earned through
                migration, rebuilding, and learning how communities survive and thrive. My goal is to build environments where people feel safe
                contributing and where diverse perspectives become an advantage.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {coreValues.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-900/40 px-4 py-2 text-sm font-semibold text-purple-800 dark:text-purple-100"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="congruence-model" className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#0f0a1f] dark:via-[#0b061a] dark:to-[#120d29] py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-nyu-ultra">Congruence Model (interactive)</h2>
              <p className="text-gray-700 dark:text-gray-200">
                This model is my alignment check. When results feel off, it is usually not effort, it is misfit. I use this framework to make
                sure what we put in (inputs) matches what we choose (strategy), how we operate (transformation), and what we produce (outputs).
              </p>
              <p className="text-sm uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300">
                Click the tile to move through the model: Input to Strategy to Transformation to Output.
              </p>
            </div>

            <article
              onClick={nextCongruence}
              className="cursor-pointer rounded-2xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#0f0a1f] shadow-lg p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300">
                Step {congruenceIndex + 1} of {congruenceSlides.length}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#2e0068] dark:text-purple-100">{activeCongruence.title}</h3>
              <p className="mt-2 text-base font-medium text-gray-700 dark:text-gray-200">{activeCongruence.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-100">{activeCongruence.body}</p>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextCongruence();
                }}
                className="mt-5 rounded-lg border border-purple-200 dark:border-purple-700 bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-purple-700"
              >
                {activeCongruence.buttonText}
              </button>
            </article>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              If one element is misaligned, performance suffers. If all four reinforce each other, teams move faster with less friction.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-5">
            <h2 className="text-3xl font-nyu-ultra">Leadership frameworks in practice</h2>
            <p className="text-purple-100">
              Each tile is one framework. Click the tile or button to rotate through all six.
            </p>

            <article
              onClick={nextFramework}
              className="cursor-pointer rounded-2xl border border-purple-200/40 bg-white/10 p-6 shadow-xl transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-purple-100">
                Tile {frameworkIndex + 1} of {leadershipFrameworkTiles.length}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{activeFramework.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-purple-50">{activeFramework.body}</p>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextFramework();
                }}
                className="mt-5 rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                Next tile
              </button>
            </article>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-nyu-ultra">My commitments</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-6">
                <h3 className="text-xl font-semibold text-[#2e0068] dark:text-purple-100">Short-term commitments (next 12 months)</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-100">
                  {shortTermCommitments.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-6">
                <h3 className="text-xl font-semibold text-[#2e0068] dark:text-purple-100">Long-term commitments (3-5 years)</h3>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">
                  My long-term aim is a leadership role in which justice and equity are the mission and active collaboration is the method.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-100">
                  {longTermCommitments.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#0f0a1f] dark:via-[#0b061a] dark:to-[#120d29] py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-4">
            <h2 className="text-3xl font-nyu-ultra">How I will stay on track (rituals, not wishes)</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              My plan works only if it shows up on my calendar. I use simple anchors: meditation, fitness (tennis and gym), deep-work blocks for
              school and projects, and intentional time with my spouse and close relationships. I run a monthly review to rebalance time, reduce
              overcommitment, and protect recovery before burnout makes decisions for me.
            </p>
          </div>
        </section>

        <section className="bg-[#0c041a] text-white dark:bg-white dark:text-gray-900 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-nyu-ultra">What you can expect from me</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {expectations.map((item) => (
                <article
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-lg dark:border-purple-200 dark:bg-purple-50"
                >
                  <p className="text-sm leading-relaxed text-purple-50 dark:text-[#2e0068]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto rounded-3xl border border-purple-100 dark:border-purple-900 bg-gradient-to-br from-purple-50 to-white dark:from-[#140b27] dark:to-[#0b0618] p-8 md:p-10 text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-700 dark:text-purple-300">Call to action</p>
            <h2 className="text-3xl md:text-4xl font-nyu-ultra text-[#2e0068] dark:text-purple-100">Let us build something worth belonging to.</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Change: dare it, dream it, drive it.
            </p>
            <div className="pt-2">
              <Link href="/help" className={buttonStyle}>
                Work with me
              </Link>
            </div>
          </div>
        </section>
        <div className="pt-8 pb-10 md:pb-0 text-center">
          <Link href="#navigation" className="hover:underline text-purple-800">go to top</Link>
        </div>
      </main>
    </>
  );
}
