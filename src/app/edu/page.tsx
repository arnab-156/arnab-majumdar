import { Card } from "../components/card"
import { cardWrapperStyle } from "../utility/stylevariables";
import { Tile } from "../components/tile";
import { EyeOnIndiaImageTile } from "../components/imageTiles";

export default function EducationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pb-16">
      <div className={`mb-6 grid text-center 
        md:grid-cols-2 
        lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left
        `}>


        <div className="text-center m-auto">
          <h1 className="text-3xl font-bold text-center mt-8 mb-2 font-bold">Education</h1>
        </div>

        <div className="text-center m-auto">
          <h2 className="text-xl mb-2 font-bold">My Philosophy</h2>
          <h3 className="text-lg font-bold">Who is John Dewey?</h3>
          <h3 className="text-lg font-bold">Who is Tagore?</h3>
          <p className="text-sm">
            Tagore and Dewey believed in the power of environment and community in educating ourselves.
          </p>
        </div>

        <div className={cardWrapperStyle}>
          <Card
            title="Go to my Experience"
            url="/experiences"
            imageUrl="/headshot.gif"
            description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
          />
        </div>


        <h2 className="text-3xl font-bold text-center m-auto">My Experience</h2>

        <div className="text-center m-auto my-2">
          <h3 className="text-lg font-bold">Arts, Sciences & Technology</h3>
          <p className="text-sm">
            Arnab has been a creative problem solver since he was young.
            With decades of experience in the education, fashion, retail, art, and
            technology industries. Arnab enjoys playing with data and making “things” happen!
          </p>
        </div>

        {
          EyeOnIndiaImageTile()
        }

        <h2 className="text-3xl font-bold text-center m-auto">My Vision</h2>

        <div className="text-center m-auto  my-2">
          {/* <h3 className="font-bold text-lg mb-2">Lotus</h3> */}
          <p className="text-sm -2">
            Since 80s my mom modeled a work-from-home environment due to many social and economic issues unseen before,
            which honed me into a perfect organizer of creative projects—modeled after Tagore&#39;s more grassroots-based education
            that gives parents and the community the autonomy of the artistic and scientific direction not on standardization of education
            because one size does not fit all.
          </p>
        </div>

        <div className="text-center m-auto my-2">
          <p className="text-sm p-2">
            Education based on core mathematics and sciences can be free of the boring classrooms. An economically self-reliant and accessible model that benefits the community is essential. Creative models can be used to solve complex problems that require interdisciplinary thinking.
          </p>
        </div>


        {/* <Tile
          title="4-Way Quick Dry Activewear"
          subTitle="Elevated activwear inspired by Hancock Center. 4 way stretch and quick drying that is fitted for intense workouts."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53816126269_15992d8d81_w.jpg')] `}
          customClassName={cardWrapperStyle}
        /> */}

        <h2 className="text-3xl font-bold text-center m-auto my-4"></h2>


        <div className="text-center m-auto my-4">
        </div>

        <div className="text-center m-auto my-4">
          <p className="text-sm p-2">
            AI can be revolutionary in helping people make informed decisions based on their understanding of
            life&#39;s paradigms. The concept of self relies on the essential human aspect of community; without
            life, we cannot understand what it means to be life-less.
          </p>
        </div>

        <div className="text-center m-auto my-2">
          <h3 className="font-bold text-lg mb-2">For General Educators:</h3>
          <ul className="text-sm p-2">
            <h4 className="font-bold"> Coming Soon....</h4>
            <li>Teaching for any ages</li>
            <li>Concepts and Ideas of Teaching</li>
            <li>Experiential Learning</li>
            <li>Celebrate success and failure</li>
            <li>Economic Profitability of Education</li>
            <li>Certification</li>
            <li>Language</li>
          </ul>
        </div>

        <div className="text-center m-auto my-2">
          <h3 className="font-bold text-lg mb-2">Technology Education</h3>
          <ul className="text-sm p-2">
            <h4 className="font-bold"> Coming Soon....</h4>
            <li>Textiles & Apparel</li>
            <li>Arts</li>
            <li>Engineering - Automotive</li>
            <li>Engineering - Computer Sciences</li>
            <li>Argiculture</li>
            <li>Design</li>
          </ul>

        </div>

        <div className="text-center m-auto my-2">
          <h3 className="font-bold text-lg mb-2">For College Students:</h3>
          <ul className="text-sm p-2">
            <h4 className="font-bold"> Coming Soon....</h4>
            <li>What colleges?</li>
            <li>What can I afford?</li>
            <li>Financial Aid</li>
            <li>Health and Accessibility</li>
            <li>Activities</li>
            <li>Grades</li>
            <li>First Year Experience</li>
          </ul>
        </div>


        <div className="text-center m-auto  my-12">
          <h3 className="font-bold text-lg mb-2">For Parents:</h3>
          <ul className="text-sm p-2">
            <h4 className="font-bold"> Coming Soon....</h4>
            <li>What colleges?</li>
            <li>What can I afford?</li>
            <li>Financial Aid</li>
            <li>Health and Accessibility</li>
            <li>Activities</li>
            <li>Grades</li>
            <li>First Year Experience</li>
          </ul>
        </div>

        <div className="text-center m-auto my-12">
          <h3 className="font-bold text-lg mb-2">For Policy Makers:</h3>
          <ul className="text-sm p-2">
            <h4 className="font-bold"> Coming Soon....</h4>
            <li>Financial Aid</li>
            <li>Health and Accessibility</li>
          </ul>
        </div>

        <div className="text-center m-auto my-12">
          <h3 className="font-bold text-lg mb-2">For Community:</h3>
          <ul className="text-sm p-2">
            <h4 className="font-bold"> Coming Soon....</h4>
            <li>Impact of Tax Payer monies</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
