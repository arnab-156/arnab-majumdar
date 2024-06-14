import Image from "next/image";
import type { Metadata } from 'next'
import Link from 'next/link'
import "./globals.css"

export const metadata: Metadata = {
    title: 'Arnab Majumdar',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <nav className="flex flex-col items-center justify-between">
                    <div className="z-10 w-full items-center justify-between font-mono text-sm">
                        <section className="group fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:h-64 hover:bg-yellow-600 hover:opacity-90">
                            <span className="group-hover:hidden">Welcome!</span>
                            <div className="hidden group-hover:block">
                                <Link className="p-2 m-2 hover:text-lg" href="/tech">
                                    technology
                                </Link>
                                <Link className="p-2 m-2 hover:text-lg" href="/lotus">lotus mahal</Link>
                                <Link className="p-2 m-2 hover:text-lg" href="/dashboard">login</Link>
                            </div>
                            <Image
                                className="hidden group-hover:block relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-2xl w-max"
                                src="/majumdar_arnab_copy.jpg"
                                alt="headshot of arnab majumdar"
                                width={150}
                                height={300}
                                priority
                            />
                        </section>
                        <div className="group fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black hover:bg-yellow-600 hover:h-22">
                            <span className="animate-pulse group-hover:hidden">Copy rights information. All Rights Reserved.</span>
                            <div className="hidden group-hover:block m-4 mt-0">
                                <p className="mb-2">
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
                                            alt="instagram link"
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/amonticon"
                                        title="instagram logo icons"
                                    >
                                        <Image
                                            className="hover:scale-110"
                                            src="/insta.gif"
                                            alt="instagram link"
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    )
}