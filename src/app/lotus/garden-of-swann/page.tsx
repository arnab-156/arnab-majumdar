import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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

      <main className="bg-white text-gray-800 font-nyu">
        {/* HERO */}
        <section className="bg-gradient-to-br from-pink-100 via-rose-200 to-indigo-100 py-16 px-6 text-center">
          <h1 className="text-5xl font-nyu-ultra mb-4">Garden of Swann</h1>
          <p className="text-lg max-w-2xl mx-auto font-nyu-thin">
            A queer fashion showcase for <strong>WorldPride DC 2025</strong>, celebrating cultural heritage,
            self-expression, and collective liberation through design.
          </p>
        </section>

        {/* HIGHLIGHT */}
        <section className="bg-white w-full px-8 py-12 flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold font-nyu-ultra">Follow the Journey</h2>
            <p className="font-nyu-thin">
              We are sharing mood boards, in-progress textiles, and installation sketches as we prepare
              for WorldPride DC. Catch the latest reel and stay tuned for behind-the-scenes updates.
            </p>
            <Link
              href="https://www.instagram.com/gardenofswann/"
              target="_blank"
              rel="noreferrer"
              className={`${buttonStyle} inline-block`}
            >
              Watch on Instagram
            </Link>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80"
              alt="Garden concept placeholder"
              className="rounded-xl object-cover w-full h-48"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80"
              alt="Runway concept placeholder"
              className="rounded-xl object-cover w-full h-48"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=500&q=80"
              alt="Fabric detail placeholder"
              className="rounded-xl object-cover w-full h-48"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80"
              alt="Installation sketch placeholder"
              className="rounded-xl object-cover w-full h-48"
              loading="lazy"
            />
          </div>
        </section>

        {/* WILLIAM DORSEY SWANN */}
        <section className="max-w-5xl mx-auto px-8 py-12 space-y-6 bg-purple-50 rounded-3xl my-10">
          <h2 className="text-3xl font-nyu-ultra">Honoring William Dorsey Swann</h2>
          <p className="font-nyu-thin">
            Known as the first self-identified drag queen in the United States, William Dorsey Swann organized
            underground drag balls in Washington, D.C. during the late 1800s. His legacy of resistance, joy, and
            community organizing informs the values behind Garden of Swann.
          </p>
          <div className="space-y-4 font-nyu-thin">
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

        {/* INFO SECTION */}
        <section className="max-w-4xl mx-auto p-8 space-y-6 font-nyu-thin">
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
        </section>

        {/* PARTNERS */}
        <section className="bg-white py-12 px-8">
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

        {/* FOOTER CTA */}
        <section className="bg-gray-100 text-center p-10 font-nyu">
          <h3 className="text-xl font-medium font-nyu-ultra">Want to learn more?</h3>
          <p className="font-nyu-thin">
            Connect with us at <a href="https://lotusmahal.com" className="underline text-blue-600">lotusmahal.com</a>
            or follow the story on our social platforms.
          </p>
        </section>
      </main>
    </>
  );
}
