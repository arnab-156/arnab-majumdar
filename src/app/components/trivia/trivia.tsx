'use client'
import type { NextPage } from 'next';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

import { TriviaContext } from '../../provider/TriviaProvider';
import { decodeEntities, rmQuoteMarks } from '../../utility/utilities';
import { heroPrimaryButtonStyle, heroOutlineButtonStyle } from '../../utility/stylevariables';
import styles from './trivia.module.css';

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

/** Seconds per question. Desktop only — the countdown is one of its extras. */
const QUESTION_SECONDS = 20;
/** How long the right/wrong colours stay up before the card leaves. */
const REVEAL_MS = 950;
/** Matches the cardOut keyframe. */
const EXIT_MS = 260;

const clean = (value: string) => rmQuoteMarks(decodeEntities(value ?? ""));

type Answered = {
    question: string;
    correct: string;
    /** null when the desktop timer ran out before a choice was made. */
    chosen: string | null;
};

/** A burst of sparks for a perfect score. */
const Fireworks = () => {
    const sparks = useMemo(
        () =>
            Array.from({ length: 28 }, (_, i) => {
                const angle = (i / 28) * Math.PI * 2 + Math.random() * 0.3;
                const distance = 70 + Math.random() * 90;
                return {
                    id: i,
                    dx: `${Math.cos(angle) * distance}px`,
                    dy: `${Math.sin(angle) * distance}px`,
                    delay: `${(i % 7) * 160}ms`,
                    colour: ["#263c68", "#8a473c", "#57068c", "#d4a017"][i % 4],
                };
            }),
        []
    );

    return (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
            {sparks.map((s) => (
                <span
                    key={s.id}
                    className={`${styles.spark} absolute h-2 w-2 rounded-full`}
                    style={{
                        // Consumed by the shared burst keyframe.
                        ["--dx" as string]: s.dx,
                        ["--dy" as string]: s.dy,
                        animationDelay: s.delay,
                        backgroundColor: s.colour,
                    }}
                />
            ))}
        </div>
    );
};

export const Trivia: NextPage<TriviaType> = ({ maxQuestions }) => {
    const { data } = useContext(TriviaContext);

    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState<Answered[]>([]);
    const [chosen, setChosen] = useState<string | null>(null);
    const [revealing, setRevealing] = useState(false);
    const [exiting, setExiting] = useState(false);
    const [done, setDone] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(QUESTION_SECONDS);
    const [isDesktop, setIsDesktop] = useState(false);

    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
    const clearTimers = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    };
    useEffect(() => clearTimers, []);

    // The timer is a desktop extra; below md the game stays a simple deck.
    useEffect(() => {
        const query = window.matchMedia("(min-width: 768px)");
        const update = () => setIsDesktop(query.matches);
        update();
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);

    const total = Math.min(maxQuestions, data?.length ?? maxQuestions);
    const current = data?.[index] as TriviaPropInterface | undefined;

    const question = current ? clean(current.question) : "";
    const correct = current ? clean(current.correct_answer) : "";

    // Shuffled once per question, not on every render, so options hold still.
    const options = useMemo(() => {
        if (!current) return [];
        return [...current.incorrect_answers.map(clean), clean(current.correct_answer)]
            .sort(() => Math.random() - 0.5);
    }, [current]);

    const advance = useCallback((picked: string | null) => {
        setChosen(picked);
        setRevealing(true);
        setAnswers((prev) => [...prev, { question, correct, chosen: picked }]);

        timers.current.push(setTimeout(() => {
            setExiting(true);
            timers.current.push(setTimeout(() => {
                setExiting(false);
                setRevealing(false);
                setChosen(null);
                setSecondsLeft(QUESTION_SECONDS);
                setIndex((i) => {
                    const next = i + 1;
                    if (next >= total) setDone(true);
                    return next;
                });
            }, EXIT_MS));
        }, REVEAL_MS));
    }, [question, correct, total]);

    // Countdown. Only runs on desktop, while a question is on screen.
    useEffect(() => {
        if (!isDesktop || done || revealing || !current) return;
        if (secondsLeft <= 0) {
            advance(null);
            return;
        }
        const tick = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
        return () => clearTimeout(tick);
    }, [isDesktop, done, revealing, current, secondsLeft, advance]);

    const score = answers.filter((a) => a.chosen === a.correct).length;
    const perfect = done && total > 0 && score === total;

    const restart = () => {
        clearTimers();
        window.location.reload();
    };

    if (!data || (!current && !done)) {
        return <p className="p-6 text-lotus-ink/70 dark:text-lotus-paper/70">Shuffling the deck…</p>;
    }

    // ---------- Results ----------
    if (done) {
        return (
            <div className="relative mx-auto w-full max-w-2xl text-left">
                {perfect && <Fireworks />}

                <div className="relative rounded-3xl border border-lotus-indigo/20 bg-lotus-paper p-6 shadow-xl dark:border-lotus-paper/15 dark:bg-white/5 md:p-8">
                    <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
                        {perfect ? "Perfect round" : "How you did"}
                    </p>

                    <h2 className={`mt-2 font-nyu-ultra text-3xl md:text-4xl ${perfect ? styles.cheer : ""}`}>
                        {perfect ? "🎉 Every single one!" : `${score} out of ${total}`}
                    </h2>

                    <p className="mt-3 text-lotus-ink/80 dark:text-lotus-paper/80">
                        {perfect
                            ? "A clean sweep — nothing left to correct. Go again and see if it holds."
                            : "Here is the answer to each one."}
                    </p>

                    <ol className="mt-6 space-y-4">
                        {answers.map((a, i) => {
                            const right = a.chosen === a.correct;
                            return (
                                <li
                                    key={`${a.question}-${i}`}
                                    className="rounded-2xl border border-lotus-indigo/10 bg-white/60 p-4 dark:border-lotus-paper/10 dark:bg-white/5"
                                >
                                    <div className="flex items-start gap-3">
                                        <span
                                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${right ? "bg-emerald-600" : "bg-lotus-madder"}`}
                                            aria-hidden
                                        >
                                            {right ? "✓" : "✕"}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-lotus-ink dark:text-lotus-paper">{a.question}</p>
                                            <p className="mt-1 text-sm text-lotus-ink/70 dark:text-lotus-paper/70">
                                                Correct answer: <strong className="text-lotus-indigo dark:text-lotus-paper">{a.correct}</strong>
                                            </p>
                                            {!right && (
                                                <p className="mt-1 text-sm text-lotus-ink/60 dark:text-lotus-paper/60">
                                                    {a.chosen ? `You said: ${a.chosen}` : "Ran out of time"}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button type="button" onClick={restart} className={heroPrimaryButtonStyle}>
                            Play again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ---------- Question card ----------
    return (
        <div className="mx-auto w-full max-w-2xl text-left">
            {/* Progress, score, and — on desktop — the clock. */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
                    Question {index + 1} of {total}
                </p>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-lotus-ink/70 dark:text-lotus-paper/70">
                        Score {score}
                    </span>
                    {isDesktop && (
                        <span
                            className={`text-sm font-bold tabular-nums ${secondsLeft <= 5 ? "text-lotus-madder" : "text-lotus-indigo dark:text-lotus-paper/80"}`}
                            aria-live="off"
                        >
                            {secondsLeft}s
                        </span>
                    )}
                </div>
            </div>

            {isDesktop && (
                <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-lotus-indigo/15">
                    <div
                        key={index}
                        className={`${styles.drain} h-full rounded-full ${secondsLeft <= 5 ? "bg-lotus-madder" : "bg-lotus-indigo"}`}
                        style={{ animationDuration: `${QUESTION_SECONDS}s`, animationPlayState: revealing ? "paused" : "running" }}
                    />
                </div>
            )}

            <div
                key={index}
                className={`${exiting ? styles.cardOut : styles.cardIn} rounded-3xl border border-lotus-indigo/20 bg-lotus-paper p-6 shadow-xl dark:border-lotus-paper/15 dark:bg-white/5 md:p-8`}
            >
                <h2 className="font-nyu-ultra text-xl leading-snug text-lotus-ink dark:text-lotus-paper md:text-2xl">
                    {question}
                </h2>

                <ul className="mt-6 space-y-3">
                    {options.map((option) => {
                        const isChosen = chosen === option;
                        const isCorrect = option === correct;

                        let tone = "border-lotus-indigo/20 bg-white/70 hover:-translate-y-[2px] hover:border-lotus-indigo/50 dark:bg-white/5";
                        if (revealing && isCorrect) tone = "border-emerald-600 bg-emerald-50 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-100";
                        else if (revealing && isChosen) tone = "border-lotus-madder bg-lotus-madder/10 text-lotus-madder";
                        else if (revealing) tone = "border-lotus-indigo/10 bg-white/40 opacity-60 dark:bg-white/5";

                        return (
                            <li key={option}>
                                <button
                                    type="button"
                                    disabled={revealing}
                                    onClick={() => advance(option)}
                                    className={`w-full rounded-2xl border px-4 py-3 text-left text-base transition disabled:cursor-default ${tone} ${isChosen && revealing ? styles.pop : ""}`}
                                >
                                    {option}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <p className="mt-5 min-h-[1.5rem] text-sm font-semibold" aria-live="polite">
                    {revealing && (chosen === correct
                        ? <span className="text-emerald-700 dark:text-emerald-300">Correct!</span>
                        : chosen === null
                            ? <span className="text-lotus-madder">Out of time — moving on.</span>
                            : <span className="text-lotus-madder">Not this time. The right one is highlighted.</span>)}
                </p>
            </div>

            <div className="mt-6">
                <button type="button" onClick={restart} className={heroOutlineButtonStyle}>
                    Start over
                </button>
            </div>
        </div>
    );
}
