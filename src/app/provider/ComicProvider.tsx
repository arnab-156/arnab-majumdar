import React, { useEffect, useState } from "react";
import { createContext } from 'react';

interface ComicContextValue {
    latestComic: Record<string, string>,
    getNextComic: () => void,
    getPreviousComic: () => void,
    isLoading: boolean;
    errorMsg: string;
}

export const ComicContext = createContext<ComicContextValue>({
    latestComic: {},
    getNextComic: () => { return null; },
    getPreviousComic: () => { return null; },
    isLoading: false,
    errorMsg: "",
});

ComicContext.displayName = 'Comic';

export function ComicProvider({ children }: any) {
    const [latestComic, setLatestComic] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [currNumber, setCurrNumber] = useState<string | number>("latest");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`https://getxkcd.now.sh/api/comic?num=${currNumber}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setLatestComic(data);

            } catch (error) {
                setErrorMsg("Oops! There was a problem. Sorry :-(");
            } finally {
                setIsLoading(false);
                setTimeout(() => setErrorMsg(""), 1000);
            }
        };

        fetchData();
    }, [currNumber]);

    const getNextComic = (num: number) => setCurrNumber(num - 1);

    const getPreviousComic = (num: number) => setCurrNumber(num + 1);

    return (
        <ComicContext.Provider value={{ latestComic, getNextComic: () => getNextComic(latestComic.num), isLoading, errorMsg, getPreviousComic: () => getPreviousComic(latestComic.num) }}>
            {children}
        </ComicContext.Provider>
    );
}
