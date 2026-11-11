"use client";

import Image from "next/image";
import Link from "next/link";
import { type TouchEvent, useCallback, useEffect, useRef, useState } from "react";

import { AgentConcierge } from "./agent-concierge";
import { ContactForm } from "./contact-form";
import { heroOutlineButtonStyle, heroPrimaryButtonStyle } from "../utility/stylevariables";

const SLIDES = [
  { slug: "assistant", label: "Chat with Agador" },
  { slug: "send-message", label: "Send a message" },
  { slug: "book-now", label: "Book a time" },
] as const;

type SlideSlug = (typeof SLIDES)[number]["slug"];

const slugToIndex = (slug: string): number => {
  const clean = slug.replace(/^#/, "");
  const found = SLIDES.findIndex((s) => s.slug === clean);
  return found === -1 ? 0 : found;
};

export const ContactCarousel = ({ siteKey }: { siteKey?: string }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  const slideCount = SLIDES.length;

  const goToSlide = useCallback(
    (index: number) => {
      const normalized = ((index % slideCount) + slideCount) % slideCount;
      setActiveSlide(normalized);
      setDragOffset(0);
      setIsDragging(false);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${SLIDES[normalized].slug}`);
      }
    },
    [slideCount]
  );

  const nextSlide = useCallback(() => {
    goToSlide(activeSlide + 1);
  }, [activeSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeSlide - 1);
  }, [activeSlide, goToSlide]);

  // Sync with URL hash (#assistant, #send-message, #book-now) and custom slide events
  useEffect(() => {
    const syncFromHash = () => {
      if (!window.location.hash) return;
      const idx = slugToIndex(window.location.hash);
      setActiveSlide(idx);
    };

    const handleCustomSlide = (event: Event) => {
      const detail = (event as CustomEvent<{ slug?: SlideSlug; index?: number }>).detail;
      if (typeof detail?.index === "number") {
        goToSlide(detail.index);
      } else if (detail?.slug) {
        goToSlide(slugToIndex(detail.slug));
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("arnab:contact-slide", handleCustomSlide);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("arnab:contact-slide", handleCustomSlide);
    };
  }, [goToSlide]);

  // Keyboard Left/Right navigation on desktop when not typing in an input/textarea
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe handlers for mobile and tablet
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 1) return;
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
    isHorizontalSwipe.current = null;
    setIsDragging(true);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = event.touches[0].clientX - touchStartX.current;
    const deltaY = event.touches[0].clientY - touchStartY.current;

    if (isHorizontalSwipe.current === null) {
      if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
        isHorizontalSwipe.current = Math.abs(deltaX) > Math.abs(deltaY) * 1.15;
      }
    }

    if (isHorizontalSwipe.current) {
      setDragOffset(deltaX * 0.65);
    }
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const deltaY = event.changedTouches[0].clientY - touchStartY.current;

    if (isHorizontalSwipe.current && Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      setDragOffset(0);
      setIsDragging(false);
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isHorizontalSwipe.current = null;
  };

  return (
    <div className="w-full">
      {/* Top Mode Buttons */}
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 pb-6 md:px-0">
        <div className="flex flex-wrap items-center gap-3" role="tablist" aria-label="Contact options">
          {SLIDES.map((slide, index) => {
            const isActive = activeSlide === index;
            return (
              <button
                key={slide.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => goToSlide(index)}
                className={
                  isActive
                    ? `${heroPrimaryButtonStyle} gap-2`
                    : `${heroOutlineButtonStyle} gap-2 bg-white/50 dark:bg-white/5`
                }
              >
                {slide.slug === "book-now" && (
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden
                    unoptimized
                    className={isActive ? "brightness-200 invert" : ""}
                  />
                )}
                {slide.label}
              </button>
            );
          })}
        </div>

        {/* Compact Prev/Next controls + indicators */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lotus-indigo/30 bg-white/80 text-lg font-semibold text-lotus-indigo shadow-sm transition hover:border-lotus-indigo hover:bg-white dark:border-lotus-paper/25 dark:bg-white/10 dark:text-lotus-paper"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lotus-indigo/30 bg-white/80 text-lg font-semibold text-lotus-indigo shadow-sm transition hover:border-lotus-indigo hover:bg-white dark:border-lotus-paper/25 dark:bg-white/10 dark:text-lotus-paper"
          >
            &rsaquo;
          </button>
        </div>
      </div>

      {/* Carousel Stage with Desktop Side Arrows + Mobile/Tablet Touch Swipe */}
      <div className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6 md:px-14">
        {/* Left Side Arrow (Desktop) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label={`Previous: ${SLIDES[(activeSlide - 1 + slideCount) % slideCount].label}`}
          title={`Previous: ${SLIDES[(activeSlide - 1 + slideCount) % slideCount].label}`}
          className="hidden md:inline-flex absolute left-1 top-64 z-20 h-12 w-12 items-center justify-center rounded-full border border-lotus-indigo/30 bg-white/90 text-2xl font-bold text-lotus-indigo shadow-lg backdrop-blur transition hover:scale-105 hover:border-lotus-indigo hover:bg-lotus-indigo hover:text-lotus-paper dark:border-lotus-paper/25 dark:bg-zinc-900/90 dark:text-lotus-paper dark:hover:bg-lotus-paper dark:hover:text-lotus-ink"
        >
          &lsaquo;
        </button>

        {/* Right Side Arrow (Desktop) */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label={`Next: ${SLIDES[(activeSlide + 1) % slideCount].label}`}
          title={`Next: ${SLIDES[(activeSlide + 1) % slideCount].label}`}
          className="hidden md:inline-flex absolute right-1 top-64 z-20 h-12 w-12 items-center justify-center rounded-full border border-lotus-indigo/30 bg-white/90 text-2xl font-bold text-lotus-indigo shadow-lg backdrop-blur transition hover:scale-105 hover:border-lotus-indigo hover:bg-lotus-indigo hover:text-lotus-paper dark:border-lotus-paper/25 dark:bg-zinc-900/90 dark:text-lotus-paper dark:hover:bg-lotus-paper dark:hover:text-lotus-ink"
        >
          &rsaquo;
        </button>

        {/* Sliding Viewport */}
        <div
          className="overflow-hidden rounded-3xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex items-start ${
              isDragging ? "" : "transition-transform duration-500 ease-out"
            }`}
            style={{
              transform: `translate3d(calc(-${activeSlide * 100}% + ${dragOffset}px), 0, 0)`,
            }}
          >
            {/* SLIDE 0: CHAT WITH AGADOR */}
            <section
              id="assistant"
              aria-hidden={activeSlide !== 0}
              className={`w-full shrink-0 px-1 py-2 transition-opacity duration-300 ${
                activeSlide === 0 ? "opacity-100" : "max-h-[620px] overflow-hidden opacity-40 pointer-events-none"
              }`}
            >
              <AgentConcierge />
            </section>

            {/* SLIDE 1: SEND A MESSAGE */}
            <section
              id="send-message"
              aria-hidden={activeSlide !== 1}
              className={`w-full shrink-0 px-1 py-2 transition-opacity duration-300 ${
                activeSlide === 1 ? "opacity-100" : "max-h-[620px] overflow-hidden opacity-40 pointer-events-none"
              }`}
            >
              <ContactForm siteKey={siteKey} />
            </section>

            {/* SLIDE 2: BOOK A TIME (CALENDAR) */}
            <section
              id="book-now"
              aria-hidden={activeSlide !== 2}
              className={`w-full shrink-0 px-1 py-2 transition-opacity duration-300 ${
                activeSlide === 2 ? "opacity-100" : "max-h-[620px] overflow-hidden opacity-40 pointer-events-none"
              }`}
            >
              <div className="mx-auto w-full max-w-3xl rounded-3xl border border-lotus-indigo/20 bg-lotus-paper p-6 text-left shadow-xl dark:border-lotus-paper/15 dark:bg-white/5 md:p-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="relative h-7 w-7 shrink-0">
                      <Image src="/calendar.svg" alt="" fill className="object-contain" aria-hidden unoptimized />
                    </span>
                    <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
                      Live availability
                    </p>
                  </div>
                  <h2 className="font-nyu-ultra text-2xl leading-tight md:text-3xl">
                    Book a time
                  </h2>
                  <p className="text-sm text-lotus-ink/80 dark:text-lotus-paper/80">
                    Planning ahead? The calendar below shows live availability and stays up to date, so
                    check back any time for new openings.
                  </p>
                </div>

                {/* The calendar keeps a white ground in both themes. */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-lotus-indigo/20 bg-white p-2 shadow-inner sm:p-3 dark:border-lotus-paper/15">
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ25585GXBIfMQn9F7wdhXvYhNQefhyvUd3Sg9q0DdHwiD0QAYQZiCDtI0AGM3jAVZ8zhHfz06G3?gv=true"
                    title="Schedule time on my calendar"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="h-[68vh] min-h-[500px] w-full rounded-xl border-0 md:h-[760px]"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Pagination Dots & Touch/Arrow Hint */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-3">
            {SLIDES.map((slide, index) => {
              const isActive = activeSlide === index;
              return (
                <button
                  key={slide.slug}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${slide.label}`}
                  className={`h-2.5 rounded-full transition-all ${
                    isActive
                      ? "w-8 bg-lotus-indigo dark:bg-lotus-paper"
                      : "w-2.5 bg-lotus-indigo/25 hover:bg-lotus-indigo/50 dark:bg-lotus-paper/25"
                  }`}
                />
              );
            })}
          </div>
          <p className="text-xs text-lotus-ink/60 dark:text-lotus-paper/60">
            <span className="md:hidden">Swipe left or right, or tap the buttons above to switch views.</span>
            <span className="hidden md:inline">Use the buttons above or the side arrows to slide between Chat, Message, and Calendar.</span>
          </p>
          <Link
            href="#navigation"
            className="mt-2 text-sm text-lotus-indigo underline underline-offset-4 hover:no-underline dark:text-lotus-paper/80"
          >
            go to top
          </Link>
        </div>
      </div>
    </div>
  );
};
