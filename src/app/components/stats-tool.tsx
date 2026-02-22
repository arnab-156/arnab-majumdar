'use client';

import type { NextPage } from "next";
import { useMemo, useState } from "react";

const parseDataValues = (rawInput: string): number[] => {
  return rawInput
    .split(/[\s,;\n]+/)
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));
};

const formatNumber = (value: number): string => {
  return Number(value.toFixed(4)).toString();
};

const CHART_DIMENSIONS = { width: 720, height: 260, padding: 28 } as const;

const buildPolylinePoints = (
  values: number[],
  width: number,
  height: number,
  padding: number
): { polyline: string; areaPath: string } => {
  if (!values.length) {
    return { polyline: "", areaPath: "" };
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const yRange = max - min || 1;
  const xRange = values.length - 1 || 1;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  const points = values.map((value, index) => {
    const x = padding + (index / xRange) * graphWidth;
    const y = padding + ((max - value) / yRange) * graphHeight;
    return { x, y };
  });

  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");
  const first = points[0];
  const last = points[points.length - 1];
  const areaPath = `M ${first.x} ${height - padding} L ${first.x} ${first.y} ${points
    .slice(1)
    .map((point) => `L ${point.x} ${point.y}`)
    .join(" ")} L ${last.x} ${height - padding} Z`;

  return { polyline, areaPath };
};

export const StatsTool: NextPage = () => {
  const [unitLabel, setUnitLabel] = useState<string>("units");
  const [singleEntry, setSingleEntry] = useState<string>("");
  const [bulkEntry, setBulkEntry] = useState<string>("");
  const [dataValues, setDataValues] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const stats = useMemo(() => {
    if (!dataValues.length) {
      return null;
    }

    const sorted = [...dataValues].sort((a, b) => a - b);
    const count = sorted.length;
    const sum = sorted.reduce((total, value) => total + value, 0);
    const mean = sum / count;
    const middle = Math.floor(count / 2);
    const median =
      count % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];

    return {
      count,
      mean,
      median,
      min: sorted[0],
      max: sorted[sorted.length - 1],
    };
  }, [dataValues]);

  const { polyline, areaPath } = useMemo(
    () => buildPolylinePoints(dataValues, CHART_DIMENSIONS.width, CHART_DIMENSIONS.height, CHART_DIMENSIONS.padding),
    [dataValues]
  );

  const appendSingleValue = () => {
    const parsed = Number(singleEntry.trim());
    if (!Number.isFinite(parsed)) {
      setErrorMessage("Enter a valid number before adding.");
      return;
    }

    setDataValues((previous) => [...previous, parsed]);
    setSingleEntry("");
    setErrorMessage(null);
  };

  const applyBulkData = (mode: "replace" | "append") => {
    const parsed = parseDataValues(bulkEntry);
    if (!parsed.length) {
      setErrorMessage("No valid values found. Use numbers separated by commas, spaces, or new lines.");
      return;
    }

    setDataValues((previous) => (mode === "replace" ? parsed : [...previous, ...parsed]));
    setErrorMessage(null);
  };

  const clearData = () => {
    setDataValues([]);
    setBulkEntry("");
    setSingleEntry("");
    setErrorMessage(null);
  };

  return (
    <section className="mx-auto mt-8 w-full max-w-5xl rounded-3xl border border-purple-200 bg-gradient-to-b from-white to-purple-50 p-5 shadow-xl dark:border-purple-900 dark:from-zinc-900 dark:to-[#120a24]">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100">Statistics Tool</h3>
          <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">
            Add values one by one or paste a full dataset. Mean, median, and the live curve update instantly.
          </p>
        </div>

        <label className="flex flex-col gap-1 text-sm font-medium text-purple-800 dark:text-purple-200">
          Unit label
          <input
            type="text"
            value={unitLabel}
            onChange={(event) => setUnitLabel(event.target.value || "units")}
            className="w-full rounded-lg border border-purple-300 bg-white px-3 py-2 text-purple-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:text-purple-100"
            placeholder="units"
          />
        </label>

        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            type="text"
            inputMode="decimal"
            value={singleEntry}
            onChange={(event) => setSingleEntry(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                appendSingleValue();
              }
            }}
            className="rounded-lg border border-purple-300 bg-white px-3 py-2 text-purple-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:text-purple-100"
            placeholder="Add one value (example: 12.5)"
          />
          <button
            type="button"
            onClick={appendSingleValue}
            className="rounded-lg bg-purple-700 px-4 py-2 font-medium text-white shadow-md transition hover:bg-purple-800"
          >
            Add value
          </button>
        </div>

        <label className="flex flex-col gap-1 text-sm font-medium text-purple-800 dark:text-purple-200">
          Paste dataset
          <textarea
            value={bulkEntry}
            onChange={(event) => setBulkEntry(event.target.value)}
            rows={4}
            className="w-full rounded-lg border border-purple-300 bg-white px-3 py-2 text-purple-900 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:border-purple-800 dark:bg-zinc-950 dark:text-purple-100"
            placeholder="10, 14, 22, 19 or one value per line"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => applyBulkData("replace")}
            className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-purple-800"
          >
            Replace data
          </button>
          <button
            type="button"
            onClick={() => applyBulkData("append")}
            className="rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-900 shadow-md transition hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800"
          >
            Append data
          </button>
          <button
            type="button"
            onClick={clearData}
            className="rounded-lg bg-amber-300 px-4 py-2 text-sm font-medium text-amber-950 shadow-md transition hover:bg-amber-400"
          >
            Clear
          </button>
        </div>

        {errorMessage && <p className="text-sm font-medium text-red-600">{errorMessage}</p>}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-950">
            <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Count</div>
            <div className="text-xl font-bold text-purple-900 dark:text-purple-100">{stats?.count ?? 0}</div>
          </div>
          <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-950">
            <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Mean</div>
            <div className="text-xl font-bold text-purple-900 dark:text-purple-100">
              {stats ? `${formatNumber(stats.mean)} ${unitLabel}` : "--"}
            </div>
          </div>
          <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-950">
            <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Median</div>
            <div className="text-xl font-bold text-purple-900 dark:text-purple-100">
              {stats ? `${formatNumber(stats.median)} ${unitLabel}` : "--"}
            </div>
          </div>
          <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-950">
            <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Min</div>
            <div className="text-xl font-bold text-purple-900 dark:text-purple-100">
              {stats ? `${formatNumber(stats.min)} ${unitLabel}` : "--"}
            </div>
          </div>
          <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-950">
            <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Max</div>
            <div className="text-xl font-bold text-purple-900 dark:text-purple-100">
              {stats ? `${formatNumber(stats.max)} ${unitLabel}` : "--"}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-200 bg-white p-3 dark:border-purple-800 dark:bg-zinc-950">
          <div className="mb-2 text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">
            Live curve ({unitLabel})
          </div>
          <svg
            viewBox={`0 0 ${CHART_DIMENSIONS.width} ${CHART_DIMENSIONS.height}`}
            role="img"
            aria-label="Line chart of entered data values"
            className="h-64 w-full rounded-xl bg-gradient-to-b from-white to-purple-50 dark:from-zinc-950 dark:to-[#1a1232]"
          >
            <line
              x1={CHART_DIMENSIONS.padding}
              y1={CHART_DIMENSIONS.height - CHART_DIMENSIONS.padding}
              x2={CHART_DIMENSIONS.width - CHART_DIMENSIONS.padding}
              y2={CHART_DIMENSIONS.height - CHART_DIMENSIONS.padding}
              stroke="currentColor"
              className="text-purple-300"
              strokeWidth="1"
            />
            <line
              x1={CHART_DIMENSIONS.padding}
              y1={CHART_DIMENSIONS.padding}
              x2={CHART_DIMENSIONS.padding}
              y2={CHART_DIMENSIONS.height - CHART_DIMENSIONS.padding}
              stroke="currentColor"
              className="text-purple-300"
              strokeWidth="1"
            />

            {areaPath && <path d={areaPath} fill="rgba(126, 34, 206, 0.12)" />}
            {polyline && (
              <polyline
                points={polyline}
                fill="none"
                stroke="rgb(126, 34, 206)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {!dataValues.length && (
              <text
                x={CHART_DIMENSIONS.width / 2}
                y={CHART_DIMENSIONS.height / 2}
                textAnchor="middle"
                className="fill-purple-500 text-sm"
              >
                Add data to render curve
              </text>
            )}
          </svg>
        </div>
      </div>
    </section>
  );
};
