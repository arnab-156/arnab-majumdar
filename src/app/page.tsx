import Image from "next/image";
import Link from 'next/link';
import { Card } from "../app/components/card";
import { CalculatorIcon } from "./components/icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center m-8 uppercase">Welcome</h1>
        <Card
          title="About Arnab!"
          url="/about"
          imageUrl="/headshot.gif"
          description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
          customClassName="m-4"
        />

        <div className="shadow-md rounded-md text-center py-4 px-8 m-4">
          <p className="m-2"><strong>Navigate with ease.</strong> Use the top menu to jump to specific project categories.</p>

          <p className="mt-4"><strong>Connect & Learn More.</strong> Find contact information and additional details in the footer. </p>
        </div>

        <p className="shadow-md rounded-md bg-yellow-500/75 py-4 px-8 text-white text-center font-bold m-4">
          To save cost and energy, the website goes to sleep after some inactivity,
          please refresh the page or be patient while initial page loads.
          <br />
          If you are so keep to support, please continue to support
          <Link className="p-2 m-2 hover:text-lg hover:underline" href="https://lotusmahal.com/">Lotus Mahal</Link>
          . Images and icons are either personal/royalty free.
        </p>

        <p className="shadow-md rounded-md bg-gray-500/50 py-4 px-8 text-white text-center font-bold m-4">
          Technologies used:
          <ul className="pl-4 text-center">
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Tailwind css</li>
            <li>JavaScript</li>
            <li>Deployed on onrender.com</li>
          </ul>
        </p>

        <div className="m-4">
          <Card
            title="Go to Games and Utilities"
            url="/tech"
            description="Play games, trivia, and use calculator. Features will be added frequently such as tip calculator and resume builder are coming soon!"
          >
            <CalculatorIcon height="100px" width="100px" />
          </Card>
        </div>

      </div>
    </main>
  );
}
