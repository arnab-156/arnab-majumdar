'use client'
import type { NextPage } from 'next';
import { useEffect, useState, useContext } from "react";
import Link from 'next/link';
import { TriviaContext } from '../provider/TriviaProvider';
import { decodeEntities } from '../utility/utilities';
import { buttonStyle, invertedButtonStyle } from '../utility/stylevariables';

const $default = {
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
};

interface TriviaPropInterface {
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    category?: string;
    incorrect_answers: string[];
}

export const Trivia: NextPage = () => {
    const { data } = useContext(TriviaContext);
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [question, setQuestions] = useState<string>(String(data[questionNumber].question));
    const [correctAnswer, setCorrectAnswer] = useState<string>(String(data[questionNumber].correct_answer));
    const [score, setScore] = useState<number>(0);
    const [options, setOptions] = useState<string[]>();
    const [complete, setComplete] = useState<boolean>(false);
    const [msg, setMsg] = useState<string | undefined>(undefined)

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const maxQuestions: number = data !== null ? Number(data.length) : 0;

    // arrange the data
    const choices = (question: TriviaPropInterface | Record<string, any> = $default) => {
        setQuestions(decodeEntities(question.question));
        const newRandomizedchoices: Array<string> = [...(question.incorrect_answers), question.correct_answer].sort(() => Math.random() - 0.5);
        setCorrectAnswer(question.correct_answer);
        setOptions(newRandomizedchoices);
    };

    useEffect(() => {
        choices(data[questionNumber - 1]);

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

    return (
        <div className="m-4 p-2 rounded content-center pb-28">
            <div className="block pb-28">
                <h1 className="text-lg m-2 p-4"><strong>Question#{questionNumber + 1}: </strong>{question}</h1>
                <form className="flex flex-col m-4 p-4 bg-gray-500/80 rounded" onSubmit={handleSubmit}>
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
                                            className='px-2 py-2'
                                        />
                                        <label>{decodeEntities(el)}</label>
                                    </li>)
                                )
                            }
                        </ol>
                        {
                            msg && (<div className='mt-4'>
                                <div>
                                    <p className='px-4 py-2 font-medium text-center rounded-lg'>{msg}</p>
                                </div>
                            </div>)
                        }

                        {
                            complete ? (<div className='mt-4'>
                                <div>
                                    <p className='px-4 py-2 font-medium text-center rounded-lg'>Completed!</p>
                                </div>
                            </div>) : <button
                                type="submit"
                                className={`px-4 py-2 font-medium text-center rounded-lg shadow-md bg-blue-200 hover:bg-blue-400`}>
                                Submit
                            </button>
                        }
                    </fieldset>
                </form>

                <div className="flex w-full justify-end px-4 py-3 my-4 font-bold font-mono text-3xl pb-28 mr-4">
                    {complete && `your final score is: `}{score} out of {maxQuestions}
                </div>
                <Link
                    href={"/tech"}
                    className={`${invertedButtonStyle} px-6 py-2`}>
                    Go Back
                </Link>
            </div>
        </div>
    );
}
