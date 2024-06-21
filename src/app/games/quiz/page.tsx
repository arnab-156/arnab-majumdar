'use client'
import React, { useContext, useState } from 'react';
import { TriviaContext } from "../../contexts/TriviaContext";
import { PauseIcon, PlayIcon } from '../../components/icons';


export default function Trivia() {
  const [startTrivia, setStartTrivia] = useState<boolean>(false);
  // const { data } = useContext(TriviaContext);
  // console.log("🚀 ~ Trivia ~ data:", data);

  return (
    <main className="flex min-h-screen flex-col pt-20 m-4 p-2 rounded content-center">

      <h1 className="text-3xl font-bold text-center mt-8">Trivia</h1>

      <button
        onClick={() => setStartTrivia(!startTrivia)}
        className="text-xl text-center flex justify-center mt-8 hover:text-white"
      >
        {startTrivia ? <PauseIcon height="100px" width="100px" /> : <PlayIcon height="100px" width="100px" />}
      </button>
      {
        startTrivia && (
          <div className='block w-full text-center px-3 py-2 my-4 font-bold font-mono bg-gray-200'>
            <h1>TRIVIA COMPONENT</h1>
            <div>Coming soon!</div>
          </div>)
      }
    </main>
  );
}
