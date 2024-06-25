import React, { useEffect, useState } from "react";
import { createContext } from 'react';

interface ComicContextValue {
    latestComic: Record<string, string>,
    getComicByNumber: () => void,
    isLoading: boolean;
    errorMsg: string;
}

export const ComicContext = createContext<ComicContextValue>({
    latestComic: {},
    getComicByNumber: () => { return null; },
    isLoading: false,
    errorMsg: "",
});

ComicContext.displayName = 'Comic';

// export type TriviaInputProps = {
//     amount: number,
//     difficulty?: string,
//     category?: number,
// };

export function ComicProvider({ children }: any) {
    const [latestComic, setLatestComic] = useState<any>();
    // const [info, setInfo] = useState<TriviaInputProps>({ amount: 5 });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`https://getxkcd.now.sh/api/comic?num=latest`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("🚀 ~ fetchData ~ data:", data)
                setLatestComic(data);

            } catch (error) {
                setErrorMsg("Oops! There was a problem.");
            } finally {

                setTimeout(() => {
                    setIsLoading(false);
                    setErrorMsg("")
                }, 2000);
            }
        };

        fetchData();
    }, []);

    return (
        <ComicContext.Provider value={{ latestComic, getComicByNumber: () => null, isLoading, errorMsg }}>
            {children}
        </ComicContext.Provider>
    );
}
