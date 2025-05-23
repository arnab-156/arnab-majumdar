'use client'
import type { NextPage } from 'next';
import { useState, useContext } from "react";
import Link from 'next/link';
import { TriviaContext, TriviaInputProps } from '../../provider/TriviaProvider';
import { invertedButtonStyle, roundedBtnStyle } from '../../utility/stylevariables';
import { PlayIcon } from '../icons';
import { Trivia } from './trivia';

const categories: Record<string, number> = {
    general: 9,
    books: 10,
    film: 11,
    music: 12,
    musicals: 13,
    tv: 14,
    video_games: 15,
    board_games: 16,
    nature: 17,
    computer: 18,
    math: 19, mythology: 20, sports: 21, geography: 22, history: 23, politics: 24, art: 25,
    celebrity: 26, animals: 27, vehicles: 28, comics: 29, gadget: 30, anime: 31, cartoons: 32,
};

const options: Record<string, Array<string | number>> = {
    difficulty: ["easy", "medium", "hard"],
    amount: [1, 5, 10],
    category: Object.keys(categories),
};

export const TriviaOptions: NextPage = () => {
    const { setInfo, isLoading, errorMsg } = useContext(TriviaContext);
    const [information, setInformation] = useState<TriviaInputProps>({ amount: 5 });
    const [showTrivia, setShowTrivia] = useState<boolean>(false);

    const handleSelect = (currInfo: TriviaInputProps, cat: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = (cat === "category") ? categories[event.target.value] : event.target.value;
        const newInfo: TriviaInputProps = { ...currInfo, ...{ [cat]: selectedValue } };
        setInformation(newInfo);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        information ? setInfo(information) : null;
        setShowTrivia(!showTrivia);
    };

    const fetchError = errorMsg.length > 1;

    return (
        <div className="rounded content-center pb-28">
            <h1 className="text-center capitalize text-bold">
                {
                    isLoading ? <p className="px-4 py-3 border-solid border-2 border-indigo-600 bg-gray-300 text-indigo-800 rounded-xl shadow-md shadow-indigo-800/50">Questions are loading... best of luck!</p> : !showTrivia
                        ? <p className="px-4 py-3 border-solid border-2 border-purple-800 bg-gray-300 rounded-xl shadow-md shadow-purple-800/50">Choose options and press </p>
                        : ""
                }
            </h1>
            {
                fetchError && <div className='px-4 py-3 text-bold bg-gray-300 text-indigo-800 rounded-lg capitalize border-solid border-2 border-indigo-600 max-w-lg'>{errorMsg}, please refresh or please try again later!</div>
            }
            {
                (showTrivia && !fetchError && !isLoading) ? <Trivia maxQuestions={information.amount} /> : (
                    <div className='flex flex-start flex-col dark:text-black'>
                        <form className="flex flex-col m-2 p-2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 to-purple-800/50 backdrop-blur-md rounded-md mb-16" onSubmit={handleSubmit}>
                            <fieldset>
                                <ol className='md:py-4 md:px-4'>
                                    {
                                        Object.keys(options).map((el, index) => (
                                            <li key={`${el}-${index}`} className='my-2'>
                                                <label className={'capitalize'} htmlFor={`${el}-select-${index}`}>Choose {el}:</label>
                                                <select

                                                    className={'m-2 p-2 rounded-md capitalize w-fit-content text-md bg-gradient-to-r from-purple-200/20 to-purple-800/50'}
                                                    name={el} id={`${el}-select-${index}`}
                                                    onChange={(event) => information ? handleSelect(information, el, event) : {}}
                                                >
                                                    <option
                                                        value={""}
                                                        className={'capitalize py-3'}>
                                                        --Please choose an option--
                                                    </option>
                                                    {
                                                        options[`${el}`].map((val, i) => (
                                                            (<>
                                                                <option
                                                                    key={i}
                                                                    value={val}
                                                                    className={'capitalize py-3'}
                                                                    onChange={() => handleSelect}>
                                                                    {val}
                                                                </option>
                                                            </>))
                                                        )
                                                    }
                                                </select>
                                            </li>)
                                        )
                                    }
                                </ol>
                                <button
                                    type="submit"
                                    aria-label="press to start trivia"
                                    className={`px-2 py-2 font-medium text-center mb-8 ${roundedBtnStyle} ${isLoading ? "animate-spin" : ""}`}>
                                    <PlayIcon height="50px" width="50px" color="gray" />
                                </button>
                            </fieldset>
                        </form>
                    </div>)
            }
            <Link
                href={"/tech"}
                className={`${invertedButtonStyle} px-6 py-2 mb-28`}>
                Go Back
            </Link>
        </div>
    );
}
