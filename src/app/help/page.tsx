import Link from "next/link";

export default function Help() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 ">
      <div className={`mb-6 flex text-center flex-col lg:text-left
        `}>
        <h1 className="text-3xl font-bold text-center mt-8 mb-16">Book your spot!</h1>
        <p className="text-md text-center mx-8">
          Love Planning ahead? My calendar currently shows availability for Summer 2025. I anticipate having the Fall schedule available and updated here starting in July.
        </p>

        <div className={`m-auto`} id="book-now">
          <iframe
            width="100vw"
            height="1200px"
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ25585GXBIfMQn9F7wdhXvYhNQefhyvUd3Sg9q0DdHwiD0QAYQZiCDtI0AGM3jAVZ8zhHfz06G3?gv=true"
            title="Schedule time on my calendar!" allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-md w-screen md:w-[560px] mb-32 dark:invert"
          ></iframe>
        </div>
      </div>


      <div className={`mb-6 grid text-center 
        md:grid-cols-2 
        lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left
        `}>
      </div>


      <Link href="#navigation" className='hover:underline text-purple-800'>go to top</Link>
    </main>
  );
}
