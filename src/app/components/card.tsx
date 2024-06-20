import type { NextPage } from 'next';
import classNames from 'classnames';
import Image from "next/image";
import Link from 'next/link';

interface MyComponentProps {
    title: string;
    url: string;
    description?: string;
    imageUrl: string;
    customClassName?: string;
}

export const Card: NextPage<MyComponentProps> = ({ title, description, url, imageUrl, customClassName }) => {
    return (
        <Link
            className={classNames(`card-component mr-4 ml-4 mb-4 rounded shadow-md content-center`, customClassName)}
            href={url}
        >
            <div className="bg-gray-200 p-4 rounded shadow-md hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-900 hover:text-black">
                <h3 className="font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">{title}</h3>
                <section className="p-2 flex flex-col justify-center">
                    <p className="text-overflow-ellipsis overflow-hidden line-clamp-4">
                        {description}
                    </p>
                    <Image
                        className="mx-auto m-4 rounded"
                        src={imageUrl}
                        alt={`product tile image for ${title}`}
                        width={100}
                        height={100}
                        priority
                        unoptimized
                    />
                </section>
            </div>
        </Link>

    );
}
