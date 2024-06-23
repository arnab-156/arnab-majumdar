import Image from "next/image";
import Link from 'next/link';
import { MenuIcon } from "../components/icons";

export const Navigation = () => {
    return (<nav className="flex flex-col items-center justify-between">
        <div className="z-10 w-full items-center justify-between font-mono text-sm">
            <section className="group fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:h-fit hover:min-h-60 hover:bg-yellow-600 hover:opacity-90">
                <span className="animate-bounce group-hover:hidden">
                    <button type="button" className="focus:outline-none">
                        <MenuIcon height="1.5rem" width="1.5rem" />
                    </button>
                </span>
                <div className="hidden grid-cols-3 gap-4 group-hover:grid sm:grid-cols-4 sm:gap-2">
                    <Link className="p-2 m-2 hover:text-lg hover:underline" href="/tech">
                        technology
                    </Link>
                    <Link className="p-2 m-2 hover:text-lg hover:underline" href="/lotus">lotus mahal</Link>
                    {/* <Link className="p-2 m-2 hover:text-lg hover:underline" href="/dashboard">login</Link> */}
                    <Link className="p-2 m-2 hover:text-lg hover:underline" href="/">home</Link>
                    <Link className="" href="/about">
                        <Image
                            className="hidden sm:group-hover:block relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-2xl mr-2"
                            src="/headshot.gif"
                            alt="headshot of arnab majumdar"
                            width={200}
                            height={100}
                            priority
                            unoptimized
                        />
                        <span className="p-2 m-2 block sm:hidden hover:text-lg hover:underline">about</span>
                    </Link>
                </div>


            </section>
            <section className="group fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black hover:bg-yellow-600 hover:h-fit">
                <span className="animate-pulse mt-2 group-hover:hidden">Copy rights information. All Rights Reserved.</span>
                <div className="hidden group-hover:block m-4 mt-0">
                    <p className="mb-2 mt-2">
                        My Gallup CliftonStrengths are <strong>Input, Achiever, Ideation, Futuristic, Learner</strong>.
                        Connect with me to learn more:
                    </p>
                    <div className="group-hover:flex justify-content-center">
                        <a
                            href="https://www.linkedin.com/in/arnab156/"
                            title="linked in profile of arnab"
                        >
                            <Image
                                className="hover:scale-110 mr-2"
                                src="/linkedin.gif"
                                alt="linkedin image"
                                width={30}
                                height={30}
                                unoptimized
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/theknightatthemuseum"
                            title="instagram logo icons"
                        >
                            <Image
                                className="hover:scale-110"
                                src="/insta.gif"
                                alt="instagram image"
                                width={30}
                                height={30}
                                unoptimized
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </nav>
    );
}
