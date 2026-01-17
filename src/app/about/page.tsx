import { Card } from "../components/card"
import Link from "next/link";
import { buttonStyle, cardWrapperStyle, nycBackgroundTheme } from "../utility/stylevariables";

const urlImageDefault = "/headshot.png"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pb-60">
      <div className="grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <div className="m-8">
          <Card
            title="Click to go to LinkedIn!"
            url="https://www.linkedin.com/in/arnab156/"
            imageUrl={urlImageDefault}
            description="Sustainability & Retail Tech Leader | Omnichannel Commerce, Store Experience, Accessibility (WCAG)"
          />
        </div>

        <div className="m-8">
          I work at the intersection of fashion, technology, and sustainability. My career started in factories and retail, launching private labels and new stores for one of India’s largest retailers, and has evolved into building accessible, high-performing digital experiences for fashion and luxury brands. Today, I’m an Executive MBA candidate at NYU Stern, specializing in Strategy, Sustainable Business & Innovation, while founding and running Lotus Mahal, a creative and consulting studio.
        </div>

        <div className="m-8">
          <p>
            Through Lotus Mahal, I help organizations—from universities to restaurants to Pride festivals—turn strategy into measurable, tech-enabled outcomes, including institutional strategic planning frameworks, accessible website relaunches, and large-scale fashion programming.
          </p>
        </div>

        <div className="m-8">
          <p>
            Previously, I led front-end and accessibility initiatives for Bonobos (Walmart & EXPR), where I shipped e-commerce features that drove double-digit conversion gains and championed WCAG-compliant, inclusive design. Before that, at ShopRunner (FedEx Dataworks), I built core software frameworks that power large-scale retail technology. Earlier in my career, I served as a department chair, assistant professor, and instructor across multiple universities, weaving sustainability and technology into 100% of the fashion curriculum and helping double enrollments in fashion programs.
          </p>

        </div>

        <div className="m-8">
          <p>
            My journey started with size-standardization projects for Indian consumers and has grown into a mission: to use technology to make fashion and consumer goods more sustainable, more inclusive, and more human.
            <strong> Focus areas: Sustainable fashion & consumer goods, digital strategy, e-commerce, accessibility (WCAG), front-end engineering, educational program-building, and brand development. </strong>
          </p>
        </div>

        <div className="m-8">
          <p className="">My Gallup CliftonStrengths are <strong>Input, Achiever, Ideation, Futuristic, Learner</strong>.</p>
        </div>

        <div className={cardWrapperStyle}>
          <Card title="See More of Arnab's Experiences.." url={"/experiences"} customClassName="m-8 mb-20" backgroundTheme={nycBackgroundTheme}>
            <p className="my-4 pb-4">
              Please <Link className={`${buttonStyle}`} href="/experiences" aria-label="go to arnab's experience">click here</Link> to see more.
              <strong >Thank you for your support! </strong>
            </p>
          </Card>
        </div>

        <div className={cardWrapperStyle}>
          <div className="shadow-md rounded-md text-center py-4 px-8 m-4">
            <p className="m-2">
              For business enquiries, <strong> <Link className={`${buttonStyle}`} href="/help" aria-label="go to calendar to schedule a google meet">Contact me.</Link></strong>
            </p>
            <p className="mt-4"> Find social information in the top navigation on mobile or the footer on desktop.</p>
          </div>

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
      <div className={`text-center mt-24 my-4 px-8 m-4`}>
        <Link className={`m-auto hover:underline text-purple-800`} href="/" aria-label="go to arnab's experience">go to home</Link>.
      </div>
    </main>
  );
}
