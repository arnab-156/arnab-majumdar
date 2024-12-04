import Link from 'next/link';
import { Card } from "../components/card";
import { cardWrapperStyle } from "../utility/stylevariables";
import { EyeOnIndiaImageTile } from "../components/imageTiles";
import styles from "./styles.module.css";

export default function EducationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pb-16">
      <div className={`mb-6 grid text-center 
        md:grid-cols-2 gap-4
        lg:grid-cols-3 lg:text-left
        `}>




        {/* START OF TOP SECTION */}
        <div className="text-center m-auto w-full lg:h-screen ">
          <div className="flex lg:h-1/2">
            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center ${styles.gradientAnimation}`}>
              <h1 className="text-3xl font-bold text-center m-auto font-bold">Education</h1>
            </p>
            <p className="lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center">Please excuse the look, this page is under construction.</p>
          </div>

          <div className="flex lg:h-1/2">
            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center ${styles.slideInFromRightAnimationSlowDelayed}`}>Here is a preview of what&apos;s coming</p>

            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center ${styles.gradientAnimationReversed}`}>
              Tagore and Dewey believed in the power of environment and community in educating ourselves.
            </p>

          </div>
        </div>

        <div className="text-center m-auto flex flex-col w-full lg:h-screen">
          <div className="flex flex-col lg:h-1/2  mt-8 mb-2">
            <h2 className="text-xl mb-2 font-bold">My Philosophy</h2>
            <div className="flex flex-row flex-grow">

              <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
                <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black font-bold`}>

                  <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                    <h2>Who is John Dewey?</h2>
                  </div>
                  <div className={`${styles.card__back} rounded-2xl  text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-yellow-600 flex items-center justify-center`}>
                    <h2>Coming Soon...</h2>
                  </div>

                </div>
              </div>


              <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
                <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black font-bold`}>

                  <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-yellow-600 flex items-center justify-center`}>
                    <h2>Who is Tagore?</h2>
                  </div>
                  <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                    <h2>Coming Soon...</h2>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className={`
            text-sm h-svh max-h-64 lg:max-h-96 rounded-t-full border-2 border-white 
            bg-[url('https://live.staticflickr.com/65535/53841418931_301432a964_w.jpg')] bg-cover bg-no-repeat bg-center 
            ${cardWrapperStyle}`}>
          </div>
        </div>


        <div className="text-center m-auto w-full flex flex-col-reverse lg:flex-col lg:h-screen">
          <div className={`${cardWrapperStyle} rounded-t-full h-svh max-h-64 lg:max-h-96 rounded-t-full border-2 border-white bg-[url('https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg')] bg-cover bg-no-repeat bg-top`}>
          </div>
          <div className="flex flex-row lg:h-1/2">
            <div className={`${styles.slideInFromRightAnimation} ${cardWrapperStyle}`}>
              <Card
                title="Go to my Experience"
                url="/experiences"
                imageUrl="/headshot.gif"
                description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
              />
            </div>
          </div>
        </div>

        {/* END OF TOP SECTION */}





        {/* START OF SECOND SECTION */}
        <div className="text-center m-auto w-full lg:h-screen ">
          <div className="flex lg:h-1/2">
            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center ${styles.gradientAnimation}`}>
              <h1 className="text-3xl font-bold text-center m-auto font-bold">My Experience</h1>
            </p>
            <p className="lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center"><h3 className="text-lg font-bold">Arts, Sciences & Technology</h3>.</p>
          </div>

          <div className="flex lg:h-1/2">
            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center ${styles.slideInFromRightAnimationSlowDelayed}`}>Here is a preview of what&apos;s coming</p>

            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center ${styles.gradientAnimationReversed}`}>
              Arnab has been a creative problem solver since he was young. With decades of experience in the education, fashion, retail, art, and technology industries. Arnab enjoys playing with data and making “things” happen!
            </p>

          </div>
        </div>

        <div className="text-center m-auto flex flex-col-reverse w-full lg:h-screen">
          <div className="flex flex-col lg:h-1/2  mt-8 mb-2">
            {/* <h2 className="text-xl mb-2 font-bold">My Philosophy</h2> */}
            <div className="flex flex-row flex-grow">

              <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
                <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>

                  <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                    <h2 className='font-bold'>My Vision</h2>
                  </div>
                  <div className={`${styles.card__back} rounded-2xl text-sm text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-yellow-600 flex items-center justify-center`}>
                    <h2> Since 80s my mom modeled a work-from-home environment due to many social and economic issues unseen before,
                      which honed me into a perfect organizer of creative projects—modeled after Tagore&#39;s more grassroots-based education
                      that gives parents and the community the autonomy of the artistic and scientific direction not on standardization of education
                      because one size does not fit all.</h2>
                  </div>

                </div>
              </div>


              <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
                <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>

                  <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-yellow-600 flex items-center justify-center`}>
                    <p>Education based on core mathematics and sciences can be free of the boring classrooms. An economically self-reliant and accessible model that benefits the community is essential. Creative models can be used to solve complex problems that require interdisciplinary thinking.</p>
                  </div>
                  <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                    <p className="text-sm p-2">
                      AI can be revolutionary in helping people make informed decisions based on their understanding of
                      life&#39;s paradigms. The concept of self relies on the essential human aspect of community; without
                      life, we cannot understand what it means to be life-less.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <Link
            href="/lotus/eye-on-india"
            className={`
            text-sm h-svh max-h-64 lg:max-h-96 rounded-b-full border-2 border-white 
            bg-[url('https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg')] bg-cover bg-no-repeat bg-center 
            ${cardWrapperStyle}`}>
          </Link>
        </div>


        <div className="text-center m-auto w-full flex flex-col-reverse lg:flex-col lg:h-screen">
          <div className={`${cardWrapperStyle} rounded-t-full h-svh max-h-64 lg:max-h-96 rounded-t-full border-2 border-white bg-[url('https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg')] bg-cover bg-no-repeat bg-top`}>
          </div>
          <div className="flex flex-row lg:h-1/2">
            <div className={`${styles.slideInFromRightAnimation} ${cardWrapperStyle}`}>
              <Card
                title="Go to my Experience"
                url="/experiences"
                imageUrl="/headshot.gif"
                description="Welcome! Explore Arnab&#39;s world of design, with both real-world and conceptual projects."
              />
            </div>
          </div>
        </div>



        {/* END OF SECOND SECTION */}








        {/* START OF THIRD SECTION */}

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
            <li>Design a Course!</li>
            <li>Make a Rubric for anything</li>
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



        {/* END OF THIRD SECTION */}

      </div>
      <Link href="#navigation" className='hover:underline'>go to top</Link>
    </main>
  );
}
