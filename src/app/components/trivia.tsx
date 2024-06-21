'use client'
import type { NextPage } from 'next';
import { useEffect, useState, useContext } from "react";
import Link from 'next/link';
import { TriviaContext } from '../provider/TriviaProvider';

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

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const maxQuestions: number = data !== null ? Number(data.length) : 0;

    // re arrange the data
    const choices = (question: TriviaPropInterface | Record<string, any> = $default) => {
        const newRandomizedchoices: Array<string> = [...(question.incorrect_answers), question.correct_answer].sort(() => Math.random() - 0.5);
        setCorrectAnswer(question.correct_answer);
        setOptions(newRandomizedchoices);
    };


    useEffect(() => {

        choices(data[questionNumber - 1]);

    }, [data, questionNumber]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission

        if (selectedValue) {

            if (selectedValue === correctAnswer) {
                console.log("you win!! Selected answer:", selectedValue);
                setScore(score + 1);
                setQuestionNumber(questionNumber + 1);
            } else {
                console.log("your Selected answer was wrong", selectedValue);
            }
        } else {
            console.warn("No answer selected");
        }
    };

    return (
        <div className="m-4 p-2 rounded content-center">
            <div className="block pb-28">

                <h1 className="text-lg m-2 p-4"> Question #{questionNumber + 1}: {question}  </h1>

                <form className="flex flex-col m-4 p-4 bg-gray-500/80 rounded" onSubmit={handleSubmit}>
                    <fieldset>
                        <ol>
                            {
                                options?.map((el, idx) => (
                                    <li key={`${el}-${idx}`} className='list-none my-4'>
                                        <input
                                            type="radio"
                                            id={`${el}-${idx}`}
                                            name="answer"
                                            value={el}
                                            onChange={handleChange} checked={selectedValue === el}
                                            className='px-2 py-2'
                                        />
                                        <label>{el}</label>
                                    </li>)
                                )
                            }
                        </ol>
                        <div className='mt-4'>
                            <button
                                type="submit"
                                className={`px-4 py-2 font-medium text-center rounded-lg shadow-md bg-blue-200 hover:bg-blue-400`}>
                                Submit
                            </button>
                        </div>
                    </fieldset>
                </form>

                {/* Evaluate the answer and update score */}
                <div className="mt-4 pb-28">
                    {score}
                </div>
            </div>

        </div>
    );
}
