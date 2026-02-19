"use client";

import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { MenuIcon, LotusIcon } from "../components/icons";
import { buttonStyle, roundButtonStyle } from "@/app/utility/stylevariables";

export const Navigation = () => {
    const router = useRouter();

    return (<nav className="flex flex-col items-center justify-between font-nyu" id="navigation">
        <div className="z-10 w-full items-center justify-between flex justify-content font-mono text-sm lg:text-transparent hover:lg:text-black dark:hover:lg:text-white lg:shadow-2xl lg:shadow-purple-800/40 hover:lg:shadow-none">
            {/* Header on desktop and footer on mobile */}
            <section className={`group rounded-[36px] fixed flex w-3/4 ml-[13%] sm:ml-0 py-3 justify-center border-b border-purple-300 mobile-purple-gray-shimmer backdrop-blur-md 
             dark:border-neutral-800 
             sm:w-full lg:w-full lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 
             hover:w-[96%] hover:sm:w-full hover:ml-2 hover:sm:ml-0 lg:h-24 hover:bg-gradient-to-t from-purple-800 to-zinc-800/30 dark:hover:bg-purple-800 hover:opacity-99 
             left-0 bottom-3 lg:top-0 
             transition ease-in-out delay-300 group-hover:duration-500
             `}>
                {/* <p className="group-hover:hidden lg:hidden">
                    <button type="button" className="focus:outline-none " aria-label="open menu to navigate">
                        <MenuIcon height="1.5rem" width="1.5rem" color="purple" />
                    </button>
                </p> */}
                <div className="grid-cols-3 group-hover:grid sm:grid-cols-3 sm:gap-2 lg:grid">
                    <button
                        type="button"
                        onClick={() => router.push("/")}
                        className={`${roundButtonStyle} hidden group-hover:flex justify-center items-center`}
                    >
                        home
                    </button>

                    <button
                        type="button"
                        onClick={() => router.push("/experiences")}
                        className={`${roundButtonStyle} hidden group-hover:flex justify-center items-center`}
                    >
                        <span className="p-2 m-2 block sm:hidden"><LotusIcon height={"50px"} width={"50px"} fill="white" className="hover:bg-purple-800 hover:rounded-full dark:bg-white rounded-full" /></span>
                        <span className="hidden sm:block">experiences</span>
                    </button>

                    {/* <Link className="flex justify-center items-center p-2 m-2 hover:lg:text-lg hover:underline" href="/edu">education</Link> */}

                    <button
                        type="button"
                        onClick={() => router.push("/about")}
                        className={`${roundButtonStyle} hidden group-hover:flex  justify-center items-center`}
                    >
                        <span className="p-2 m-2 block">about</span>
                    </button>
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
                            href="/help" aria-label="go to calendar to schedule a google meet"
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
