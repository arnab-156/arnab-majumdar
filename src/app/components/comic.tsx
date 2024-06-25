'use client'
import type { NextPage } from 'next';
import { useEffect, useState, useContext } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ComicContext } from '../provider/ComicProvider';
import { decodeEntities } from '../utility/utilities';
import { buttonStyle, cardWrapperStyle, invertedButtonStyle, yellowBackgroundTheme } from '../utility/stylevariables';
import { Card } from './card';

export const Comic: NextPage = ({ }) => {
    const { latestComic, isLoading, errorMsg } = useContext(ComicContext);

    useEffect(() => {
    }, []);


    const handleAllReset = () => {
        window.location.reload();
    };

    return (
        <div className="rounded content-center block max-w-screen-lg m-auto">
            <h1 className="text-lg m-auto justify-content p-4 select-none">
                {isLoading ? "Loading..." : errorMsg.length > 0 ? <span>{errorMsg}</span> : "Work in Progress. Enjoy Version 1!"}
            </h1>

            {latestComic && (<div className={cardWrapperStyle}>
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
            </div>)}

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
