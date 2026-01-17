import Link from "next/link";
import { Card } from "../components/card";
import { buttonStyle, cardWrapperStyle, nycBackgroundTheme } from "../utility/stylevariables";

export default function ExperiencesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center mt-8 font-nyu-ultra">Experiences</h1>

        <div className={cardWrapperStyle}>
          <Card
            title="Owner"
            url="/lotus"
            description="We are a boutique consulting studio helping organizations ship strategy & digital experiences"
            customClassName={`${cardWrapperStyle}`}
            imageUrl="https://live.staticflickr.com/65535/53819325384_d2b8af917f_w.jpg"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Senior Software Engineer"
            url="https://www.bonobos.com/"
            imageUrl="/bonobos-logo-dark.svg"
            backgroundTheme={`${nycBackgroundTheme}`}
            description="Initially under Walmart Inc and then under Express LLC"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Software Engineer 2"
            url="https://www.shoprunner.com/"
            imageUrl="/shoprunner_byfedex.svg"
            backgroundTheme={`${nycBackgroundTheme}`}
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
            backgroundTheme={`${nycBackgroundTheme}`}
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
            backgroundTheme={`${nycBackgroundTheme}`}
            description="Click here to know more about Fashion + Education + Sustainability."
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
            title="AT&T Samsung Galaxy Project"
            url="/lotus/samsung"
            imageUrl="https://live.staticflickr.com/65535/53851021701_6619ae0f97_w.jpg"
            imageHeight={200}
            imageWidth={200}
            description="Click here to know more about Fashion + Education + use of Technology."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Docent - Lincoln Park Conservatory"
            url="/experiences/lincolnpark"
            imageUrl="https://live.staticflickr.com/65535/53863196190_faa7d80208_w.jpg"
            imageHeight={200}
            imageWidth={200}
            description="Click here to know more."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Instructor - Family and Consumer Sciences"
            url=""
            imageUrl="/pittstate.svg"
            imageHeight={200}
            imageWidth={190}
            backgroundTheme={`${nycBackgroundTheme}`}
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
            description="PR + Fashion show production assistant."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Graduate Teaching Assistant"
            url=""
            imageUrl="/uri.svg"
            backgroundTheme={`${nycBackgroundTheme}`}
            description="Textile Sciences Laboratory"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Assistant Manager, Reliance Trends"
            url=""
            imageUrl="https://live.staticflickr.com/65535/53819337484_729e51ba15_w.jpg"
            backgroundTheme={`bg-white`}
            description="Marketing, Promotions, Branding, new store opening (Two 145,000 sq.ft, Five 18,000 sq.ft stores, and vendor management."
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

        <h2 id="my-education" className="text-3xl font-bold text-center mt-8 font-nyu-ultra">Education</h2>
        <div className={cardWrapperStyle}>
          <Card
            title="NYU - Stern School of Business"
            url="https://www.stern.nyu.edu/"
            imageUrl="/stern.png"
            backgroundTheme={`${nycBackgroundTheme}`}
            description="Class Representative, Master of Business Administration - Class of 2027"
          />
        </div>


        <div className={cardWrapperStyle}>
          <Card
            title="Northwestern University"
            url=""
            imageUrl="/northwestern.svg"
            imageHeight={100}
            description="Certificate - Full Stack Web Development (MERN)"
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="University of Rhode Island - College of Business"
            url="https://web.uri.edu/business/about/tmd/"
            imageUrl="/uri.svg"
            backgroundTheme={`${nycBackgroundTheme}`}
            description="Master of Science - Textiles, Fashion Merchandising & Design"
          />
        </div>

        <div className={cardWrapperStyle} id="my-education-nift">
          <Card
            title="National Institute of Fashion Technology"
            url="https://nift.ac.in/theinstitute"
            imageUrl="/nift.svg"
            description="Bachelor of Technology - Apparel Manufacturing and Information Technology."
          />
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Bangiya Sangeet Parishad"
            url="https://www.bangiyasangeetparishad.org/bsp/index.html"
            imageUrl="https://placehold.co/300x300?text=Painting"
            backgroundTheme={`${nycBackgroundTheme}`}
            description="Diploma in Fine Arts, Painting (5th year) - Chitrankan Kala Mandir - Ranchi."
            openInNewTab
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
            <li className="p-2 underline"> Rhode Island Pride RI</li>
            <li className="p-2 underline"> CMSA Chicago</li>
            <li className="p-2 underline"> Capital Pride Alliance</li>
          </ul>
        </div>

        <p className="m-4 p-4"><strong >Thank you for visiting! There are more information to come, please visit again! </strong>
          <Link className={`${buttonStyle}`} href="/about" aria-label="go back to about">click here </Link> to go back.
        </p>
      </div>
    </main>
  );
}
