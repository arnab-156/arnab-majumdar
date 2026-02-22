import { TicTacToe } from "@/app/components/tictactoe";

export default function TicTacToePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 px-4 pb-20 pt-24 dark:from-black dark:via-[#0b0718] dark:to-black">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-center text-3xl font-bold text-purple-900 dark:text-purple-100">Tic Tac Toe</h1>
        <p className="mt-2 text-center text-sm text-purple-700 dark:text-purple-300">
          Local two-player mode with score tracking, draw detection, and winning tile highlights.
        </p>
        <TicTacToe />
      </div>
    </main>
  );
}
