'use client';

import type { NextPage } from "next";
import { useMemo, useState } from "react";

const MAX_RUNS = 5000;
const MIN_RUNS = 1;
const MIN_TRIALS = 1;
const MAX_TRIALS = 50;
const CHART = { width: 920, height: 340, padding: 42 } as const;

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));

const formatNumber = (value: number): string => Number(value.toFixed(4)).toString();

const toNumberOrFallback = (value: string, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const getBinomialPmf = (n: number, p: number): number[] => {
  if (p === 0) {
    return Array.from({ length: n + 1 }, (_, index) => (index === 0 ? 1 : 0));
  }
  if (p === 1) {
    return Array.from({ length: n + 1 }, (_, index) => (index === n ? 1 : 0));
  }

  const pmf = new Array<number>(n + 1).fill(0);
  pmf[0] = Math.pow(1 - p, n);

  for (let k = 1; k <= n; k += 1) {
    pmf[k] = pmf[k - 1] * ((n - k + 1) / k) * (p / (1 - p));
  }

  return pmf;
};

const simulateSingleExperiment = (n: number, p: number): number => {
  let successes = 0;
  for (let i = 0; i < n; i += 1) {
    if (Math.random() < p) {
      successes += 1;
    }
  }
  return successes;
};

export const BinomialLLNSimulator: NextPage = () => {
  const [p, setP] = useState<number>(0.5);
  const [n, setN] = useState<number>(10);
  const [runCount, setRunCount] = useState<number>(300);
  const [sampleVersion, setSampleVersion] = useState<number>(0);

  const sampledResults = useMemo(() => {
    void sampleVersion;
    return Array.from({ length: MAX_RUNS }, () => simulateSingleExperiment(n, p));
  }, [n, p, sampleVersion]);

  const empiricalCounts = useMemo(() => {
    const counts = new Array<number>(n + 1).fill(0);
    for (let i = 0; i < runCount; i += 1) {
      counts[sampledResults[i]] += 1;
    }
    return counts;
  }, [n, runCount, sampledResults]);

  const empiricalProbabilities = useMemo(
    () => empiricalCounts.map((count) => count / runCount),
    [empiricalCounts, runCount]
  );

  const binomialPmf = useMemo(() => getBinomialPmf(n, p), [n, p]);

  const maxY = useMemo(() => {
    const maxEmpirical = Math.max(...empiricalProbabilities);
    const maxTheoretical = Math.max(...binomialPmf);
    return Math.max(maxEmpirical, maxTheoretical, 0.1);
  }, [binomialPmf, empiricalProbabilities]);

  const empiricalMean = useMemo(() => {
    let sum = 0;
    for (let k = 0; k <= n; k += 1) {
      sum += k * empiricalCounts[k];
    }
    return sum / runCount;
  }, [empiricalCounts, n, runCount]);

  const theoreticalMean = n * p;

  const barWidth = (CHART.width - CHART.padding * 2) / (n + 1);
  const plotHeight = CHART.height - CHART.padding * 2;
  const labelInterval = n <= 15 ? 1 : Math.ceil((n + 1) / 12);

  const theoreticalPoints = binomialPmf
    .map((probability, k) => {
      const x = CHART.padding + k * barWidth + barWidth / 2;
      const y = CHART.height - CHART.padding - (probability / maxY) * plotHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <section className="mx-auto mt-8 w-full max-w-5xl rounded-3xl border border-purple-200 bg-gradient-to-b from-white to-purple-50 p-5 shadow-xl dark:border-purple-900 dark:from-zinc-900 dark:to-[#120a24]">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100">
            Law of Large Numbers Simulator (Binomial)
          </h3>
          <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">
            Repeat a Binomial(n, p) experiment and watch the empirical histogram converge to the population probability
            curve as runs increase.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <label className="flex flex-col gap-1 text-sm font-medium text-purple-800 dark:text-purple-200">
            Trial probability p (0 to 1)
            <input
              type="number"
              min={0}
              max={1}
              step={0.01}
              value={p}
              onChange={(event) => {
                const next = clamp(toNumberOrFallback(event.target.value, p), 0, 1);
                setP(next);
              }}
              className="rounded-lg border border-purple-300 bg-white px-3 py-2 text-purple-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:text-purple-100"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-purple-800 dark:text-purple-200">
            Trials per experiment n
            <input
              type="number"
              min={MIN_TRIALS}
              max={MAX_TRIALS}
              step={1}
              value={n}
              onChange={(event) => {
                const next = Math.round(clamp(toNumberOrFallback(event.target.value, n), MIN_TRIALS, MAX_TRIALS));
                setN(next);
              }}
              className="rounded-lg border border-purple-300 bg-white px-3 py-2 text-purple-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:text-purple-100"
            />
          </label>

          <div className="flex items-end">
            <button
              type="button"
              onClick={() => setSampleVersion((previous) => previous + 1)}
              className="w-full rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-purple-800"
            >
              Resample outcomes
            </button>
          </div>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-purple-800 dark:text-purple-200">
          Number of experiment runs: <span className="font-bold">{runCount}</span>
          <input
            type="range"
            min={MIN_RUNS}
            max={MAX_RUNS}
            value={runCount}
            onChange={(event) => {
              const nextRuns = Math.round(clamp(toNumberOrFallback(event.target.value, runCount), MIN_RUNS, MAX_RUNS));
              setRunCount(nextRuns);
            }}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-purple-200 accent-purple-700"
          />
          <div className="flex justify-between text-xs text-purple-600 dark:text-purple-300">
            <span>{MIN_RUNS}</span>
            <span>{MAX_RUNS}</span>
          </div>
        </label>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-950">
            <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Empirical mean</div>
            <div className="text-xl font-bold text-purple-900 dark:text-purple-100">{formatNumber(empiricalMean)}</div>
          </div>
          <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-950">
            <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Theoretical mean</div>
            <div className="text-xl font-bold text-purple-900 dark:text-purple-100">{formatNumber(theoreticalMean)}</div>
          </div>
          <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-950">
            <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Mean gap</div>
            <div className="text-xl font-bold text-purple-900 dark:text-purple-100">
              {formatNumber(Math.abs(empiricalMean - theoreticalMean))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-200 bg-white p-3 dark:border-purple-800 dark:bg-zinc-950">
          <div className="mb-2 text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">
            Empirical histogram (bars) vs Binomial(n, p) probability distribution (line)
          </div>
          <svg
            viewBox={`0 0 ${CHART.width} ${CHART.height}`}
            role="img"
            aria-label="Histogram converging to binomial distribution"
            className="h-72 w-full rounded-xl bg-gradient-to-b from-white to-purple-50 dark:from-zinc-950 dark:to-[#1a1232]"
          >
            <line
              x1={CHART.padding}
              y1={CHART.height - CHART.padding}
              x2={CHART.width - CHART.padding}
              y2={CHART.height - CHART.padding}
              stroke="currentColor"
              className="text-purple-300"
              strokeWidth="1"
            />
            <line
              x1={CHART.padding}
              y1={CHART.padding}
              x2={CHART.padding}
              y2={CHART.height - CHART.padding}
              stroke="currentColor"
              className="text-purple-300"
              strokeWidth="1"
            />

            {empiricalProbabilities.map((probability, k) => {
              const x = CHART.padding + k * barWidth + barWidth * 0.08;
              const width = barWidth * 0.84;
              const barHeight = (probability / maxY) * plotHeight;
              const y = CHART.height - CHART.padding - barHeight;

              return (
                <rect
                  key={`bar-${k}`}
                  x={x}
                  y={y}
                  width={Math.max(width, 1)}
                  height={Math.max(barHeight, 0)}
                  fill="rgba(126, 34, 206, 0.45)"
                  rx="2"
                />
              );
            })}

            <polyline
              points={theoreticalPoints}
              fill="none"
              stroke="rgb(15, 23, 42)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {Array.from({ length: n + 1 }).map((_, k) => {
              if (k % labelInterval !== 0 && k !== n) {
                return null;
              }
              const x = CHART.padding + k * barWidth + barWidth / 2;

              return (
                <text
                  key={`label-${k}`}
                  x={x}
                  y={CHART.height - CHART.padding + 16}
                  textAnchor="middle"
                  className="fill-purple-700 text-[10px]"
                >
                  {k}
                </text>
              );
            })}

            <text x={CHART.width - CHART.padding} y={CHART.padding - 10} textAnchor="end" className="fill-purple-600 text-[10px]">
              max p(x) ≈ {formatNumber(maxY)}
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};
