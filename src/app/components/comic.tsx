'use client'
import type { NextPage } from 'next';
import { useEffect, useState, useContext } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ComicContext } from '../provider/ComicProvider';
import { decodeEntities } from '../utility/utilities';
import { buttonStyle, cardWrapperStyle, invertedButtonStyle, yellowBackgroundTheme } from '../utility/stylevariables';
import { Card } from './card';

export interface TriviaPropInterface {
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    category?: string;
    incorrect_answers: string[];
};

type ComicType = {
    maxQuestions: number,
};

export const Comic: NextPage = ({ }) => {
    const { latestComic } = useContext(ComicContext);


    useEffect(() => {
        // setTimeout(() => setMsg(undefined), 2000);
    }, []);


    if (!latestComic) {
        return (<div className="m-4 p-2 rounded content-center pb-28">
            <h1>There was a problem, please try again!</h1>
            <button
                onClick={() => window.location.reload}
                className={`${buttonStyle} px-6 py-2`}>
                Refresh
            </button>
        </div>);
    }

    const handleAllReset = () => {
        window.location.reload();
    };

    return (
        <div className="rounded content-center block max-w-screen-lg m-auto">
            <h1 className="text-lg m-auto justify-content p-4 select-none">
                Work in Progress. Enjoy Version 1!
            </h1>

            <div className={cardWrapperStyle}>
                <Card
                    title={latestComic.title}
                    imageUrl={latestComic.img}
                    url="#"
                    description={latestComic.transcript}
                    imageClassName='m-auto mt-4 justify-content h-max w-max scale-105 hover:min-w-screen'
                    imageHeight={625}
                    imageWidth={320}
                    backgroundTheme={yellowBackgroundTheme}
                    customClassName='text-lg'
                />
            </div>

            <Link
                href={"/tech"}
                className={`${invertedButtonStyle} px-6 py-2`}>
                Go Back
            </Link>
            <button
                onClick={handleAllReset}
                className={`${buttonStyle} px-6 py-2`}>
                Refresh
            </button>
        </div>
    );
}
