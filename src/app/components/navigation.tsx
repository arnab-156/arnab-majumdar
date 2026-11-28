"use client";

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BriefcaseTabIcon, HomeTabIcon, MailTabIcon } from "../components/icons";
import { roundButtonStyle } from "../utility/stylevariables";
import { headshotUrl } from "../utility/utilities";

// Pixels of continuous scrolling in one direction before the nav toggles,
// so small jitters (or a resting thumb) don't make it flicker.
const SCROLL_DELTA_THRESHOLD = 10;
// Always keep the nav visible near the top of the page.
const TOP_OFFSET = 64;

/**
 * Mobile app style "hide on scroll down, reveal on scroll up".
 * Returns true while the user is scrolling down past the top of the page.
 */
const useHideOnScrollDown = () => {
    const [hidden, setHidden] = useState(false);
    const lastY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const readY = () => {
            // Clamp so iOS rubber-band overscroll at the top/bottom
            // doesn't register as a direction change.
            const maxY = document.documentElement.scrollHeight - window.innerHeight;
            return Math.min(Math.max(window.scrollY, 0), Math.max(maxY, 0));
        };

        lastY.current = readY();

        const update = () => {
            ticking.current = false;
            const y = readY();
            const delta = y - lastY.current;

            if (y <= TOP_OFFSET) {
                setHidden(false);
                lastY.current = y;
                return;
            }
            if (Math.abs(delta) < SCROLL_DELTA_THRESHOLD) return;

            setHidden(delta > 0);
            lastY.current = y;
        };

        const onScroll = () => {
            if (ticking.current) return;
            ticking.current = true;
            window.requestAnimationFrame(update);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return [hidden, setHidden] as const;
};

const isActivePath = (pathname: string | null, href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
};

type MobileTabProps = {
    href: string;
    label: string;
    active: boolean;
    icon: ReactNode;
    className?: string;
};

const MobileTab = ({ href, label, active, icon, className = "" }: MobileTabProps) => (
    <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`flex flex-1 min-w-0 flex-col items-center justify-center gap-1 min-h-14 pt-2 pb-1.5
            text-[11px] leading-none tracking-wide select-none
            transition-colors active:bg-neutral-900/5 dark:active:bg-white/10
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-600
            ${active ? "font-semibold text-purple-800 dark:text-purple-300" : "text-neutral-700 dark:text-neutral-300"}
            ${className}`}
    >
        <span className="flex h-6 w-6 items-center justify-center">{icon}</span>
        <span className="truncate">{label}</span>
    </Link>
);

/** Mobile app style bottom tab bar (below lg only). */
const MobileTabBar = () => {
    const pathname = usePathname();
    const [hidden, setHidden] = useHideOnScrollDown();
    const active = (href: string) => isActivePath(pathname, href);
    const ring = (on: boolean) =>
        on ? "ring-2 ring-purple-800 dark:ring-purple-300" : "ring-1 ring-neutral-900/15 dark:ring-white/20";

    return (
        <section
            data-testid="mobile-primary-nav"
            data-hidden={hidden}
            // Bring the bar back if a keyboard user tabs into it while it's hidden
            onFocus={() => setHidden(false)}
            className={`lg:hidden fixed inset-x-0 bottom-0 z-40 font-sans
                border-t border-neutral-200 bg-white/95 backdrop-blur-md
                dark:border-neutral-800 dark:bg-neutral-950/95
                pb-[env(safe-area-inset-bottom)]
                transition-transform duration-300 ease-in-out motion-reduce:transition-none
                ${hidden ? "translate-y-full" : "translate-y-0"}`}
        >
            <div className="mx-auto flex max-w-xl">
                <MobileTab
                    href="/"
                    label="Home"
                    active={active("/")}
                    icon={<HomeTabIcon filled={active("/")} />}
                />
                <MobileTab
                    href="/experiences"
                    label="Career"
                    active={active("/experiences")}
                    icon={<BriefcaseTabIcon filled={active("/experiences")} />}
                />
                <MobileTab
                    href="/nyu"
                    label="NYU"
                    active={active("/nyu")}
                    icon={
                        <span className={`relative block h-6 w-6 overflow-hidden rounded-md bg-white ${ring(active("/nyu"))}`}>
                            <Image src="/nyu-torch.png" alt="" fill sizes="24px" className="object-contain" unoptimized />
                        </span>
                    }
                />
                <MobileTab
                    href="/contact"
                    label="Contact"
                    active={active("/contact")}
                    icon={<MailTabIcon filled={active("/contact")} />}
                    className="max-md:hidden"
                />
                {/* Profile tab sits rightmost, like a mobile app's "You" tab */}
                <MobileTab
                    href="/about"
                    label="About"
                    active={active("/about")}
                    icon={
                        <span className={`relative block h-6 w-6 overflow-hidden rounded-full ${ring(active("/about"))}`}>
                            <Image src={headshotUrl} alt="" fill sizes="24px" className="object-cover" />
                        </span>
                    }
                />
            </div>
        </section>
    );
};

export const Navigation = () => {
    return (<nav className="flex flex-col items-center justify-between font-nyu" id="navigation">
        <div className="z-10 w-full items-center justify-between flex justify-content font-mono text-sm lg:text-transparent hover:lg:text-black dark:hover:lg:text-white lg:shadow-2xl lg:shadow-purple-800/40 hover:lg:shadow-none">
            {/* Header on desktop (lg and up) */}
            <section
                data-testid="desktop-primary-nav"
                className={`max-lg:hidden group rounded-[36px] fixed flex w-[96%] ml-[2%] sm:w-full sm:ml-0 py-2 sm:py-3 justify-center border-b border-gray-300 backdrop-blur-md
             dark:border-neutral-800
             from-purple-800 to-zinc-800/30 max-lg:bg-gradient-to-t max-lg:dark:bg-purple-800
             lg:w-full lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 lg:h-24
             lg:hover:bg-gradient-to-t lg:dark:hover:bg-purple-800
             left-0 bottom-3 lg:top-0
             `}>
                <div className="grid h-auto lg:h-0 lg:group-hover:h-auto transition ease-in-out lg:delay-[1500ms] grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-1 sm:gap-2 px-2 sm:px-0 w-full sm:w-auto">
                    <Link
                        href="/"
                        tabIndex={0}
                        className={`${roundButtonStyle} lg:group-hover:border-white lg:group-hover:text-white justify-center items-center`}
                    >
                        <span className="px-2 py-1 lg:p-2 lg:m-2 block lg:hidden lg:group-hover:block">Home</span>
                    </Link>

                    <Link
                        href="/about"
                        tabIndex={0}
                        className={`${roundButtonStyle} lg:group-hover:border-white lg:group-hover:text-white justify-center items-center`}
                    >
                        <span className="px-2 py-1 lg:p-2 lg:m-2 block lg:hidden lg:group-hover:block">About</span>
                    </Link>

                    <Link
                        href="/experiences"
                        tabIndex={0}
                        className={`${roundButtonStyle} lg:group-hover:border-white lg:group-hover:text-white justify-center items-center`}
                    >
                        <span className="px-2 py-1 block sm:hidden">Career</span>
                        <span className="px-2 py-1 lg:p-2 lg:m-2 hidden sm:block lg:hidden lg:group-hover:block">Experiences</span>
                    </Link>

                    <Link
                        href="/nyu"
                        tabIndex={0}
                        className={`${roundButtonStyle} lg:group-hover:border-white lg:group-hover:text-white justify-center items-center`}
                    >
                        <div className="px-2 py-1 lg:p-2 lg:m-2 block lg:hidden lg:group-hover:block whitespace-nowrap">NYU <span className="hidden sm:inline-flex">{` Stern`}</span></div>
                    </Link>

                    <Link
                        href="/contact"
                        tabIndex={0}
                        className={`${roundButtonStyle} max-md:hidden lg:group-hover:border-white lg:group-hover:text-white justify-center items-center`}
                    >
                        <span className="px-2 py-1 lg:p-2 lg:m-2 block lg:hidden lg:group-hover:block">Contact</span>
                    </Link>
                </div>
            </section>

            {/* Bottom tab bar on mobile */}
            <MobileTabBar />

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
                            href="https://www.instagram.com/arnab_by_the_ocean"
                            title="instagram profile of arnab"
                            target="_blank"
                        >
                            <Image
                                className="hover:scale-110 mr-2"
                                src="/instagram.svg"
                                alt="instagram logo"
                                width={30}
                                height={30}
                                unoptimized
                            />
                        </Link>
                        <Link
                            href="https://www.youtube.com/arnab156"
                            title="youtube channel of arnab"
                            target="_blank"
                        >
                            <Image
                                className="hover:scale-110 mr-2"
                                src="/youtube.svg"
                                alt="youtube logo"
                                width={30}
                                height={30}
                                unoptimized
                            />
                        </Link>
                        <Link
                            href="/contact#book-now" aria-label="go to calendar to schedule a google meet"
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
