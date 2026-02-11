"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buttonStyle } from "@/app/utility/stylevariables";

const whatILearned = [
  "I can explain different views of what business is for and how organizations can be designed to serve that purpose.",
  "I learned to use a stakeholder lens, especially through sustainability and human rights.",
  "I can spot how business models and market failures can create harm or value for society and firms.",
  "I built a practical foundation in business law, accountability, and the responsibilities of executives.",
  "I understand how good intentions can still lead to ethical blind spots and “ethical fading.”",
  "I learned what ethical leadership looks like in practice, and how to evaluate values-driven companies.",
];

const keyTakeaways = [
  "Recognize issues early: watch for euphemisms, shifting standards, and routine corner-cutting.",
  "Speaking up is a skill: be specific, document carefully, and use escalation paths with intention.",
  "Ethics is built into systems: incentives, governance, procurement, metrics, and oversight often matter more than slogans.",
  "Stakeholders are real: communities, workers, and customers absorb the costs of weak safeguards and poorly designed models.",
];

const whistleBenefits = [
  "Reduce blind spots by revealing what dashboards and reports miss.",
  "Create deterrence: when people believe misconduct will be reported, misconduct becomes riskier.",
  "Protect stakeholders and long-term value by forcing earlier course correction.",
  "Test culture: how leaders respond to bad news is the true values statement.",
];

const silentReasons = [
  "Fear of retaliation (career damage, isolation, job loss).",
  "Ambiguity and plausible deniability (“maybe I’m overreacting”).",
  "Diffusion of responsibility (“someone else will handle it”).",
  "Misaligned incentives (targets that quietly reward unethical outcomes).",
];

const voiceSupports = [
  "Multiple reporting channels (manager, skip-level, ombuds, hotline) with clear confidentiality rules.",
  "Non-retaliation enforcement with real consequences, not just policy language.",
  "Fast triage and transparent follow-through so employees see issues actually resolved.",
  "Incentives and KPIs that reward integrity, learning, and risk reduction, not only short-term results.",
  "Board-level oversight for serious allegations, especially those involving senior leaders.",
];

const resourceLinks = [
  { title: "Ethical Voice & Reporting Channels Design (canvas + instructions)", url: "https://www.ethicscanvas.org/" },
  { title: "Stripe primer on compliance and security", url: "https://docs.stripe.com/security/guide" },
  { title: "SEC Whistleblower program overview", url: "https://www.sec.gov/whistleblower" },
  { title: "ICCR investor guidance on whistleblowing", url: "https://www.iccr.org/" },
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
            className="w-[240px] sm:w-[260px] shrink-0 rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] shadow-md hover:-translate-y-1 transition-transform duration-200 p-4"
          >
            <p className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed">{item}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const TileGrid = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-3 overflow-hidden max-w-full">
    <div className="flex items-center gap-2">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((item) => (
        <article
          key={item}
          className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] shadow-md p-4 h-full"
        >
          <p className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed">{item}</p>
        </article>
      ))}
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
        <p className="text-sm leading-relaxed">{items[index]}</p>
        <p className="mt-3 text-xs text-purple-100">Tap or click to go to next</p>
      </article>
    </div>
  );
};

export default function ProfessionalResponsibilityPage() {
  return (
    <>
      <Head>
        <title>Professional Responsibility | NYU Stern EMBA</title>
        <meta name="description" content="Course reflection for Professional Responsibility at NYU Stern EMBA, taught by Alison Taylor." />
      </Head>

      <main className="font-nyu bg-white text-gray-900 dark:bg-black dark:text-gray-50 min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] text-white py-16 px-6 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

          <div className="relative max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-100">NYU Stern EMBA • Course Reflection</p>
              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">Professional Responsibility</h1>
              <p className="text-lg md:text-xl text-purple-50">
                Taught by {" "}
                <Link
                  href="https://www.alisontaylor.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline decoration-purple-200 underline-offset-4 hover:text-amber-200"
                >
                  Alison Taylor
                </Link>
              </p>
              <p className="text-purple-100/90 max-w-2xl">
                What I learned from Whistleblowers? How ethics shows up in real organizations—and how individual choices connect to systems,
                incentives, and outcomes.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/nyu" className={buttonStyle}>
                  ← Back to NYU
                </Link>
                <Link href="#what-i-learned" className="underline text-purple-100">
                  Jump to content
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl border border-white/20">
                <h2 className="text-xl font-semibold">Course Focus</h2>
                <ul className="mt-4 space-y-2 text-sm text-purple-100">
                  <li>• Role of business in society and stakeholder lenses.</li>
                  <li>• How governance, incentives, and design shape ethical outcomes.</li>
                  <li>• Building speak-up cultures and safe reporting channels.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="what-i-learned" className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-nyu-ultra">What I learned</h2>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                This course reshaped how I think about the role of business in society and my own responsibility as a professional. I came away with a
                clearer understanding of how ethics plays out in real organizations and how individual choices connect to systems, incentives, and
                outcomes.
              </p>
            </div>
            <TileRail title="Scroll the learnings" items={whatILearned} />
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#0f0a1f] dark:via-[#0b061a] dark:to-[#120d29] py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <TileGrid title="Key takeaways" items={keyTakeaways} />
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <TileGrid title="Why whistleblowers matter" items={whistleBenefits} />
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Why do people stay silent</h3>
              <Carousel items={silentReasons} label="Silence drivers" />
              <Carousel items={voiceSupports} label="What companies can change to support an ethical voice" />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Additional resources</h3>
            <ul className="space-y-2 text-sm">
              {resourceLinks.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 dark:text-purple-200 underline hover:text-purple-900"
                  >
                    {item.title}
                  </Link>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">(opens in new tab)</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
