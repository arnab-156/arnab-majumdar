import Link from "next/link";

import { AnimationLayer, Reveal } from "../../components/animation";
import heroStyles from "../../hero.module.css";
import { Flashcards } from "../101/flashcards";
import { FashionContact } from "../fashion-contact";
import { careerChapters } from "./careers-data";

export const metadata = {
  title: "Careers in Fashion | Arnab Majumdar",
  description: "Flashcards on the careers of the fashion industry, from trend forecasting to retail and beauty.",
};

export default function Fashion150Page() {
  const cardCount = careerChapters.reduce((sum, c) => sum + c.cards.length, 0);

  return (
    <AnimationLayer
      as="main"
      className="flex min-h-screen flex-col overflow-x-clip font-nyu text-lotus-ink dark:text-lotus-paper"
      method="rise"
      distance={44}
      duration={760}
      threshold={0.12}
      rootMargin="0px 0px -12% 0px"
    >
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-lotus-paper px-6 py-14 dark:bg-[#101114] md:px-12">
        <div className={`${heroStyles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
        <div className={`${heroStyles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

        <Reveal method="left" className="relative mx-auto max-w-3xl">
          <Link
            href="/fashion"
            className="text-xs uppercase tracking-[0.28em] text-lotus-indigo hover:underline dark:text-lotus-paper/70"
          >
            ← Fashion
          </Link>
          <h1 className="mt-2 font-nyu-ultra text-4xl leading-tight md:text-6xl">Careers in Fashion</h1>
          <aside className="mt-4 border-l-2 border-lotus-madder py-1 pl-6">
            <p className="text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
              Who does what in fashion: the jobs behind every garment, from forecasting and sourcing to
              buying, styling and beauty. {careerChapters.length} chapters, {cardCount} cards. Pick a chapter,
              click a card to flip it, and mark the ones you know until the deck is empty.
            </p>
          </aside>
        </Reveal>
      </section>

      {/* FLASHCARDS */}
      <section className="w-full bg-lotus-paper-deep px-6 py-14 dark:bg-[#16181c] md:px-12">
        <Flashcards chapters={careerChapters} />
      </section>

      <FashionContact />
    </AnimationLayer>
  );
}
