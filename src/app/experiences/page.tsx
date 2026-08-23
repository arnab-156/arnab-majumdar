import Link from "next/link";
import { ConnectPanel } from "../components/connect-panel";
import { StudioTile } from "../components/studio-tile";
import {
  buttonStyle,
  cardWrapperStyle,
  heroPrimaryButtonStyle,
} from "../utility/stylevariables";
import { AnimationLayer, Reveal } from "../components/animation";
import styles from "../hero.module.css";

export default function ExperiencesPage() {
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
            <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">
              Sustainability &amp; Retail Tech Leader
            </p>
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

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/experiences/achievements" className={heroPrimaryButtonStyle}>
                  See all my achievements
                </Link>
                {/* A plain underlined link, as on /about and /lotus, rather than
                    a second button competing with the achievements CTA. Indigo
                    rather than /about's purple-100, which is tuned for that
                    page's violet hero and would vanish on paper. */}
                <Link href="/" className="underline underline-offset-4 text-lotus-indigo dark:text-lotus-paper/80">
                  go back to home
                </Link>
              </div>

              {/* Jumps to the Education heading further down this same page.
                  Styled as the homepage hero's credential links are — madder
                  rule, ink at 70%, indigo underline on hover. The size and
                  colour sit on the link here rather than on a parent row,
                  since this one stands alone. */}
              <div>
                <Link
                  href="#my-education"
                  className="group inline-flex items-center gap-2 text-sm text-lotus-ink/70 hover:text-lotus-indigo dark:text-lotus-paper/70 dark:hover:text-lotus-paper"
                >
                  <span className="h-px w-5 bg-lotus-madder" aria-hidden />
                  <span className="group-hover:underline">See my education</span>
                </Link>
              </div>
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
            <StudioTile
              align="center"
              title="Owner"
              description="We are a boutique consulting studio helping organizations ship strategy & digital experiences"
              imageUrl="https://live.staticflickr.com/65535/53819325384_d2b8af917f_w.jpg"
              imageAlt="Owner"
              href="/lotus"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Adjunct Faculty, College of Business"
              description="Instruct business and interdisciplinary courses."
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1KBgM1GYf_60QUoKAWmTLEghgWRy7dqoEk6SWqyLXw&s=10"
              imageAlt="Coppin State University"
              href="https://www.coppin.edu/"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Senior Software Engineer"
              description="Initially under Walmart Inc and then under Express LLC. Responsible for front end technology projects."
              imageUrl="/bonobos-logo-dark.svg"
              imageAlt="Senior Software Engineer"
              href="https://www.bonobos.com/"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Software Engineer 2"
              description="In a start up, and went through acquisition by FedEx. WCAG Accessibility Expert! Promoted Twice."
              imageUrl="/shoprunner_byfedex.svg"
              imageAlt="Software Engineer 2"
              mediaOnDark
              href="https://www.shoprunner.com/"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Owner and CEO"
              description="Click here to know more about the innovation, technology, and design."
              imageUrl="https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg"
              imageAlt="Owner and CEO"
              href="/moc"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Instructional Assistant"
              description="Full Stack Coding Bootcamp - Mongo Express React Node.js stack"
              imageUrl="/northwestern.svg"
              imageAlt="Instructional Assistant"
              mediaOnDark
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Department Chair - Fashion Marketing and Merchandising"
              description="Instructed cross-curriculum and mentored students of fashion merchandising."
              imageUrl="https://live.staticflickr.com/65535/53818079467_6eaf1c63ea_w.jpg"
              imageAlt="Department Chair - Fashion Marketing and Merchandising"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Eye on India - The Saree Project (Co-ordinator)"
              description="Click here to know more about Fashion + Education + Sustainability."
              imageUrl="https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg"
              imageAlt="Eye on India - The Saree Project (Co-ordinator)"
              href="/lotus/eye-on-india"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Assistant Professor, Fashion Studies."
              description="Instructed Fashion Studies courses on Apparel Quality, Supply Chain, Technology and Merchandising. Supported International Students and lead program review of Fashion Business Curriculum."
              imageUrl="https://live.staticflickr.com/65535/53819339684_9c2b53cb83_w.jpg"
              imageAlt="Assistant Professor, Fashion Studies."
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="AT&T Samsung Galaxy Project"
              description="Click here to know more about Fashion + Education + use of Technology."
              imageUrl="https://live.staticflickr.com/65535/53851021701_6619ae0f97_w.jpg"
              imageAlt="AT&T Samsung Galaxy Project"
              href="/lotus/samsung"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Docent - Lincoln Park Conservatory"
              description="Click here to know more."
              imageUrl="https://live.staticflickr.com/65535/53863196190_faa7d80208_w.jpg"
              imageAlt="Docent - Lincoln Park Conservatory"
              href="/experiences/lincolnpark"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Instructor - Family and Consumer Sciences"
              description="Instructed 8+8 course load of Textiles and Fashion Merchandising courses of Family and Consumer Sciences."
              imageUrl="/pittstate.svg"
              imageAlt="Instructor - Family and Consumer Sciences"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="StyleWeek - PR Executive"
              description="PR + Fashion show production assistant."
              imageUrl="https://www.styleweeknortheast.com/wp-content/uploads/2019/07/STYLEWEEK-LOGO-1.png"
              imageAlt="StyleWeek - PR Executive"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Graduate Teaching Assistant"
              description="Textile Sciences Laboratory"
              imageUrl="/uri.svg"
              imageAlt="Graduate Teaching Assistant"
              mediaOnDark
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Assistant Manager, Reliance Trends"
              description="Marketing, Promotions, Branding, new store opening (Two 145,000 sq.ft, Five 18,000 sq.ft stores, and vendor management."
              imageUrl="https://live.staticflickr.com/65535/53819337484_729e51ba15_w.jpg"
              imageAlt="Assistant Manager, Reliance Trends"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Reach Technologies"
              description="Research and Development of Footwear CAD for use of software engineers."
            />
          </Reveal>

          {/* scroll-mt keeps this clear of the fixed nav when the hero's
              "See my education" button jumps to it. */}
          <h2 id="my-education" className="scroll-mt-24 text-3xl font-bold text-center mt-8 font-nyu-ultra">Education</h2>
          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="NYU - Stern School of Business"
              description="Class Representative, Master of Business Administration - Class of 2027"
              imageUrl="/stern.png"
              imageAlt="NYU - Stern School of Business"
              href="/nyu"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Northwestern University"
              description="Certificate - Full Stack Web Development (MERN)"
              imageUrl="/northwestern.svg"
              imageAlt="Northwestern University"
              mediaOnDark
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="University of Rhode Island - College of Business"
              description="Master of Science - Textiles, Fashion Merchandising & Design; Senator - Graduate Student Association"
              imageUrl="/uri.svg"
              imageAlt="University of Rhode Island - College of Business"
              mediaOnDark
              href="https://web.uri.edu/business/about/tmd/"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle} id="my-education-nift">
            <StudioTile
              align="center"
              title="National Institute of Fashion Technology"
              description="Bachelor of Technology - Apparel Manufacturing and Information Technology."
              imageUrl="/nift.svg"
              imageAlt="National Institute of Fashion Technology"
              href="https://nift.ac.in/theinstitute"
            />
          </Reveal>

          <Reveal className={cardWrapperStyle}>
            <StudioTile
              align="center"
              title="Bangiya Sangeet Parishad"
              description="Diploma in Fine Arts, Painting (5th year) - Chitrankan Kala Mandir - Ranchi."
              imageUrl="https://svt69ytw2j2onadk.public.blob.vercel-storage.com/BSP_Certificate_2nd_1996.png"
              imageAlt="Bangiya Sangeet Parishad"
              href="https://www.bangiyasangeetparishad.org/bsp/index.html"
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
            <StudioTile
              align="center"
              title="Download Resume Here"
              description="A PDF file will download."
              imageUrl="/cv.png"
              imageAlt="Download Resume Here"
              href="/resume"
              openInNewTab
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
