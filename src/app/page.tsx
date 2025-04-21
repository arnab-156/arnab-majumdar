import Link from 'next/link';
import { Card } from "../app/components/card";
import { CalculatorIcon, ComputerIcon, ReadIcon } from "./components/icons";
import { cardWrapperStyle, nycBackgroundTheme, buttonStyle } from './utility/stylevariables';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-20 mb-32">
      <div className="grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <div className=' m-8'>
          <h1 className="text-3xl font-bold text-center uppercase">Welcome home!</h1>
        </div>
        <div className={cardWrapperStyle}>
          <Card
            title="About Arnab!"
            url="/about"
            imageUrl="/headshot.gif"
            description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="100% free website is made with:"
            url=""
          >
            <ul className="list-disc grid grid-cols-2">
              <li className="hover:underline text-wrap">React</li>
              <li className="hover:underline">TypeScript</li>
              <li className="hover:underline">Next.js</li>
              <li className="hover:underline">Tailwind css</li>
              <li className="hover:underline">JavaScript</li>
              <li className="hover:underline text-wrap">React Testing Library</li>
              <li className="hover:underline">Jest</li>
              <li className="hover:underline text-wrap">Deployed on Vercel</li>
              <li className="hover:underline text-wrap">Flickr</li>
              <li className="hover:underline text-wrap">YouTube</li>
              <li className="hover:underline text-wrap">Open APIs</li>
            </ul>
          </Card>
        </div>

        <div className="shadow-md rounded-md text-center py-4 px-8 m-4">
          <p className="m-2">
            If you are a small business, a retailer, or an educator who wants to use the latest technology and practices
            in your organization, <strong>Connect with me</strong>:
          </p>

          <p className="mt-4"> Find contact information in the top navigation on mobile or on the footer on desktop.</p>
        </div>



        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize">I am going to Stern!</h2>
          <Card
            title="NYU - Stern School of Business"
            url="/experiences#my-education"
            imageUrl="/SternBound.png"
            backgroundTheme={`${nycBackgroundTheme}`}
            description="Master of Business Administration - Class of 2027"
          />
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
          <div className="shadow-md rounded-md text-center py-4 px-8 m-4">
            <h2 className="text-xl font-bold text-center capitalize">Contact me for:</h2>
            <ul className="list-disc grid grid-cols-1">
              <li className="hover:underline text-wrap justify-start">Small Business Strategic Planning</li>
              <li className="hover:underline justify-start">E-commerce products and solutions</li>
              <li className="hover:underline justify-start">Manufacturing and Sourcing</li>
              <li className="hover:underline justify-start">Education- Program Review, Strategic Planning and Training</li>
              <li className="hover:underline justify-start">Students</li>
              <li className="hover:underline justify-start">Community Organizers</li>
            </ul>
          </div>
        </div>

        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize" >New and Trending:</h2>
          <Card
            title="Comic of the day!"
            url="/tech/comic"
            description="Have fun reading some fun comics!! More Features to come!"
            backgroundTheme={nycBackgroundTheme}
          >
            <ReadIcon height="100px" width="100px" />
          </Card>
        </div>

        <div className="shadow-md rounded-md text-center py-4 px-8 m-4">
          <p className="m-2"><strong>Navigate with ease.</strong> Use the top menu to jump to specific project categories.</p>

          <p className="mt-4"><strong>Connect & Learn More.</strong> Find contact information and additional details in the footer. </p>
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
          <Card
            title="Made with Love, Free to Use"
            url="/tech"
            description="All images and icons are carefully chosen to be either personal creations or royalty-free!"
            backgroundTheme={nycBackgroundTheme}
          >
            <p className="my-4 pb-4"><strong >Thank you for your support!</strong> Please visit <Link className={`${buttonStyle}`} href="/lotus" aria-label="go to lotusmahal.com">Lotus Mahal.</Link></p>
          </Card>
        </div>

        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize" >Coming soon:</h2>
          <Card
            title="Launch your website!"
            url="/edu"
            description="Technology education resources for everyone!"
            customClassName="invert"
          >
            <ComputerIcon height="100px" width="100px" />
          </Card>
        </div>
      </div>
      <Link href="#navigation" className='hover:underline text-purple-800'>go to top</Link>
    </main>
  );
}
