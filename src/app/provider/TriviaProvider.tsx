import React, { useEffect, useState } from "react";
import { createContext } from 'react';

interface TriviaContextValue {
    data: Record<string, unknown> | null; // Interface for data type
    setData: (newData: Record<string, unknown> | null) => void; // Function type
}

const TriviaContext = createContext<TriviaContextValue>({
    data: null, // Initial value for the data
    setData: () => { },
});

export function TriviaProvider({ children }: any) {
    const [data, setData] = useState(null);
    const [info, setInfo] = useState({ amount: 10, diff: "hard" });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://opentdb.com/api.php?amount=${info.amount}&difficulty=${info.diff}&type=multiple`);
            const fetchedData = await response.json();
            setData(fetchedData.results);
        };


        fetchData();
    }, [info]);

    return (
        <TriviaContext.Provider value={{ data, setData: () => setInfo }}>
            {children}
        </TriviaContext.Provider>
    );
}
