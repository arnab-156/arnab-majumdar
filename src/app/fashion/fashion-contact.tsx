import Link from "next/link";

import { Reveal } from "../components/animation";
import { heroPrimaryButtonStyle } from "../utility/stylevariables";

/** The closing call to action every /fashion page ends on. */
export const FashionContact = () => (
  <section className="w-full bg-lotus-indigo px-6 py-14 text-lotus-paper md:px-12">
    <Reveal className="mx-auto max-w-2xl text-center">
      <h2 className="font-nyu-ultra text-2xl md:text-3xl">
        To incorporate fashion, or if you have any questions, please contact!
      </h2>
      <Link
        href="/contact"
        className={`${heroPrimaryButtonStyle} mt-6 bg-lotus-paper text-lotus-indigo hover:bg-white`}
      >
        Contact me
      </Link>
    </Reveal>
  </section>
);
