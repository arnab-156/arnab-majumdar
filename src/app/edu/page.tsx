import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import {
  heroPrimaryButtonStyle,
  heroOutlineButtonStyle,
} from "../utility/stylevariables";
import heroStyles from "../hero.module.css";
import { audiences, thesis, thinkers, type Resource } from "./edu-data";

const eyebrowStyle =
  "text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70";

const statusLabel: Record<NonNullable<Resource["status"]>, string> = {
  wip: "WIP",
  soon: "Coming soon",
};

/**
 * One row in an audience's list. A resource with an href is a link; one
 * without is a placeholder carrying its status, so the page can show what is
 * planned without pretending it exists yet.
 */
const ResourceRow = ({ resource }: { resource: Resource }) => {
  const body = (
    <>
      <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className={resource.href ? "group-hover:underline" : undefined}>{resource.label}</span>
        {resource.status && (
          <span className="inline-flex shrink-0 items-center rounded-full border border-lotus-madder/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-lotus-madder">
            {statusLabel[resource.status]}
          </span>
        )}
      </span>
      {resource.note && (
        <span className="mt-1 block text-sm text-lotus-ink/60 dark:text-lotus-paper/60">{resource.note}</span>
      )}
    </>
  );

  return (
    <li className="flex gap-3 py-2">
      <span className="mt-[0.7em] h-px w-4 shrink-0 bg-lotus-madder" aria-hidden />
      {resource.href ? (
        <Link
          href={resource.href}
          className="group block text-lotus-ink/85 hover:text-lotus-indigo dark:text-lotus-paper/85 dark:hover:text-lotus-paper"
        >
          {body}
        </Link>
      ) : (
        <span className="block text-lotus-ink/85 dark:text-lotus-paper/85">{body}</span>
      )}
    </li>
  );
};

export default function EducationPage() {
  return (
    <AnimationLayer
      as="main"
      className="flex min-h-screen flex-col font-nyu text-lotus-ink dark:text-lotus-paper overflow-x-clip"
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

        <AnimationLayer
          as="div"
          className="relative mx-auto grid max-w-6xl items-center gap-10 text-left md:grid-cols-[1.2fr_0.8fr]"
          method="alternate"
          distance={48}
          threshold={0}
          rootMargin="0px"
        >
          <Reveal method="left" className="space-y-4">
            <p className={eyebrowStyle}>Education</p>
            <h1 className="font-nyu-ultra text-4xl leading-tight md:text-5xl">
              One place to start
            </h1>

            <aside className="border-l-2 border-lotus-madder pl-6 py-1">
              <p className="max-w-2xl text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
                A working reference for the people who carry education between them &mdash; students,
                parents, teachers, advisors, policy makers and the communities that pay for all of it.
              </p>
            </aside>

            <Reveal method="left" delay={220} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#directory" className={heroPrimaryButtonStyle}>
                Find your section
              </Link>
              <Link href="#thesis" className={heroOutlineButtonStyle}>
                Read the thinking
              </Link>
            </Reveal>

            <Reveal
              method="left"
              delay={300}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 text-sm text-lotus-ink/70 dark:text-lotus-paper/70"
            >
              <Link href="/experiences#my-education" className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper">
                <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                <span className="group-hover:underline">See my education</span>
              </Link>
              <span className="hidden sm:inline text-lotus-ink/30 dark:text-lotus-paper/30" aria-hidden>&bull;</span>
              <Link href="/" className="underline underline-offset-4 text-lotus-indigo dark:text-lotus-paper/80">
                go back to home
              </Link>
            </Reveal>
          </Reveal>

          {/* The poem that opened the previous version of this page. */}
          <Reveal method="right" delay={140}>
            <div className="rounded-3xl border border-lotus-indigo/20 bg-white/70 p-6 shadow-xl backdrop-blur dark:border-lotus-paper/15 dark:bg-white/5">
              <p className={eyebrowStyle}>Truth&apos;s Torch</p>
              <p className="mt-4 text-lg leading-9 text-lotus-ink/85 dark:text-lotus-paper/85">
                {thesis.poem.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </AnimationLayer>
      </section>

      {/* DIRECTORY — the jump list, so nobody has to scroll to find themselves. */}
      <section
        id="directory"
        className="w-full scroll-mt-20 bg-lotus-indigo px-6 py-14 text-lotus-paper md:px-12"
        aria-labelledby="directory-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-lotus-paper/60">Start here</p>
            <h2 id="directory-heading" className="mt-2 font-nyu-ultra text-3xl md:text-4xl">
              Who are you here as?
            </h2>
          </Reveal>

          <AnimationLayer
            as="div"
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            method="rise"
            distance={44}
            stagger={80}
            staggerCycle={3}
          >
            {audiences.map((audience) => (
              <Reveal
                as="a"
                key={audience.id}
                href={`#${audience.id}`}
                className="group rounded-2xl border border-lotus-paper/20 bg-white/10 p-5 text-left transition hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="font-nyu-ultra text-lg uppercase group-hover:underline">{audience.label}</div>
                <p className="mt-2 text-sm text-lotus-paper/70">{audience.question}</p>
              </Reveal>
            ))}
          </AnimationLayer>
        </div>
      </section>

      {/* THE SECTIONS */}
      <section className="w-full bg-lotus-paper px-6 py-16 dark:bg-[#101114] md:px-12">
        <div className="mx-auto max-w-6xl space-y-14">
          {audiences.map((audience) => (
            <Reveal as="article" key={audience.id} id={audience.id} className="scroll-mt-20">
              <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className={eyebrowStyle}>{audience.label}</p>
                  <h2 className="mt-2 font-nyu-ultra text-2xl leading-tight md:text-3xl">
                    {audience.question}
                  </h2>

                  {audience.answer ? (
                    <aside className="mt-4 border-l-2 border-lotus-madder pl-6 py-1">
                      <p className="text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
                        {audience.answer}
                      </p>
                    </aside>
                  ) : (
                    <p className="mt-4 inline-flex items-center rounded-full border border-dashed border-lotus-madder/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-lotus-madder">
                      Response coming soon
                    </p>
                  )}
                </div>

                <ul className="divide-y divide-lotus-indigo/10 dark:divide-lotus-paper/10">
                  {audience.resources.map((resource) => (
                    <ResourceRow key={resource.label} resource={resource} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* THESIS */}
      <section
        id="thesis"
        className="w-full scroll-mt-20 bg-lotus-paper-deep px-6 py-16 dark:bg-[#16181c] md:px-12"
        aria-labelledby="thesis-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className={eyebrowStyle}>The thinking behind it</p>
            <h2 id="thesis-heading" className="mt-2 font-nyu-ultra text-3xl md:text-4xl">
              Where this comes from
            </h2>
          </Reveal>

          <AnimationLayer
            as="div"
            className="mt-8 grid gap-6 md:grid-cols-2"
            method="rise"
            distance={44}
            stagger={80}
            staggerCycle={2}
          >
            {thinkers.map((thinker) => (
              <Reveal
                as="article"
                key={thinker.name}
                className="rounded-2xl border border-lotus-indigo/15 bg-lotus-paper p-6 shadow-md dark:border-lotus-paper/15 dark:bg-white/5"
              >
                <h3 className="font-nyu-ultra text-lg uppercase">{thinker.name}</h3>
                <p className="mt-3 text-lotus-ink/80 dark:text-lotus-paper/80">{thinker.summary}</p>
              </Reveal>
            ))}

            <Reveal
              as="article"
              className="rounded-2xl border border-lotus-indigo/15 bg-lotus-paper p-6 shadow-md dark:border-lotus-paper/15 dark:bg-white/5"
            >
              <h3 className="font-nyu-ultra text-lg uppercase">Mission</h3>
              <p className="mt-3 text-lotus-ink/80 dark:text-lotus-paper/80">{thesis.mission}</p>
              <h3 className="mt-6 font-nyu-ultra text-lg uppercase">Shared philosophy</h3>
              <p className="mt-3 text-lotus-ink/80 dark:text-lotus-paper/80">{thesis.sharedPhilosophy}</p>
            </Reveal>

            <Reveal
              as="article"
              className="rounded-2xl border border-lotus-indigo/15 bg-lotus-paper p-6 shadow-md dark:border-lotus-paper/15 dark:bg-white/5"
            >
              <h3 className="font-nyu-ultra text-lg uppercase">Vision</h3>
              <p className="mt-3 text-lotus-ink/80 dark:text-lotus-paper/80">{thesis.vision}</p>
            </Reveal>

            <Reveal
              as="article"
              id="edu-design"
              className="scroll-mt-20 rounded-2xl border border-lotus-indigo/15 bg-lotus-paper p-6 shadow-md md:col-span-2 dark:border-lotus-paper/15 dark:bg-white/5"
            >
              <h3 className="font-nyu-ultra text-lg uppercase">Education design, and technology</h3>
              <p className="mt-3 text-lotus-ink/80 dark:text-lotus-paper/80">{thesis.technology}</p>
            </Reveal>
          </AnimationLayer>
        </div>
      </section>

      {/* CONTACT */}
      <section className="w-full bg-lotus-paper px-6 py-16 dark:bg-[#101114] md:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-nyu-ultra text-2xl md:text-3xl">This page is being built in the open</h2>
          <p className="mt-3 text-lotus-ink/70 dark:text-lotus-paper/70">
            Sections marked WIP are next in line. If something you need is missing, saying so is the
            fastest way to get it written.
          </p>
          <Link href="/help" className={`${heroPrimaryButtonStyle} mt-6`}>
            Tell me what is missing
          </Link>
        </Reveal>
      </section>

      <div className="w-full bg-lotus-paper pb-16 text-center dark:bg-[#101114]">
        <Link
          href="#navigation"
          className="text-lotus-indigo underline underline-offset-4 hover:no-underline dark:text-lotus-paper/80"
        >
          go to top
        </Link>
      </div>
    </AnimationLayer>
  );
}
