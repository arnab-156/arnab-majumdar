import { createContext } from 'react';

interface MyDataContextValue {
    data: Record<string, unknown> | null; // Interface for data type
    setData: (newData: Record<string, unknown> | null) => void; // Function type
}


export const TriviaContext = createContext<MyDataContextValue>({
    data: null, // Initial value for the data
    setData: () => { },
});
