import Link from "next/link";

import { Reveal } from "../components/animation";

/** The closing call to action every /fashion page ends on. */
export const FashionContact = () => (
  <section className="w-full bg-lotus-indigo px-6 py-14 text-lotus-paper md:px-12">
    <Reveal className="mx-auto max-w-2xl text-center">
      <h2 className="font-nyu-ultra text-2xl md:text-3xl">
        To incorporate fashion, or if you have any questions, please contact!
      </h2>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center rounded-xl bg-lotus-paper px-5 py-3 text-sm font-semibold text-lotus-indigo shadow-lg transition hover:-translate-y-[2px] hover:bg-white focus:outline-none focus:ring-2 focus:ring-lotus-paper focus:ring-offset-2 focus:ring-offset-lotus-indigo"
      >
        Contact me
      </Link>
    </Reveal>
  </section>
);
