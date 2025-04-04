import Link from 'next/link';
import Image from "next/image";
import { cardWrapperStyle, $cardWrapperStyle } from "../utility/stylevariables";
import styles from "./styles.module.css";

export default function EducationPage() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pt-20 pb-16`}>
      <div className={`mb-6 grid text-center 
        md:grid-cols-2
        lg:grid-cols-3 lg:text-left
        `}>
        {/* START OF TOP SECTION */}
        <div className="text-center m-auto w-full lg:h-screen ">
          <div className="flex lg:h-1/2">
            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center`}>
              <h1 className="text-3xl font-bold text-center m-auto font-bold">Education</h1>
            </p>
            <p className="lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center">Please excuse the look, this page is under construction.</p>
          </div>

          <div
            className={`${cardWrapperStyle} rounded-full md:h-svh md:max-h-64 lg:max-h-96 lg:max-w-96 border-0 border-transparent md:m-auto lg:hidden`}
          >
            <Image
              className={`rounded-full m-auto w-12/16 rounded-t-full border-2 border-white`}
              src={"/headshot.gif"}
              alt="image of headhsot of arnab"
              priority
              unoptimized
            />
          </div>
          <div className='block underline m-24'>
            <Link href="/experiences" className='block hover:font-bold'>see all experience</Link>
            <Link href="/experiences#my-education" className='block hover:font-bold'>go to my education</Link>
          </div>
        </div>

        <div className="text-center m-auto flex flex-col w-full lg:h-screen">
          <div className="flex flex-col lg:h-1/2 mb-2">
            <div className="flex flex-row flex-grow">

              <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
                <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black font-bold`}>

                  <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                    <h2 className='dark:invert'>Who is John Dewey?</h2>
                  </div>
                  <div className={`${styles.card__back} rounded-2xl  text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                    <h2 className='dark:invert'>Coming Soon...</h2>
                  </div>

                </div>
              </div>


              <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
                <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black font-bold`}>

                  <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                    <h2 className='dark:invert'>Who is Tagore?</h2>
                  </div>
                  <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                    <h2>Coming Soon...</h2>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className={`
            text-sm h-svh max-h-64 lg:max-h-96 rounded-t-full md:rounded-t-sm lg:rounded-t-full border-2 border-white 
            bg-[url('https://live.staticflickr.com/65535/53841418931_301432a964_w.jpg')] bg-cover bg-no-repeat bg-center 
            ${$cardWrapperStyle}`}>
          </div>
        </div>


        <div className="text-center m-auto w-full lg:h-screen flex flex-col lg:flex-col lg:px-2 flex flex-col-reverse">
          <Link
            href="/experiences"
            className={`${cardWrapperStyle} rounded-full md:h-svh md:max-h-64 lg:max-h-96 lg:max-w-96 border-0 border-transparent md:m-auto hidden lg:block`}
          >
            <Image
              className={`rounded-full w-full lg:max-h-96 lg:max-w-96 rounded-t-full border-2 border-white`}
              src={"/headshot.gif"}
              alt="click on the image of headhsot of arnab to see all experience"
              priority
              unoptimized
            />
          </Link>


          <div className="flex lg:h-1/2">
            <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
              <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black font-bold`}>

                <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                  <h2 className='dark:invert'>Mission</h2>
                </div>
                <div className={`${styles.card__back} rounded-2xl  text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                  <h2>Self-empowerment through community</h2>
                </div>

              </div>
            </div>



            <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
              <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black font-bold`}>
                <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8  flex items-center justify-center`}>
                  <h2 className='dark:invert'>My Philosophy</h2>
                </div>
                <div className={`${styles.card__back} rounded-2xl text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                  <p> Tagore and Dewey believed in the power of environment and community in educating ourselves.</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* END OF TOP SECTION */}





        {/* START OF SECOND SECTION */}
        <div className="text-center m-auto w-full lg:h-screen ">
          <div className="flex lg:h-1/2">
            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center ${styles.gradientAnimation}`}>
              <h1 id="expr" className="text-3xl font-bold text-center m-auto font-bold">My Experience</h1>
            </p>
            <p className="lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center"><h3 className="text-lg font-bold">Arts, Sciences & Technology</h3>.</p>
          </div>


          <div className="flex lg:h-1/2">
            <Link href="/experiences" className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 content-center ${styles.slideInFromRightAnimationSlowDelayed} hover:underline`}>see all of arnab&apos;s experience</Link>

            <p className={`lg:w-1/2 rounded-2xl border-2 border-white p-2 m-2 content-center ${styles.gradientAnimationReversed}`}>
              Arnab has been a creative problem solver since he was young. With decades of experience in the education, fashion, retail, art, and technology industries. Arnab enjoys playing with data and making “things” happen!
            </p>

          </div>
        </div>


        <div className="text-center m-auto flex flex-col-reverse w-full lg:h-screen">
          <div className="flex flex-col lg:h-1/2  mt-8 mb-2 h-96">
            <div className="flex flex-row flex-grow">
              <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
                <div className={`${styles.card__content} h-96 text-center relative p-20 transition-transform duration-1000 text-black`}>

                  <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                    <h2 className='font-bold'>My Vision</h2>
                  </div>
                  <div className={`${styles.card__back}  h-96 rounded-2xl text-sm text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                    <h2> Since 80s my mom modeled a work-from-home environment due to many social and economic issues unseen before,
                      which honed me into a perfect organizer of creative projects—modeled after Tagore&#39;s more grassroots-based education
                      that gives parents and the community the autonomy of the artistic and scientific direction not on standardization of education
                      because one size does not fit all.</h2>
                  </div>

                </div>
              </div>


              <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
                <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>

                  <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                    <p>Education based on core mathematics and sciences may not be boring. An economically self-reliant and accessible model exists.</p>
                  </div>
                  <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                    <p className="text-sm p-2">
                      AI can be revolutionary in helping people make informed decisions. The concept of self relies on the essential human aspect of community; without
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
            bg-[url('https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg')] bg-cover bg-no-repeat bg-top 
            ${$cardWrapperStyle}`}>
          </Link>
        </div>


        <div className="text-center m-auto w-full flex flex-col lg:flex-col lg:h-screen">
          <Link
            href="/experiences/lincolnpark"
            className={`${cardWrapperStyle} rounded-t-full h-svh max-h-64 lg:max-h-96 rounded-t-full border-2 border-white bg-[url('https://live.staticflickr.com/65535/53863144554_28d446360a_w.jpg')] bg-cover bg-no-repeat bg-top`}>
          </Link>


          <Link
            href="/moc"
            className={`${cardWrapperStyle} rounded-b-full h-svh max-h-64 lg:max-h-96 border-2 border-white bg-[url('https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg')] bg-cover bg-no-repeat bg-top`}>
          </Link>
        </div>

        {/* END OF SECOND SECTION */}








        {/* START OF THIRD SECTION */}

        <div className="flex flex-row ">
          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-96 text-center relative p-20 transition-transform duration-1000 text-black`}>

              <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                <h2 className='font-bold'>For General Educators:</h2>
              </div>
              <div className={`${styles.card__back} rounded-2xl text-xs text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center h-full`}>
                <ul className="text-sm p-2">
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

            </div>
          </div>


          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>
              <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                <p>Early Childhood to home schooling to higher education to adult education</p>
              </div>
              <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                <p className="text-sm p-2">
                  Coming Soon...
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-96 text-center relative p-20 transition-transform duration-1000 text-black`}>

              <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                <h2 className='font-bold'>Technology Education</h2>
              </div>
              <div className={`${styles.card__back} rounded-2xl text-xs text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center h-full`}>
                <ul className="text-sm p-2">
                  <li>Textiles & Apparel</li>
                  <li>Arts</li>
                  <li>Engineering - Automotive</li>
                  <li>Engineering - Computer Sciences</li>
                  <li>Argiculture</li>
                  <li>Design</li>
                </ul>
              </div>

            </div>
          </div>


          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>
              <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                <p>What is STEM?</p>
              </div>
              <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                <p className="text-sm p-2">
                  Coming Soon...
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-96 text-center relative p-20 transition-transform duration-1000 text-black`}>

              <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                <h2 className='font-bold'>For College Students</h2>
              </div>
              <div className={`${styles.card__back} rounded-2xl text-xs text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center h-full`}>
                <ul className="text-sm p-2">
                  <li>What colleges?</li>
                  <li>What can I afford?</li>
                  <li>Financial Aid</li>
                  <li>Health and Accessibility</li>
                  <li>Activities</li>
                  <li>Grades</li>
                  <li>First Year Experience</li>
                </ul>
              </div>

            </div>
          </div>


          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>
              <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                <p>Preparing for college to recent graduates</p>
              </div>
              <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                <p className="text-sm p-2">
                  Coming Soon...
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-96 text-center relative p-20 transition-transform duration-1000 text-black`}>

              <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                <h2 className='font-bold'>For Parents</h2>
              </div>
              <div className={`${styles.card__back} rounded-2xl text-xs text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center h-full`}>
                <ul className="text-sm p-2">
                  <li>What colleges?</li>
                  <li>What can I afford?</li>
                  <li>Financial Aid</li>
                  <li>Health and Accessibility</li>
                  <li>Activities</li>
                  <li>Grades</li>
                  <li>First Year Experience</li>
                </ul>
              </div>

            </div>
          </div>


          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>
              <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                <p>How to prepare for paying for your children?</p>
              </div>
              <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                <p className="text-sm p-2">
                  Coming Soon...
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-96 text-center relative p-20 transition-transform duration-1000 text-black`}>

              <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                <h2 className='font-bold'>For Policy Makers</h2>
              </div>
              <div className={`${styles.card__back} rounded-2xl text-xs text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center h-full`}>
                <ul className="text-sm p-2">
                  <li>Financial Aid</li>
                  <li>Health and Accessibility</li>
                </ul>
              </div>

            </div>
          </div>


          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>
              <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                <p>How to prepare your citizens for the future</p>
              </div>
              <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                <p className="text-sm p-2">
                  Coming Soon...
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-96 text-center relative p-20 transition-transform duration-1000 text-black`}>

              <div className={`${styles.card__front} rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimation} flex items-center justify-center`}>
                <h2 className='font-bold'>For Community</h2>
              </div>
              <div className={`${styles.card__back} rounded-2xl text-xs text-white absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center h-full`}>
                <ul className="text-sm p-2">
                  <li>Impact of Tax Payer monies</li>
                </ul>
              </div>

            </div>
          </div>


          <div className={`${styles.card} w-1/2 lg:w-1/2 rounded-2xl border-2 border-white`}>
            <div className={`${styles.card__content} h-full text-center relative p-20 transition-transform duration-1000 text-black`}>
              <div className={`${styles.card__front} text-white rounded-2xl absolute top-0 bottom-0 right-0 left-0 p-8 bg-purple-800 flex items-center justify-center`}>
                <p>How does all of this matter to me?</p>
              </div>
              <div className={`${styles.card__back} rounded-2xl  absolute top-0 bottom-0 right-0 left-0 p-8 ${styles.gradientAnimationReversed} flex items-center justify-center`}>
                <p className="text-sm p-2">
                  Coming Soon...
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* END OF THIRD SECTION */}



      </div>
      <Link href="#navigation" className='hover:underline text-purple-800'>go to top</Link>
    </main>
  );
}
