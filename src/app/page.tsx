import { headers } from 'next/headers';
import Link from 'next/link';
import { Card } from "./components/card";
import { HomeClickTracker } from "./components/home-click-tracker";
import { ReadIcon } from "./components/icons";
import { cardWrapperStyle, nycBackgroundTheme, buttonStyle, tiffanyBackgroundTheme } from './utility/stylevariables';

const decodeHeaderValue = (headerValue: string | null): string => {
  if (!headerValue) {
    return '';
  }

  try {
    return decodeURIComponent(headerValue).trim();
  } catch {
    return headerValue.trim();
  }
};

const getHomepageUserLocation = (): string => {
  const requestHeaders = headers();

  const city = decodeHeaderValue(requestHeaders.get('x-vercel-ip-city'));
  const region = decodeHeaderValue(requestHeaders.get('x-vercel-ip-country-region'));
  const country = decodeHeaderValue(requestHeaders.get('x-vercel-ip-country'));
  const formattedLocation = [city, region, country].filter(Boolean).join(', ');

  return formattedLocation || 'unknown';
};

export default function Home() {
  const userLocation = getHomepageUserLocation();
  const homeCardProps = {
    useCtaButton: true,
  };

  return (
    <HomeClickTracker userLocation={userLocation}>
      <main className="flex min-h-screen flex-col items-center justify-between md:pt-20 mb-32 font-nyu">
        <div className="grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          <div className={cardWrapperStyle}>
            <Card
              {...homeCardProps}
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
              {...homeCardProps}
              title="NYU - Stern School of Business"
              url="/nyu"
              imageUrl="/stern.png"
              backgroundTheme={`${nycBackgroundTheme}`}
              description="Class Representative, Master of Business Administration - Class of 2027"
            />
          </div>

          <div className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center capitalize">New and Trending</h2>
            <Card
              {...homeCardProps}
              title="What I learned from Whistleblowers?"
              description="What I learned from Whistleblowers? How ethics shows up in real organizations—and how individual choices connect to systems, incentives, and outcomes."
              url="/nyu/professional-responsibility"
              buttonText="Read more"
            />
          </div>

          <div className={cardWrapperStyle} id="aster">
            <h2 className="text-xl font-bold text-center capitalize" >Made in US Collaboration:</h2>
            <Card
              {...homeCardProps}
              title="Aster for Lotus - Made in Rhode Island"
              description="Luxurious hand-crafted candle featuring exquisite watercolor artwork on a heavy whiskey-colored glass jar."
              url="https://lotusmahal.com/products/aster-for-lotus"
              buttonText="See Product"
              openInNewTab
              customClassName={`${cardWrapperStyle}`}
              backgroundTheme={nycBackgroundTheme}
              imageUrl='https://lotusmahal.com/cdn/shop/files/DSCF2076_42f9aa66-c21a-4b76-a0db-88a679d0039e.jpg?v=1741617890&width=1646'
            />
          </div>

          <div className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center capitalize">Updated Daily!</h2>
            <Card
              {...homeCardProps}
              title="Comic of the day!"
              url="/tech/comic"
              buttonText="Read Today's Comic"
              description="Have fun reading some fun comics!! More Features to come!"
            >
              <ReadIcon height="100px" width="100px" />
            </Card>
          </div>

          <div className={cardWrapperStyle} id="garden-of-swann">
            <h2 className="text-xl font-bold text-center capitalize">Stories of Courage</h2>
            <Card
              {...homeCardProps}
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
              {...homeCardProps}
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
              {...homeCardProps}
              title="Commander's Palace Project"
              url="/lotus#commanders"
              backgroundTheme={tiffanyBackgroundTheme}
            >
              <div>
                <p className="text-wrap">
                  Developed a new website for Commander&#039;s Palace using Webflow CMS, event scheduling APIs, and agency-provided Figma designs.
                </p>
                <ul className="list-disc list-inside">
                  <li className="text-wrap">Distinct Mobile and Desktop Experience</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className={cardWrapperStyle}>
            <Card
              {...homeCardProps}
              title="Free Trivia for you to enjoy on the go!"
              url="/games/quiz"
              buttonText="Play NOW!"
              imageUrl="/quiz.png"
              description="Version 1 is live! Version 2 coming soon!"
            />
          </div>

          <div className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center capitalize" >Click Book NOW! button to schedule a meeting.</h2>
            <Card
              {...homeCardProps}
            title="Building Bridges. Creating Momentum."
              url="/help"
              buttonText="Book NOW!"
              backgroundTheme={nycBackgroundTheme}
            >
              <div>
                <p className="text-wrap">
                  What I help with:
                </p>
                <ul className="list-disc grid grid-cols-1">
                  <li className="hover:underline text-wrap justify-start">Strategic planning for small businesses and organizations</li>
                  <li className="hover:underline justify-start">E-commerce strategy, UX, and product solutions</li>
                  <li className="hover:underline justify-start">Manufacturing, sourcing, and operational alignment</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center">Click learn more to view my experiences.</h2>
            <Card
              {...homeCardProps}
              title="Turning ideas into outcomes. ✨"
              url="/experiences"
              backgroundTheme={nycBackgroundTheme}
            >
              <div>
                <p className="text-wrap">
                  What I help with:
                </p>
                <ul className="list-disc grid grid-cols-1">
                  <li className="text-wrap">Education: program review, strategic planning, and training</li>
                  <li className="text-wrap">Student-led projects and career-ready initiatives</li>
                  <li className="text-wrap">Community organizers and mission-driven programming</li>
                </ul>
              </div>

            </Card>
          </div>

          <div className={cardWrapperStyle}>
            <h2 className="text-xl font-bold text-center capitalize">Thank you for your support! Please visit store</h2>
            <Card
              {...homeCardProps}
              title="Made with Love, Free to Use"
              openInNewTab
              url="https://lotusmahal.com/"
              buttonText="go to Lotus Mahal"
              description="All images and icons are carefully chosen to be either personal creations or royalty-free!"
              imageUrl="https://lotusmahal.com/cdn/shop/files/12815231453993207167_2048.jpg?v=1729536713&width=823"
              imageAlt="Picture of a greeting card made by Lotus Mahal called Basant Raga where a women is singing in the calling of the spring"
            />
          </div>

          <div className={cardWrapperStyle}>
            <Card
              {...homeCardProps}
              title="Download Resume Here"
              openInNewTab
              url="/resume"
              buttonText="Download NOW!"
              description="A PDF file will download."
              backgroundTheme={nycBackgroundTheme}
              imageUrl='/cv.png'
            />
          </div>

        </div>
        <Link href="#navigation" className='hover:underline text-purple-800'>go to top</Link>
      </main>
    </HomeClickTracker>
  );
}
