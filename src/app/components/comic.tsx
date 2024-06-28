'use client'
import type { NextPage } from 'next';
import { useContext } from "react";
import Link from 'next/link';
import { ComicContext } from '../provider/ComicProvider';
import { buttonStyle, cardWrapperStyle, invertedButtonStyle, yellowBackgroundTheme } from '../utility/stylevariables';
import { Card } from './card';

export const Comic: NextPage = ({ }) => {
    const { latestComic, isLoading, errorMsg, getNextComic, getPreviousComic } = useContext(ComicContext);

    const handleAllReset = () => {
        window.location.reload();
    };

    return (
        <div className="rounded content-center block max-w-screen-lg m-auto">
            <h1 className="text-xl font-bold m-auto justify-content p-4 select-none text-center">
                {isLoading ? "Loading..." : errorMsg.length > 0 ? <span>{errorMsg}</span> : `Enjoy Today's Comic!`}
            </h1>

            {latestComic && (
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
                        customClassName='text-lg mb-32'
                    />
                </div>)}

            <div className='flex space-between m-auto pb-32 justify-center'>
                <button
                    onClick={getPreviousComic}
                    className={`${buttonStyle} px-6 py-2`}>
                    Previous Comic
                </button>

                <button
                    onClick={handleAllReset}
                    className={`${""} px-6 py-2 mb-30`}>
                    Refresh
                </button>

                <button
                    onClick={getNextComic}
                    className={`${invertedButtonStyle} px-6 py-2`}>
                    Next Comic
                </button>
            </div>
        </div>
    );
}
