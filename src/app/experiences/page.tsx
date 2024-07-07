import Link from "next/link";
import { Card } from "../components/card";
import { buttonStyle, cardWrapperStyle, pinkBackgroundTheme, yellowBackgroundTheme } from "../utility/stylevariables";

export default function ExperiencesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center mt-8">Experience</h1>

        <div className={cardWrapperStyle}>
          <Card
            title="Senior Software Engineer"
            url="https://www.bonobos.com/"
            imageUrl="/bonobos-logo-dark.svg"
            backgroundTheme={`${yellowBackgroundTheme}`}
            description="Initially under Walmart Inc and then under Express LLC"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Software Engineer 2"
            url="https://www.shoprunner.com/"
            imageUrl="/shoprunner_byfedex.svg"
            backgroundTheme={`${yellowBackgroundTheme}`}
            description="In a start up, and went through acquisition by FedEx"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Owner and CEO"
            url="/moc"
            imageUrl="https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg"
            backgroundTheme={``}
            imageWidth={105}
            description="Click here to know more about the innovation, technology, and design."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Instructional Assistant"
            url=""
            imageUrl="northwestern.svg"
            description="Full Stack Coding Bootcamp - Mongo Express React Node.js stack"
            imageHeight={80}
            imageWidth={80}
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Department Chair - Fashion Marketing and Merchandising"
            url=""
            imageUrl="https://live.staticflickr.com/65535/53818079467_6eaf1c63ea_w.jpg"
            backgroundTheme={`${yellowBackgroundTheme}`}
            description="Instructed cross-curriculum and mentored students of fashion merchandising."
            imageHeight={200}
            imageWidth={135}
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Eye on India - The Saree Project (Co-ordinator)"
            url="/lotus/eye-on-india"
            imageUrl="https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg"
            imageHeight={200}
            imageWidth={200}
            backgroundTheme={`${pinkBackgroundTheme}`}
            description="Fashion + Education + Sustainability."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Assistant Professor, Fashion Studies."
            url=""
            imageUrl="https://live.staticflickr.com/65535/53819339684_9c2b53cb83_w.jpg"
            imageHeight={200}
            imageWidth={200}
            backgroundTheme={`bg-white`}
            description="Instructed Fashion Studies courses on Apparel Quality, Supply Chain, Technology and Merchandising. Supported International Students and lead program review of Fashion Business Curriculum."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Instructor - Family and Consumer Sciences"
            url=""
            imageUrl="/pittstate.svg"
            imageHeight={200}
            imageWidth={190}
            backgroundTheme={`${yellowBackgroundTheme}`}
            description="Instructed 8+8 course load of Textiles and Fashion Merchandising courses of Family and Consumer Sciences."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="StyleWeek - PR Executive"
            url=""
            imageUrl="https://www.styleweeknortheast.com/wp-content/uploads/sites/26/2019/07/STYLEWEEK-LOGO-1.png"
            imageHeight={200}
            imageWidth={190}
            // backgroundTheme={`${pinkBackgroundTheme}`}
            description="PR + Fashion show production assistant."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Graduate Teaching Assistant"
            url=""
            imageUrl="/uri.svg"
            backgroundTheme={`${yellowBackgroundTheme}`}
            description="Textile Sciences Laboratory"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Assistant Manager, Reliance Trends"
            url=""
            imageUrl="https://live.staticflickr.com/65535/53819337484_729e51ba15_w.jpg"
            backgroundTheme={`bg-white`}
            description="Worked not just in Marketing, new store opening (Two 145,000 sq.ft, Five 18,000 sq.ft stores, severals brands
            and vendor management."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Reach Technologies"
            url=""
            imageUrl=""
            description="Research and Development of Footwear CAD for use of software engineers."
          />
        </div>

        <h2 className="text-3xl font-bold text-center mt-8">Education</h2>
        <div className={cardWrapperStyle}>
          <Card
            title="Northwestern Unversity"
            url=""
            imageUrl="/northwestern.svg"
            imageHeight={80}
            description="Certificate - Web Development"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="University of Rhode Island"
            url=""
            imageUrl="/uri.svg"
            backgroundTheme={`${yellowBackgroundTheme}`}
            description="Master's of Science - Textiles, Fashion Merchandising & Design"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="National Institute of Fashion Technology"
            url=""
            imageUrl="/nift.svg"
            backgroundTheme={`${yellowBackgroundTheme}`}
            description="Bachelor's of Technology - Apparel Manufacturing and Information Technology."
          />
        </div>

        <div className={`${cardWrapperStyle}`}>
          <h3 className="text-xl font-bold text-center"> Other Experiences:</h3>
          <ul className={`rounded-md p-4 ml-2`}>
            <li className="p-2 underline"> Apple Michigan Avenue Chicago</li>
            <li className="p-2 underline"> Ocean State Job Lot North Kingstown RI</li>
            <li className="p-2 underline"> Siyaram Silk Mills Mumbai India</li>
            <li className="p-2 underline"> Wonder Blues Jeans Factory Bangalore India</li>
          </ul>
        </div>

        <div className={`${cardWrapperStyle}`}>
          <h3 className="text-2xl font-bold text-center">Volunteer:</h3>
          <ul className={`rounded-md p-4 ml-2`}>
            <li className="p-2 underline"> Docent - Lincoln Park Conservatory Chicago IL </li>
            <li className="p-2 underline"> Rhode Island Pride RI</li>
            <li className="p-2 underline"> Trikone Chicago</li>
            <li className="p-2 underline"> CMSA Chicago</li>
          </ul>
        </div>

        <p className="m-4 p-4"><strong >Thank you for visiting! There are more information to come, please visit again! </strong>
          <Link className={`${buttonStyle}`} href="/about" aria-label="go back to about">click here </Link> to go back.
        </p>
      </div>
    </main>
  );
}
