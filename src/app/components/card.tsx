import type { NextPage } from 'next';
import classNames from 'classnames';
import Image from "next/image";
import Link from 'next/link';
import { buttonStyle } from '../utility/stylevariables';

interface CardProps {
    title: string;
    url: string;
    description?: string;
    imageUrl?: string;
    imageAlt?: string;
    customClassName?: string;
    children?: React.ReactNode;
    backgroundTheme?: string;
    imageClassName?: string;
    imageHeight?: number;
    imageWidth?: number;
    openInNewTab?: boolean;
    useCtaButton?: boolean;
    ctaLabel?: string;
}

export const Card: NextPage<CardProps> = ({
    title,
    description,
    url,
    imageUrl,
    imageAlt,
    children,
    customClassName,
    backgroundTheme = "",
    imageClassName = "mx-auto m-4",
    imageHeight = 100,
    imageWidth = 100,
    openInNewTab = false,
    useCtaButton = false,
    ctaLabel = "Learn More",
}) => {
    const cardClassName = classNames(`card-component mr-4 ml-4 mb-4 rounded shadow-md content-center`, customClassName);
    const linkProps = openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : { rel: "noopener" };
    const cardContent = (
        <div className={`p-4 rounded shadow-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-900 ${backgroundTheme}`}>
            <h3 className="font-nyu-ultra font-extrabold uppercase text-overflow-ellipsis overflow-hidden line-clamp-2">
                {title}
            </h3>
            <section className="p-2 flex flex-col justify-center">
                <p className="text-overflow-ellipsis overflow-hidden line-clamp-4">
                    {description}
                </p>
                {imageUrl && !children && <Image
                    className={`${imageClassName} rounded`}
                    src={imageUrl}
                    alt={imageAlt ?? title}
                    width={imageWidth}
                    height={imageHeight}
                    priority
                    unoptimized
                />}
                {children && <div className="min-h-26 flex justify-center m-4">
                    {
                        children
                    }
                </div>}
            </section>
        </div>
    );

    if (useCtaButton) {
        return (
            <div className="relative flex flex-col items-center">
                <div className={cardClassName}>
                    {cardContent}
                </div>
                <Link
                    className={classNames(
                        buttonStyle,
                        "z-10 -mt-3 w-1/3 hover:w-[70%] text-center font-nyu font-medium bg-purple-800 hover:bg-purple-900 text-white shadow-lg transition-all"
                    )}
                    href={url}
                    {...linkProps}
                >
                    {ctaLabel}
                </Link>
            </div>
        );
    }

    return (
        <Link
            className={cardClassName}
            href={url}
            {...linkProps}
        >
            {cardContent}
        </Link>

    );
}
