import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { list } from "@vercel/blob";
import { ImageMagnify } from "@/app/components/ImageMagnify";
import { buttonStyle } from "@/app/utility/stylevariables";

const galleryInfo = [
  { caption: "Senior Diploma - Painting", category: "art" },
  { caption: "Certificate of Merit - Art", category: "art" },
  { caption: "Certificate of Merit - Painting", category: "Academic" },
  { caption: "Certificate of Merit - Art", category: "art" },
  { caption: "Business Start-up Certification from City of Chicago", category: "leadership" },
  { caption: "Winner, 2nd Prize - All India Camel Color Contest", category: "art" },
  { caption: "Winner, 2nd Prize - All India Camel Color Contest", category: "art" },
  { caption: "Participation", category: "art" },
  { caption: "Participation", category: "art" },
  { caption: "Circular Supply Chains: Size Standardization Study at Reliance Trends", category: "academic" },
  { caption: "Certificate - College of Fine Arts", category: "art" },
  { caption: "House Captain", category: "leadership" },
  { caption: "2nd Prize - Group Song Competition", category: "art" },
  { caption: "Certificate - Science Olympiad", category: "academic" },
  { caption: "2nd prize in Rabindra Sangeet Category by Music Academy, 2004", category: "music" },
  { caption: "Timex - Paint a watch competition", category: "painting" },
  { caption: "Winner, 2nd Prize - Dance,  NIFT, 2007", category: "dance" },
  { caption: "Winner, 3rd Prize - Dance,  NIFT, 2007", category: "dance" },
  { caption: "Help Age India", category: "leadership" },
  { caption: "Letter of Appreciation - Majlish", category: "leadership" },
];

const shuffleArray = <T,>(items: T[]): T[] => {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

type LinkItem = { label: string; href?: string };
type BulletItem = string;
type SkillTile = { title: string; subtitle?: string };
type SkillGroup = { title: string; items: string[] };
type Presentation = {
  title: string;
  authors: string;
  venue: string;
  location: string;
  date: string;
};

const researchPresentations: Presentation[] = [
  {
    title: "Clothing and Gay Men",
    authors: "Majumdar, A.",
    venue: "URI Graduate Conference",
    location: "Kingston, RI",
    date: "Mar 2013",
  },
  {
    title: "Creating Accessibility in Education: E-Textbook Development for a Fashion Business Course",
    authors: "Howell, A.; Majumdar, A.; Hillery, J.",
    venue: "International Textile and Apparel Association Annual Meeting",
    location: "Charlotte, NC",
    date: "Nov 2014",
  },
  {
    title: "Development of a New Course: Applied Concepts in Fashion Business",
    authors: "Schaefer, K.; Majumdar, A.",
    venue: "International Textile and Apparel Association Annual Meeting",
    location: "Charlotte, NC",
    date: "Nov 2014",
  },
  {
    title: "Applied Concepts In Fashion Business: New Course Development",
    authors: "Majumdar, A.; Schaefer, K.; Howell, A.",
    venue: "American Collegiate Retailing Association Annual Meeting",
    location: "Coral Gables, FL",
    date: "Mar 2015",
  },
  {
    title: "Fashion Impulse Behavior Among Gay Men",
    authors: "Majumdar, A.",
    venue: "American Collegiate Retailing Association Annual Meeting",
    location: "New Jersey, NJ",
    date: "Apr 2016",
  },
  {
    title: "Fashion Consumption by Gay Men: Health and Well Being of a Changing Society",
    authors: "Majumdar, A.",
    venue: "American Association of Family and Consumer Sciences Annual Meeting",
    location: "Bellevue, WA",
    date: "Jun 2016",
  },
];

const achievements = {
  academic: [
    {
      title: "Capstone Project: NIFT 2008 - Winner of Commercially Most Viable",
      description:
        "Presented findings on zero-waste manufacturing at the International Sustainability Summit, highlighting scalable frameworks for apparel factories.",
      links: [
        { label: "About NIFT", href: "/experiences#my-education-nift" },
      ],
    },
    {
      title: "Innovation",
      description:
        "Coming soon",
      links: [
        { label: "Panel: Tech × Sustainability" },
        { label: "Sustainability: Fabric Futures", href: "/lotus/eye-on-india" },
      ],
      bullets: [
        "Designed executive playbooks for omnichannel retailers.",
        "Launched innovative and technical brand for Reliance Trends",
        "Vendor Development: Building large scale manufacturers for Reliance Trends",
        "Size Standardization for Fits in India for Reliance Trends"
      ],
    },
  ],
  sports: [
    {
      title: "World Pride DC 2025 — Tennis Doubles (Men's D)",
      description:
        "Silver medal finish that balanced competitive edge with sportsmanship, representing inclusive athletics on an international Pride stage.",
      bullets: [
        "Competed through round‑robin into finals; secured silver in Men's D Doubles.",
        "Built a disciplined match routine: warm‑up mobility, breath pacing, and post‑match recovery.",
        "Emphasized partner communication and adaptive play under tournament pressure.",
      ],
    },
    {
      title: "Athletic Association of Chicago 2018 — Regular Season (Intermediate · Table Tennis)",
      description:
        "Captured first prize across the Intermediate regular season, focusing on consistency, cardio base, and injury prevention.",
      bullets: [
        "Applied match analytics to target serve percentage and unforced-error reduction.",
      ],
    },
    {
      title: "Athletic Association of Chicago 2018 — Playoffs (Intermediate · Table Tennis)",
      description:
        "Closed the year with a first-prize playoff run, peaking taper and recovery to stay sharp through elimination rounds.",
      bullets: [
        "Introduced pre-match visualization and hydration plans to manage nerves and cramping.",
      ],
    },
    {
      title: "Yoga for Sports",
      description:
        "Programming that weaves mindfulness, awareness, and deep stretching into sport to boost performance, speed recovery, and strengthen overall health.",
    },
    {
      title: "Art, Sports, and Visualization",
      description:
        "Bringing creativity into sport—learning from the best to combine artistic thinking with gameplay and practice. Paper coming soon.",
    },
  ],
  arts: [
    {
      title: "Creative Direction",
      description:
        "Curated 'Fabric Futures'—an immersive installation bridging narrative textiles, projection mapping, and tactile archives for WorldPride DC.",
      links: [
        { label: "Garden of Swann", href: "/lotus/garden-of-swann" },
        { label: "Fabric Futures", href: "/lotus/eye-on-india" },
        { label: "AT&T Fashion meets Tech", href: "/lotus/samsung" },
        { label: "Fashion x Tech", href: "/moc" },
      ],
      bullets: [
        "Scouted 30+ artists and archivists across diasporas.",
        "Integrated AR layers with tangible textiles.",
      ],
    },
    {
      title: "Cultural Programming",
      description:
        "Produced artist residencies and storytelling salons spotlighting South Asian stories, queer voices; built partnerships with museums, communities and Pride organizations.",
      links: [
        { label: "Arts Residency Framework" },
        { label: "Conference Talk" },
      ],
      bullets: [
        "Secured grants to expand collborative programming.",
        "Hosted salons that combined film, textiles, and spoken-word.",
      ],
    },
  ],
};

const skillTiles: SkillTile[] = [
  { title: "Large-scale Store Launch", subtitle: "Reliance Trends · Marketing & Brand launches" },
  { title: "Pop-up Shop Launch", subtitle: "Lotus Mahal & Made of Chicago" },
  { title: "Customer-facing Website Launch/Upgrade", subtitle: "Shoprunner" },
  { title: "Strategic Plan Implementation", subtitle: "Coppin State University" },
  { title: "Program Review Lead", subtitle: "Northwood University" },
  { title: "Program Review (Fashion Business)", subtitle: "Columbia College Chicago" },
  { title: "Time Study Analysis", subtitle: "Boosted jeans productivity · WonderBlues Garment Manufacturer" },
  { title: "Senator", subtitle: "Graduate Student Association · University of Rhode Island · Aug 2010 – May 2012" },
  { title: "Certificate", subtitle: "Title IX Bridges: Building a Supportive Community · Fall 2015" },
  { title: "Employee Resource Group Committee", subtitle: "Shoprunner (FedEx Dataworks)" },
  { title: "WCAG Guidelines Champion" },
];

const skillGroups: SkillGroup[] = [
  { title: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
  { title: "AI Tools", items: ["ChatGPT / GPT-4", "GitHub Copilot", "Prompt engineering", "OpenAI Assistants", "Midjourney"] },
  {
    title: "Data Technologies",
    items: ["Tableau", "Rollbar", "Google Analytics", "Google Tag Manager", "PLM", "DataDog", "Amplitude", "Data Analysis & Management", "SQL"],
  },
  { title: "Web Design", items: ["Contentful", "Figma", "Adobe Creative Suite", "UI/UX tools", "SEO", "CAD"] },
  { title: "Management", items: ["MS Office", "Calendar Management", "Jira", "Monday", "Trello", "Strengths Training & Development"] },
  { title: "Accessibility", items: ["WCAG guidelines", "ADA retail compliance", "Accessibility tooling"] },
  {
    title: "Education Tech",
    items: ["Learning Management Systems", "Curriculum Design", "Taxonomies", "Course & SLO design", "Assessment"],
  },
  { title: "Financial", items: ["Events", "Accounting", "Statistics", "Fundraising", "Grant writing"] },
  {
    title: "Vendor Management",
    items: ["Managed Technology", "Creative Agency", "Apparel Manufacturers", "Printers", "Advertising Agency", "Event Management"],
  },
  {
    title: "Leadership",
    items: [
      "Teams in tech, small business, education",
      "Vendor management",
      "Presentations",
      "Lobbying & activism",
      "Performance reviews",
      "Training",
    ],
  },
  {
    title: "Marketing & Comms",
    items: [
      "Calendar & budget management",
      "Internal comms",
      "Social + web integrations",
      "Email marketing",
      "Print media",
      "Promotions",
      "PR & publicity",
    ],
  },
  { title: "Human Languages", items: ["English", "Hindi", "Bengali"] },
];

const SectionTile = ({
  title,
  description,
  links,
  bullets,
}: {
  title: string;
  description: string;
  links?: LinkItem[];
  bullets?: BulletItem[];
}) => (
  <article className="rounded-3xl bg-white/90 dark:bg-black/40 shadow-xl border border-gray-100/60 dark:border-white/10 p-6 space-y-3">
    <h3 className="text-xl font-semibold font-nyu-ultra text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-700 dark:text-gray-200 font-nyu-thin leading-relaxed">{description}</p>
    {links && (
      <ul className="list-disc list-inside text-sm text-purple-700 dark:text-purple-200 font-semibold space-y-1">
        {links.map(({ label, href }) => (
          <li key={label}>
            {href ? (
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            ) : (
              <span className="text-gray-500 dark:text-gray-400 cursor-not-allowed">
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    )}
    {bullets && (
      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 font-nyu-thin space-y-1">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    )}
  </article>
);

const PresentationRail = () => (
  <section className="px-6 md:px-12 py-12 bg-gradient-to-r from-white via-gray-50 to-white dark:from-[#090414] dark:via-[#0b061a] dark:to-[#090414]">
    <header className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
      <div>
        <p className="text-xs uppercase tracking-[0.5em] text-gray-500 dark:text-gray-300">Scholarship & Research</p>
        <h2 className="text-3xl font-nyu-ultra">Conference Presentations</h2>
        <p className="text-gray-600 dark:text-gray-200 font-nyu-thin">National and international presentations spanning accessibility, retail innovation, and consumer behavior.</p>
      </div>
      <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200 border border-purple-200/60 dark:border-purple-700">Swipe to browse</span>
    </header>

    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-200 dark:scrollbar-thumb-purple-800 scrollbar-track-transparent pb-3">
      <div className="flex gap-4 min-w-max pr-4">
        {researchPresentations.map((item) => (
          <article
            key={`${item.title}-${item.date}`}
            className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl border border-purple-100/80 dark:border-purple-900/50 bg-white/90 dark:bg-black/60 shadow-lg hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="h-1.5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-amber-400 rounded-t-2xl" aria-hidden />
            <div className="p-5 space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-purple-700 dark:text-purple-200">{item.date}</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">{item.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200">{item.authors}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.venue}
                <br />
                <span className="text-xs text-gray-500 dark:text-gray-400">{item.location}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const SportsRail = () => (
  <section className="px-6 md:px-12 py-12 bg-gray-50 dark:bg-[#050210]">
    <header className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
      <div className="text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-500 dark:text-gray-300">Sports</p>
        <h2 className="text-3xl font-nyu-ultra">Movement & Endurance</h2>
        <p className="max-w-3xl text-gray-600 dark:text-gray-200 font-nyu-thin">
          Competition-forward milestones with equal focus on recovery, mobility, and long-term health.
        </p>
      </div>
      <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200 border border-amber-200/60 dark:border-amber-500/40">Swipe to browse</span>
    </header>

    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-amber-200 dark:scrollbar-thumb-amber-600 scrollbar-track-transparent pb-3">
      <div className="flex gap-3 sm:gap-4 min-w-max pr-4">
        {achievements.sports.map((item) => (
          <article
            key={item.title}
            className="w-[240px] sm:w-[280px] shrink-0 rounded-2xl border border-amber-100/80 dark:border-amber-500/30 bg-white/95 dark:bg-black/60 shadow-lg hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-t-2xl" aria-hidden />
            <div className="p-4 space-y-2.5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-amber-700 dark:text-amber-300">Competition & Health</p>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-snug">{item.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{item.description}</p>
              {item.bullets && (
                <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const SkillsRail = () => (
  <section className="px-6 md:px-12 py-12 bg-gray-100 dark:bg-[#03020b]">
    <header className="mb-6 text-center md:text-left">
      <p className="text-xs uppercase tracking-[0.5em] text-gray-500 dark:text-gray-300">Strategy · Ops · Digital</p>
      <h2 className="text-2xl font-nyu-ultra">Selected Skills & Achievements</h2>
      <p className="text-gray-600 dark:text-gray-200 font-nyu-thin">
        Launches, program reviews, accessibility leadership, and operational wins across retail, higher ed, and product.
      </p>
    </header>

    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent pb-3">
      <div className="flex gap-3 sm:gap-4 min-w-max pr-4">
        {skillTiles.map((item) => (
          <article
            key={item.title}
            className="w-[220px] sm:w-[260px] shrink-0 rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/95 dark:bg-black/60 shadow-md hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 rounded-t-2xl" aria-hidden />
            <div className="p-4 space-y-2">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{item.subtitle}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const SkillsStack = () => (
  <section className="px-6 md:px-12 py-16 bg-gradient-to-br from-[#2e0068] via-[#521a9a] to-[#7a3fd9] text-white">
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-purple-100">Skill Sets</p>
        <h3 className="text-3xl font-nyu-ultra">What I build with</h3>
        <p className="text-purple-50/90 font-nyu-thin max-w-2xl mx-auto">
          From hands-on web delivery to accessibility, program reviews, and leadership—stacked by relevance.
        </p>
      </div>

      <div className="overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-white/10">
        <div className="grid grid-rows-3 grid-flow-col auto-cols-[minmax(220px,260px)] gap-4 md:gap-5 min-w-max pr-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-5 shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-lg font-semibold">{group.title}</h4>
                <span className="h-2 w-2 rounded-full bg-amber-300" aria-hidden />
              </div>
              <p className="mt-2 text-sm text-purple-100 leading-relaxed">
                {group.items.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default async function AchievementsPage() {
  const { blobs } = await list();

  const classRepTile = {
    src: "/class-rep.png",
    alt: "class representative poster for Arnab",
    caption: "Class Representative, EMBA A27",
    category: "Leadership",
  };

  const mappedBlobTiles = blobs?.map(({ url, pathname }, index) => ({
      src: url,
      alt: pathname,
      caption: galleryInfo[index]?.caption ?? pathname,
      category: galleryInfo[index]?.category ?? "",
    })) ?? [];

  const blobTiles = shuffleArray([classRepTile, ...mappedBlobTiles]);

  return (
    <>
      <Head>
        <title>Achievements | Arnab Majumdar</title>
        <meta
          name="description"
          content="Selected academic, sports, and arts achievements curated by Arnab Majumdar."
        />
      </Head>

      <main className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#04010e] dark:via-[#08041d] dark:to-[#020109] text-gray-900 dark:text-gray-50 font-nyu">
        <section className="text-center py-16 px-6">
          <p className="tracking-[0.4em] text-xs uppercase text-gray-500 dark:text-gray-300 mb-6">
            Achievements
          </p>
          <h1 className="text-4xl md:text-5xl font-nyu-ultra mb-4">Academic · Sports · Arts</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-200 font-nyu-thin">
            Curated highlights from a multi-disciplinary journey—certifications, athletic pursuits, cultural
            productions, and community research. Each tile can expand to reveal certificates, publications, or
            visual stories.
          </p>
        </section>

        {/* Gallery */}
        <section className="px-4 md:px-12 pb-16">
          {blobTiles.length > 0 && (
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent pb-3">
              <div className="flex gap-3 sm:gap-4 min-w-max scroll-pl-4 md:scroll-pl-12 pr-4">
                {blobTiles.map(({ src, alt, caption, category }) => (
                  <article
                    key={src}
                    className="w-[260px] sm:w-[320px] shrink-0 rounded-2xl border border-gray-100/70 dark:border-white/10 bg-white/95 dark:bg-black/60 shadow-lg hover:-translate-y-1 transition-transform duration-200"
                  >
                    <div className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500 rounded-t-2xl" aria-hidden />
                    <div className="p-3 space-y-2">
                      <ImageMagnify>
                        <figure className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                          <Image
                            src={src}
                            alt={alt}
                            width={800}
                            height={800}
                            unoptimized
                            priority
                            className="object-contain w-full h-[240px] sm:h-[280px] mx-auto"
                          />
                        </figure>
                      </ImageMagnify>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug text-left">
                          {caption}
                        </p>
                        <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                          {category || "\u00a0"}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Academic */}
        <section className="px-6 md:px-12 py-12 bg-white/80 dark:bg-black/40 backdrop-blur">
          <header className="mb-6 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500 dark:text-gray-300">Academic</p>
            <h2 className="text-3xl font-nyu-ultra">Scholarship & Research</h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-200 font-nyu-thin">
              Conference talks, zero-waste research, and frameworks that bridge business strategy with sustainability.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.academic.map((item) => (
              <SectionTile key={item.title} {...item} />
            ))}
          </div>
        </section>

        <PresentationRail />

        <SportsRail />

        {/* Arts */}
        <section className="px-6 md:px-12 py-12 bg-white dark:bg-black">
          <header className="mb-6 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500 dark:text-gray-300">Arts</p>
            <h2 className="text-3xl font-nyu-ultra">Cultural Work & Creative Direction</h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-200 font-nyu-thin">
              Installations, salons, and creative leadership across Pride events, museums, and community programs.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.arts.map((item) => (
              <SectionTile key={item.title} {...item} />
            ))}
          </div>
        </section>

        <SkillsRail />

        <section className="px-6 md:px-12 py-16 text-center bg-gray-100 dark:bg-[#03020b]">
          <h3 className="text-2xl font-semibold mb-4">Want to create together?</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-nyu-thin mb-6">
            Let{"'"}s build something better, together. Let{"'"}s collaborate or share
            notes—especially if you{"'"}re curating a summit, class, or exhibit.
          </p>
          <Link href="/help" className={buttonStyle} aria-label="Schedule a conversation">
            Connect With Arnab
          </Link>
        </section>

        <SkillsStack />
      </main>
    </>
  );
}
