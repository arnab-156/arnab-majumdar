import React, { useEffect, useState } from "react";
import { createContext } from 'react';

interface TriviaContextValue {
    data: Array<Record<string, unknown>>;
    setData: (newData: Record<string, unknown> | null) => void;
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
    data: $default,
    setData: () => { },
});

export function TriviaProvider({ children }: any) {
    const [data, setData] = useState($default);
    const [info, setInfo] = useState({ amount: 5, diff: "hard" });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://opentdb.com/api.php?amount=${info.amount}&difficulty=${info.diff}&type=multiple`);
            const fetchedData = await response.json();

            const results = fetchedData?.results ? fetchedData.results : [$default]
            setData(results);
        };

        fetchData();
    }, [info]);

    return (
        <TriviaContext.Provider value={{ data, setData: () => setInfo }}>
            {children}
        </TriviaContext.Provider>
    );
}
