import Image from "next/image";
import Link from 'next/link';
import type { NextPage } from 'next';

interface MyComponentProps {
    title: string;
    url: string;
    urlText: string;
    description?: string; // Optional property
    imageUrl: string;
}

export const Card: NextPage<MyComponentProps> = ({ title, description, url, urlText, imageUrl }) => {
    return (
        <Link
            className="mr-4 ml-4 rounded shadow-md"
            href={url}
        >
            <div className="bg-gray-200 p-4 rounded shadow-md max-w-sm sm:max-w-md md:max-w-sm lg:max-w-xl hover:bg-gray-300 active:bg-gray-400">
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
                    />
                </section>
            </div>
        </Link>

    );
}
