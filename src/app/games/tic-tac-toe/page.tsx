import { TicTacToe } from "@/app/components/tictactoe";

export default function TicTacToePage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <div className="m-2 h-screen max-w-xl">
        <h1 className="text-3xl font-bold text-center mt-8">Tic Tac Toe</h1>
        <TicTacToe />
      </div>
    </main>
  );
}
