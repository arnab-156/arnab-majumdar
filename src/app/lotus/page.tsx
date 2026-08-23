import Image from "next/image";
import Link from "next/link";

import { AnimationLayer, Reveal } from "../components/animation";
import { ApparelIcon, CalculatorIcon } from "../components/icons";
import { Tile } from "../components/tile";
import styles from "./styles.module.css";

const LOTUS_MAHAL_URL = "https://www.thelotusmahal.com/";

// Shadow tint for the image tiles. The Tile component defaults to
// shadow-purple-800; every tile on this page overrides it with brand indigo.
const tileShadow = "shadow-lotus-indigo/50";
const tileWrapper = "hover:transition hover:duration-300 hover:ease-in-out";

// The five practices as the studio itself lists them.
const practices = [
  "Events",
  "Fashion Programming",
  "Sustainability Due Diligence",
  "Web & Infrastructure",
  "Consulting",
];

// Everything the Commander's Palace build covered, listed in one place now
// that the project has a single section.
const commandersScope = [
  "Roughly ten pages, rebuilt from the agency's Figma designs.",
  "Distinct desktop and mobile experiences.",
  "Webflow CMS, learned for this project.",
  "Event scheduling wired up through third-party APIs.",
  "Handover materials so the restaurant runs the site itself.",
  "Coming soon: the dining experience flow.",
];

type Client = {
  name: string;
  /** Optional mark. Clients without one render as a typographic wordmark. */
  logoUrl?: string;
};

// Add new clients here — the strip scrolls itself and pauses on hover.
const clients: Client[] = [
  {
    name: "Coppin State University",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1KBgM1GYf_60QUoKAWmTLEghgWRy7dqoEk6SWqyLXw&s=10",
  },
  {
    name: "Drexel University",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWDwE_sobTkE9_-U3CpzEm209HvDj35hFzBMsW4xdYQ&s=10",
  },
  {
    name: "State of Maryland",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77cDrN_jUmmIBU4EodACtfguqPYJXhSR7i0Foz4T0Cw&s",
  },
  { name: "Commander's Palace" },
  { name: "AT&T" },
  { name: "Samsung" },
  { name: "Eye on India" },
  { name: "WorldPride" },
];

const eyebrowStyle = "text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70";
const sectionHeadingStyle = "text-3xl md:text-4xl font-nyu-ultra text-lotus-ink dark:text-lotus-paper";
const ctaStyle =
  "inline-flex items-center gap-3 rounded-xl bg-lotus-indigo px-5 py-3 text-sm font-semibold text-lotus-paper shadow-lg transition hover:-translate-y-[2px] hover:bg-lotus-ink focus:outline-none focus:ring-2 focus:ring-lotus-indigo focus:ring-offset-2";

/**
 * A logo chip. The right margin (rather than a gap on the track) keeps every
 * item the same total width, so the marquee's -50% loop lands seamlessly.
 */
const ClientChip = ({ client, duplicate }: { client: Client; duplicate?: boolean }) => (
  <li
    className="me-6 flex h-[96px] w-[176px] shrink-0 items-center justify-center rounded-xl bg-lotus-paper px-4 py-3 shadow-lg ring-1 ring-white/10"
    {...(duplicate ? { "aria-hidden": true } : {})}
  >
    {client.logoUrl ? (
      <Image
        className="max-h-full w-auto object-contain"
        src={client.logoUrl}
        alt={duplicate ? "" : client.name}
        width={140}
        height={70}
        unoptimized
      />
    ) : (
      <span className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-lotus-indigo">
        {client.name}
      </span>
    )}
  </li>
);

/**
 * The page's own card, in place of the shared <Card/>. That component hardcodes
 * a purple CTA button, which is exactly the colour this page is moving away
 * from, so the small amount of markup here buys full control of the palette.
 */
const BrandCard = ({
  title,
  description,
  href,
  ctaText,
  children,
}: {
  title: string;
  description: string;
  href?: string;
  ctaText?: string;
  children?: React.ReactNode;
}) => (
  <Reveal
    as="article"
    className="flex h-full flex-col rounded-2xl border border-lotus-indigo/15 bg-lotus-paper p-6 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-lotus-paper/15 dark:bg-white/5"
  >
    {children && <div className="mb-4 flex min-h-[104px] items-center justify-center">{children}</div>}
    <h3 className="font-nyu-ultra text-lg uppercase leading-tight text-lotus-ink dark:text-lotus-paper">
      {title}
    </h3>
    <p className="mt-2 flex-1 text-sm leading-relaxed text-lotus-ink/75 dark:text-lotus-paper/75">
      {description}
    </p>
    {href ? (
      <Link href={href} className={`${ctaStyle} mt-5 self-start`}>
        {ctaText ?? "Learn more"}
      </Link>
    ) : (
      <span className="mt-5 self-start rounded-xl border border-dashed border-lotus-madder/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-lotus-madder">
        In development
      </span>
    )}
  </Reveal>
);

export default function Lotus() {
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
        <div className={`${styles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
        <div className={`${styles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

        <AnimationLayer
          as="div"
          className="relative mx-auto grid max-w-6xl items-center gap-10 text-left md:grid-cols-[1.2fr_0.8fr]"
          method="alternate"
          distance={48}
          threshold={0}
          rootMargin="0px"
        >
          <Reveal method="left" className="space-y-4">
            <p className={eyebrowStyle}>Boutique studio &middot; New York &middot; DC &middot; Baltimore</p>
            <h1 className="font-nyu-ultra text-4xl leading-tight text-lotus-ink dark:text-lotus-paper md:text-5xl">
              The Lotus Mahal
            </h1>
            <p className="max-w-2xl text-lg text-lotus-ink/80 dark:text-lotus-paper/80 md:text-xl">
              Work that doesn&apos;t fit one department &mdash; strategy and digital experiences that
              actually work, shipped as something you can operate.
            </p>

            <Reveal method="left" delay={220} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href={LOTUS_MAHAL_URL} target="_blank" rel="noreferrer" className={`${ctaStyle} group`}>
                <span>
                  Visit The Lotus Mahal
                  <span className="block text-xs font-normal text-lotus-paper/70 group-hover:underline">
                    thelotusmahal.com &mdash; opens in new tab
                  </span>
                </span>
              </Link>
              <Link href="/" className="underline underline-offset-4 text-lotus-indigo dark:text-lotus-paper/80">
                go back to home
              </Link>
            </Reveal>
          </Reveal>

          <Reveal method="right" delay={140}>
            <Link
              href={LOTUS_MAHAL_URL}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-3xl border border-lotus-indigo/20 bg-white/70 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-lotus-indigo/40 dark:border-lotus-paper/15 dark:bg-white/5"
            >
              <p className={eyebrowStyle}>The practice</p>
              <ul className="mt-4 space-y-2">
                {practices.map((practice) => (
                  <li
                    key={practice}
                    className="flex items-center gap-3 text-sm text-lotus-ink/85 dark:text-lotus-paper/85"
                  >
                    <span className="h-px w-6 shrink-0 bg-lotus-madder" aria-hidden />
                    {practice}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-block text-xs uppercase tracking-[0.18em] text-lotus-indigo group-hover:underline dark:text-lotus-paper/70">
                See the studio site
              </span>
            </Link>
          </Reveal>
        </AnimationLayer>
      </section>

      {/* CLIENTS — the one section on a dark ground, so the marks carry it. */}
      <section
        className="w-full bg-lotus-indigo px-6 py-14 text-lotus-paper md:px-12"
        aria-labelledby="clients-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-lotus-paper/60">Selected work with</p>
              <h2 id="clients-heading" className="mt-2 font-nyu-ultra text-3xl md:text-4xl">
                Clients &amp; Collaborators
              </h2>
            </div>
            <p className="max-w-md text-sm text-lotus-paper/70">
              Universities, restaurants, public agencies and Pride organisers &mdash; the work travels
              across sectors, which is rather the point.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <div className={`${styles.marquee} relative overflow-hidden`}>
              <ul className={`${styles.marqueeTrack} flex w-max list-none items-stretch`}>
                {clients.map((client) => (
                  <ClientChip key={client.name} client={client} />
                ))}
                {clients.map((client) => (
                  <ClientChip key={`${client.name}-duplicate`} client={client} duplicate />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STUDIO WORK */}
      <section className="w-full bg-lotus-paper px-6 py-16 dark:bg-[#101114] md:px-12" aria-labelledby="work-heading">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className={eyebrowStyle}>Projects</p>
            <h2 id="work-heading" className={`mt-2 ${sectionHeadingStyle}`}>
              Studio Work
            </h2>
            <p className="mt-2 max-w-2xl text-lotus-ink/70 dark:text-lotus-paper/70">
              Programming, education and platforms built for organisations that needed more than one
              discipline in the room.
            </p>
          </Reveal>

          <AnimationLayer
            as="div"
            className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
            method="rise"
            distance={44}
            stagger={90}
            staggerCycle={3}
          >
            <Reveal>
              <Tile
                href="/lotus/garden-of-swann"
                title="World Pride Garden of Swann Queer Fashion Show"
                subTitle="Fashion + Activism — Washington DC 2025"
                url="bg-[url('https://live.staticflickr.com/65535/55041103674_dd84ce4ce4_w.jpg')]"
                shadowColor={tileShadow}
                customClassName={tileWrapper}
              />
            </Reveal>

            <Reveal>
              <Tile
                title="Eye on India - The Saree Project"
                subTitle="Fashion + Education + Sustainability"
                href="/lotus/eye-on-india"
                url="bg-[url('https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg')]"
                shadowColor={tileShadow}
                customClassName={tileWrapper}
                imageContain
              />
            </Reveal>

            <Reveal>
              <Tile
                href="/lotus/samsung"
                title="AT&T Samsung Design Project"
                subTitle="Education: incorporating technology in the design process."
                url="bg-[url('https://live.staticflickr.com/65535/53851021701_6619ae0f97_w.jpg')]"
                shadowColor={tileShadow}
                customClassName={tileWrapper}
              />
            </Reveal>

            <Reveal>
              <Tile
                title="Made of Chicago"
                href="/moc"
                subTitle="Chicago-inspired activewear, sold through interactive vending machines in hotel and building gyms."
                url="bg-[url('https://live.staticflickr.com/65535/53809112039_8d183992a8_w.jpg')]"
                shadowColor={tileShadow}
                customClassName={tileWrapper}
                imageContain
              />
            </Reveal>

            <Reveal>
              <Tile
                title="Greeting Cards by Lotus Mahal"
                subTitle="Watercolour greeting cards printed on high quality paper, in a range of designs and price points."
                href="https://lotusmahal.com/collections/watercolor-cards"
                url="bg-[url('https://live.staticflickr.com/65535/53807737642_cbaee14e20_w.jpg')]"
                shadowColor={tileShadow}
                customClassName={tileWrapper}
                openInNewTab
              />
            </Reveal>

            <Reveal>
              <Tile
                title="Handmade Watercolour Candles"
                subTitle="Watercolours printed, hand-poured, all made in the USA."
                href="https://lotusmahal.com/collections/moon-river"
                url="bg-[url('https://live.staticflickr.com/65535/53807873807_014bfe7fc8_w.jpg')]"
                shadowColor={tileShadow}
                customClassName={tileWrapper}
                imageContain
                openInNewTab
              />
            </Reveal>
          </AnimationLayer>

          <Reveal className="mt-10 flex justify-center">
            <Link href="/experiences" className={ctaStyle}>
              See all experience
            </Link>
          </Reveal>
        </div>
      </section>

      {/*
        COMMANDER'S PALACE — every piece of that project in one place. The cyan
        treatment is the one this project already carried on the page (the
        shared tiffanyBackgroundTheme), kept as its signature colour.
        The #commanders anchor is deep-linked from the homepage.
      */}
      <section
        id="commanders"
        className="w-full scroll-mt-20 bg-gradient-to-b from-cyan-500 to-cyan-200/75 px-6 py-16 text-lotus-ink md:px-12"
        aria-labelledby="commanders-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-lotus-ink/70">Case study &middot; New Orleans</p>
            <h2 id="commanders-heading" className="mt-2 font-nyu-ultra text-3xl md:text-4xl">
              Commander&apos;s Palace
            </h2>
            <p className="mt-3 max-w-3xl text-lotus-ink/80">
              A new website for a historic New Orleans restaurant, built as technology consultant to Also
              Known As Studios from their Figma designs. Webflow for the CMS, a couple of APIs for event
              scheduling, and distinct desktop and mobile experiences &mdash; plus the training materials
              the restaurant now runs it with.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <Reveal method="left" className="space-y-6">
              <div className="overflow-hidden rounded-2xl bg-lotus-ink/90 shadow-2xl">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/vAwMybu7fSs?si=ymkkJ0aRRTFUopsF&amp;start=155"
                  title="Walkthrough of the Commander's Palace desktop website"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="aspect-video h-auto w-full"
                ></iframe>
              </div>

              <div className="rounded-2xl border border-lotus-ink/10 bg-lotus-paper/80 p-6 shadow-md">
                <h3 className="font-nyu-ultra text-lg uppercase">What the build covered</h3>
                <ul className="mt-3 grid gap-2 text-sm text-lotus-ink/80 sm:grid-cols-2">
                  {commandersScope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[0.6em] h-px w-4 shrink-0 bg-lotus-madder" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://www.commanderspalace.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${ctaStyle} mt-6`}
                >
                  Visit commanderspalace.com
                </Link>
              </div>
            </Reveal>

            <Reveal method="right" delay={140}>
              <figure className="rounded-2xl border border-lotus-ink/10 bg-lotus-paper/80 p-4 shadow-md">
                <a
                  data-flickr-embed="true"
                  data-context="true"
                  href="https://www.flickr.com/photos/200915664@N03/54440184847/in/dateposted-public/"
                  title="Commander's Palace mobile website"
                >
                  <Image
                    className="mx-auto rounded"
                    src="https://live.staticflickr.com/31337/54440184847_bac89e2f58_w.jpg"
                    alt="The Commander's Palace mobile website shown on a phone"
                    width={225}
                    height={400}
                    unoptimized
                  />
                </a>
                <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-lotus-ink/60">
                  The mobile build
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLAY, TOOLS AND WHAT'S NEXT */}
      <section
        className="w-full bg-lotus-paper-deep px-6 py-16 dark:bg-[#16181c] md:px-12"
        aria-labelledby="more-heading"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className={eyebrowStyle}>Free to use, and coming next</p>
            <h2 id="more-heading" className={`mt-2 ${sectionHeadingStyle}`}>
              Play, Tools &amp; What&apos;s Next
            </h2>
          </Reveal>

          <AnimationLayer
            as="div"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            method="rise"
            distance={44}
            stagger={90}
            staggerCycle={3}
          >
            <BrandCard
              title="Free trivia, on the go"
              description="Version 1 is live and version 2 is on the way."
              href="/games/quiz"
              ctaText="Play trivia"
            >
              <Image src="/quiz.png" alt="" width={100} height={100} className="rounded" aria-hidden unoptimized />
            </BrandCard>

            <BrandCard
              title="Tic Tac Toe"
              description="A simple React Tic Tac Toe game for when you are bored."
              href="/games/tic-tac-toe"
              ctaText="Play game"
            >
              <Image
                src="/tic-tac-toe.gif"
                alt=""
                width={100}
                height={100}
                className="rounded"
                aria-hidden
                unoptimized
              />
            </BrandCard>

            <BrandCard
              title="Basic calculator"
              description="Play around with a basic React calculator."
              href="/tech/calculator"
              ctaText="Open calculator"
            >
              <CalculatorIcon height="100px" width="100px" />
            </BrandCard>

            <BrandCard
              title="Fashion Business 101"
              description="Start your fashion business and everything you need to know. Coming in 2025."
            >
              <ApparelIcon height="100px" width="100px" />
            </BrandCard>

            <BrandCard
              title="Education Design"
              description="Be 22nd century ready. Read where this is heading on the education page."
              href="/edu#edu-design"
              ctaText="Education Design"
            />
          </AnimationLayer>
        </div>
      </section>

      <div className="w-full bg-lotus-paper-deep pb-16 text-center dark:bg-[#16181c]">
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
