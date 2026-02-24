'use client';

import Link from "next/link";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

type Operator = "+" | "-" | "x" | "/";

const buttonRows: string[][] = [
  ["C", "⌫", "+/-", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const operatorSet = new Set<string>(["+", "-", "x", "/"]);

const formatResult = (value: number): string => {
  if (!Number.isFinite(value)) {
    return "Error";
  }
  return String(Number(value.toFixed(10)));
};

export const Calculator: NextPage = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [isAwaitingSecondOperand, setIsAwaitingSecondOperand] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [expression, setExpression] = useState<string>("");

  const clearAll = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setIsAwaitingSecondOperand(false);
    setError(null);
    setExpression("");
  };

  const runOperation = (left: number, right: number, activeOperator: Operator): number | null => {
    if (activeOperator === "/" && right === 0) {
      setError("Cannot divide by zero");
      return null;
    }

    switch (activeOperator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "x":
        return left * right;
      case "/":
        return left / right;
      default:
        return null;
    }
  };

  const inputDigit = (digit: string) => {
    if (error) {
      setError(null);
      setFirstOperand(null);
      setOperator(null);
      setIsAwaitingSecondOperand(false);
      setExpression("");
      setDisplayValue(digit);
      return;
    }

    if (isAwaitingSecondOperand) {
      setDisplayValue(digit);
      setIsAwaitingSecondOperand(false);
      return;
    }

    setDisplayValue((previous) => {
      if (previous === "0") {
        return digit;
      }
      if (previous === "-0") {
        return `-${digit}`;
      }
      return `${previous}${digit}`;
    });
  };

  const inputDecimal = () => {
    if (error) {
      setError(null);
      setFirstOperand(null);
      setOperator(null);
      setIsAwaitingSecondOperand(false);
      setExpression("");
      setDisplayValue("0.");
      return;
    }

    if (isAwaitingSecondOperand) {
      setDisplayValue("0.");
      setIsAwaitingSecondOperand(false);
      return;
    }

    if (!displayValue.includes(".")) {
      setDisplayValue((previous) => `${previous}.`);
    }
  };

  const toggleSign = () => {
    if (isAwaitingSecondOperand) {
      setDisplayValue("-0");
      setIsAwaitingSecondOperand(false);
      return;
    }

    if (displayValue === "0") {
      setDisplayValue("-0");
      return;
    }
    setDisplayValue((previous) => (previous.startsWith("-") ? previous.slice(1) : `-${previous}`));
  };

  const deleteLast = () => {
    if (error) {
      clearAll();
      return;
    }

    if (isAwaitingSecondOperand) {
      return;
    }

    setDisplayValue((previous) => {
      if (previous.length <= 1 || previous === "-") {
        return "0";
      }
      return previous.slice(0, -1);
    });
  };

  const chooseOperator = (nextOperator: Operator) => {
    if (error) {
      return;
    }

    const inputValue = Number(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
      setOperator(nextOperator);
      setIsAwaitingSecondOperand(true);
      setExpression(`${displayValue} ${nextOperator}`);
      return;
    }

    if (operator && !isAwaitingSecondOperand) {
      const result = runOperation(firstOperand, inputValue, operator);
      if (result === null) {
        return;
      }
      const formattedResult = formatResult(result);
      setDisplayValue(formattedResult);
      setFirstOperand(result);
      setOperator(nextOperator);
      setIsAwaitingSecondOperand(true);
      setExpression(`${formattedResult} ${nextOperator}`);
      return;
    }

    setOperator(nextOperator);
    setExpression(`${formatResult(firstOperand)} ${nextOperator}`);
  };

  const calculate = () => {
    if (error || !operator || firstOperand === null || isAwaitingSecondOperand) {
      return;
    }

    const secondOperand = Number(displayValue);
    const result = runOperation(firstOperand, secondOperand, operator);
    if (result === null) {
      return;
    }

    const formattedResult = formatResult(result);
    setExpression(`${formatResult(firstOperand)} ${operator} ${displayValue} =`);
    setDisplayValue(formattedResult);
    setFirstOperand(null);
    setOperator(null);
    setIsAwaitingSecondOperand(false);
  };

  const handleButtonClick = (value: string) => {
    if (/^\d$/.test(value)) {
      inputDigit(value);
      return;
    }

    if (value === ".") {
      inputDecimal();
      return;
    }

    if (value === "C") {
      clearAll();
      return;
    }

    if (value === "⌫") {
      deleteLast();
      return;
    }

    if (value === "+/-") {
      toggleSign();
      return;
    }

    if (value === "=") {
      calculate();
      return;
    }

    if (operatorSet.has(value)) {
      chooseOperator(value as Operator);
    }
  };

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      const eventTarget = event.target as HTMLElement | null;
      const isEditableTarget =
        Boolean(eventTarget?.isContentEditable) ||
        eventTarget?.tagName === "INPUT" ||
        eventTarget?.tagName === "TEXTAREA" ||
        eventTarget?.tagName === "SELECT";

      if (isEditableTarget) {
        return;
      }

      const { key } = event;
      const keyToButtonMap: Record<string, string> = {
        "*": "x",
        Enter: "=",
        "=": "=",
        Escape: "C",
      };

      if (/^\d$/.test(key)) {
        event.preventDefault();
        handleButtonClick(key);
        return;
      }

      if (key === "." || key === "+" || key === "-" || key === "/") {
        event.preventDefault();
        handleButtonClick(key);
        return;
      }

      if (key === "Backspace") {
        event.preventDefault();
        handleButtonClick("⌫");
        return;
      }

      if (key in keyToButtonMap) {
        event.preventDefault();
        handleButtonClick(keyToButtonMap[key]);
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  });

  const renderButton = (value: string, index: number) => {
    const isOperator = operatorSet.has(value) || value === "=";
    const isUtility = value === "C" || value === "⌫" || value === "+/-";
    const isEqual = value === "=";

    return (
      <button
        key={`${value}-${index}`}
        type="button"
        onClick={() => handleButtonClick(value)}
        className={[
          "rounded-xl px-3 py-3 font-semibold shadow-md transition duration-200",
          "focus:outline-none focus:ring-2 focus:ring-purple-400",
          isEqual
            ? "bg-purple-700 text-white hover:bg-purple-800"
            : isOperator
              ? "bg-purple-200 text-purple-900 hover:bg-purple-300 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800"
              : isUtility
                ? "bg-amber-300 text-amber-950 hover:bg-amber-400"
                : "bg-white text-purple-900 hover:bg-purple-50 dark:bg-zinc-900 dark:text-purple-100 dark:hover:bg-zinc-800",
          value === "0" ? "col-span-2" : "",
        ].join(" ")}
      >
        {value}
      </button>
    );
  };

  return (
    <section className="mx-auto mt-6 w-full max-w-xl rounded-3xl border border-purple-200 bg-gradient-to-b from-white to-purple-50 p-5 shadow-xl dark:border-purple-900 dark:from-zinc-900 dark:to-[#120a24]">
      <div className="rounded-xl border border-purple-200 bg-white px-4 py-3 shadow-sm dark:border-purple-800 dark:bg-zinc-950">
        <p className="min-h-5 text-right text-xs text-purple-600 dark:text-purple-300">{expression || "\u00A0"}</p>
        <p className="mt-1 text-right font-mono text-3xl font-bold text-purple-950 dark:text-purple-100">{error || displayValue}</p>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {buttonRows.flat().map((value, index) => renderButton(value, index))}
      </div>

      <div className="mt-4 flex justify-end">
        <Link
          href="/tech"
          className="rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white shadow-md transition hover:bg-emerald-600"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};
