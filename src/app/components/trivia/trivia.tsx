'use client'
import type { NextPage } from 'next';
import { useEffect, useState, useContext } from "react";
import Link from 'next/link';
import { TriviaContext } from '../../provider/TriviaProvider';
import { decodeEntities } from '../../utility/utilities';
import { buttonStyle, invertedButtonStyle } from '../../utility/stylevariables';

export interface TriviaPropInterface {
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    category?: string;
    incorrect_answers: string[];
};

type TriviaType = {
    maxQuestions: number,
};

export const Trivia: NextPage<TriviaType> = ({ maxQuestions }) => {
    const { data } = useContext(TriviaContext);
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [question, setQuestion] = useState<string>((data && data[questionNumber] && data[questionNumber].question) ? String(data[questionNumber].question) : "");
    const [correctAnswer, setCorrectAnswer] = useState<string>((data && data[questionNumber] && data[questionNumber].question) ? String(data[questionNumber].correct_answer) : "");
    const [score, setScore] = useState<number>(0);
    const [options, setOptions] = useState<string[]>();
    const [complete, setComplete] = useState<boolean>(false);
    const [msg, setMsg] = useState<string | undefined>(undefined);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    // arrange the data
    const choices = (questionObj: TriviaPropInterface | Record<string, any>) => {
        setQuestion(decodeEntities(questionObj?.question));
        const newRandomizedchoices: Array<string> = [...(questionObj.incorrect_answers), questionObj.correct_answer].sort(() => Math.random() - 0.5);
        setCorrectAnswer(decodeEntities(questionObj.correct_answer));
        setOptions(newRandomizedchoices);
    };

    useEffect(() => {
        const questionObj = data && data[questionNumber];
        (questionObj) ? choices(questionObj) : null;

    }, [data, questionNumber]);

    useEffect(() => {
        setTimeout(() => setMsg(undefined), 2000);
    }, [msg]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (selectedValue && questionNumber < maxQuestions) {
            if (selectedValue === correctAnswer) {
                setMsg("Woohooo!! Correct");
                setScore(score + 1);
            } else {
                setMsg("your selected answer was wrong");
            }

            questionNumber + 1 < maxQuestions ? setQuestionNumber(questionNumber + 1) : setComplete(!complete);
        } else {
            setMsg("Select an answer!");
        }
    };

    const handleAllReset = () => {
        setComplete(false);
        setCorrectAnswer("");
        setOptions([]);
        setScore(0);
        setQuestion("");
        setQuestionNumber(0);
        window.location.reload();
    };

    return (
        <div className="m-4 p-2 rounded content-center pb-28">
            <div className="block pb-28">
                <h1 className="text-lg m-2 p-4 select-none"><strong>Question#{questionNumber + 1}: </strong>{decodeEntities(question)}</h1>
                <form className="flex flex-col m-2 p-2 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 to-yellow-500/50 backdrop-blur-md rounded-md mb-16" onSubmit={handleSubmit}>
                    <fieldset>
                        <ol>
                            {
                                options?.map((el, idx) => (
                                    <li key={`${(el)}-${idx}`} className='list-none my-4'>
                                        <input
                                            type="radio"
                                            id={`${(el)}-${idx}`}
                                            name="answer"
                                            value={(el)}
                                            onChange={handleChange}
                                            checked={selectedValue === (el)}
                                            className='px-2 py-2 w-4 h-4 accent-yellow-500'
                                        />
                                        <label className='select-none ml-2'>{decodeEntities(el)}</label>
                                    </li>)
                                )
                            }
                        </ol>

                        {
                            complete ? (
                                <div className='mt-4'>
                                    <div>
                                        <p className='px-4 py-2 text-bold bg-gray-300 text-green-800 rounded-lg capitalize border-solid border-2 border-green-600'>Completed!</p>
                                    </div>
                                </div>
                            )
                                : msg ? (
                                    <div className='mt-4'>
                                        <p className='px-4 py-2 text-bold bg-gray-300 text-indigo-800 rounded-lg capitalize border-solid border-2 border-indigo-600'>{msg}</p>
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        className={`font-medium shadow-md ${buttonStyle}`}>
                                        Submit
                                    </button>
                                )
                        }
                    </fieldset>
                </form>

                <div className="flex w-full justify-end px-4 py-3 my-4 font-bold font-mono text-3xl pb-10 mr-4">
                    {complete && `your final score is: `}{score} out of {maxQuestions}
                </div>
                <button
                    onClick={handleAllReset}
                    className={`${buttonStyle} px-6 py-2`}>
                    Refresh
                </button>
            </div>
        </div>
    );
}
