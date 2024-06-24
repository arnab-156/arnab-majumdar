import Link from 'next/link';
import { Card } from "../app/components/card";
import { CalculatorIcon, ComputerIcon } from "./components/icons";
import { cardWrapperStyle, yellowBackgroundTheme, buttonStyle } from './utility/stylevariables';

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
            backgroundTheme={yellowBackgroundTheme}
          >
            <p className="my-4 pb-4"><strong >Thank you for your support!</strong> Please visit <Link className={`${buttonStyle}`} href="/lotus" aria-label="go to lotusmahal.com">Lotus Mahal.</Link></p>
          </Card>
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Technologies used:"
            url=""
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
            description="Play games, trivia, and use calculator. More Features are coming soon!"
          >
            <CalculatorIcon height="100px" width="100px" />
          </Card>
        </div>

        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize" >New and Trending:</h2>
          <Card
            title="Free Trivia for you to enjoy on the go!"
            url="/games/quiz"
            imageUrl="/quiz.png"
            description="Version 1 is live! Version 2 coming soon!"
          />
        </div>


        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize" >Coming soon:</h2>
          <Card
            title="Launch your website!"
            url=""
            description="Technology education resources for everyone!"
            customClassName="invert"
          >
            <ComputerIcon height="100px" width="100px" />
          </Card>
        </div>
      </div>
    </main>
  );
}
