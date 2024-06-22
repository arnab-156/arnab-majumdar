import Link from 'next/link';
import { Card } from "../app/components/card";
import { CalculatorIcon } from "./components/icons";
import { cardWrapperStyle } from './utility/stylevariables';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center m-8 uppercase">Welcome to my homepage!</h1>
        <Card
          title="About Arnab!"
          url="/about"
          imageUrl="/headshot.gif"
          description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
          customClassName={cardWrapperStyle}
        />

        <div className="shadow-md rounded-md text-center py-4 px-8 m-4">
          <p className="m-2"><strong>Navigate with ease.</strong> Use the top menu to jump to specific project categories.</p>

          <p className="mt-4"><strong>Connect & Learn More.</strong> Find contact information and additional details in the footer. </p>
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Made with Love, Free to Use"
            url="/tech"
            description="All images and icons are carefully chosen to be either personal creations or royalty-free!"
          >
            <p className="m-2"><strong >Thank you for your support!</strong> Please visit <Link className="p-1 m-2 rounded-md bg-blue-300 hover:text-lg hover:underline" href="https://lotusmahal.com/" aria-label="go to lotusmahal.com">Lotus Mahal.</Link></p>
          </Card>
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Technologies used:"
            url="/tech"
          >
            <ul className="list-disc grid grid-cols-2">
              <li className="hover:underline">React</li>
              <li className="hover:underline">TypeScript</li>
              <li className="hover:underline">Next.js</li>
              <li className="hover:underline">Tailwind css</li>
              <li className="hover:underline">JavaScript</li>
              <li className="hover:underline">React Testing Library</li>
              <li className="hover:underline">Jest</li>
              <li className="hover:underline">Deployed on Vercel & Onrender</li>
            </ul>
          </Card>
        </div>


        <div className={cardWrapperStyle}>
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
