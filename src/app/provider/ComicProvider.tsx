'use client'
import React, { useCallback, useEffect, useState } from "react";
import { createContext } from 'react';

export type ComicData = {
    num: number;
    title?: string;
    safe_title?: string;
    img: string;
    alt?: string;
    transcript?: string;
    day?: string;
    month?: string;
    year?: string;
};

interface ComicContextValue {
    latestComic?: ComicData,
    /** The newest comic number, learned from the first fetch. */
    newestNumber?: number,
    goNewer: () => void,
    goOlder: () => void,
    goLatest: () => void,
    goRandom: () => void,
    isLoading: boolean;
    errorMsg: string;
}

export const ComicContext = createContext<ComicContextValue>({
    latestComic: undefined,
    newestNumber: undefined,
    goNewer: () => { },
    goOlder: () => { },
    goLatest: () => { },
    goRandom: () => { },
    isLoading: false,
    errorMsg: "",
});

ComicContext.displayName = 'Comic';

export function ComicProvider({ children }: { children: React.ReactNode }) {
    const [latestComic, setLatestComic] = useState<ComicData>();
    const [newestNumber, setNewestNumber] = useState<number>();
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [currNumber, setCurrNumber] = useState<string | number>("latest");

    useEffect(() => {
        let cancelled = false;

        const fetchData = async () => {
            setIsLoading(true);
            setErrorMsg("");

            try {
                const response = await fetch(`https://getxkcd.now.sh/api/comic?num=${currNumber}`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const data: ComicData = await response.json();
                if (cancelled) return;

                setLatestComic(data);
                // The first load asks for "latest", which tells us the ceiling.
                setNewestNumber((prev) => prev ?? data.num);
            } catch {
                if (!cancelled) setErrorMsg("That one would not load. Try another.");
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        };

        fetchData();
        return () => { cancelled = true; };
    }, [currNumber]);

    const current = latestComic?.num;

    // Higher numbers are newer. The previous version had these the wrong way
    // round, so "Next" walked backwards through the archive.
    const goNewer = useCallback(() => {
        if (!current || (newestNumber && current >= newestNumber)) return;
        setCurrNumber(current + 1);
    }, [current, newestNumber]);

    const goOlder = useCallback(() => {
        if (!current || current <= 1) return;
        setCurrNumber(current - 1);
    }, [current]);

    const goLatest = useCallback(() => setCurrNumber("latest"), []);

    const goRandom = useCallback(() => {
        if (!newestNumber) return;
        setCurrNumber(Math.floor(Math.random() * newestNumber) + 1);
    }, [newestNumber]);

    return (
        <ComicContext.Provider
            value={{ latestComic, newestNumber, goNewer, goOlder, goLatest, goRandom, isLoading, errorMsg }}
        >
            {children}
        </ComicContext.Provider>
    );
}
