'use client';
import React from 'react';
import Link from 'next/link';

import { TriviaProvider } from '@/app/provider/TriviaProvider';
import { TriviaOptions } from '@/app/components/trivia/triviaOptions';

export default function Quiz() {
  return (
    <main className="flex min-h-screen flex-col bg-lotus-paper font-nyu text-lotus-ink dark:bg-[#101114] dark:text-lotus-paper">
      <section className="w-full px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-2xl text-left">
          <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
            Free to play
          </p>
          <h1 className="mt-2 font-nyu-ultra text-4xl leading-tight md:text-5xl">Trivia</h1>
          <aside className="mt-4 border-l-2 border-lotus-madder py-1 pl-6">
            <p className="text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
              Pick a category and a difficulty, then answer against the clock. You get the right
              answers at the end either way.
            </p>
          </aside>
        </div>
      </section>

      <section className="w-full px-6 pb-24 md:px-12">
        <TriviaProvider>
          <TriviaOptions />
        </TriviaProvider>
      </section>

      <div className="w-full pb-16 text-center">
        <Link
          href="/"
          className="text-lotus-indigo underline underline-offset-4 hover:no-underline dark:text-lotus-paper/80"
        >
          go back to home
        </Link>
      </div>
    </main>
  );
}
