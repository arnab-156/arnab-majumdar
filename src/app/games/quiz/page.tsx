'use client';
import React, { useState, useEffect } from 'react';
import { TriviaProvider } from '@/app/provider/TriviaProvider';
import { PauseIcon, PlayIcon } from '../../components/icons';
import { Trivia } from '../../components/trivia';


export default function Quiz() {
  const [startTrivia, setStartTrivia] = useState<boolean>(false);

  useEffect(() => {
  }, [startTrivia]);

  return (
    <main className="flex min-h-screen flex-col pt-8 m-4 p-2 rounded content-center">

      <h1 className="text-3xl font-bold text-center mt-8">Trivia</h1>

      <button
        onClick={() => setStartTrivia(!startTrivia)}
        className="text-xl text-center flex justify-center mt-8 hover:text-white"
      >
        {startTrivia ? <PauseIcon height="100px" width="100px" /> : <PlayIcon height="100px" width="100px" color="gray" />}
      </button>
      {
        startTrivia && (
          <div className='block text-center px-3 py-2 font-bold font-mono bg-gray-200 max-w-3xl mx-auto my-0 justify center'>
            <TriviaProvider>
              <Trivia />
            </TriviaProvider>
          </div>)
      }
    </main>
  );
}
