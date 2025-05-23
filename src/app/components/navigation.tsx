import Image from "next/image";
import Link from 'next/link';
import { MenuIcon, LotusIcon } from "../components/icons";

export const Navigation = () => {
    return (<nav className="flex flex-col items-center justify-between" id="navigation">
        <div className="z-10 w-full items-center justify-between flex justify-content font-mono text-sm lg:text-transparent hover:lg:text-black dark:hover:lg:text-white lg:shadow-2xl lg:shadow-purple-800/40 hover:lg:shadow-none">
            {/* Header on desktop and footer on mobile */}
            <section className={`group rounded-[36px] fixed flex w-3/4 ml-[13%] sm:ml-0 py-3 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-300 backdrop-blur-md 
             dark:border-neutral-800 dark:bg-purple-800/30 dark:from-inherit 
             sm:w-full lg:w-full lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 
             hover:w-[96%] hover:sm:w-full hover:ml-2 hover:sm:ml-0 lg:h-24 hover:bg-purple-800 dark:hover:bg-purple-900 hover:opacity-99 
             left-0 bottom-3 lg:top-0 
             transition ease-in-out delay-300 group-hover:duration-500
             `}>
                <p className="group-hover:hidden lg:hidden">
                    <button type="button" className="focus:outline-none " aria-label="open menu to navigate">
                        <MenuIcon height="1.5rem" width="1.5rem" color="purple" />
                    </button>
                </p>
                <div className="hidden grid-cols-3 group-hover:grid sm:grid-cols-4 sm:gap-2 lg:grid">
                    <Link className="flex justify-center items-center p-2 m-2 hover:lg:text-lg hover:underline" href="/">home</Link>

                    <Link className="flex justify-center items-center hover:underline" href="/lotus">
                        <span className="p-2 m-2 block sm:hidden"><LotusIcon height={"50px"} width={"50px"} className="hover:bg-purple-800 hover:rounded-full dark:bg-white rounded-full" /></span>
                        <span className="hidden sm:block hover:lg:text-lg">art & design</span>
                    </Link>

                    <Link className="flex justify-center items-center p-2 m-2 hover:lg:text-lg hover:underline" href="/edu">education</Link>

                    <Link className="flex flex-col justify-center items-center" href="/about">
                        {/* <Link className="relative flex h-3 w-3 hidden sm:group-hover:block top-5 left-10 z-10" href="/about">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-black opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-black"></span>
                        </Link>
                        <Image
                            className="invisible sm:group-hover:visible relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-2xl mx-2"
                            src="/headshot.gif"
                            alt="headshot of arnab majumdar"
                            width={100}
                            height={50}
                            priority
                            unoptimized
                        /> */}
                        <span className="p-2 m-2 block hover:lg:text-lg hover:underline">about</span>
                    </Link>
                </div>
            </section>

            {/* Contact us Footer on Desktop, On top on Mobile */}
            <section className={`group fixed left-0 top-0 lg:top-auto lg:bottom-0 flex w-full items-end justify-center lg:h-12
                bg-gradient-to-t from-zinc-200 via-white dark:from-purple-800 dark:via-purple-900 
                hover:bg-purple-800 hover:h-fit rounded-[36px]
                transition ease-in-out delay-150 group-hover:duration-300
                `
            }>
                <span className="animate-pulse mt-2 group-hover:hidden text-purple-800 dark:invert">contact information</span>
                <div className="hidden group-hover:block mx-4 mt-0 lg:mt-2">
                    <div className="group-hover:flex justify-content-center mt-2">
                        <Link
                            href="https://bsky.app/profile/thisisarnab.bsky.social"
                            title="bluesky profile of arnab"
                            target="_blank"
                        >
                            <Image
                                className="hover:scale-110 mr-2"
                                src="/bluesky.svg"
                                alt="bluesky logo"
                                width={30}
                                height={30}
                                unoptimized
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/arnab156/"
                            title="linked in profile of arnab"
                            target="_blank"
                        >
                            <Image
                                className="hover:scale-110 mr-2"
                                src="/linkedin.svg"
                                alt="linkedin image"
                                width={30}
                                height={30}
                                unoptimized
                            />
                        </Link>
                        <Link
                            href="https://calendar.app.google/zTY1Jn84tsNek77E8"
                            title="google calendar icons"
                            target="_blank"
                        >
                            <Image
                                className="hover:scale-110"
                                src="/calendar.svg"
                                alt="google calendar"
                                width={30}
                                height={30}
                                unoptimized
                            />
                        </Link>
                    </div>
                    <p className="mb-2 mt-2">Copyrights and all Rights Reserved.</p>
                </div>
            </section>
        </div>
    </nav>
    );
}
