import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ImageMagnify } from "@/app/components/ImageMagnify";
import { buttonStyle } from "@/app/utility/stylevariables";

const neutralGallery = [
  {
    src: "",
    alt: "Framed certificate placeholder",
    caption: "Academic Distinction, 2024",
    category: "academic",
  },
  {
    src: "",
    alt: "Conference presentation placeholder",
    caption: "Keynote: Circular Supply Chains",
    category: "academic",
  },
  {
    src: "",
    alt: "Runner crossing finish line placeholder",
    caption: "Triathlon Finisher",
    category: "sports",
  },
  {
    src: "",
    alt: "Athlete medal placeholder",
    caption: "Half Marathon Podium",
    category: "sports",
  },
  {
    src: "",
    alt: "Gallery wall placeholder",
    caption: "Mixed-Media Exhibition",
    category: "arts",
  },
  {
    src: "",
    alt: "Stage performance placeholder",
    caption: "Live Performance Concept",
    category: "arts",
  },
];

type LinkItem = { label: string; href?: string };
type BulletItem = string;

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
      title: "Strategic Innovation Lab",
      description:
        "Advised Fortune 500 retail teams on business transformation, earning the 'Innovation Catalyst' award from the Stern Center for Sustainable Business.",
      links: [
        { label: "Panel: Tech × Sustainability" },
        { label: "Sustainability: Fabric Futures", href: "/lotus/eye-on-india" },
      ],
      bullets: [
        "Designed executive playbooks for omnichannel retailers.",
        "Mentored Stern MBAs on circular business experimentation.",
      ],
    },
  ],
  sports: [
    {
      title: "Ultra Endurance Collective",
      description:
        "Co-led a 50-person fundraising team across triathlons, open-water swims, and multi-day rides; coached first-time athletes on training systems.",
      links: [
        { label: "TriState Triathlon League" },
        { label: "Open-Water Swim Clinics" },
      ],
      bullets: [
        "Raised over $50K for community health orgs.",
        "Built inclusive race-prep curriculum for beginners.",
      ],
    },
    {
      title: "Mindful Movement Residencies",
      description:
        "Designed curriculum for inclusive movement practices, blending yoga, pilates, and breath work for university and Pride community programs.",
      bullets: [
        "Led residencies at two universities and Pride wellness hubs.",
        "Partnered with adaptive athletes on mobility workshops.",
      ],
    },
  ],
  arts: [
    {
      title: "Creative Direction",
      description:
        "Curated 'Fabric Futures'—an immersive installation bridging narrative textiles, projection mapping, and tactile archives for WorldPride DC.",
      links: [
        { label: "Garden of Swann", href: "/lotus/garden-of-swann" },
        { label: "Fabric Futures" },
      ],
      bullets: [
        "Scouted 30+ artists and archivists across diasporas.",
        "Integrated AR layers with tangible textiles.",
      ],
    },
    {
      title: "Cultural Programming",
      description:
        "Produced artist residencies and storytelling salons spotlighting South Asian queer voices; built partnerships with museums and Pride organizations.",
      links: [
        { label: "Arts Residency Framework" },
        { label: "Conference Talk" },
      ],
      bullets: [
        "Secured grants with museum partners to expand programming.",
        "Hosted salons that combined film, textiles, and spoken-word.",
      ],
    },
  ],
};

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
        {links.map(({ label, href = "#" }) => (
          <li key={label}>
            <Link href={href} className="hover:underline">
              {label}
            </Link>
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

export default function AchievementsPage() {
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
        <section className="px-6 md:px-12 pb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {neutralGallery.map(({ src, alt, caption, category }) => (
              <ImageMagnify key={src}>
                <figure
                  className={`rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-purple-200/60 dark:hover:shadow-purple-900/60 transition ${category}`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 md:h-64"
                  />
                  <figcaption className="p-4 text-sm text-gray-700 dark:text-gray-200 font-nyu-thin bg-white/95 dark:bg-black/50">
                    {caption}
                  </figcaption>
                </figure>
              </ImageMagnify>
            ))}
          </div>
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

        {/* Sports */}
        <section className="px-6 md:px-12 py-12 bg-gray-50 dark:bg-[#050210]">
          <header className="mb-6 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500 dark:text-gray-300">Sports</p>
            <h2 className="text-3xl font-nyu-ultra">Movement & Endurance</h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-200 font-nyu-thin">
              From triathlons to mindful coaching, these milestones celebrate disciplined training and team resilience.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.sports.map((item) => (
              <SectionTile key={item.title} {...item} />
            ))}
          </div>
        </section>

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

        <section className="px-6 md:px-12 py-16 text-center bg-gray-100 dark:bg-[#03020b]">
          <h3 className="text-2xl font-semibold mb-4">Want the full archive?</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto font-nyu-thin mb-6">
            Certificates, design decks, and performance clips are available upon request. Let{"'"}s collaborate or share
            notes—especially if you{"'"}re curating a summit, class, or exhibit.
          </p>
          <Link href="/help" className={buttonStyle} aria-label="Schedule a conversation">
            Connect With Arnab
          </Link>
        </section>
      </main>
    </>
  );
}
