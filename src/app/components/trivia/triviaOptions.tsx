'use client'
import type { NextPage } from 'next';
import { useState, useContext } from "react";

import { TriviaContext, TriviaInputProps } from '../../provider/TriviaProvider';
import { heroPrimaryButtonStyle } from '../../utility/stylevariables';
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

const labels: Record<string, string> = {
    difficulty: "How hard?",
    amount: "How many?",
    category: "About what?",
};

const selectStyle =
    "mt-2 w-full rounded-xl border border-lotus-indigo/25 bg-white/70 px-3 py-2 capitalize text-lotus-ink shadow-sm transition hover:border-lotus-indigo/50 focus:outline-none focus:ring-2 focus:ring-lotus-indigo dark:bg-white/5 dark:text-lotus-paper";

export const TriviaOptions: NextPage = () => {
    const { setInfo, isLoading, errorMsg } = useContext(TriviaContext);
    const [information, setInformation] = useState<TriviaInputProps>({ amount: 5 });
    const [showTrivia, setShowTrivia] = useState<boolean>(false);

    const handleSelect = (currInfo: TriviaInputProps, cat: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        const raw = event.target.value;
        if (!raw) return;
        const selectedValue = cat === "category" ? categories[raw] : cat === "amount" ? Number(raw) : raw;
        setInformation({ ...currInfo, ...{ [cat]: selectedValue } });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInfo(information);
        setShowTrivia(true);
    };

    const fetchError = errorMsg.length > 1;

    if (isLoading) {
        return (
            <p className="mx-auto max-w-2xl rounded-2xl border border-lotus-indigo/20 bg-lotus-paper p-6 text-lotus-ink/80 shadow-md dark:border-lotus-paper/15 dark:bg-white/5 dark:text-lotus-paper/80">
                Dealing the questions… best of luck.
            </p>
        );
    }

    if (fetchError) {
        return (
            <div className="mx-auto max-w-2xl rounded-2xl border border-lotus-madder/40 bg-lotus-madder/5 p-6 text-lotus-madder">
                {errorMsg}. Please refresh, or try again in a moment.
            </div>
        );
    }

    if (showTrivia) {
        return <Trivia maxQuestions={information.amount} />;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-2xl rounded-3xl border border-lotus-indigo/20 bg-lotus-paper p-6 text-left shadow-xl dark:border-lotus-paper/15 dark:bg-white/5 md:p-8"
        >
            <fieldset>
                <legend className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
                    Set up your round
                </legend>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {Object.keys(options).map((key) => (
                        <div key={key}>
                            <label className="text-sm font-semibold text-lotus-ink/80 dark:text-lotus-paper/80" htmlFor={`${key}-select`}>
                                {labels[key]}
                            </label>
                            <select
                                className={selectStyle}
                                name={key}
                                id={`${key}-select`}
                                defaultValue={key === "amount" ? 5 : ""}
                                onChange={(event) => handleSelect(information, key, event)}
                            >
                                <option value="">Surprise me</option>
                                {options[key].map((value) => (
                                    <option key={String(value)} value={value} className="capitalize">
                                        {String(value).replace(/_/g, " ")}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>

                <button type="submit" className={`${heroPrimaryButtonStyle} mt-6`}>
                    Start the round
                </button>
            </fieldset>
        </form>
    );
}
