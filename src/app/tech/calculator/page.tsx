import { Calculator } from "../../components/calculator";
import { StatsTool } from "../../components/stats-tool";

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 px-4 pb-20 pt-24 dark:from-black dark:via-[#0b0718] dark:to-black">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mt-2 text-center text-3xl font-bold text-purple-900 dark:text-purple-100">Calculator Tools</h1>
        <p className="mt-2 text-center text-sm text-purple-700 dark:text-purple-300">
          Utility set includes a basic arithmetic calculator and a live statistics tool.
        </p>

        <section className="mt-8">
          <h2 className="text-center text-2xl font-semibold text-purple-900 dark:text-purple-100">Basic Calculator</h2>
          <p className="mt-1 text-center text-sm text-purple-700 dark:text-purple-300">
            Supports keyboard input, decimals, backspace, chained operations, and divide-by-zero handling.
          </p>
          <Calculator />
        </section>

        <section className="mt-8">
          <h2 className="text-center text-2xl font-semibold text-purple-900 dark:text-purple-100">Stats Calculator</h2>
          <StatsTool />
        </section>
      </div>
    </main>
  );
}
