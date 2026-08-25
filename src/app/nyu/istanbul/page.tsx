import { list } from "@vercel/blob";
import Image from "next/image";
import Link from "next/link";
import { AnimationLayer, Reveal } from "@/app/components/animation";
import { buttonStyle } from "@/app/utility/stylevariables";
import { CompanyMarquee, ThemeDeck, VideoWall } from "./istanbul-client";
import { learningOutcomes, places } from "./istanbul-data";

export const metadata = {
  title: "İstanbul — Global Immersion Experience | Arnab Majumdar",
  description:
    "NYU Stern's Global Immersion Experience in Türkiye: a geopolitical brief, the themes that came out of the week, and what the city was like.",
};

/**
 * Photographs live in Vercel Blob under this prefix. Nothing is uploaded there
 * yet, so every gallery below degrades to a note rather than an empty gap.
 */
const BLOB_PREFIX = "istanbul_gie";

type Shot = { url: string; pathname: string };

async function getShots(): Promise<Shot[]> {
  try {
    const { blobs } = await list({ token: process.env.ISTANBUL_READ_WRITE_TOKEN });
    return blobs.map(({ url, pathname }) => ({ url, pathname }));
  } catch {
    // No token locally, or the prefix does not exist yet. The page still renders.
    return [];
  }
}

const eyebrow = "text-xs uppercase tracking-[0.28em] text-purple-200";

const Pending = ({ what }: { what: string }) => (
  <p className="rounded-2xl border border-dashed border-purple-200/40 bg-white/5 p-5 text-sm text-purple-100">
    {what} appear here once they are uploaded to Vercel Blob under{" "}
    <code className="rounded bg-black/30 px-1.5 py-0.5">{BLOB_PREFIX}/</code>.
  </p>
);

export default async function IstanbulPage() {
  const shots = await getShots();
  const hero = shots[4];
  const coffee = shots.filter((s) => /coffee/i.test(s.pathname)).slice(0, 2);
  const paintings = shots.filter((s) => /paint/i.test(s.pathname)).slice(0, 4);
  const framedPainting = shots.filter((s) => /paint/i.test(s.pathname)).slice(4, 5);

  return (
    <AnimationLayer
      as="main"
      className="min-h-screen overflow-x-clip bg-[#0c041a] font-nyu text-white"
      method="rise"
      distance={44}
      duration={760}
      threshold={0.12}
      rootMargin="0px 0px -12% 0px"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2e0068] via-[#5a1dab] to-[#b373ff] px-6 py-16 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%)]" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]" aria-hidden />

        <AnimationLayer
          as="div"
          className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr]"
          method="alternate"
          distance={48}
          threshold={0}
          rootMargin="0px"
        >
          <Reveal method="left" className="space-y-4">
            <p className={eyebrow}>Global Immersion Experience &middot; March 2026</p>
            <h1 className="font-nyu-ultra text-4xl leading-tight md:text-5xl">İstanbul</h1>
            <p className="max-w-2xl text-lg text-purple-50 md:text-xl">
              A week inside Türkiye&apos;s economy — conglomerates, banks, factories and kitchens —
              and the themes that survived the flight home.
            </p>

            <p className="text-sm text-purple-100">
              Taught by{" "}
              <Link
                href="https://www.stern.nyu.edu/faculty/bio/tulin-erdem"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-purple-200 underline-offset-4 hover:text-amber-200"
              >
                Tülin Erdem
              </Link>
            </p>

            <Reveal method="left" delay={220} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/nyu" className={`${buttonStyle} px-5 py-3 text-sm font-semibold`}>
                See my entire NYU journey
              </Link>
              <Link href="/" className="underline underline-offset-4 text-purple-100">
                go back to home
              </Link>
            </Reveal>
          </Reveal>

          <Reveal method="right" delay={140}>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
              {hero ? (
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white/10">
                  <Image
                    src={hero.url}
                    alt="İstanbul, from the Global Immersion Experience"
                    fill
                    sizes="(max-width: 768px) 90vw, 360px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <Pending what="Photographs from the week" />
              )}

              <Link
                href="https://lotusmahal.com/search?q=istanbul"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-purple-100 underline underline-offset-4 hover:text-amber-200"
              >
                Click to see the İstanbul collection &mdash; opens in a new tab
              </Link>
            </div>
          </Reveal>
        </AnimationLayer>
      </section>

      {/* 1 — GEOPOLITICAL STUDY */}
      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className={eyebrow}>Geopolitical study</p>
            <h2 className="mt-2 font-nyu-ultra text-3xl md:text-4xl">Geopolitical Analysis of Turkey</h2>
            <p className="mt-2 text-purple-100">Course: Global Immersion Experience in Türkiye</p>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <Reveal method="left" className="space-y-6">
              <p className="text-lg leading-relaxed text-purple-50">
                Geopolitical risk brief ahead of the Türkiye immersion, focusing on energy corridors
                and currency stability.
              </p>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
                  Learning outcomes
                </h3>
                <ul className="mt-4 space-y-3">
                  {learningOutcomes.map((item) => (
                    <li key={item} className="flex gap-3 text-purple-50">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-300" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal method="right" delay={140}>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className={eyebrow}>The brief</p>
                <p className="mt-3 text-sm leading-relaxed text-purple-100">
                  The full write-up lives outside this site.
                </p>
                <Link
                  href="https://turkey-geopolitics-xmuj88c.gamma.site/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${buttonStyle} mt-5 inline-block px-5 py-3 text-sm font-semibold`}
                >
                  Read the brief
                </Link>
                <p className="mt-2 text-xs text-purple-200">Opens in a new tab</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — OVERVIEW */}
      <section className="bg-white/[0.03] px-6 py-14 md:px-12">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className={eyebrow}>Overview</p>
            <h2 className="mt-2 font-nyu-ultra text-3xl md:text-4xl">Sixteen things Türkiye taught us</h2>
            <p className="mt-2 max-w-2xl text-purple-100">
              From the post-departure session. Step through them, or skip the deck entirely — nothing
              below depends on it.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <ThemeDeck />
          </Reveal>
        </div>
      </section>

      {/* 3 — INSIGHTS */}
      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <Reveal>
            <p className={eyebrow}>Insights</p>
            <h2 className="mt-2 font-nyu-ultra text-3xl md:text-4xl">What the city was like</h2>
            <p className="mt-2 max-w-2xl text-purple-100">
              Business school explains the economy. The rest of it you have to eat, watch and walk.
            </p>
          </Reveal>

          {/* Coffee */}
          <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <h3 className="font-nyu-ultra text-2xl">The Reading Up</h3>
              <p className="leading-relaxed text-purple-50">
                A fortune-telling Turkish coffee joint, in New York City. You drink the coffee, turn
                the cup over onto the saucer, wait for the grounds to settle, and someone reads what
                is left.
              </p>
              <p className="leading-relaxed text-purple-100">
                It is a good project idea precisely because the ritual does the work: the wait is the
                product. A small booking flow, a reader&apos;s calendar, a page that explains the
                custom to people who have never turned a cup over — and the whole thing runs on
                twenty minutes and a saucer.
              </p>
            </div>
            <div>
              {coffee.length ? (
                <div className="grid grid-cols-2 gap-4">
                  {coffee.map((shot) => (
                    <div key={shot.url} className="relative aspect-square overflow-hidden rounded-2xl">
                      <Image src={shot.url} alt="Turkish coffee, read from the cup" fill className="object-cover" unoptimized />
                    </div>
                  ))}
                </div>
              ) : (
                <Pending what="The two coffee photographs" />
              )}
            </div>
          </Reveal>

          {/* Places */}
          <AnimationLayer as="div" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" method="rise" distance={44} stagger={80} staggerCycle={4}>
            {places.map((place) => (
              <Reveal
                as="a"
                key={place.name}
                href={place.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                  {place.imageUrl ? (
                    <Image src={place.imageUrl} alt={place.name} fill className="object-contain p-3" unoptimized />
                  ) : (
                    <span className="flex h-full items-center justify-center px-4 text-center font-nyu-ultra text-lg uppercase text-[#2e0068]">
                      {place.name}
                    </span>
                  )}
                </div>
                <div className="flex-1 p-4">
                  <p className={eyebrow}>{place.kind}</p>
                  <h3 className="mt-1 font-semibold text-white group-hover:underline">{place.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-purple-100">{place.note}</p>
                </div>
              </Reveal>
            ))}
          </AnimationLayer>

          {/* Paintings */}
          <Reveal className="space-y-4">
            <h3 className="font-nyu-ultra text-2xl">Paintings</h3>
            {paintings.length ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {paintings.map((shot) => (
                  <div key={shot.url} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <Image src={shot.url} alt="Painting from İstanbul" fill className="object-cover" unoptimized />
                  </div>
                ))}
              </div>
            ) : (
              <Pending what="The four paintings" />
            )}
          </Reveal>
        </div>
      </section>


      {/* 4 — COMPANIES & LECTURES */}
      <section className="bg-white/[0.03] px-6 py-14 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className={eyebrow}>Companies &amp; lectures</p>
            <h2 className="mt-2 font-nyu-ultra text-3xl md:text-4xl">Who we heard from</h2>
            <p className="mt-2 max-w-2xl text-purple-100">
              Nine hosts across the week, from a macroeconomics lecture to a chef&apos;s kitchen.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <CompanyMarquee />
          </Reveal>
        </div>
      </section>

      {/* 5 — VIDEOS */}
      <section className="px-6 py-14 pb-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className={eyebrow}>Video</p>
            <h2 className="mt-2 font-nyu-ultra text-3xl md:text-4xl">İstanbul, in shorts</h2>
            <p className="mt-2 max-w-2xl text-purple-100">
              Pick one and it plays here. Nothing loads until you choose.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <VideoWall />
          </Reveal>
        </div>
      </section>

      {/* 6 — FRAMED PAINTING */}
      <section className="px-6 py-14 pb-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          {framedPainting.length ? (
            <div className=" gap-4 ">
              {framedPainting.map((shot) => (
                <div key={shot.url} className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image src={shot.url} alt="Painting from İstanbul" fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          ) : (
            <Pending what="The four paintings" />
          )}

          <Reveal className="mt-12">
            <Link href="#navigation" className="text-purple-200 underline underline-offset-4 hover:text-white">
              go to top
            </Link>
          </Reveal>
        </div>
      </section>
    </AnimationLayer>
  );
}
