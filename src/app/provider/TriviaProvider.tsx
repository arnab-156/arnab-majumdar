import React, { useEffect, useState } from "react";
import { createContext } from 'react';

interface TriviaContextValue {
    data?: Array<Record<string, unknown>>;
    setInfo: (newData: TriviaInputProps) => void;
    isLoading: boolean;
    errorMsg: string;
}
const $default = [{
    "type": "multiple",
    "difficulty": "hard",
    "category": "Science &amp; Nature",
    "question": "What physics principle relates the net electric flux out of a closed surface to the charge enclosed by that surface?",
    "correct_answer": "Gauss&#039;s Law",
    "incorrect_answers": [
        "Faraday&#039;s Law",
        "Ampere&#039;s Law",
        "Biot-Savart Law"
    ]
}];

export const TriviaContext = createContext<TriviaContextValue>({
    data: undefined,
    setInfo: () => { },
    isLoading: false,
    errorMsg: "",
});

export type TriviaInputProps = {
    amount: number,
    difficulty?: string,
    category?: number,
};

export function TriviaProvider({ children }: any) {
    const [data, setData] = useState<Array<Record<string, unknown>>>();
    const [info, setInfo] = useState<TriviaInputProps>();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        const difficultyString = info?.difficulty ? `&difficulty=${info.difficulty}` : "";
        const categoryNumber = info?.category ? `&category=${info.category}` : "";

        const fetchData = async () => {
            if (info) {
                setIsLoading(true);

                try {
                    const response = await fetch(`https://opentdb.com/api.php?amount=${info.amount}${difficultyString}&type=multiple${categoryNumber}`);

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();

                    const results = data?.results ? data.results : $default;
                    setData(results);

                } catch (error) {
                    setErrorMsg("Oops! There was an error fetching your data");
                } finally {

                    setTimeout(() => {
                        setIsLoading(false);
                        setErrorMsg("")
                    }, 2000);
                }
            }
        };

        fetchData();
    }, [info]);

    return (
        <TriviaContext.Provider value={{ data, setInfo, isLoading, errorMsg }}>
            {children}
        </TriviaContext.Provider>
    );
}
