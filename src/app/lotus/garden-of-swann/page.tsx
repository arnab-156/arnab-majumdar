import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { ImageMagnify } from "@/app/components/ImageMagnify";
import { buttonStyle } from "@/app/utility/stylevariables";

const partners = {
  universities: [
    "Marymount University",
    "Drexel University",
    "University of Delaware",
    "Columbia College Chicago",
    "Thomas Jefferson University",
    "Coppin State University",
  ],
  designers: [
    "Julien Proffitt",
    "Hannah Townsend",
    "William Baker",
    "Rain Brodie",
    "Caroline MacDonald",
    "Amarie Butler",
    "Kaz Kipp",
    "Avery Boudreaux",
    "Zayna Gilgeous",
  ],
  photographers: [
    "Owen McCullum",
    "Sean Burgandy",
    "Laura Marchetti",
    "Robin Fader",
  ],
  sponsors: ["Capital Pride Alliance", "WorldPride DC 2025"],
};

export default function GardenOfSwannPage() {
  return (
    <>
      <Head>
        <title>Garden of Swann | Lotus Mahal</title>
        <meta
          name="description"
          content="Garden of Swann: A queer fashion show by Lotus Mahal for WorldPride DC 2025. Fabric of Freedom."
        />
      </Head>

      <main className="bg-white text-gray-800 dark:bg-black dark:text-gray-100 font-nyu transition-colors duration-300">
        {/* HERO */}
        <section className="bg-gradient-to-br from-pink-100 via-rose-200 to-indigo-100 dark:from-[#140329] dark:via-[#25073d] dark:to-[#160624] py-16 px-6 text-center transition-colors duration-300">
          <h1 className="text-5xl font-nyu-ultra mb-4">Garden of Swann</h1>
          <p className="text-lg max-w-2xl mx-auto font-nyu-thin text-gray-800 dark:text-gray-100">
            A queer fashion showcase for <strong>WorldPride DC 2025</strong>, celebrating cultural heritage,
            self-expression, and collective liberation through design.
          </p>
        </section>

        {/* HIGHLIGHT */}
        <section className="bg-white dark:bg-zinc-900 w-full px-8 py-12 flex flex-col gap-6 md:flex-row md:items-center transition-colors duration-300">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold font-nyu-ultra">About the Show</h2>
            <p>
              Garden of Swann was part of the <strong>WorldPride Welcome + Visual Arts Center</strong>,
              which hosted 10,250+ visitors across 14 exhibits and 13 programs. As one of the featured
              artistic expressions, our fashion show explored the intersection of queer identity,
              textile traditions, and design innovation.
            </p>
            <p>
              Through collaborative storytelling, each garment in the show honored the theme of
              <em>“Fabric of Freedom”</em> — a visual and emotional narrative of resilience, joy, and
              liberation. The event spotlighted LGBTQIA+ voices, including those from diasporic,
              trans, and disabled communities.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <ImageMagnify>
              <img
                src="https://live.staticflickr.com/65535/55041103684_4a557a521b_w.jpg?auto=format"
                alt="Garden concept poster"
                className="rounded-xl object-cover w-full h-full"
                loading="lazy"
              />
            </ImageMagnify>
            <ImageMagnify>
              <img
                src="https://live.staticflickr.com/65535/55041091144_e7e1cd732f_w.jpg?auto=format"
                alt="Runway concept placeholder"
                className="rounded-xl object-cover w-full h-full"
                loading="lazy"
              />
            </ImageMagnify>

            <ImageMagnify>
              <img
                src="https://live.staticflickr.com/65535/55040834116_c01fa30278_w.jpg?auto=format"
                alt="Installation sketch placeholder"
                className="rounded-xl object-cover w-full h-full"
                loading="lazy"
              />
            </ImageMagnify>

            <ImageMagnify>
              <img
                src="https://live.staticflickr.com/65535/55041010753_92b66a666c_w.jpg?auto=format"
                alt="Fabric detail placeholder"
                className="rounded-xl object-cover w-full h-full"
                loading="lazy"
              />
            </ImageMagnify>

            <ImageMagnify>
              <img
                src="https://live.staticflickr.com/65535/55040834251_2196cfcf49_w.jpg?auto=format"
                alt="Installation sketch placeholder"
                className="rounded-xl object-cover w-full h-full"
                loading="lazy"
              />
            </ImageMagnify>

            <ImageMagnify>
              <img
                src="https://live.staticflickr.com/65535/55041010818_18f3e0baf4_w.jpg?auto=format"
                alt="Fabric detail placeholder"
                className="rounded-xl object-cover w-full h-full"
                loading="lazy"
              />
            </ImageMagnify>
          </div>
        </section>

        {/* WILLIAM DORSEY SWANN */}
        <section className="max-w-5xl mx-auto px-8 py-12 space-y-6 bg-purple-50 dark:bg-purple-900/30 rounded-3xl my-10 transition-colors duration-300">
          <h2 className="text-3xl font-nyu-ultra">Honoring William Dorsey Swann</h2>
          <p className="font-nyu-thin text-gray-700 dark:text-gray-200">
            Known as the first self-identified drag queen in the United States, William Dorsey Swann organized
            underground drag balls in Washington, D.C. during the late 1800s. His legacy of resistance, joy, and
            community organizing informs the values behind Garden of Swann.
          </p>
          <div className="space-y-4 font-nyu-thin text-gray-800 dark:text-gray-100">
            <div>
              <p className="font-semibold">Q: William Dorsey Swann 101?</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <Link className="text-purple-700 underline" href="https://www.liverpoolmuseums.org.uk/stories/slavery-voguing-house-of-swann" target="_blank">
                    Slavery, voguing & the House of Swann – Liverpool Museums
                  </Link>
                </li>
                <li>
                  <Link className="text-purple-700 underline" href="https://www.thebookseller.com/rights/picador-buys-extraordinary-tale-first-drag-queen-824311" target="_blank">
                    Picador buys the tale of the first drag queen – The Bookseller
                  </Link>
                </li>
                <li>
                  <Link className="text-purple-700 underline" href="https://en.wikipedia.org/wiki/William_Dorsey_Swann" target="_blank">
                    Wikipedia: William Dorsey Swann
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Q: Do you know what cake walking is?</p>
              <p className="mt-2">
                <Link className="text-purple-700 underline" href="https://www.youtube.com/watch?v=QifiyNm6jG4" target="_blank">
                  Watch a historical cake walk demonstration
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* INSTAGRAM SECTION */}
        <section className="max-w-4xl mx-auto p-8 space-y-6 font-nyu-thin text-gray-700 dark:text-gray-200 transition-colors duration-300">
          <h2 className="text-3xl font-semibold font-nyu-ultra">Follow the Journey</h2>
          <p className="font-nyu-thin text-gray-700 dark:text-gray-200">
            We shared mood boards, in-progress textiles, and installation sketches as we prepare
            for WorldPride DC. Catch the stories, reel and see the behind-the-scenes updates.
          </p>
          <Link
            href="https://www.instagram.com/gardenofswann/"
            target="_blank"
            rel="noreferrer"
            className={`${buttonStyle} inline-block`}
          >
            Watch on Instagram
          </Link>
        </section>

        {/* IMPACT */}
        <section className="bg-white dark:bg-zinc-900 w-full px-8 py-12 flex flex-col gap-6 md:flex-row md:items-center transition-colors duration-300">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <img
              src="https://live.staticflickr.com/65535/55041091139_b397a58381_w.jpg?auto=format"
              alt="Garden concept poster"
              className="rounded-xl object-cover w-full h-auto"
              loading="lazy"
            />
            <img
              src="https://live.staticflickr.com/65535/55041170140_d38e22f4f7_w.jpg?auto=format"
              alt="Runway concept placeholder"
              className="rounded-xl object-cover w-full h-auto"
              loading="lazy"
            />

            <img
              src="https://live.staticflickr.com/65535/55041091164_59cf8c0be3_w.jpg?auto=format"
              alt="Fabric detail placeholder"
              className="rounded-xl object-cover w-full h-auto"
              loading="lazy"
            />

            <img
              src="https://live.staticflickr.com/65535/55041170105_fc0c45e79d_w.jpg?auto=format"
              alt="Installation sketch placeholder"
              className="rounded-xl object-cover w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold font-nyu-ultra">See the impact!</h2>
            <p className="font-nyu-thin">
              Discover how World Pride and related programming shaped our community and creative work — full insights available in the Impact Report.
            </p>
            <Link
              href="https://issuu.com/capitalpride/docs/worldpride_washington_dc_2025_impact_report"
              target="_blank"
              rel="noreferrer"
              className={`${buttonStyle} inline-block`}
            >
              Read Impact Report
            </Link>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="bg-white dark:bg-zinc-900 py-12 px-8 transition-colors duration-300">
          <h2 className="text-3xl font-nyu-ultra text-center mb-8">Partners & Collaborators</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-nyu font-semibold mb-2">Participating Universities</h3>
              <ul className="list-disc list-inside font-nyu-thin space-y-1">
                {partners.universities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-nyu font-semibold mb-2">Lead Designers</h3>
              <ul className="list-disc list-inside font-nyu-thin space-y-1">
                {partners.designers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-nyu font-semibold mb-2">Photography</h3>
              <ul className="list-disc list-inside font-nyu-thin space-y-1">
                {partners.photographers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-nyu font-semibold mb-2">Sponsors & Partners</h3>
              <ul className="list-disc list-inside font-nyu-thin space-y-1">
                {partners.sponsors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Capital Pride Alliance*/}
        <section className="bg-gradient-to-br from-pink-100 via-rose-200 to-indigo-100 dark:from-[#140329] dark:via-[#25073d] dark:to-[#160624] py-16 px-6 text-center transition-colors duration-300">
          <h3 className="text-xl font-medium font-nyu-ultra">Presented by</h3>
          <p className="font-nyu-thin text-gray-700 dark:text-gray-200">
            This event would not have been possible without the support and community build by <a href="https://www.capitalpride.org/" className={`${buttonStyle} inline-block`}>Capital Pride Alliance</a>.
          </p>
        </section>

        {/* SPONSOR LOGOS */}
        <section className="bg-white dark:bg-zinc-900 py-12 px-8 transition-colors duration-300">
          <h3 className="text-2xl font-nyu-ultra text-center mb-6">Main Sponsors</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {["https://live.staticflickr.com/65535/55041103674_dd84ce4ce4_w.jpg",
              "https://live.staticflickr.com/65535/55039941117_212dece506_n.jpg",
              "https://live.staticflickr.com/65535/55040846756_4a43278aa2_n.jpg",
              "https://live.staticflickr.com/65535/55041117448_cf91fa96bb_n.jpg",
              "https://live.staticflickr.com/65535/55041276915_5823a56053_n.jpg",
              "https://live.staticflickr.com/65535/53819325384_d2b8af917f_n.jpg"
            ].map((src, idx) => (
              <div key={src} className="flex items-center justify-center bg-transparent dark:bg-zinc-800 rounded-2xl px-6 py-4">
                <img
                  src={src}
                  alt={`Sponsor logo ${idx + 1}`}
                  width={200}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="bg-gray-100 dark:bg-zinc-800 text-center p-10 font-nyu transition-colors duration-300">
          <h3 className="text-xl font-medium font-nyu-ultra">Want to learn more?</h3>
          <p className="font-nyu-thin text-gray-700 dark:text-gray-200">
            Connect with me on my <Link href="/help" className={`${buttonStyle} inline-block`}>Calendar</Link>
            or follow the story on the social platforms.
          </p>
        </section>
      </main>
    </>
  );
}
