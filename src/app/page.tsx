import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { AnimationLayer, Reveal } from "./components/animation";
import { HomeClickTracker } from "./components/home-click-tracker";
import { StudioTile } from "./components/studio-tile";
import { ReadIcon } from "./components/icons";
import styles from './hero.module.css';
import { nyuProjects } from './nyu/projects-data';
import { cardWrapperStyle, heroPrimaryButtonStyle, heroOutlineButtonStyle } from './utility/stylevariables';

// Grid cells are flex columns, so a card fills whatever height the row settles
// on whether or not a heading sits above it.
const tileWrapperStyle = `${cardWrapperStyle} flex flex-col`;

// The route into the NYU journey, in NYU's own violet rather than the studio
// palette — #57068c is the same brand violet the course tiles on /nyu use.
// Deliberately a size down from the panel's primary action: this is the
// secondary way out of the card, so it keeps the brand colour but not the
// weight.
const nyuButtonStyle =
  "inline-flex items-center rounded-lg bg-[#57068c] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:bg-[#2e0068] focus:outline-none focus:ring-2 focus:ring-[#57068c] focus:ring-offset-2";

const decodeHeaderValue = (headerValue: string | null): string => {
  if (!headerValue) {
    return '';
  }

  try {
    return decodeURIComponent(headerValue).trim();
  } catch {
    return headerValue.trim();
  }
};

const getHomepageUserLocation = (): string => {
  const requestHeaders = headers();

  const city = decodeHeaderValue(requestHeaders.get('x-vercel-ip-city'));
  const region = decodeHeaderValue(requestHeaders.get('x-vercel-ip-country-region'));
  const country = decodeHeaderValue(requestHeaders.get('x-vercel-ip-country'));
  const formattedLocation = [city, region, country].filter(Boolean).join(', ');

  return formattedLocation || 'unknown';
};

export default function Home() {
  const userLocation = getHomepageUserLocation();
  const newLearningProjects = nyuProjects
    .filter((project) => project.description && project.urls?.length)
    .filter((project) => !project.urls?.[0]?.url.includes("example.com"));
  const randomNewLearningProject = newLearningProjects.length
    ? newLearningProjects[Math.floor(Math.random() * newLearningProjects.length)]
    : null;
  const newLearningUrl = randomNewLearningProject?.urls?.[0]?.url ?? "/nyu";
  const newLearningOpensNewTab = newLearningUrl.startsWith("http");

  return (
    <HomeClickTracker userLocation={userLocation}>
      <AnimationLayer
        as="main"
        className="flex min-h-screen flex-col items-center justify-between mb-32 font-nyu overflow-x-clip"
        method="rise"
        distance={44}
        duration={760}
        threshold={0.12}
        rootMargin="0px 0px -12% 0px"
      >
        {/* HERO */}
        <section className="relative w-full overflow-hidden bg-lotus-paper text-lotus-ink dark:bg-[#101114] dark:text-lotus-paper py-16 px-6 md:px-12">
          <div className={`${styles.heroAurora} pointer-events-none absolute inset-0`} aria-hidden />
          <div className={`${styles.ruleGrid} pointer-events-none absolute inset-0 opacity-60`} aria-hidden />

          <AnimationLayer
            as="div"
            className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center text-left"
            method="alternate"
            distance={48}
            threshold={0}
            rootMargin="0px"
          >
            <Reveal method="left" className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-lotus-indigo/25">
                  <Image src="/headshot.png" alt="" fill sizes="56px" className="object-cover" aria-hidden />
                </span>
                <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
                  Fashion &middot; Technology &middot; Sustainability
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">
                Arnab Majumdar
              </h1>
              {/* Same treatment as /about's Gallup block and /experiences'
                  "Focus areas": madder rule down the left, body at text-lg. */}
              <aside className="border-l-2 border-lotus-madder pl-6 py-1">
                <p className="text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85 max-w-2xl">
                  I turn strategy into accessible, high-performing digital experiences &mdash; for retailers,
                  universities, restaurants and the people who run them.
                </p>
              </aside>

              <Reveal method="left" delay={220} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/experiences"
                  className={heroPrimaryButtonStyle}
                >
                  See the work
                </Link>
                <Link href="/about" className={heroOutlineButtonStyle}>
                  Read the full story
                </Link>
              </Reveal>

              {/* Stern and the studio ride along as credentials rather than as
                  the headline, but both keep a prominent route in from home. */}
              <Reveal
                method="left"
                delay={300}
                className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 text-sm text-lotus-ink/70 dark:text-lotus-paper/70"
              >
                <Link href="/lotus" className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper">
                  <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                  <span className="group-hover:underline">Founder, The Lotus Mahal</span>
                </Link>
                {/* Hidden once the two credentials wrap onto their own lines,
                    where a separator between them reads as a stray character. */}
                <span className="hidden sm:inline text-lotus-ink/30 dark:text-lotus-paper/30" aria-hidden>&bull;</span>
                <Link href="/nyu" className="group inline-flex items-center gap-2 hover:text-lotus-indigo dark:hover:text-lotus-paper">
                  <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                  <span className="group-hover:underline">Executive MBA, NYU Stern &mdash; Class of A27</span>
                </Link>
              </Reveal>
            </Reveal>

            {randomNewLearningProject && (
              <Reveal method="right" delay={140} className="relative">
                <div className="rounded-3xl border border-lotus-indigo/20 bg-white/70 p-6 shadow-xl backdrop-blur dark:border-lotus-paper/15 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">Projects and Learnings!</p>
                  <h2 className="mt-2 text-xl font-semibold">{randomNewLearningProject.projectName}</h2>
                  {/* Descriptions vary a lot in length; clamping keeps the
                      panel from towering over the hero copy beside it. */}
                  <p className="mt-3 text-sm leading-relaxed text-lotus-ink/75 dark:text-lotus-paper/75 line-clamp-5">
                    {randomNewLearningProject.description}
                  </p>
                  {/* "view details" opens the project on show and is what this
                      card is for, so it leads. The NYU route stacks underneath
                      it — same left edge, a size down — so the order down the
                      card is the order of importance. */}
                  <div className="mt-4 flex flex-col items-start gap-3">
                    <Link
                      href={newLearningUrl}
                      {...(newLearningOpensNewTab ? { target: "_blank", rel: "noreferrer" } : {})}
                      className={heroPrimaryButtonStyle}
                    >
                      view details
                    </Link>
                    <Link href="/nyu" className={nyuButtonStyle}>
                      Follow my NYU journey
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}
          </AnimationLayer>
        </section>

        <AnimationLayer
          as="div"
          className="grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left"
          method="rise"
          distance={44}
          stagger={90}
          staggerCycle={3}
        >
          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Read the full story"
              title="About Arnab!"
              description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
              imageUrl="/headshot.png"
              imageAlt="Portrait of Arnab Majumdar"
              href="/about"
              buttonText="go to about"
            />
          </Reveal>

          {/* The one tile that asks for something outright. */}
          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Work with me"
              description="If you are a small business, a retailer, or an educator who wants to use the latest technologies & practices, let&#39;s talk."
              href="/contact"
              ariaLabel="go to the contact form"
              buttonText="Contact me"
            />
          </Reveal>

          <Reveal className={tileWrapperStyle} id="aster">
            <StudioTile
              eyebrow="Made in US Collaboration:"
              title="Aster for Lotus - Made in Rhode Island"
              description="Luxurious hand-crafted candle featuring exquisite watercolor artwork on a heavy whiskey-colored glass jar."
              imageUrl="https://lotusmahal.com/cdn/shop/files/DSCF2076_42f9aa66-c21a-4b76-a0db-88a679d0039e.jpg?v=1741617890&width=1646"
              imageAlt="Aster for Lotus candle in a whiskey-coloured glass jar"
              href="https://lotusmahal.com/products/aster-for-lotus"
              buttonText="See Product"
              openInNewTab
            />
          </Reveal>

          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Updated Daily!"
              title="Comic of the day!"
              description="Have fun reading some fun comics!! More Features to come!"
              media={<ReadIcon height="100px" width="100px" />}
              href="/tech/comic"
              buttonText="Read NOW!"
            />
          </Reveal>

          <Reveal className={tileWrapperStyle} id="garden-of-swann">
            <StudioTile
              eyebrow="Stories of Courage"
              title="World Pride Garden of Swann Washington D.C."
              description="Click to learn more about Fashion + Activism of William Dorsey Swann"
              imageUrl="https://live.staticflickr.com/65535/55041103674_dd84ce4ce4_w.jpg"
              imageAlt="World Pride Garden of Swann official event partner artwork"
              href="/lotus/garden-of-swann"
              buttonText="Learn More"
            />
          </Reveal>

          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Expanding Retail Experiences:"
              title="Owner and CEO - Made of Chicago"
              description="Click here to know more about the innovation, technology, and design."
              imageUrl="https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg"
              imageAlt="Made of Chicago vending machine"
              href="/moc"
              buttonText="Learn More"
            />
          </Reveal>

          <Reveal className={tileWrapperStyle} id="cp">
            <StudioTile
              eyebrow="Project from New Orleans:"
              title="Commander&#39;s Palace Project"
              description="Developed a new website for Commander&#39;s Palace using Webflow CMS, event scheduling APIs, and agency-provided Figma designs."
              href="/lotus#commanders"
              buttonText="Learn More"
            >
              <ul className="list-disc list-inside">
                <li>Distinct Mobile and Desktop Experience</li>
              </ul>
            </StudioTile>
          </Reveal>

          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Free to play"
              title="Free trivia for you to enjoy on the go!"
              description="Version 1 is live. Version 2 coming soon."
              imageUrl="/quiz.png"
              imageAlt="Trivia game artwork"
              href="/games/quiz"
              buttonText="Play NOW!"
            />
          </Reveal>

          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Click Book NOW! button to schedule a meeting."
              title="Building Bridges. Creating Momentum."
              description="What I help with:"
              imageUrl="/calendar.svg"
              imageAlt="Google Calendar"
              href="/help"
              buttonText="Book NOW!"
            >
              <ul className="list-disc list-inside space-y-1">
                <li>Strategic planning for small businesses and organizations</li>
                <li>E-commerce strategy, UX, and product solutions</li>
                <li>Manufacturing, sourcing, and operational alignment</li>
              </ul>
            </StudioTile>
          </Reveal>

          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Click learn more to view my experiences."
              title="Turning ideas into outcomes. &#10024;"
              description="What I help with:"
              href="/experiences"
              buttonText="Learn More"
            >
              <ul className="list-disc list-inside space-y-1">
                <li>Education: program review, strategic planning, and training</li>
                <li>Student-led projects and career-ready initiatives</li>
                <li>Community organizers and mission-driven programming</li>
              </ul>
            </StudioTile>
          </Reveal>

          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Thank you for your support! Please visit store"
              title="Made with Love, Free to Use"
              description="All images and icons are carefully chosen to be either personal creations or royalty-free!"
              imageUrl="https://lotusmahal.com/cdn/shop/files/12815231453993207167_2048.jpg?v=1729536713&width=823"
              imageAlt="Greeting card by Lotus Mahal called Basant Raga, a woman singing in the calling of the spring"
              href="https://lotusmahal.com/"
              buttonText="go to Lotus Mahal"
              openInNewTab
            />
          </Reveal>

          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="R&eacute;sum&eacute;"
              title="Download resume here"
              description="A PDF file will download."
              imageUrl="/cv.png"
              imageAlt="First page of Arnab&#39;s resume"
              href="/resume"
              buttonText="Download NOW!"
              openInNewTab
            />
          </Reveal>

          <Reveal className={tileWrapperStyle}>
            <StudioTile
              eyebrow="Free to play"
              title="Tic Tac Toe for you to enjoy on the go!"
              description="A simple Tic Tac Toe game for when you are bored."
              imageUrl="/tic-tac-toe.gif"
              imageAlt="Tic Tac Toe board"
              href="/games/tic-tac-toe"
              buttonText="Play NOW!"
            />
          </Reveal>

        </AnimationLayer>
        <Link href="#navigation" className='hover:underline text-purple-800'>go to top</Link>
      </AnimationLayer>
    </HomeClickTracker>
  );
}
