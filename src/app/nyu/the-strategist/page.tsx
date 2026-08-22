"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AnimationLayer, Reveal } from "@/app/components/animation";
import { buttonStyle } from "@/app/utility/stylevariables";

const COMBINATION_DECK =
  "https://docs.google.com/presentation/d/1kuwHzRJTtYZvLutOue15re6QKDuSfYK-NpIS7TpykUo/edit?usp=sharing";

const premise =
  "The Strategist rests on a single premise: creativity in strategy is not a gift but a craft, made up of four moves — Constraint, Combination, Contrast, and Context — that anyone can learn to apply to any problem.";

const learningOutcomes = [
  {
    c: "Constraint",
    text: "Turn a constraint into a starting point. Read a limit — budget, access, credentials, infrastructure — as the brief for a strategy rather than the reason there isn’t one.",
  },
  {
    c: "Combination",
    text: "Create value by recombining what already exists. Recognize that most novelty comes from assembling inherited parts in a new configuration, not from inventing at zero.",
  },
  {
    c: "Contrast",
    text: "Name the assumption everyone treats as fixed — then test it. Surface the conventional wisdom holding an industry in place, and ask what becomes possible if it turns out to be false.",
  },
  {
    c: "Context",
    text: "Move an idea across fields by analogy. Borrow a solved problem from one context as the lead for an unsolved one in another, and learn from outsiders, extreme users, and non-customers.",
  },
];

const courseFocus = [
  "Be observant. Strategy begins before the plan — with noticing what is actually in front of you: what people do, what they avoid, what is missing, and what everyone has quietly stopped questioning.",
  "Look at nature, and outside your own field. Every ecosystem is already running a strategy. A forest, a crocodile, a loom, a garden — each holds a lesson that transfers, if you are willing to look sideways for it.",
  "Create by adding and by removing. Combination adds; constraint subtracts. Both generate. The strategist’s job is not to describe the picture but to paint the terrain — to be a creator, not a commentator.",
];

const fourCs = [
  {
    c: "Constraint",
    subject: "Tulsi Tanti and Suzlon Energy",
    body: "Tulsi Tanti never set out to build an energy company. He was a textile manufacturer in 1990s India whose factory was strangled by unreliable, expensive power. Most operators in his position treated that as the cost of doing business. Tanti treated it as a brief. He bought wind turbines to run his own mill — and found that the problem he had solved for himself was one every industrial firm in the country shared. Suzlon was founded in 1995 out of that realization, and constraint kept shaping it: customers who could not fund projects upfront produced a financing model that lowered the barrier to adoption; a supply chain he could not rely on produced vertical integration and acquisition. The founding limitation never left the logic of the company.",
    takeaway:
      "A constraint is a question about an unmet need. If it binds on you, it is probably binding on a market.",
  },
  {
    c: "Combination",
    subject: "Ustad Ahmad Ma’mar Lahori and the Taj Mahal",
    body: "Lahori was asked for something without precedent: a tomb that was also a monument to love, and a piece of state infrastructure projecting Mughal permanence. In a seventeenth-century world with limited access to outside ideas, he did not invent — he recombined. He took the form of Humayun’s tomb, designed by the Persian architect Mirak Mirza, and joined it to the minarets of Jahangir’s tomb in Lahore, which carried Turkic influence. He fused Persian charbagh garden geometry with indigenous Indian materials and craft, red sandstone with white marble, a mosque with a guest house. What came out was a new style — Indo-Islamic architecture — and a building that outlived the empire that commissioned it.",
    takeaway:
      "Power is built through assembly. The parts are usually already in the room; the strategy is the configuration.",
    deck: {
      label: "Open the Combination: Architecture deck",
      url: COMBINATION_DECK,
    },
  },
  {
    c: "Contrast",
    subject: "Richard Williams",
    body: "Everything about professional tennis said champions were made one way: private academies, junior circuits, country-club access, generational money. Richard Williams built a plan that contradicted nearly all of it. He worked at a country club, noticed that a tournament winner’s check was larger than his salary, and reverse-engineered a path from public courts and discarded balls. He trained his daughters against criticism and bias as deliberately as he trained their footwork, and he kept education and identity inside the plan rather than sacrificing them to it. Venus and Serena did not only win. They changed who could imagine belonging in the sport at all.",
    takeaway:
      "Contrast is not contrarianism. It is identifying the assumption an industry has stopped examining, and being willing to become the proof that it is false.",
  },
  {
    c: "Context",
    subject: "Charles Babbage and the Jacquard Loom",
    body: "Babbage was a mathematician, but the idea that made him matter came off the textile floor. Joseph-Marie Jacquard’s loom used punched cards to control complex woven patterns: a hole gave the machine one instruction, its absence gave another, and a design could be read and repeated indefinitely. Babbage looked past the cloth. What the loom proved was that instructions could live outside a machine and still direct it — and he carried that logic into the Analytical Engine, the first design for a programmable computer. It was never fully built in his lifetime. The transfer held anyway.",
    takeaway:
      "Having worked in both fashion and technology, this one is personal. The answer to your problem is often already solved — well — in an industry that has never heard of you.",
  },
];

const manifesto = [
  "I came into this course thinking strategy was a plan made from the top: terrain studied, orders given, objectives taken. I now think it is closer to a forest. Everyone runs their own function so that all can thrive, and your position decides whether you are in a fight or standing alone in a clearing.",
  "Strategy is not inevitable. It is shaped, revised, and tested. It takes analysis, but also imagination, empathy, buy-in, and judgment — the willingness to understand what resources are truly available, what hidden forces are at work, and what must be protected.",
  "I collect ideas, stories, patterns, and analogies. My advantage is not that I have followed one straight road; it is that I have moved across many terrains — factories, classrooms, product teams, retail floors, startups, two countries — and learned to carry insight from one to the next. Constraints forced that resourcefulness on me, and I have come to see resourcefulness as a strategy in its own right.",
  "So I will treat strategy as a discipline rather than an academic exercise. I will ask of any activity whether it increases value, creates differentiation, or widens the gap between willingness-to-pay and cost — and if it does not deepen purpose or build capability, I will question whether it deserves my time. I will keep reading beyond business: nature, design, technology, history, human behavior. I will test ideas small before committing large. I will invite disagreement early, because strategy without challenge becomes self-deception.",
  "I want to be the learner who sees patterns, the builder who works within constraints, the outsider who notices what insiders overlook, and the leader who helps others believe in a path forward.",
  "Strategy is more than winning. Sometimes it is surviving and finding a way. Sometimes it is thriving. Sometimes it is knowing when to turn back before the summit. The strongest strategist is not the person most attached to the original plan — it is the person who can still think clearly when the weather changes.",
];

const fourQuestions = [
  "What do I have?",
  "What do I lack?",
  "What can I combine?",
  "What can I learn from another context?",
];

const pullQuotes = [
  "“The parts are usually already in the room. The strategy is the configuration.”",
  "“A constraint is a question about an unmet need.”",
  "“The strongest strategist is the one who can still think clearly when the weather changes.”",
  "“The world is large enough for many champions.”",
];

const TileRail = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-2 overflow-hidden max-w-full">
    <div className="flex items-center gap-2">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
      <span className="text-xs uppercase tracking-[0.3em] text-purple-500 dark:text-purple-200">Swipe</span>
    </div>
    <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple-200 dark:scrollbar-thumb-purple-700 scrollbar-track-transparent w-full">
      <div className="flex gap-3 sm:gap-4 min-w-max pr-2">
        {items.map((item) => (
          <article
            key={item}
            className="w-[240px] sm:w-[300px] shrink-0 rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] shadow-md hover:-translate-y-1 transition-transform duration-200 p-4"
          >
            <p className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed">{item}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const Carousel = ({ items, label }: { items: string[]; label: string }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  return (
    <div className="space-y-3 overflow-hidden max-w-full">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-white">{label}</h4>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="h-8 w-8 rounded-full border border-purple-200 bg-white/15 text-white text-sm"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="h-8 w-8 rounded-full border border-purple-200 bg-white/15 text-white text-sm"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
      <article
        onClick={next}
        className="cursor-pointer rounded-2xl border border-purple-200/40 bg-white/10 text-white p-6 shadow-lg transition hover:-translate-y-1 w-full"
      >
        <p className="text-base leading-relaxed">{items[index]}</p>
        <p className="mt-3 text-xs text-purple-100">Tap or click to go to next</p>
      </article>
    </div>
  );
};

export default function TheStrategistPage() {
  return (
    <>
      <Head>
        <title>What I Learned About the Creative Strategist? | NYU Stern EMBA</title>
        <meta
          name="description"
          content="Course reflection for The Strategist at NYU Stern EMBA, taught by Adam Brandenburger: Constraint, Combination, Contrast, and Context."
        />
      </Head>

      <AnimationLayer
        as="main"
        className="font-nyu bg-white text-gray-900 dark:bg-black dark:text-gray-50 min-h-screen pb-12 overflow-x-clip"
        method="alternate"
        distance={64}
        duration={760}
        threshold={0.12}
        rootMargin="0px 0px -12% 0px"
      >
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] text-white py-16 px-6 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

          <AnimationLayer as="div" className="relative max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center" method="alternate" distance={48}>
            <Reveal className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-100">NYU Stern EMBA • Course Reflection</p>
              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">What I Learned About the Creative Strategist?</h1>
              <p className="text-lg md:text-xl text-purple-50">
                Taught by{" "}
                <Link
                  href="https://www.adambrandenburger.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline decoration-purple-200 underline-offset-4 hover:text-amber-200"
                >
                  Adam Brandenburger
                </Link>
              </p>
              <p className="text-purple-100/90 max-w-2xl">{premise}</p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/nyu#projects" className={buttonStyle}>
                  ← Back to NYU
                </Link>
                <Link href="#what-i-learned" className="underline text-purple-100">
                  Jump to content
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl border border-white/20">
                <h2 className="text-xl font-semibold">The Four Cs</h2>
                <ul className="mt-4 space-y-2 text-sm text-purple-100">
                  <li>• Constraint — read a limit as the brief.</li>
                  <li>• Combination — assemble what already exists.</li>
                  <li>• Contrast — test the assumption everyone treats as fixed.</li>
                  <li>• Context — move an idea across fields by analogy.</li>
                </ul>
              </div>
            </Reveal>
          </AnimationLayer>
        </section>

        <section id="what-i-learned" className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <Reveal className="space-y-3">
              <h2 className="text-3xl font-nyu-ultra">What I learned</h2>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                Four things I can now do — one per C.
              </p>
            </Reveal>
            <Reveal className="grid gap-4 sm:grid-cols-2">
              {learningOutcomes.map((item) => (
                <article
                  key={item.c}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] shadow-md p-5 h-full"
                >
                  <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-800 dark:text-purple-100">
                    {item.c}
                  </span>
                  <p className="mt-3 text-sm text-gray-800 dark:text-gray-100 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#0f0a1f] dark:via-[#0b061a] dark:to-[#120d29] py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <Reveal>
              <TileRail title="Course focus" items={courseFocus} />
            </Reveal>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <Reveal className="space-y-3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                The four Cs, through my own work
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                Four strategists I studied and wrote about, one for each move.
              </p>
            </Reveal>

            <Reveal className="space-y-4">
              {fourCs.map((item) => (
                <article
                  key={item.c}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] shadow-md p-6"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-300">
                      {item.c}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.subject}</h4>
                  </div>

                  <p className="mt-3 text-sm text-gray-800 dark:text-gray-100 leading-relaxed">{item.body}</p>

                  <p className="mt-4 rounded-xl border border-dashed border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 p-4 text-sm text-purple-900 dark:text-purple-50 leading-relaxed">
                    <span className="font-semibold">What I took from it: </span>
                    {item.takeaway}
                  </p>

                  {item.deck && (
                    <Link
                      href={item.deck.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow hover:-translate-y-[1px] hover:bg-purple-700 dark:border-purple-800"
                    >
                      {item.deck.label}
                      <span className="text-xs font-normal text-purple-100">(opens in new tab)</span>
                    </Link>
                  )}
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="manifesto" className="scroll-mt-20 bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-8">
            <Reveal className="space-y-4">
              <h3 className="text-2xl font-semibold">My strategic manifesto</h3>
              {manifesto.map((paragraph) => (
                <p key={paragraph} className="text-purple-50 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal className="space-y-3">
              <h4 className="text-lg font-semibold">It reduces to four questions I can ask at any point</h4>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {fourQuestions.map((question) => (
                  <article
                    key={question}
                    className="rounded-2xl border border-purple-200/40 bg-white/10 p-5 text-center shadow-lg"
                  >
                    <p className="text-base font-semibold">{question}</p>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <Carousel items={pullQuotes} label="Pull quotes" />
            </Reveal>

            <Reveal as="p" className="text-sm text-purple-100/90">
              The world is large enough for many champions. My work is to know where I can create value, learn, partner,
              and thrive.
            </Reveal>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-4">
            <Reveal className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Source material</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Drawn from five course memos — Richard Williams, the Taj Mahal, Suzlon Energy, Charles Babbage, and The
                Strategist is Me — plus the Combination: Architecture deck.
              </p>
            </Reveal>
            <Reveal as="ul" className="space-y-2 text-sm">
              <li>
                <Link
                  href={COMBINATION_DECK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-700 dark:text-purple-200 underline hover:text-purple-900"
                >
                  Combination: Architecture — slide deck
                </Link>
                <span className="ml-2 text-gray-500 dark:text-gray-400">(opens in new tab)</span>
              </li>
            </Reveal>
          </div>
        </section>

        <div className="pt-8 pb-10 md:pb-0 text-center">
          <Link href="#navigation" className="hover:underline text-purple-800">go to top</Link>
        </div>
      </AnimationLayer>
    </>
  );
}
