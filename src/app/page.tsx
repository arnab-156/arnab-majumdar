import Image from "next/image";
import Link from 'next/link';
import { Card } from "../app/components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center m-8 uppercase">Welcome</h1>
        <p className="shadow-md rounded-md bg-yellow-500/50 py-4 px-8 text-white text-center font-bold m-4">
          To save cost and energy, the website goes to sleep after some inactivity,
          please refresh the page or be patient while initial page loads.
        </p>
        <p className="shadow-md rounded-md text-center py-4 px-8 m-4">
          In this website you will learn about Arnab and his personal projects, real-life and concept projects.
          On the top, you will see buttons to go to specific landing page of various topics.
          Footer of the page has more information on how to connect with me.

          If you are so keep to support, please continue to support
          <Link className="p-2 m-2 hover:text-lg hover:underline" href="https://lotusmahal.com/">Lotus Mahal</Link>
        </p>
        <p className="shadow-md rounded-md bg-gray-500/50 py-4 px-8 text-white text-center font-bold m-4">
          Technologies used: Next.js, React, TypeScript, Tailwind css.
          Deployed on onrender.com
          Images and icons are either personal or downloaded from royalty free sources.
        </p>
        <p className="shadow-md rounded-md px-8 m-4">
          <Card
            title="About Arnab!"
            url="/about"
            imageUrl="/headshot.gif"
            description="Click here to learn more about Arnab"
          />
        </p>
      </div>
    </main>
  );
}
