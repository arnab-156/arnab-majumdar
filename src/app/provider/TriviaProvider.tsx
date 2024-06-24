import React, { useEffect, useState } from "react";
import { createContext } from 'react';

interface TriviaContextValue {
    data?: Array<Record<string, unknown>>;
    setInfo: (newData: TriviaInputProps) => void;
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
});

export type TriviaInputProps = {
    amount: number,
    difficulty?: string,
    category?: number,
};

export function TriviaProvider({ children }: any) {
    const [data, setData] = useState<Array<Record<string, unknown>>>();
    const [info, setInfo] = useState<TriviaInputProps>({ amount: 5 });

    useEffect(() => {
        const difficultyString = info?.difficulty ? `&difficulty=${info.difficulty}` : "";
        const categoryNumber = info?.category ? `&category=${info.category}` : "";

        console.log("infor in provider", info);

        const fetchData = async () => {
            const response = await fetch(`https://opentdb.com/api.php?amount=${info.amount}${difficultyString}&type=multiple${categoryNumber}`);
            const fetchedData = await response.json();

            const results = fetchedData?.results ? fetchedData.results : $default;
            console.log("🚀 ~ fetchData ~ results:", results)
            setData(results);
        };

        fetchData();
    }, [info]);

    return (
        <TriviaContext.Provider value={{ data, setInfo }}>
            {children}
        </TriviaContext.Provider>
    );
}
