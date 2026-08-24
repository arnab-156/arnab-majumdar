'use client'
import type { NextPage } from 'next';
import Image from 'next/image';
import { useContext } from "react";

import { ComicContext } from '../provider/ComicProvider';
import { heroPrimaryButtonStyle, heroOutlineButtonStyle } from '../utility/stylevariables';

const navButton =
    "inline-flex items-center gap-2 rounded-xl border border-lotus-indigo/25 bg-white/70 px-4 py-2 text-sm font-semibold text-lotus-indigo shadow-sm transition hover:-translate-y-[2px] hover:border-lotus-indigo/60 disabled:pointer-events-none disabled:opacity-40 dark:border-lotus-paper/20 dark:bg-white/5 dark:text-lotus-paper";

export const Comic: NextPage = () => {
    const { latestComic, newestNumber, goNewer, goOlder, goLatest, goRandom, isLoading, errorMsg } =
        useContext(ComicContext);

    const atNewest = !!(latestComic && newestNumber && latestComic.num >= newestNumber);
    const atOldest = !!(latestComic && latestComic.num <= 1);
    const title = latestComic?.safe_title || latestComic?.title || "";
    const dated = latestComic?.year ? `${latestComic.day}/${latestComic.month}/${latestComic.year}` : "";

    return (
        <div className="mx-auto w-full max-w-3xl">
            <div className="rounded-3xl border border-lotus-indigo/20 bg-lotus-paper p-6 shadow-xl dark:border-lotus-paper/15 dark:bg-white/5 md:p-8">
                {/* Strip above the art: which one this is, and when. */}
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
                        {latestComic ? `No. ${latestComic.num}` : "Loading"}
                        {atNewest && " · today"}
                    </p>
                    {dated && (
                        <p className="text-xs text-lotus-ink/50 dark:text-lotus-paper/50">{dated}</p>
                    )}
                </div>

                <h2 className="mt-2 font-nyu-ultra text-2xl leading-tight text-lotus-ink dark:text-lotus-paper md:text-3xl">
                    {isLoading && !latestComic ? " " : title}
                </h2>

                <div className="mt-6 flex min-h-[240px] items-center justify-center rounded-2xl bg-white p-4 dark:bg-white">
                    {errorMsg ? (
                        <p className="py-16 text-center text-lotus-madder">{errorMsg}</p>
                    ) : isLoading ? (
                        <div className="h-56 w-full animate-pulse rounded-xl bg-lotus-indigo/10" aria-label="Loading comic" />
                    ) : latestComic ? (
                        <Image
                            src={latestComic.img}
                            alt={latestComic.alt || title}
                            width={900}
                            height={640}
                            // xkcd strips vary wildly in shape; let the image keep
                            // its own and simply fit the frame.
                            className="h-auto w-auto max-w-full"
                            unoptimized
                            priority
                        />
                    ) : null}
                </div>

                {/* xkcd hides a second joke in the image title attribute. */}
                {latestComic?.alt && !isLoading && (
                    <p className="mt-4 border-l-2 border-lotus-madder py-1 pl-4 text-sm italic leading-relaxed text-lotus-ink/70 dark:text-lotus-paper/70">
                        {latestComic.alt}
                    </p>
                )}

                {latestComic?.transcript && !isLoading && (
                    <details className="mt-4">
                        <summary className="cursor-pointer text-sm font-semibold text-lotus-indigo hover:underline dark:text-lotus-paper/80">
                            Read the transcript
                        </summary>
                        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-lotus-ink/70 dark:text-lotus-paper/70">
                            {latestComic.transcript}
                        </p>
                    </details>
                )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button type="button" onClick={goOlder} disabled={atOldest || isLoading} className={navButton}>
                    ← Older
                </button>
                <button type="button" onClick={goRandom} disabled={isLoading} className={navButton}>
                    Surprise me
                </button>
                <button type="button" onClick={goNewer} disabled={atNewest || isLoading} className={navButton}>
                    Newer →
                </button>
                {!atNewest && (
                    <button type="button" onClick={goLatest} disabled={isLoading} className={`${heroPrimaryButtonStyle} py-2`}>
                        Jump to today
                    </button>
                )}
            </div>
        </div>
    );
}
