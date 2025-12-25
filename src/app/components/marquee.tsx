import type { NextPage } from 'next';
import React, { ReactNode } from 'react';

interface MyMarqueeInterface {
    news: Array<string>
    customClassName?: string
}

export const Marquee: NextPage<MyMarqueeInterface> = ({
    news,
    customClassName = "",
}) => {
    return (
        <div className={`relative flex overflow-x-hidden ${customClassName}`}>
            <div className={"py-12 animate-marquee whitespace-nowrap"}>
                {
                    [...news, ...news].map((item, index) => (<span key={index} className="mx-4 text-4xl min-w-100">{item}</span>))
                }
            </div>
        </div>
    );
};
