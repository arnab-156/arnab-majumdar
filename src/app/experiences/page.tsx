import Link from "next/link";
import { Card } from "../components/card";
import { ConnectPanel } from "../components/connect-panel";
import {
  buttonStyle,
  cardWrapperStyle,
  nycBackgroundTheme,
  heroPrimaryButtonStyle,
  heroOutlineButtonStyle,
} from "../utility/stylevariables";
import { AnimationLayer, Reveal } from "../components/animation";
import styles from "../hero.module.css";

export default function ExperiencesPage() {
  const experienceCardProps = {
    useCtaButton: true,
  };

  return (
    <AnimationLayer
      as="main"
      className="flex min-h-screen flex-col items-center justify-between overflow-x-clip"
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
          className="relative mx-auto grid max-w-6xl items-center gap-10 text-left md:grid-cols-[1.2fr_0.8fr]"
          method="alternate"
          distance={48}
          threshold={0}
          rootMargin="0px"
        >
          <Reveal method="left" className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-nyu-ultra leading-tight">Experiences</h1>

            {/* Moved up from the /about essay, where it sat below several
                screens of prose. Recoloured from purple to the hero's palette:
                indigo label, madder rule. */}
            <aside className="border-l-2 border-lotus-madder pl-6 py-1">
              <p className="text-xs uppercase tracking-[0.3em] text-lotus-indigo dark:text-lotus-paper/70">
                Focus areas
              </p>
              <p className="mt-3 text-lg leading-8 text-lotus-ink/85 dark:text-lotus-paper/85">
                Sustainable fashion &amp; consumer goods, digital strategy, e-commerce, accessibility (WCAG),
                front-end engineering, educational program-building, and brand development.
              </p>
            </aside>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/experiences/achievements" className={heroPrimaryButtonStyle}>
                See all my achievements
              </Link>
              <Link href="/" className={heroOutlineButtonStyle}>
                Go back to home
              </Link>
            </div>
          </Reveal>

          <Reveal method="right" delay={140} className="relative">
            <ConnectPanel />
          </Reveal>
        </AnimationLayer>
      </section>

      <div className="mb-32 mt-12 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <AnimationLayer method="rise" distance={44} stagger={90} staggerCycle={3}>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Owner"
              url="/lotus"
              description="We are a boutique consulting studio helping organizations ship strategy & digital experiences"

              imageUrl="https://live.staticflickr.com/65535/53819325384_d2b8af917f_w.jpg"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Senior Software Engineer"
              url="https://www.bonobos.com/"
              imageUrl="/bonobos-logo-dark.svg"
              backgroundTheme={`${nycBackgroundTheme}`}
              description="Initially under Walmart Inc and then under Express LLC. Responsible for front end technology projects."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Software Engineer 2"
              url="https://www.shoprunner.com/"
              imageUrl="/shoprunner_byfedex.svg"
              backgroundTheme={`${nycBackgroundTheme}`}
              description="In a start up, and went through acquisition by FedEx. WCAG Accessibility Expert! Promoted Twice."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Owner and CEO"
              url="/moc"
              imageUrl="https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg"
              backgroundTheme={``}
              imageWidth={105}
              description="Click here to know more about the innovation, technology, and design."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Instructional Assistant"
              url=""
              imageUrl="northwestern.svg"
              description="Full Stack Coding Bootcamp - Mongo Express React Node.js stack"
              imageHeight={80}
              imageWidth={80}
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Department Chair - Fashion Marketing and Merchandising"
              url=""
              imageUrl="https://live.staticflickr.com/65535/53818079467_6eaf1c63ea_w.jpg"
              backgroundTheme={`${nycBackgroundTheme}`}
              description="Instructed cross-curriculum and mentored students of fashion merchandising."
              imageHeight={200}
              imageWidth={135}
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Eye on India - The Saree Project (Co-ordinator)"
              url="/lotus/eye-on-india"
              imageUrl="https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg"
              imageHeight={200}
              imageWidth={200}
              backgroundTheme={`${nycBackgroundTheme}`}
              description="Click here to know more about Fashion + Education + Sustainability."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Assistant Professor, Fashion Studies."
              url=""
              imageUrl="https://live.staticflickr.com/65535/53819339684_9c2b53cb83_w.jpg"
              imageHeight={200}
              imageWidth={200}
              backgroundTheme={`bg-white`}
              description="Instructed Fashion Studies courses on Apparel Quality, Supply Chain, Technology and Merchandising. Supported International Students and lead program review of Fashion Business Curriculum."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="AT&T Samsung Galaxy Project"
              url="/lotus/samsung"
              imageUrl="https://live.staticflickr.com/65535/53851021701_6619ae0f97_w.jpg"
              imageHeight={200}
              imageWidth={200}
              description="Click here to know more about Fashion + Education + use of Technology."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Docent - Lincoln Park Conservatory"
              url="/experiences/lincolnpark"
              imageUrl="https://live.staticflickr.com/65535/53863196190_faa7d80208_w.jpg"
              imageHeight={200}
              imageWidth={200}
              description="Click here to know more."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Instructor - Family and Consumer Sciences"
              url=""
              imageUrl="/pittstate.svg"
              imageHeight={200}
              imageWidth={190}
              backgroundTheme={`${nycBackgroundTheme}`}
              description="Instructed 8+8 course load of Textiles and Fashion Merchandising courses of Family and Consumer Sciences."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="StyleWeek - PR Executive"
              url=""
              imageUrl="https://www.styleweeknortheast.com/wp-content/uploads/2019/07/STYLEWEEK-LOGO-1.png"
              imageHeight={200}
              imageWidth={190}
              description="PR + Fashion show production assistant."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Graduate Teaching Assistant"
              url=""
              imageUrl="/uri.svg"
              backgroundTheme={`${nycBackgroundTheme}`}
              description="Textile Sciences Laboratory"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Assistant Manager, Reliance Trends"
              url=""
              imageUrl="https://live.staticflickr.com/65535/53819337484_729e51ba15_w.jpg"
              backgroundTheme={`bg-white`}
              description="Marketing, Promotions, Branding, new store opening (Two 145,000 sq.ft, Five 18,000 sq.ft stores, and vendor management."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Reach Technologies"
              url=""
              imageUrl=""
              description="Research and Development of Footwear CAD for use of software engineers."
            />
          </Reveal>

          <h2 id="my-education" className="text-3xl font-bold text-center mt-8 font-nyu-ultra">Education</h2>
          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="NYU - Stern School of Business"
              url="/nyu"
              imageUrl="/stern.png"
              backgroundTheme={`${nycBackgroundTheme}`}
              description="Class Representative, Master of Business Administration - Class of 2027"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Northwestern University"
              url=""
              imageUrl="/northwestern.svg"
              imageHeight={100}
              description="Certificate - Full Stack Web Development (MERN)"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="University of Rhode Island - College of Business"
              url="https://web.uri.edu/business/about/tmd/"
              imageUrl="/uri.svg"
              backgroundTheme={`${nycBackgroundTheme}`}
              description={`Master of Science - Textiles, Fashion Merchandising & Design; Senator - Graduate Student Association`}
            />
          </Reveal>

          <Reveal className={cardWrapperStyle} id="my-education-nift">
            <Card
              {...experienceCardProps}
              title="National Institute of Fashion Technology"
              url="https://nift.ac.in/theinstitute"
              imageUrl="/nift.svg"
              description="Bachelor of Technology - Apparel Manufacturing and Information Technology."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Bangiya Sangeet Parishad"
              url="https://www.bangiyasangeetparishad.org/bsp/index.html"
              imageUrl="https://svt69ytw2j2onadk.public.blob.vercel-storage.com/BSP_Certificate_2nd_1996.png"
              backgroundTheme={`${nycBackgroundTheme}`}
              description="Diploma in Fine Arts, Painting (5th year) - Chitrankan Kala Mandir - Ranchi."
              openInNewTab
            />
          </Reveal>

          <Reveal className={`${cardWrapperStyle}`}>
            <h3 className="text-xl font-bold text-center"> Other Experiences:</h3>
            <ul className={`rounded-md p-4 ml-2`}>
              <li className="p-2 underline"> Apple Michigan Avenue Chicago</li>
              <li className="p-2 underline"> Ocean State Job Lot North Kingstown RI</li>
              <li className="p-2 underline"> Siyaram Silk Mills Mumbai India</li>
              <li className="p-2 underline"> Wonder Blues Jeans Factory Bangalore India</li>
            </ul>
          </Reveal>

          <Reveal className={`${cardWrapperStyle}`}>
            <h3 className="text-2xl font-bold text-center">Volunteer:</h3>
            <ul className={`rounded-md p-4 ml-2`}>
              <li className="p-2 underline"> Rhode Island Pride RI</li>
              <li className="p-2 underline"> CMSA Chicago</li>
              <li className="p-2 underline"> Capital Pride Alliance</li>
            </ul>
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <Card
              {...experienceCardProps}
              title="Download Resume Here"
              openInNewTab
              url="/resume"
              description="A PDF file will download."
              backgroundTheme={nycBackgroundTheme}
              imageUrl='/cv.png'
            />
          </Reveal>

          <p className="m-4 p-4"><strong >Thank you for visiting! There are more information to come, please visit again! </strong>
            <Link className={`${buttonStyle}`} href="/about" aria-label="go back to about">click here </Link> to go the About page.
          </p>
        </AnimationLayer>
      </div>
      <div className="pt-8 pb-32 text-center">
        <Link href="#navigation" className="hover:underline text-purple-800">go to top</Link>
      </div>
    </AnimationLayer>
  );
}
