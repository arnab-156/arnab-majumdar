import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import heroStyles from "../hero.module.css";
import { FashionContact } from "./fashion-contact";

export const metadata = {
  title: "Fashion | Arnab Majumdar",
  description: "A home for my fashion education and experience.",
};

type Course = {
  code: string;
  title: string;
  note: string;
  /** Set once the course page exists. */
  href?: string;
  /** Swatch colour for the tile. */
  swatch: string;
};

const courses: Course[] = [
  {
    code: "101",
    title: "Fashion 101",
    note: "The business of fashion, from design and textiles to retail. Study it as flashcards.",
    href: "/fashion/101",
    swatch: "bg-lotus-madder",
  },
  {
    code: "150",
    title: "Careers in Fashion",
    note: "Who does what, from trend forecasting and sourcing to buying, styling and beauty. Study it as flashcards.",
    href: "/fashion/150",
    swatch: "bg-lotus-ink",
  },
  {
    code: "AE",
    title: "Apparel Evaluation",
    note: "Judging fit, fabric and construction.",
    swatch: "bg-lotus-indigo",
  },
];

/** A swatch tile: a block of colour with the course code set large on it. */
const CourseTile = ({ course }: { course: Course }) => {
  const body = (
    <>
      <div className={`${course.swatch} flex aspect-[4/3] items-end rounded-xl p-5 text-lotus-paper`}>
        <span className="font-nyu-ultra text-6xl leading-none md:text-7xl">{course.code}</span>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h3 className={`font-nyu-ultra text-xl uppercase ${course.href ? "group-hover:underline" : ""}`}>
          {course.title}
        </h3>
        {!course.href && (
          <span className="rounded-full border border-lotus-madder/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-lotus-madder">
            Coming soon
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-lotus-ink/70 dark:text-lotus-paper/70">{course.note}</p>
    </>
  );

  const frame =
    "group block rounded-2xl border border-lotus-indigo/15 bg-white/60 p-4 shadow-md dark:border-lotus-paper/15 dark:bg-white/5";

  return course.href ? (
    <Reveal as="div">
      <Link href={course.href} className={`${frame} transition hover:-translate-y-1 hover:shadow-xl`}>
        {body}
      </Link>
    </Reveal>
  ) : (
    <Reveal as="div" className={`${frame} opacity-80`}>
      {body}
    </Reveal>
  );
};

export default function FashionPage() {
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
      <section className="relative w-full overflow-hidden bg-lotus-paper px-6 py-16 dark:bg-[#101114] md:px-12">
        <div className={`${heroStyles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
        <div className={`${heroStyles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

        <Reveal method="left" className="relative mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
            Fashion
          </p>
          <h1 className="mt-2 font-nyu-ultra text-5xl leading-tight md:text-7xl">Fashion</h1>
          {/* A strip of swatches: the page's one piece of graphic. */}
          <div className="mt-6 flex h-3 max-w-md overflow-hidden rounded-full" aria-hidden>
            <span className="flex-1 bg-lotus-madder" />
            <span className="flex-1 bg-lotus-indigo" />
            <span className="flex-1 bg-lotus-ink" />
            <span className="flex-1 bg-lotus-paper-deep" />
          </div>
          <aside className="mt-6 border-l-2 border-lotus-madder py-1 pl-6">
            <p className="max-w-2xl text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
              A home for my fashion experience: the courses I have taken and the work they led to.
            </p>
          </aside>
        </Reveal>
      </section>

      {/* EDUCATION */}
      <section className="w-full bg-lotus-paper-deep px-6 py-16 dark:bg-[#16181c] md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
              Education
            </p>
            <h2 className="mt-2 font-nyu-ultra text-3xl md:text-4xl">Courses</h2>
          </Reveal>

          <AnimationLayer
            as="div"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            method="rise"
            distance={44}
            stagger={80}
            staggerCycle={3}
          >
            {courses.map((course) => (
              <CourseTile key={course.code} course={course} />
            ))}
          </AnimationLayer>
        </div>
      </section>

      <FashionContact />
    </AnimationLayer>
  );
}
