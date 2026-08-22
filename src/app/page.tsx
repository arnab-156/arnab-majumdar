import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { AnimationLayer, Reveal } from "./components/animation";
import { Card } from "./components/card";
import { HomeClickTracker } from "./components/home-click-tracker";
import { ReadIcon } from "./components/icons";
import { nyuProjects } from './nyu/projects-data';
import { cardWrapperStyle, nycBackgroundTheme, buttonStyle, tiffanyBackgroundTheme } from './utility/stylevariables';

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
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] text-white py-16 px-6 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

          <AnimationLayer
            as="div"
            className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center text-left"
            method="alternate"
            distance={48}
            threshold={0}
            rootMargin="0px"
          >
            <Reveal method="left" className="space-y-4">
              <p className="uppercase tracking-[0.3em] text-sm text-purple-100">
                New York University Leonard N. Stern School of Business
              </p>
              <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">
                Welcome to my Stern journey!
              </h1>
              <p className="text-lg md:text-xl text-purple-50 max-w-2xl">
                Class Representative, Master of Business Administration &mdash; Class of 2027
              </p>

              <Reveal method="left" delay={220} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/nyu"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold shadow-lg ring-1 ring-white/30 transition hover:translate-y-[-2px] hover:bg-white/20"
                >
                  <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white/80">
                    <Image src="/stern.png" alt="" fill className="object-contain" aria-hidden />
                  </span>
                  <span>
                    Click here to Learn
                    <span className="block text-xs text-purple-100 group-hover:underline">Go to my NYU Stern page</span>
                  </span>
                </Link>
              </Reveal>
            </Reveal>

            {randomNewLearningProject && (
              <Reveal method="right" delay={140} className="relative">
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur shadow-2xl border border-white/20">
                  <p className="text-xs uppercase tracking-[0.3em] text-purple-100">New Learnings!</p>
                  <h2 className="mt-2 text-xl font-semibold">{randomNewLearningProject.projectName}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-purple-100">
                    {randomNewLearningProject.description}
                  </p>
                  <Link
                    href={newLearningUrl}
                    {...(newLearningOpensNewTab ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="mt-4 inline-block underline text-purple-100 hover:text-amber-200"
                  >
                    view details
                  </Link>
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
