'use client';

import Link from "next/link";
import type { NextPage } from "next";
import { useMemo, useState } from "react";

import { buttonStyle, invertedButtonStyle } from "../utility/stylevariables";

type Player = "X" | "O";
type Cell = Player | null;
type WinnerResult = { player: Player; line: number[] };
type Scoreboard = { X: number; O: number; draws: number };

const WINNING_LINES: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const createEmptyBoard = (): Cell[] => Array.from({ length: 9 }, () => null);

const nextPlayer = (player: Player): Player => (player === "X" ? "O" : "X");

const calculateWinner = (board: Cell[]): WinnerResult | null => {
  for (const line of WINNING_LINES) {
    const [first, second, third] = line;
    const value = board[first];
    if (value !== null && value === board[second] && value === board[third]) {
      return { player: value, line };
    }
  }
  return null;
};

export const TicTacToe: NextPage = () => {
  const [board, setBoard] = useState<Cell[]>(createEmptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [startingPlayer, setStartingPlayer] = useState<Player>("X");
  const [round, setRound] = useState<number>(1);
  const [scoreboard, setScoreboard] = useState<Scoreboard>({
    X: 0,
    O: 0,
    draws: 0,
  });

  const winner = useMemo(() => calculateWinner(board), [board]);
  const isDraw = !winner && board.every((cell) => cell !== null);
  const isGameOver = Boolean(winner) || isDraw;

  const handleTileClick = (index: number) => {
    const playedBy = currentPlayer;

    setBoard((previousBoard) => {
      if (previousBoard[index] !== null) {
        return previousBoard;
      }
      if (calculateWinner(previousBoard) || previousBoard.every((cell) => cell !== null)) {
        return previousBoard;
      }

      const nextBoard = [...previousBoard];
      nextBoard[index] = playedBy;

      const winnerResult = calculateWinner(nextBoard);
      if (winnerResult) {
        setScoreboard((previousScoreboard) => ({
          ...previousScoreboard,
          [winnerResult.player]: previousScoreboard[winnerResult.player] + 1,
        }));
      } else if (nextBoard.every((cell) => cell !== null)) {
        setScoreboard((previousScoreboard) => ({
          ...previousScoreboard,
          draws: previousScoreboard.draws + 1,
        }));
      } else {
        setCurrentPlayer(nextPlayer(playedBy));
      }

      return nextBoard;
    });
  };

  const restartRound = () => {
    setBoard(createEmptyBoard());
    setCurrentPlayer(startingPlayer);
  };

  const startNextRound = () => {
    const nextStarter = nextPlayer(startingPlayer);
    setRound((previousRound) => previousRound + 1);
    setStartingPlayer(nextStarter);
    setCurrentPlayer(nextStarter);
    setBoard(createEmptyBoard());
  };

  const resetScoreboard = () => {
    setScoreboard({ X: 0, O: 0, draws: 0 });
    setRound(1);
    setStartingPlayer("X");
    setCurrentPlayer("X");
    setBoard(createEmptyBoard());
  };

  const statusMessage = winner
    ? `Player ${winner.player} wins this round.`
    : isDraw
      ? "Round ends in a draw."
      : `Player ${currentPlayer}'s turn.`;

  return (
    <div className="mx-auto mt-6 w-full max-w-xl rounded-3xl border border-purple-200 bg-gradient-to-b from-white to-purple-50 p-6 shadow-xl dark:border-purple-900 dark:from-zinc-900 dark:to-[#120a24]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100">Round {round}</h2>
        <p className="text-sm text-purple-700 dark:text-purple-200">Starting Player: {startingPlayer}</p>
      </div>

      <div className="mt-2 rounded-xl bg-purple-100/70 px-4 py-2 text-sm font-medium text-purple-900 dark:bg-purple-900/40 dark:text-purple-100">
        {statusMessage}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-900">
          <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">X wins</div>
          <div className="text-xl font-bold text-purple-900 dark:text-purple-100">{scoreboard.X}</div>
        </div>
        <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-900">
          <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">O wins</div>
          <div className="text-xl font-bold text-purple-900 dark:text-purple-100">{scoreboard.O}</div>
        </div>
        <div className="rounded-xl border border-purple-200 bg-white px-3 py-2 dark:border-purple-800 dark:bg-zinc-900">
          <div className="text-xs uppercase tracking-wide text-purple-600 dark:text-purple-300">Draws</div>
          <div className="text-xl font-bold text-purple-900 dark:text-purple-100">{scoreboard.draws}</div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {board.map((value, index) => {
          const isWinningTile = winner?.line.includes(index);

          const tileClassName = [
            "aspect-square rounded-xl border-2 text-4xl font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400",
            "border-purple-200 bg-white text-purple-900 hover:bg-purple-50 dark:border-purple-800 dark:bg-zinc-900 dark:text-purple-100 dark:hover:bg-purple-900/40",
            isWinningTile
              ? "border-amber-300 bg-amber-100 text-amber-900 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-100"
              : "",
            value !== null || isGameOver ? "cursor-default" : "hover:-translate-y-0.5 hover:shadow-md",
          ].join(" ");

          return (
            <button
              key={index}
              type="button"
              aria-label={`Tile ${index + 1}`}
              onClick={() => handleTileClick(index)}
              disabled={value !== null || isGameOver}
              className={tileClassName}
            >
              {value}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button type="button" onClick={restartRound} className={`${invertedButtonStyle} px-3 py-2 text-sm`}>
          Restart round
        </button>
        <button type="button" onClick={startNextRound} className={`${invertedButtonStyle} px-3 py-2 text-sm`}>
          Next round
        </button>
        <button type="button" onClick={resetScoreboard} className={`${invertedButtonStyle} px-3 py-2 text-sm`}>
          Reset score
        </button>
        <Link className={`${buttonStyle} px-3 py-2 text-sm`} href="/tech">
          Go Back
        </Link>
      </div>
    </div>
  );
};
