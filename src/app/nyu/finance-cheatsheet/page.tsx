"use client";

import Head from "next/head";
import Link from "next/link";
import { AnimationLayer, Reveal } from "@/app/components/animation";
import { buttonStyle } from "@/app/utility/stylevariables";
import {
  cheatSections,
  crossCutting,
  incomeStatementWalk,
  notation,
  quickNavigator,
  type CheatSection,
  type FormulaTable,
} from "./cheatsheet-data";

const mainConcepts = [
  {
    formula: "PV = Σ CF/(1+R)^t",
    title: "Value is the present value of future cash flows",
    text: "Every valuation in the course is this one equation in a different costume — a bond with contractual coupons, a stock with dividends, a project called NPV, a company called enterprise value.",
  },
  {
    formula: "Incremental cash flow",
    title: "Get the numerator right",
    text: "Accounting reports performance over periods; valuation needs actual cash at actual dates. Ask of every line: does this change because of the decision? Sunk R&D doesn't. The depreciation tax shield does.",
  },
  {
    formula: "E(R) = Rf + β(E(Rm) − Rf)",
    title: "Get the denominator right",
    text: "Diversification removes firm-specific risk for free, so the market won't pay you to bear it. Only beta survives diversification, and only beta sets the required return.",
  },
];

const FormulaGrid = ({ table }: { table: FormulaTable }) => (
  <div className="space-y-2">
    {table.caption && (
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300">
        {table.caption}
      </h4>
    )}

    {/* Table on md+, stacked cards on small screens so long formulas stay readable. */}
    <div className="hidden md:block overflow-x-auto rounded-2xl border border-purple-100 dark:border-purple-900">
      <table className="w-full text-left text-sm">
        <thead className="bg-purple-50 dark:bg-purple-900/40">
          <tr>
            <th scope="col" className="p-3 font-semibold w-[22%]">Name</th>
            <th scope="col" className="p-3 font-semibold w-[40%]">Formula</th>
            <th scope="col" className="p-3 font-semibold">Used for</th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.name} className="border-t border-purple-100 dark:border-purple-900/70 align-top">
              <td className="p-3 font-semibold text-gray-900 dark:text-white">{row.name}</td>
              <td className="p-3 font-mono text-[13px] text-purple-800 dark:text-purple-200 whitespace-pre-wrap break-words">
                {row.formula}
              </td>
              <td className="p-3 text-gray-700 dark:text-gray-200">{row.usedFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <ul className="md:hidden space-y-3">
      {table.rows.map((row) => (
        <li
          key={row.name}
          className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] p-4 shadow-sm"
        >
          <p className="font-semibold text-gray-900 dark:text-white">{row.name}</p>
          <p className="mt-1 font-mono text-[13px] text-purple-800 dark:text-purple-200 break-words">{row.formula}</p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">{row.usedFor}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Section = ({ section }: { section: CheatSection }) => (
  <section id={section.id} className="scroll-mt-24 space-y-4">
    <h3 className="text-2xl font-nyu-ultra text-gray-900 dark:text-white">
      <span className="text-purple-600 dark:text-purple-300">{section.number}</span> — {section.title}
    </h3>

    {section.notes.map((note) => (
      <p key={note.text} className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">
        {note.label && (
          <span className="font-semibold text-gray-900 dark:text-white">{note.label}: </span>
        )}
        {note.text}
      </p>
    ))}

    {section.number === "5" && (
      <pre className="overflow-x-auto rounded-2xl border border-dashed border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 p-4 font-mono text-[13px] leading-relaxed text-purple-900 dark:text-purple-50">
        {incomeStatementWalk.join("\n")}
      </pre>
    )}

    {section.tables.map((table, index) => (
      <FormulaGrid key={table.caption ?? index} table={table} />
    ))}
  </section>
);

export default function FinanceCheatsheetPage() {
  return (
    <>
      <Head>
        <title>My Finance Cheatsheet | NYU Stern EMBA</title>
        <meta
          name="description"
          content="Formula reference for Foundations of Finance at NYU Stern EMBA — TVM, bonds, stocks, capital budgeting, cash flow, risk, portfolios, CAPM, WACC, options, and market mechanics."
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

          <AnimationLayer as="div" className="relative max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center" method="alternate" distance={48} threshold={0} rootMargin="0px">
            <Reveal method="left" className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-100">NYU Stern EMBA • Foundations of Finance</p>
              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">My Finance Cheatsheet</h1>
              <p className="text-lg md:text-xl text-purple-50">
                Taught by{" "}
                <Link
                  href="https://www.stern.nyu.edu/faculty/bio/alexi-savov"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline decoration-purple-200 underline-offset-4 hover:text-amber-200"
                >
                  Alexi Savov
                </Link>
              </p>
              <p className="text-purple-100/90 max-w-2xl">
                Master formula reference and problem-type selection guide — every formula from the course organized into
                11 categories, each with a note on when it applies.
              </p>
              <Reveal method="left" delay={220} className="flex gap-3 flex-wrap">
                <Link href="/nyu#projects" className={buttonStyle}>
                  ← Back to NYU
                </Link>
                <Link href="#navigator" className="underline text-purple-100">
                  Jump to content
                </Link>
              </Reveal>
            </Reveal>

            <Reveal method="right" delay={140} className="relative">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl border border-white/20">
                <h2 className="text-xl font-semibold">3 Main Concepts to Know</h2>
                <ul className="mt-4 space-y-3 text-sm text-purple-100">
                  {mainConcepts.map((concept) => (
                    <li key={concept.title}>
                      <span className="block font-mono text-purple-50">{concept.formula}</span>
                      <span className="block">{concept.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </AnimationLayer>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <Reveal>
              <h2 className="text-3xl font-nyu-ultra">3 Main Concepts to Know</h2>
            </Reveal>
            <Reveal className="grid gap-4 md:grid-cols-3">
              {mainConcepts.map((concept) => (
                <article
                  key={concept.title}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] shadow-md p-5 space-y-2"
                >
                  <p className="font-mono text-sm text-purple-700 dark:text-purple-200 break-words">{concept.formula}</p>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">{concept.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{concept.text}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section
          id="navigator"
          className="scroll-mt-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#0f0a1f] dark:via-[#0b061a] dark:to-[#120d29] py-14 px-6 md:px-12"
        >
          <div className="max-w-5xl mx-auto space-y-4">
            <Reveal className="space-y-4">
              <h2 className="text-3xl font-nyu-ultra">What is the question actually asking?</h2>
              <p className="text-gray-700 dark:text-gray-200">
                Start here — match what the problem hands you to the section that answers it.
              </p>
            </Reveal>
            <Reveal as="ul" className="grid gap-3 sm:grid-cols-2">
              {quickNavigator.map((item, index) => (
                <li key={item.given}>
                  <Link
                    href={`#${cheatSections[index]?.id ?? ""}`}
                    className="flex h-full flex-col justify-between gap-2 rounded-2xl border border-purple-200 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="text-sm text-gray-800 dark:text-gray-100">{item.given}</span>
                    <span className="text-sm font-semibold text-purple-700 dark:text-purple-200">{item.goTo} →</span>
                  </Link>
                </li>
              ))}
            </Reveal>
            <Reveal as="p" className="pt-2 text-xs text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Notation: </span>
              {notation}
            </Reveal>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <Reveal className="space-y-2">
              <h2 className="text-3xl font-nyu-ultra">Formula reference by category</h2>
              <p className="text-gray-700 dark:text-gray-200">
                Consolidated from the course formula sheet, handwritten notes, Problem Sets 1–4, and the final exam.
              </p>
            </Reveal>
            {cheatSections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white py-14 px-6 md:px-12">
          <div className="max-w-5xl mx-auto space-y-4">
            <Reveal>
              <h2 className="text-2xl font-semibold">Cross-cutting relationships worth memorising</h2>
            </Reveal>
            <Reveal as="ul" className="space-y-2 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm">
              {crossCutting.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-200" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
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
