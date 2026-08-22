"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { AnimationLayer, Reveal } from "@/app/components/animation";
import { buttonStyle } from "@/app/utility/stylevariables";

const lifecycleTiles = [
  {
    stage: "01",
    title: "Sourcing",
    body: "Screening for sector-level material risks and finding targets where sustainability performance is a genuine differentiator rather than a compliance line item.",
  },
  {
    stage: "02",
    title: "Diligence",
    body: "Materiality assessment, red-flag identification, and quantifying the exposure a seller has not priced into the asset.",
  },
  {
    stage: "03",
    title: "Ownership",
    body: "Building the evidence base — baselines, KPIs, governance — while executing the value creation plan across the hold period.",
  },
  {
    stage: "04",
    title: "Exit",
    body: "Converting that evidence into an equity story a buyer will pay for. It cannot be retrofitted in the final months before a sale.",
  },
];

const valueDirections = [
  {
    title: "Upside value creation",
    body: "Sustainable product innovation, market expansion into underserved segments, brand differentiation, and employee productivity — levers that grow the top line or the exit multiple.",
  },
  {
    title: "Downside value protection",
    body: "Supply-shock resilience, reduced regulatory and reputational exposure, and cheaper capital through sustainability-linked financing — levers that defend the multiple.",
  },
];

const frameworks = [
  "SASB / ISSB",
  "ESRS double materiality",
  "TCFD & TNFD",
  "ILPA ESG Assessment Framework",
  "SBTi",
  "NYU Stern ROSI",
  "GRESB & LEED",
  "EU CSRD & Omnibus",
  "UK SRS",
];

type RiskRow = {
  code: string;
  topic: string;
  level: "High" | "Moderate-High" | "Moderate";
  rationale: string;
};

const riskRegister: RiskRow[] = [
  {
    code: "A",
    topic: "Packaging lifecycle & circularity",
    level: "High",
    rationale:
      "Post-consumer recycled content sat at 10% against peers near 71% recyclable, refillable or reusable. EU packaging rules make the cost of inaction rise every year.",
  },
  {
    code: "B",
    topic: "Product environmental, health & safety",
    level: "High",
    rationale:
      "Substances of very high concern were excluded from the company's own materiality shortlist, and revenue exposure was unquantified — in a business where fragrance is roughly 71% of revenues.",
  },
  {
    code: "C",
    topic: "Water management",
    level: "Moderate",
    rationale:
      "Withdrawals down 16% against a 25%-by-2030 target — behind pace, with exposure concentrated in water-stressed basins.",
  },
  {
    code: "D",
    topic: "Palm oil & raw-material sourcing",
    level: "Moderate",
    rationale:
      "100% certified — but through the weakest certification tiers, which evidence administrative rather than physical traceability under EU deforestation rules.",
  },
  {
    code: "E",
    topic: "Human rights & forced labour",
    level: "Moderate-High",
    rationale:
      "Genuinely strong Tier 1 controls, but a fifth of supplier spend lacked a recent third-party assessment and visibility beyond Tier 1 was limited.",
  },
  {
    code: "F",
    topic: "Animal welfare & testing",
    level: "Moderate",
    rationale:
      "Deemed non-material by the company — but named explicitly in our fund's mandate. Rated on our lens, not theirs.",
  },
  {
    code: "G",
    topic: "Leverage & licence concentration",
    level: "High",
    rationale:
      "The binding constraint on funding every other mitigation. Leverage rose despite significant debt paydown, because earnings fell faster.",
  },
  {
    code: "H",
    topic: "Consumer data privacy",
    level: "Moderate",
    rationale:
      "Growing direct-to-consumer and loyalty data across 120+ markets, with risk potentially understated as AI-driven personalisation expands collection.",
  },
];

const approachTiles = [
  {
    title: "The outside-in lens",
    body: "SASB's Household & Personal Products standard, which tells you what a generalist investor would consider material for the sector.",
  },
  {
    title: "The company's own lens",
    body: "Its first ESRS-aligned double materiality assessment — including, crucially, what it chose to exclude and why.",
  },
  {
    title: "The mandate lens",
    body: "Our hypothetical fund's stated principles. Materiality is a function of the holder as much as the asset.",
  },
];

const disagreements = [
  "Substances of very high concern were excluded from the materiality shortlist.",
  "Animal welfare was concluded to be non-material — while sitting explicitly in our fund's mandate.",
  "The assessment ran without direct external stakeholder consultation, using internal functions as proxies.",
  "The company stated plainly that it could not quantify the financial effects of its material risks.",
];

const levers = [
  {
    title: "Packaging circularity",
    subtitle: "Scale recycled content and refill formats",
    body: "Reduces virgin resin exposure and regulatory fees while supporting prestige pricing. A demonstrated track record on packaging weight de-risked delivery, and an existing refill format proved the concept commercially.",
  },
  {
    title: "Sustainable materials & reformulation",
    subtitle: "Get ahead of ingredient regulation",
    body: "Protects revenue against tightening chemicals rules and supports premium positioning — but R&D-intensive, with multi-year cycles that require board-level commitment.",
  },
  {
    title: "Sustainability-linked financing",
    subtitle: "The enabler",
    body: "With credit under pressure, this was the one intervention that pays back through the income statement rather than competing for capital expenditure.",
  },
];

const takeaways = [
  {
    title: "Materiality is investor-specific, not universal",
    body: "The same company, assessed against two different mandates, produces two different matrices. Treating a materiality assessment as an objective output of the company is the most common analytical mistake.",
  },
  {
    title: "Gross versus net changes the entire picture",
    body: "A company assessing net of its own mitigations will always look better than the same company assessed gross. As a prospective owner you want the exposure — controls are something you verify, not assume.",
  },
  {
    title: "Read one tier below the claim",
    body: "\"100% certified\" was accurate and still weaker than it sounded. Headline compliance and underlying substance are different questions, and the gap between them is where diligence earns its keep.",
  },
  {
    title: "The most expensive risks were not the environmental ones",
    body: "Licence concentration and leverage dwarfed packaging and water in financial magnitude. That is not an argument for ignoring sustainability risk — it is an argument for sequencing it honestly.",
  },
  {
    title: "Evidence cannot be retrofitted at exit",
    body: "A credible sustainability equity story is assembled over years of ownership. The unglamorous work of baselines, targets and verified data determines whether the story is worth anything when you sell.",
  },
];

type MatrixPoint = {
  code: string;
  label: string;
  x: number;
  y: number;
  labelX: number;
  anchor: "start" | "end";
  level: RiskRow["level"];
};

// Plotted on a 680x470 viewBox. Plot area spans x 88-616, y 52-400.
const matrixPoints: MatrixPoint[] = [
  { code: "G", label: "Leverage & licence", x: 167, y: 69, labelX: 189, anchor: "start", level: "High" },
  { code: "A", label: "Packaging", x: 510, y: 94, labelX: 492, anchor: "end", level: "High" },
  { code: "B", label: "Product safety", x: 468, y: 132, labelX: 450, anchor: "end", level: "High" },
  { code: "E", label: "Human rights", x: 574, y: 170, labelX: 556, anchor: "end", level: "Moderate-High" },
  { code: "C", label: "Water", x: 320, y: 216, labelX: 302, anchor: "end", level: "Moderate" },
  { code: "H", label: "Data privacy", x: 262, y: 243, labelX: 244, anchor: "end", level: "Moderate" },
  { code: "D", label: "Palm oil", x: 500, y: 247, labelX: 482, anchor: "end", level: "Moderate" },
  { code: "F", label: "Animal welfare", x: 415, y: 282, labelX: 397, anchor: "end", level: "Moderate" },
];

const matrixDotStyles: Record<RiskRow["level"], string> = {
  High: "fill-rose-50 stroke-rose-500 dark:fill-rose-950 dark:stroke-rose-400",
  "Moderate-High": "fill-amber-50 stroke-amber-500 dark:fill-amber-950 dark:stroke-amber-400",
  Moderate: "fill-purple-50 stroke-purple-400 dark:fill-purple-950 dark:stroke-purple-400",
};

const matrixLegend: Array<{ level: RiskRow["level"]; label: string }> = [
  { level: "High", label: "High" },
  { level: "Moderate-High", label: "Moderate-High" },
  { level: "Moderate", label: "Moderate" },
];

const levelStyles: Record<RiskRow["level"], string> = {
  High: "bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200",
  "Moderate-High": "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  Moderate: "bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200",
};

export default function CotyCaseStudyPage() {
  const [activeTakeaway, setActiveTakeaway] = useState(0);

  return (
    <>
      <Head>
        <title>Sustainability Due Diligence: Coty Inc. | NYU Stern EMBA</title>
        <meta
          name="description"
          content="Leading the risk assessment workstream on a simulated investment committee: materiality, gross-basis risk register, value creation levers, and a conditional IC recommendation."
        />
      </Head>

      <AnimationLayer
        as="main"
        className="font-nyu bg-white text-gray-900 dark:bg-black dark:text-gray-100 min-h-screen pb-12 overflow-x-clip"
        method="alternate"
        distance={64}
        duration={760}
        threshold={0.12}
        rootMargin="0px 0px -12% 0px"
      >
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] text-white py-16 px-6 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

          <AnimationLayer as="div" className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center" method="alternate" distance={48} threshold={0} rootMargin="0px">
            <Reveal method="left" className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-purple-100">NYU Stern EMBA &bull; Course Project</p>
              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">
                Pricing sustainability risk in a private-markets deal
              </h1>
              <p className="text-lg md:text-xl text-purple-50">
                Sustainability Value Creation in Private Markets, taught by{" "}
                <Link
                  href="https://www.stern.nyu.edu/faculty/bio/angela-jhanji"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline decoration-purple-200 underline-offset-4 hover:text-amber-200"
                >
                  Angela Jhanji
                </Link>
              </p>
              <p className="text-purple-100/90 max-w-2xl">
                The final exam simulated a live investment committee. Four teams each took one workstream of a full
                diligence process on a single target — a global beauty company. Ours was risk assessment.
              </p>
              <p className="text-purple-100/90 max-w-2xl">
                We had to identify and prioritise material risks, assign severity, propose mitigations, and then defend
                the analysis under questioning from the rest of the class acting as the IC.
              </p>

              <Reveal method="left" delay={220} className="flex gap-3 flex-wrap">
                <Link href="/nyu#projects" className={buttonStyle}>
                  Back to NYU
                </Link>
                <Link href="#framework" className="underline text-purple-100">
                  Jump to content
                </Link>
              </Reveal>
            </Reveal>

            <Reveal method="right" delay={140} className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl border border-white/20">
              <h2 className="text-xl font-semibold">My role</h2>
              <ul className="mt-4 space-y-2 text-sm text-purple-100">
                <li>- Led the risk assessment workstream.</li>
                <li>- Built the materiality matrix and risk register.</li>
                <li>- Presented and defended it to the IC.</li>
              </ul>
              <p className="mt-4 text-xs text-purple-200/80">
                Team of nine, four workstreams, August 2026.
              </p>
            </Reveal>
          </AnimationLayer>
        </section>

        {/* FRAMEWORK */}
        <section id="framework" className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <Reveal className="space-y-6">
              <h2 className="text-3xl font-nyu-ultra">Sustainability across the investment lifecycle</h2>
              <p className="max-w-3xl text-gray-800 dark:text-gray-100">
                The premise of the course is that sustainability is not a reporting exercise bolted onto a deal. It shows
                up differently at each stage of ownership, and an investor who treats it as a compliance obligation will
                systematically misprice both the risk and the opportunity.
              </p>
            </Reveal>

            <AnimationLayer as="div" className="grid gap-4 md:grid-cols-4" method="rise" distance={44} stagger={90}>
              {lifecycleTiles.map((item) => (
                <Reveal
                  as="article"
                  key={item.title}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-5 shadow-md"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300">{item.stage}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#2e0068] dark:text-purple-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-100">{item.body}</p>
                </Reveal>
              ))}
            </AnimationLayer>

            <AnimationLayer as="div" className="grid gap-4 md:grid-cols-2 pt-2" method="alternate" distance={48}>
              {valueDirections.map((item) => (
                <Reveal
                  as="article"
                  key={item.title}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-[#2e0068] dark:text-purple-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-100">{item.body}</p>
                </Reveal>
              ))}
            </AnimationLayer>

            <Reveal className="space-y-3 pt-2">
              <h3 className="text-xl font-semibold">Frameworks applied</h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#0f0a1f] px-3 py-1 text-sm text-gray-800 dark:text-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#0f0a1f] dark:via-[#0b061a] dark:to-[#120d29] py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <Reveal className="space-y-6">
              <h2 className="text-3xl font-nyu-ultra">How we built the assessment</h2>
              <p className="max-w-3xl text-gray-800 dark:text-gray-100">
                We triangulated three lenses, deliberately kept in tension. Where they disagreed turned out to be the most
                interesting part of the analysis.
              </p>
            </Reveal>

            <AnimationLayer as="div" className="grid gap-4 md:grid-cols-3" method="rise" distance={44} stagger={90}>
              {approachTiles.map((item) => (
                <Reveal
                  as="article"
                  key={item.title}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-white dark:bg-[#0f0a1f] p-5 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-[#2e0068] dark:text-purple-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-100">{item.body}</p>
                </Reveal>
              ))}
            </AnimationLayer>

            <Reveal method="bottom" className="rounded-2xl border border-dashed border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-purple-900/30 p-5">
              <h3 className="text-lg font-semibold text-[#2e0068] dark:text-purple-100">
                One deliberate methodological choice
              </h3>
              <p className="mt-3 text-sm text-gray-800 dark:text-gray-100">
                We assessed on a gross basis, before mitigation — a departure from the company&apos;s own net-basis
                assessment. As a prospective owner you need visibility of the underlying exposure, not the residual
                after controls you have not yet independently verified.
              </p>
            </Reveal>
          </div>
        </section>

        {/* RISK REGISTER */}
        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <Reveal className="space-y-6">
              <h2 className="text-3xl font-nyu-ultra">The risk register</h2>
              <p className="max-w-3xl text-gray-800 dark:text-gray-100">
                Eight material topics, assessed gross of mitigation. Three carried a High rating — and one of those was
                not an environmental risk at all.
              </p>
            </Reveal>

            <Reveal as="figure" method="zoom" className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50/60 dark:bg-[#0f0a1f] p-5 md:p-7 shadow-md">
              <svg
                viewBox="0 0 680 470"
                role="img"
                aria-labelledby="matrix-title matrix-desc"
                className="w-full h-auto"
              >
                <title id="matrix-title">Materiality matrix</title>
                <desc id="matrix-desc">
                  Eight material topics plotted by potential impact on society and environment on the horizontal axis
                  against potential impact on the business on the vertical axis. Packaging, product safety and human
                  rights cluster high on both axes. The leverage and licence overlay sits high on business impact but
                  low on societal impact.
                </desc>

                {/* priority quadrant wash */}
                <rect
                  x="352"
                  y="52"
                  width="264"
                  height="174"
                  className="fill-purple-600/10 dark:fill-purple-400/10"
                />

                {/* quadrant dividers */}
                <line
                  x1="352"
                  y1="52"
                  x2="352"
                  y2="400"
                  strokeDasharray="4 4"
                  className="stroke-purple-300 dark:stroke-purple-800"
                  strokeWidth="1"
                />
                <line
                  x1="88"
                  y1="226"
                  x2="616"
                  y2="226"
                  strokeDasharray="4 4"
                  className="stroke-purple-300 dark:stroke-purple-800"
                  strokeWidth="1"
                />

                {/* axes */}
                <line x1="88" y1="400" x2="616" y2="400" className="stroke-purple-400 dark:stroke-purple-700" strokeWidth="1.5" />
                <line x1="88" y1="52" x2="88" y2="400" className="stroke-purple-400 dark:stroke-purple-700" strokeWidth="1.5" />

                <text x="608" y="70" textAnchor="end" fontSize="11.5" className="fill-purple-500 dark:fill-purple-400">
                  Priority cluster
                </text>

                {/* plotted topics */}
                {matrixPoints.map((point) => (
                  <g key={point.code}>
                    <circle cx={point.x} cy={point.y} r="15" strokeWidth="1.4" className={matrixDotStyles[point.level]} />
                    <text
                      x={point.x}
                      y={point.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="12.5"
                      fontWeight="700"
                      className="fill-[#2e0068] dark:fill-purple-100"
                    >
                      {point.code}
                    </text>
                    <text
                      x={point.labelX}
                      y={point.y + 4}
                      textAnchor={point.anchor}
                      fontSize="12.5"
                      className="fill-gray-700 dark:fill-gray-200"
                    >
                      {point.label}
                    </text>
                  </g>
                ))}

                {/* axis labels */}
                <text x="88" y="418" fontSize="11.5" className="fill-gray-500 dark:fill-gray-400">Low</text>
                <text x="616" y="418" textAnchor="end" fontSize="11.5" className="fill-gray-500 dark:fill-gray-400">High</text>
                <text
                  x="352"
                  y="440"
                  textAnchor="middle"
                  fontSize="12.5"
                  fontWeight="600"
                  className="fill-gray-700 dark:fill-gray-200"
                >
                  Potential impact on society &amp; environment
                </text>

                <text x="78" y="400" textAnchor="end" fontSize="11.5" className="fill-gray-500 dark:fill-gray-400">Low</text>
                <text x="78" y="60" textAnchor="end" fontSize="11.5" className="fill-gray-500 dark:fill-gray-400">High</text>
                <text
                  transform="translate(46,226) rotate(-90)"
                  textAnchor="middle"
                  fontSize="12.5"
                  fontWeight="600"
                  className="fill-gray-700 dark:fill-gray-200"
                >
                  Potential impact on the business
                </text>
              </svg>

              <figcaption className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-600 dark:text-gray-300">
                <span className="font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300">
                  Assessment
                </span>
                {matrixLegend.map((item) => (
                  <span key={item.level} className="inline-flex items-center gap-2">
                    <svg width="14" height="14" aria-hidden className="shrink-0">
                      <circle cx="7" cy="7" r="6" strokeWidth="1.4" className={matrixDotStyles[item.level]} />
                    </svg>
                    {item.label}
                  </span>
                ))}
                <span className="text-gray-500 dark:text-gray-400">Gross basis, before mitigation.</span>
              </figcaption>
            </Reveal>

            <AnimationLayer as="div" className="grid gap-3" method="left" distance={40} stagger={0}>
              {riskRegister.map((row) => (
                <Reveal
                  as="article"
                  key={row.code}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-5 shadow-sm md:flex md:items-start md:gap-5"
                >
                  <div className="flex items-center gap-3 md:w-72 md:shrink-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-300 dark:border-purple-700 bg-white dark:bg-purple-900/50 text-sm font-bold text-[#2e0068] dark:text-purple-100">
                      {row.code}
                    </span>
                    <h3 className="text-base font-semibold text-[#2e0068] dark:text-purple-100">{row.topic}</h3>
                  </div>

                  <div className="mt-3 md:mt-0 md:w-36 md:shrink-0">
                    <span className={`inline-block rounded-md px-3 py-1 text-xs font-semibold ${levelStyles[row.level]}`}>
                      {row.level}
                    </span>
                  </div>

                  <p className="mt-3 md:mt-0 flex-1 text-sm leading-relaxed text-gray-800 dark:text-gray-100">
                    {row.rationale}
                  </p>
                </Reveal>
              ))}
            </AnimationLayer>

            <Reveal as="p" method="fade" className="text-xs text-gray-500 dark:text-gray-400 max-w-3xl">
              Basis: SASB Household &amp; Personal Products; the company&apos;s FY25 double materiality assessment and
              sustainability report; its FY25 modern slavery statement; and third-party credit research. All figures
              from public disclosure.
            </Reveal>
          </div>
        </section>

        {/* DISAGREEMENTS */}
        <section className="bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <Reveal className="space-y-6">
              <h2 className="text-3xl font-nyu-ultra">Where we disagreed with the company</h2>
              <p className="text-purple-100 max-w-3xl">
                The most defensible parts of our analysis came from reading the methodology notes rather than the headline
                pages. None of the following is hidden — it is all disclosed. But it changes what the disclosure means.
              </p>
            </Reveal>

            <AnimationLayer as="ul" className="grid gap-3 md:grid-cols-2" method="alternate" distance={48}>
              {disagreements.map((item) => (
                <Reveal
                  as="li"
                  key={item}
                  className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-relaxed text-purple-50"
                >
                  {item}
                </Reveal>
              ))}
            </AnimationLayer>

            <Reveal as="p" method="fade" className="text-sm text-purple-100">
              That gap between what a disclosure says and what it means is exactly what a deal team exists to close.
            </Reveal>
          </div>
        </section>

        {/* RECOMMENDATION + LEVERS */}
        <section className="bg-white dark:bg-zinc-950 py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <Reveal className="space-y-6">
              <h2 className="text-3xl font-nyu-ultra">What we recommended</h2>
            </Reveal>

            <Reveal method="zoom" className="rounded-2xl border border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-[#140b27] dark:via-[#110b22] dark:to-[#0b0618] p-6 shadow-md">
              <p className="text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300">
                Recommendation to the investment committee
              </p>
              <p className="mt-3 text-lg text-gray-900 dark:text-gray-100">
                <span className="font-semibold">Pass at current terms.</span> Re-engage on confirmatory diligence once
                the licence transition and permanent leadership are resolved — two of the largest uncertainties resolve
                on a known timetable, and waiting preserves the opportunity at a materially better-informed entry point.
              </p>
            </Reveal>

            <Reveal as="p" className="max-w-3xl text-gray-800 dark:text-gray-100">
              We paired that with prioritised value creation levers, chosen because each addressed a risk already on the
              register and built on capability the company had already demonstrated.
            </Reveal>

            <AnimationLayer as="div" className="grid gap-4 md:grid-cols-3" method="rise" distance={44} stagger={90}>
              {levers.map((item) => (
                <Reveal
                  as="article"
                  key={item.title}
                  className="rounded-2xl border border-purple-100 dark:border-purple-900 bg-purple-50 dark:bg-[#0f0a1f] p-5 shadow-md"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#2e0068] dark:text-purple-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-800 dark:text-gray-100">{item.body}</p>
                </Reveal>
              ))}
            </AnimationLayer>
          </div>
        </section>

        {/* TAKEAWAYS */}
        <section className="bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white py-14 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <Reveal className="space-y-6">
              <h2 className="text-3xl font-nyu-ultra">What I take forward</h2>
              <p className="text-purple-100">Tap through the lessons that outlasted the exam.</p>
            </Reveal>

            <Reveal method="bottom">
              <article
                onClick={() => setActiveTakeaway((index) => (index + 1) % takeaways.length)}
                className="cursor-pointer rounded-2xl border border-purple-200/40 bg-white/10 text-white p-6 shadow-lg transition hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-purple-100">
                  Lesson {activeTakeaway + 1} of {takeaways.length}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{takeaways[activeTakeaway].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-purple-50">{takeaways[activeTakeaway].body}</p>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveTakeaway((index) => (index + 1) % takeaways.length);
                  }}
                  className="mt-5 rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                >
                  Next lesson
                </button>
              </article>
            </Reveal>

            <Reveal method="fade" className="flex items-center justify-center gap-2">
              {takeaways.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveTakeaway(index)}
                  aria-label={`Go to lesson ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeTakeaway ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </Reveal>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="bg-white dark:bg-zinc-950 py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <Reveal method="fade" className="rounded-2xl border border-dashed border-purple-200 dark:border-purple-800 bg-purple-50/70 dark:bg-purple-900/20 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-200">
                Disclaimer
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                This page describes an academic exercise completed as coursework. The analysis was prepared by students
                using publicly available information, is presented for educational purposes only, and does not
                constitute investment advice, a recommendation, or a statement of fact about any company. Views are my
                own and do not represent those of New York University, the course instructor, or any company referenced.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="pt-8 pb-10 md:pb-0 text-center">
          <Link href="#navigation" className="hover:underline text-purple-800">
            go to top
          </Link>
        </div>
      </AnimationLayer>
    </>
  );
}
