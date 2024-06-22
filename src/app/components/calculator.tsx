'use client'
import type { NextPage } from 'next';
import { useEffect, useState } from "react";
import Link from 'next/link';

const btnValues = [
    ["9", "8", "7", "+"],
    ["6", "5", "4", "-"],
    ["3", "2", "1", "x"],
    ["C", "0", "=", "/"],
    ["+/-"],
];

const approvedOperators = ["+", "-", "x", "/", "+/-", "C", "="];

export const Calculator: NextPage = () => {
    const [currentValue, setCurrentValue] = useState<string>("0");
    const [operator, setOperator] = useState<string | undefined>(undefined);
    const [secondValue, setSecondValue] = useState<string>("0");
    const [error, setError] = useState<string | undefined>(undefined);

    const handleAllClear = () => {
        setOperator(undefined);
        setSecondValue("0");
        setError(undefined);
        setCurrentValue('0');
    };

    const calculateValue = (operation: string, currentValue: string, secondValue: string) => {
        switch (operation) {
            case '+':
                const total = Number(currentValue) + Number(secondValue);
                handleAllClear();
                setCurrentValue(String(total));
                break;
            case '-':
                const subtractedValue = Number(currentValue) - Number(secondValue);
                handleAllClear();
                setCurrentValue(String(subtractedValue));
                break;
            case '/':
                const divided = Number(currentValue) / Number(secondValue);
                handleAllClear();
                setCurrentValue(String(divided));
                break;
            case 'x':
                const multiplied = Number(currentValue) * Number(secondValue);
                handleAllClear();
                setCurrentValue(String(multiplied));
                break;
            default:
                break;
        }
    };

    const handleOperatorsClick = (val: string, firstValue: string, secondValue: string, currOperation?: string) => {
        switch (val) {
            case '+/-':
                const newValue = Number(-1 * Number(currentValue));
                handleAllClear();
                setCurrentValue(`${newValue}`);
                break;
            case 'C':
                handleAllClear();
                break;
            case '=':
                currOperation && secondValue ? calculateValue(currOperation, firstValue, secondValue) : setError("Error");
                break;
            default:
                setOperator(val);
                break;
        }
    };

    const handleOnClick = (bttnValue: string, currentValue: string, secondValue: string, error?: string) => {
        if (error) setError(undefined);
        const isOperator = approvedOperators.includes(bttnValue);
        if (isOperator) {
            handleOperatorsClick(bttnValue, currentValue, secondValue, operator);
        } else {
            if (!operator) {
                setCurrentValue(String(Number((currentValue + bttnValue))));
            } else {
                setSecondValue(String(Number((secondValue + bttnValue))));
            }
        }
    };

    useEffect(() => {

    }, [currentValue, secondValue, operator]);

    return (
        <div className="m-4 p-2 rounded content-center">
            <h1 className='flex w-full justify-end px-3 py-2 my-4 font-bold font-mono text-xl'>
                {currentValue}
                {operator && <span className='mx-2'>{operator}</span>}
                {secondValue !== "0" && <span className='mx-2' >{secondValue}</span>}
                {error && <span className='mx-2 text-red-500' >{error}</span>}
            </h1>
            <input className="block w-full px-3 py-2 my-4 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <div className="grid grid-cols-4 grid-rows-5 gap-2">
                {btnValues.map((el, i) => (
                    el.map(elem => <button
                        className={
                            `px-4 py-2 font-medium text-center rounded-lg shadow-md 
                            ${elem === "=" ? "text-black text-bold" : "text-white"} 
                            ${elem === "+/-" ? "bg-black hover:text-yellow-500" : "bg-yellow-500 hover:bg-yellow-700"}
                            `}
                        onClick={() => handleOnClick(elem, currentValue, secondValue, error)}
                        key={`${elem}-${i}`}>{elem}
                    </button>)))}
                <Link
                    href={"/tech"}
                    className='px-4 py-2 font-medium text-center rounded-lg shadow-md bg-green-200'>Go Back</Link>
            </div>
        </div>
    );
}
