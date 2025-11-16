import type { NextPage } from 'next';
import classNames from 'classnames';
import Image from "next/image";
import Link from 'next/link';

interface CardProps {
    title: string;
    url: string;
    description?: string;
    imageUrl?: string;
    customClassName?: string;
    children?: React.ReactNode;
    backgroundTheme?: string;
    imageClassName?: string;
    imageHeight?: number;
    imageWidth?: number;
    openInNewTab?: boolean;
}

export const Card: NextPage<CardProps> = ({
    title,
    description,
    url,
    imageUrl,
    children,
    customClassName,
    backgroundTheme = "",
    imageClassName = "mx-auto m-4",
    imageHeight = 100,
    imageWidth = 100,
    openInNewTab = false,
}) => {
    return (
        <Link
            className={classNames(`card-component mr-4 ml-4 mb-4 rounded shadow-md content-center`, customClassName)}
            href={url}
            {...openInNewTab ? { target: "_blank" } : {}}
        >
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
                        alt={title}
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
        </Link>

    );
}
