import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { AnimationLayer, Reveal } from "./components/animation";
import { Card } from "./components/card";
import { HomeClickTracker } from "./components/home-click-tracker";
import { ReadIcon } from "./components/icons";
import styles from './home.module.css';
import { nyuProjects } from './nyu/projects-data';
import { cardWrapperStyle, nycBackgroundTheme, buttonStyle, tiffanyBackgroundTheme } from './utility/stylevariables';

// Outline button, shared by the hero's secondary action and the New Learnings
// panel's route to /nyu, so the two cannot drift apart.
const outlineButtonStyle =
  "inline-flex items-center rounded-xl border border-lotus-indigo/30 px-5 py-3 text-sm font-semibold text-lotus-indigo transition hover:-translate-y-[2px] hover:border-lotus-indigo/60 dark:border-lotus-paper/25 dark:text-lotus-paper";

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
  const homeCardProps = {
    useCtaButton: true,
  };
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
              <p className="text-lg md:text-xl text-lotus-ink/80 dark:text-lotus-paper/80 max-w-2xl">
                I turn strategy into accessible, high-performing digital experiences &mdash; for retailers,
                universities, restaurants and the people who run them.
              </p>

              <Reveal method="left" delay={220} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/experiences"
                  className="inline-flex items-center rounded-xl bg-lotus-indigo px-5 py-3 text-sm font-semibold text-lotus-paper shadow-lg transition hover:-translate-y-[2px] hover:bg-lotus-ink focus:outline-none focus:ring-2 focus:ring-lotus-indigo focus:ring-offset-2"
                >
                  See the work
                </Link>
                <Link href="/about" className={outlineButtonStyle}>
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
                  <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">New Learnings!</p>
                  <h2 className="mt-2 text-xl font-semibold">{randomNewLearningProject.projectName}</h2>
                  {/* Descriptions vary a lot in length; clamping keeps the
                      panel from towering over the hero copy beside it. */}
                  <p className="mt-3 text-sm leading-relaxed text-lotus-ink/75 dark:text-lotus-paper/75 line-clamp-5">
                    {randomNewLearningProject.description}
                  </p>
                  {/* "view details" goes to the one project on show; the button
                      below goes to the whole journey, and repeats the /nyu route
                      the credential line already offers. */}
                  <div className="mt-4 flex flex-col items-start gap-4">
                    <Link
                      href={newLearningUrl}
                      {...(newLearningOpensNewTab ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="underline underline-offset-4 text-lotus-indigo hover:text-lotus-madder dark:text-lotus-paper/80"
                    >
                      view details
                    </Link>
                    <Link href="/nyu" className={outlineButtonStyle}>
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
          <Reveal className={cardWrapperStyle}>
            <Card
              {...homeCardProps}
              title="About Arnab!"
              url="/about"
              imageUrl="/headshot.png"
              description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
            />
          </Reveal>

          <Reveal className="shadow-md rounded-md text-center py-4 px-8 m-4">
            <p className="m-2">
              If you are a small business, a retailer, or an educator who wants to use the latest technologies & practices, <strong> <Link className={`${buttonStyle}`} href="/help" aria-label="go to calendar to schedule a google meet">Contact me.</Link></strong>
            </p>

            <p className="mt-4"> Find social information in the top navigation on mobile or the footer on desktop.</p>
          </Reveal>

          <Reveal className={cardWrapperStyle} id="aster">
            <h2 className="text-xl font-bold text-center capitalize" >Made in US Collaboration:</h2>
            <Card
              {...homeCardProps}
              title="Aster for Lotus - Made in Rhode Island"
              description="Luxurious hand-crafted candle featuring exquisite watercolor artwork on a heavy whiskey-colored glass jar."
              url="https://lotusmahal.com/products/aster-for-lotus"
              buttonText="See Product"
              openInNewTab
              customClassName={`${cardWrapperStyle}`}
              backgroundTheme={nycBackgroundTheme}
              imageUrl='https://lotusmahal.com/cdn/shop/files/DSCF2076_42f9aa66-c21a-4b76-a0db-88a679d0039e.jpg?v=1741617890&width=1646'
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center capitalize">Updated Daily!</h2>
            <Card
              {...homeCardProps}
              title="Comic of the day!"
              url="/tech/comic"
              buttonText="Read Today's Comic"
              description="Have fun reading some fun comics!! More Features to come!"
            >
              <ReadIcon height="100px" width="100px" />
            </Card>
          </Reveal>

          <Reveal className={cardWrapperStyle} id="garden-of-swann">
            <h2 className="text-xl font-bold text-center capitalize">Stories of Courage</h2>
            <Card
              {...homeCardProps}
              title="World Pride Garden of Swann Washington D.C."
              description="Click to learn more about Fashion + Activism of William Dorsey Swann"
              url="/lotus/garden-of-swann"
              customClassName={`${cardWrapperStyle}`}
              imageUrl={`https://live.staticflickr.com/65535/55041103674_dd84ce4ce4_w.jpg`}
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center capitalize">Expanding Retail Experiences:</h2>
            <Card
              {...homeCardProps}
              title="Owner and CEO - Made of Chicago"
              url="/moc"
              imageUrl="https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg"
              backgroundTheme={``}
              imageWidth={105}
              description="Click here to know more about the innovation, technology, and design."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle} id="cp">
            <h2 className="text-xl font-bold text-center capitalize">Project from New Orleans:</h2>
            <Card
              {...homeCardProps}
              title="Commander's Palace Project"
              url="/lotus#commanders"
              backgroundTheme={tiffanyBackgroundTheme}
            >
              <div>
                <p className="text-wrap">
                  Developed a new website for Commander&#039;s Palace using Webflow CMS, event scheduling APIs, and agency-provided Figma designs.
                </p>
                <ul className="list-disc list-inside">
                  <li className="text-wrap">Distinct Mobile and Desktop Experience</li>
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...homeCardProps}
              title="Free Trivia for you to enjoy on the go!"
              url="/games/quiz"
              buttonText="Play NOW!"
              imageUrl="/quiz.png"
              description="Version 1 is live! Version 2 coming soon!"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center capitalize" >Click Book NOW! button to schedule a meeting.</h2>
            <Card
              {...homeCardProps}
              title="Building Bridges. Creating Momentum."
              url="/help"
              buttonText="Book NOW!"
              backgroundTheme={nycBackgroundTheme}
            >
              <div>
                <p className="text-wrap">
                  What I help with:
                </p>
                <ul className="list-disc grid grid-cols-1">
                  <li className="hover:underline text-wrap justify-start">Strategic planning for small businesses and organizations</li>
                  <li className="hover:underline justify-start">E-commerce strategy, UX, and product solutions</li>
                  <li className="hover:underline justify-start">Manufacturing, sourcing, and operational alignment</li>
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center">Click learn more to view my experiences.</h2>
            <Card
              {...homeCardProps}
              title="Turning ideas into outcomes. ✨"
              url="/experiences"
              backgroundTheme={nycBackgroundTheme}
            >
              <div>
                <p className="text-wrap">
                  What I help with:
                </p>
                <ul className="list-disc grid grid-cols-1">
                  <li className="text-wrap">Education: program review, strategic planning, and training</li>
                  <li className="text-wrap">Student-led projects and career-ready initiatives</li>
                  <li className="text-wrap">Community organizers and mission-driven programming</li>
                </ul>
              </div>

            </Card>
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center capitalize">Thank you for your support! Please visit store</h2>
            <Card
              {...homeCardProps}
              title="Made with Love, Free to Use"
              openInNewTab
              url="https://lotusmahal.com/"
              buttonText="go to Lotus Mahal"
              description="All images and icons are carefully chosen to be either personal creations or royalty-free!"
              imageUrl="https://lotusmahal.com/cdn/shop/files/12815231453993207167_2048.jpg?v=1729536713&width=823"
              imageAlt="Picture of a greeting card made by Lotus Mahal called Basant Raga where a women is singing in the calling of the spring"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...homeCardProps}
              title="Download Resume Here"
              openInNewTab
              url="/resume"
              buttonText="Download NOW!"
              description="A PDF file will download."
              backgroundTheme={nycBackgroundTheme}
              imageUrl='/cv.png'
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...homeCardProps}
              title="Tic Tac Toe game for you to enjoy on the go!"
              url="/games/tic-tac-toe"
              imageUrl="/tic-tac-toe.gif"
              description="Simple Tik Tac Toe Game for when you are bored."
            />
          </Reveal>

        </AnimationLayer>
        <Link href="#navigation" className='hover:underline text-purple-800'>go to top</Link>
      </AnimationLayer>
    </HomeClickTracker>
  );
}
