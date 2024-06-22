import type { NextPage } from 'next';
import classNames from 'classnames';
import Image from "next/image";
import Link from 'next/link';

interface MyComponentProps {
    title: string;
    url: string;
    description?: string;
    imageUrl?: string;
    customClassName?: string;
    children?: React.ReactNode;
    backgroundTheme?: string;
}

export const Card: NextPage<MyComponentProps> = ({ title, description, url, imageUrl, children, customClassName, backgroundTheme = "" }) => {
    return (
        <Link
            className={classNames(`card-component mr-4 ml-4 mb-4 rounded shadow-md content-center`, customClassName)}
            href={url}
        >
            <div className={`p-4 rounded shadow-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-900 ${backgroundTheme}`}>
                <h3 className="font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">{title}</h3>
                <section className="p-2 flex flex-col justify-center">
                    <p className="text-overflow-ellipsis overflow-hidden line-clamp-4">
                        {description}
                    </p>
                    {imageUrl && !children && <Image
                        className="mx-auto m-4 rounded"
                        src={imageUrl}
                        alt={`product tile image for ${title}`}
                        width={100}
                        height={100}
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
