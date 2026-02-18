"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { buttonStyle } from "@/app/utility/stylevariables";

const coreLogicTiles = [
  {
    title: "The accounting equation is the map",
    body: "Assets = Liabilities + Equity. Every transaction is movement inside this equation. If something feels off, it usually violates this structure or hides where the offset went.",
  },
  {
    title: "Accrual beats cash for performance",
    body: "Cash tells you when money moved. Accrual tells you when value was created and consumed. Timing differences matter for revenue, expenses, and working capital.",
  },
  {
    title: "Recognition and matching are the heartbeat",
    body: "Revenue is recognized when earned, not necessarily when cash arrives. Expenses are matched to the revenue they help generate, not necessarily when paid.",
  },
];

const statementTiles = [
  {
    title: "Income Statement",
    subtitle: "Performance, period",
    body: "Revenue minus expenses equals net income. The key lesson: net income is not cash.",
  },
  {
    title: "Balance Sheet",
    subtitle: "Position, point-in-time",
    body: "What the company owns and owes, plus residual value for owners. Timing differences accumulate in receivables, payables, inventory, deferred revenue, and accruals.",
  },
  {
    title: "Cash Flow Statement",
    subtitle: "Liquidity, period",
    body: "This is where great earnings meet reality. I treat operating cash flow as the lie detector.",
  },
];

const mechanicsTiles = [
  {
    title: "Debits and credits as a system",
    body: "Instead of memorizing, I anchor on what increases or decreases each account and what the normal balance is.",
  },
  {
    title: "Record transactions",
    body: "Journal entries capture the first-pass economic event.",
  },
  {
    title: "Post to ledger",
    body: "T-accounts show where each amount ultimately lands by account.",
  },
  {
    title: "Adjust for accruals and deferrals",
    body: "End-of-period adjustments bring statements closer to economic reality.",
  },
  {
    title: "Close temporary accounts",
    body: "Revenue and expense accounts reset so the next period starts cleanly.",
  },
];

const adjustingEntryTiles = [
  "Accrued expenses: expense now, cash later.",
  "Accrued revenue: revenue now, cash later.",
  "Deferred revenue: cash now, revenue later.",
  "Prepaids: cash now, expense later.",
  "Depreciation and amortization: allocate cost over time.",
];

const cfoChecklistTiles = [
  "Start with net income.",
  "Add back non-cash expenses such as depreciation and amortization.",
  "Adjust for working capital: Accounts Receivable up means cash down.",
  "Adjust for working capital: Inventory up means cash down.",
  "Adjust for working capital: Accounts Payable up means cash up.",
  "Sanity-check: does operating cash flow match the business story?",
];

const readingSignals = [
  "Earnings quality: does operating cash flow support net income over time?",
  "Concentration of assumptions: reserves, depreciation lives, revenue timing, returns, and allowances.",
  "Working capital signals: receivables aging, inventory build, and payables stretch.",
  "One-time items: separate recurring performance from dressed-up results.",
];

const usefulRatios = [
  "Current ratio and quick ratio for liquidity.",
  "Gross margin and operating margin for unit economics and efficiency.",
  "ROA and ROE, interpreted with leverage and accounting choices in mind.",
  "DSO, inventory days, and days payable for cash conversion discipline.",
];

const redFlagTiles = [
  "If revenue grows but receivables grow faster, ask why.",
  "If profits rise but operating cash flow stays weak, investigate working capital and non-cash gains.",
  "If inventory balloons, check for demand shifts, obsolescence risk, or aggressive capitalization.",
  "If adjusted metrics dominate, reconcile them against GAAP and trace exclusions.",
  "Accounting is full of judgment. Similar operations can report different outcomes based on policies, estimates, and timing.",
];

const whatITakeForward = [
  "Translate business activity into financial outcomes.",
  "Pressure-test performance claims with cash flow and balance sheet logic.",
  "Communicate across finance, operations, and strategy with shared language.",
  "Spot where risk lives: assumptions, timing, and incentives.",
];

const classNames = (...values: Array<string | false | null | undefined>) =>
  values.filter(Boolean).join(" ");

const ClickTile = ({
  title,
  body,
  onNext,
  index,
  total,
}: {
  title: string;
  body: string;
  onNext: () => void;
  index: number;
  total: number;
}) => (
  <article
    onClick={onNext}
    className="cursor-pointer rounded-2xl border border-purple-200/40 bg-white/10 text-white p-6 shadow-lg transition hover:-translate-y-1"
  >
    <p className="text-xs uppercase tracking-[0.3em] text-purple-100">
      Tile {index + 1} of {total}
    </p>
    <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-purple-50">{body}</p>
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onNext();
      }}
      className="mt-5 rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
    >
      Next tile
    </button>
  </article>
);

export default function FinancialAccountingPage() {
  const [mechanicsIndex, setMechanicsIndex] = useState(0);
  const [cfoIndex, setCfoIndex] = useState(0);
  const [redFlagIndex, setRedFlagIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Financial Accounting Learnings | NYU Stern EMBA</title>
        <meta
          name="description"
          content="Financial accounting learnings: statement linkages, accrual mechanics, cash flow checks, and practical red flags."
        />
      </Head>

      <main className="font-nyu bg-white text-gray-900 dark:bg-black dark:text-gray-100 min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] text-white py-16 px-6 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

          <div className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-100">NYU Stern EMBA • Course Reflection</p>
              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">Financial Accounting Learnings</h1>
              <p className="text-lg md:text-xl text-purple-50">
                The mental models, mechanics, and red flags I keep using beyond the classroom.
              </p>
              <p className="text-purple-100/90 max-w-2xl">
                Financial accounting taught me two things at once: how numbers are produced, and how to read them without getting hypnotized by
                them. The most useful part was learning the linkages between transactions, financial statements, and managerial decisions.
              </p>
              <p className="text-purple-100/90 max-w-2xl">
                Accounting is not just recording; it is a system of choices, estimates, and constraints that shapes what performance looks like on paper.
              </p>

              <div className="flex gap-3 flex-wrap">
                <Link href="/nyu#projects" className={buttonStyle}>
                  Back to NYU
                </Link>
                <Link href="#core-logic" className="underline text-purple-100">
                  Jump to content
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl border border-white/20">
              <h2 className="text-xl font-semibold">What this page focuses on</h2>
              <ul className="mt-4 space-y-2 text-sm text-purple-100">
                <li>- Statement linkage and timing logic.</li>
                <li>- Cash flow reality checks.</li>
                <li>- Practical signals and red flags.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="core-logic" className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-nyu-ultra">The core logic I always return to</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {coreLogicTiles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-5 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-[#2e0068] dark:text-purple-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-100">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#0f0a1f] dark:via-[#0b061a] dark:to-[#120d29] py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-nyu-ultra">The three statements, and how they talk to each other</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {statementTiles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] p-5 shadow-md"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300">{item.subtitle}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#2e0068] dark:text-purple-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-100">{item.body}</p>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-purple-900/30 p-5">
              <h3 className="text-lg font-semibold text-[#2e0068] dark:text-purple-100">Statement linkage I keep in my head</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-800 dark:text-gray-100">
                <li>- Net income flows into retained earnings (equity).</li>
                <li>- Cash changes reconcile through operating, investing, and financing cash flows.</li>
                <li>- Working capital changes explain many differences between net income and cash from operations.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-nyu-ultra">Mechanics that became second nature from exercises</h2>
            <div className="grid gap-4 md:grid-cols-5">
              {mechanicsTiles.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-4 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-[#2e0068] dark:text-purple-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-800 dark:text-gray-100">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Adjusting entries I never forget</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {adjustingEntryTiles.map((item) => (
                  <article
                    key={item}
                    className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] p-4 text-sm text-gray-800 dark:text-gray-100 shadow-sm"
                  >
                    {item}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-nyu-ultra">Cash flow, especially the indirect method</h2>
            <p className="text-purple-100">
              One of the most useful skills was building operating cash flow from net income and reconciling to cash.
            </p>
            <ClickTile
              title="My quick mental checklist for CFO (indirect)"
              body={cfoChecklistTiles[cfoIndex]}
              onNext={() => setCfoIndex((index) => (index + 1) % cfoChecklistTiles.length)}
              index={cfoIndex}
              total={cfoChecklistTiles.length}
            />
            <p className="text-sm text-purple-100">
              Practical lens: a company can be profitable and still cash-stressed if working capital expands faster than collections.
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-6">
              <h2 className="text-2xl font-nyu-ultra">How I read statements now</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-100">
                {readingSignals.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-6">
              <h2 className="text-2xl font-nyu-ultra">Ratios that stayed useful (with context)</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-100">
                {usefulRatios.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-nyu-ultra">Red flags and things to remember</h2>
            <p className="text-purple-100">Tap through the flags I use when a story feels too clean.</p>
            <ClickTile
              title="Red flag checks"
              body={redFlagTiles[redFlagIndex]}
              onNext={() => setRedFlagIndex((index) => (index + 1) % redFlagTiles.length)}
              index={redFlagIndex}
              total={redFlagTiles.length}
            />
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-nyu-ultra">What I take forward</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {whatITakeForward.map((item) => (
                <article
                  key={item}
                  className={classNames(
                    "rounded-2xl border border-purple-100 dark:border-purple-900 bg-gradient-to-br",
                    "from-purple-50 via-white to-purple-50 dark:from-[#140b27] dark:via-[#110b22] dark:to-[#0b0618]",
                    "p-5 shadow-md text-sm text-gray-800 dark:text-gray-100"
                  )}
                >
                  {item}
                </article>
              ))}
            </div>

            <p className="pt-2 text-base font-medium text-gray-800 dark:text-gray-100">
              For me, accounting is less about memorizing rules and more about building a reliable way to reason through a business.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
