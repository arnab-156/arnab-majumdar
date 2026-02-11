import Link from 'next/link';
import { Card } from "./components/card";
import { ReadIcon } from "./components/icons";
import { cardWrapperStyle, nycBackgroundTheme, buttonStyle, tiffanyBackgroundTheme, invertedButtonStyle } from './utility/stylevariables';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:pt-20 mb-32 font-nyu">
      <div className="grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <div className={cardWrapperStyle}>
          <Card
            title="About Arnab!"
            url="/about"
            imageUrl="/headshot.png"
            description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
          />
        </div>

        <div className="shadow-md rounded-md text-center py-4 px-8 m-4">
          <p className="m-2">
            If you are a small business, a retailer, or an educator who wants to use the latest technologies & practices, <strong> <Link className={`${buttonStyle}`} href="/help" aria-label="go to calendar to schedule a google meet">Contact me.</Link></strong>
          </p>

          <p className="mt-4"> Find social information in the top navigation on mobile or the footer on desktop.</p>
        </div>

        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize">Welcome to my Stern journey!</h2>
          <Card
            title="NYU - Stern School of Business"
            url="/nyu"
            imageUrl="/stern.png"
            backgroundTheme={`${nycBackgroundTheme}`}
            description="Class Representative, Master of Business Administration - Class of 2027"
          />
        </div>

        <div className={cardWrapperStyle} id="aster">
          <h2 className="text-xl font-bold text-center capitalize" >Made in US Collaboration:</h2>
          <Card
            title="Aster for Lotus - Made in Rhode Island"
            description="Luxurious hand-crafted candle featuring exquisite watercolor artwork on a heavy whiskey-colored glass jar."
            url="https://lotusmahal.com/products/aster-for-lotus"
            openInNewTab
            customClassName={`${cardWrapperStyle}`}
            backgroundTheme={nycBackgroundTheme}
            imageUrl='https://lotusmahal.com/cdn/shop/files/DSCF2076_42f9aa66-c21a-4b76-a0db-88a679d0039e.jpg?v=1741617890&width=1646'
          />
        </div>

        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize">Updated Daily!</h2>
          <Card
            title="Comic of the day!"
            url="/tech/comic"
            description="Have fun reading some fun comics!! More Features to come!"
          >
            <ReadIcon height="100px" width="100px" />
          </Card>
        </div>

        <div className={cardWrapperStyle} id="garden-of-swann">
          <h2 className="text-xl font-bold text-center capitalize">New and Trending:</h2>
          <Card
            title="World Pride Garden of Swann Washington D.C."
            description="Click to learn more about Fashion + Activism of William Dorsey Swann"
            url="/lotus/garden-of-swann"
            customClassName={`${cardWrapperStyle}`}
            imageUrl={`https://live.staticflickr.com/65535/55041103674_dd84ce4ce4_w.jpg`}
          />
        </div>

        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize">Expanding Retail Experiences:</h2>
          <Card
            title="Owner and CEO - Made of Chicago"
            url="/moc"
            imageUrl="https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg"
            backgroundTheme={``}
            imageWidth={105}
            description="Click here to know more about the innovation, technology, and design."
          />
        </div>

        <div className={cardWrapperStyle} id="cp">
          <h2 className="text-xl font-bold text-center capitalize">Project from New Orleans:</h2>
          <Card
            title="Commander's Palace Project"
            url="/lotus#commanders"
            backgroundTheme={tiffanyBackgroundTheme}
          >
            <div>
              <p className="text-wrap">
                Commander&#039;s Palace is a historic restaurant in New Orleans. New technologies were learned, Webflow used for CMS, Couple of API&#039;s used for event scheduling. A new website was created based on a design from Figma by a design agency.
              </p>
              <ul className="list-disc grid grid-cols-1 mb-2">
                <li>Distinct Mobile and Desktop Experience</li>
                <li> Coming soon: Dining Experience</li>
              </ul>
              <p className="text-wrap">Click on tile to go see more... </p>
            </div>
          </Card>
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Free Trivia for you to enjoy on the go!"
            url="/games/quiz"
            imageUrl="/quiz.png"
            description="Version 1 is live! Version 2 coming soon!"
          />
        </div>

        <div className={cardWrapperStyle}>
          <h2 className="text-xl font-bold text-center capitalize" >Contact me for:</h2>
          <Card
            title="Find contact information in the top navigation on mobile or the footer on desktop."
            url="/help"
            backgroundTheme={nycBackgroundTheme}
          >
            <div>
              <p className="text-wrap">
                Building Bridges, Creating Connections.
                <br />
                Any Sector, Any Size, One Passion!
              </p>
              <ul className="list-disc grid grid-cols-1">
                <li className="hover:underline text-wrap justify-start">Small Business Strategic Planning</li>
                <li className="hover:underline justify-start">E-commerce products and solutions</li>
                <li className="hover:underline justify-start">Manufacturing and Sourcing</li>
                <li className="hover:underline justify-start">Education- Program Review, Strategic Planning and Training</li>
                <li className="hover:underline justify-start">Students</li>
            <li className="hover:underline justify-start">Community Organizers</li>
          </ul>
        </div>
      </Card>
    </div>

        <div className="shadow-md rounded-md text-center py-4 px-8 m-4">
          <p className="m-2"><strong>Navigate with ease.</strong> Use the top menu to jump to specific project categories.</p>

          <p className="mt-4"><strong>Connect & Learn More.</strong> Find contact information and additional details in the footer. </p>
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Click the tile to view my experiences."
            url="/experiences"
            description='Made with:'
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
              <li className="hover:underline text-wrap">Codex by OpenAI</li>
            </ul>
          </Card>
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Made with Love, Free to Use"
            openInNewTab
            url="https://lotusmahal.com/"
            description="All images and icons are carefully chosen to be either personal creations or royalty-free!"
          >
            <div className="my-4 pb-4 flex flex-col items-center text-center gap-3">
              <p>
                <strong>Thank you for your support!</strong> Please visit store
              </p>
              <Link
                className={`${buttonStyle} inline-flex justify-center`}
                href="https://lotusmahal.com/"
                aria-label="go to lotusmahal.com"
              >
                Lotus Mahal
              </Link>
              <p className="text-xs text-gray-500 dark:text-gray-400">opens in a new tab</p>
            </div>
          </Card>
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Download Resume Here"
            openInNewTab
            url="/resume"
            description="A PDF file will download."
            backgroundTheme={nycBackgroundTheme}
            imageUrl='/cv.png'
          />
        </div>

      </div>
      <Link href="#navigation" className='hover:underline text-purple-800'>go to top</Link>
    </main>
  );
}
