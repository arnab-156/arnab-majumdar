import type { NextPage } from 'next';
import Link from 'next/link';

interface MyTileComponent {
    title: string;
    href: string;
    url: string;
    subTitle: string;
    shadowColor?: string;
    customClassName?: string;
    imageContain?: boolean;
}

export const Tile: NextPage<MyTileComponent> = ({ title, subTitle, href, url, shadowColor, customClassName, imageContain }) => {
    return (
        <Link
            href={href}
            className={`m-4 shadow-md h-96 rounded relative bg-white ${imageContain ? "bg-contain bg-no-repeat" : "bg-cover"} 
          ${url} ${shadowColor ? shadowColor : "shadow-pink-800"} dark:shadow-gray-800
          hover:drop-shadow-lg hover:scale-105 hover:duration-300  ${customClassName}
          `}
        >
            <div className="p-4 m-2 bg-white/40 rounded absolute bottom-0 dark:text-black">
                <h2 className="font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">{title}</h2>
                <h3 className="text-overflow-ellipsis overflow-hidden line-clamp-3 text-xs">
                    {subTitle}
                </h3>
            </div>
        </Link>
    );
};
