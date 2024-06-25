'use client';
import React from 'react';
import { TriviaProvider } from '@/app/provider/TriviaProvider';
import { TriviaOptions } from '@/app/components/trivia/triviaOptions';


export default function Quiz() {
  return (
    <main className="flex min-h-screen flex-col pt-8 m-4 p-2 rounded content-center">
      <h1 className="text-3xl font-bold text-center mt-8">Trivia</h1>
      <div className="text-xl text-center flex justify-center mt-8">
        <TriviaProvider>
          <TriviaOptions />
        </TriviaProvider>
      </div>
    </main>
  );
}
