import type { NextPage } from 'next';
import Link from 'next/link';

interface MyTileComponent {
    id?: string;
    title: string;
    href: string;
    url: string;
    subTitle: string;
    shadowColor?: string;
    customClassName?: string;
    imageContain?: boolean;
    imagePosition?: string;
    openInNewTab?: boolean;
}

export const Tile: NextPage<MyTileComponent> = ({
    title,
    subTitle,
    href,
    url,
    shadowColor,
    customClassName = "",
    imageContain = false,
    imagePosition = "",
    openInNewTab = false,
    id = ""
}) => {
    return (
        <Link
            id={id}
            href={href}
            {...openInNewTab ? { target: "_blank" } : {}}
            className={`m-4 shadow-md h-96 rounded relative bg-white ${imageContain ? `bg-contain bg-no-repeat bg-center ${imagePosition}` : "bg-cover "}
          ${url} ${shadowColor ? shadowColor : "shadow-purple-800"} dark:shadow-gray-800
          hover:drop-shadow-lg hover:scale-105 hover:duration-300  ${customClassName} flex flex-col-reverse
          `}

        >
            <div className="p-4 m-2 bg-white/80 rounded dark:text-black">
                <h2 className="font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">{title}</h2>
                <h3 className="text-overflow-ellipsis overflow-hidden line-clamp-3 text-xs">
                    {subTitle}
                </h3>
            </div>
        </Link>
    );
};
