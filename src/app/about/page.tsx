import Image from "next/image";
import { Card } from "../components/card"
import Link from "next/link";
import { buttonStyle } from "../utility/stylevariables";

const urlImageDefault = "/headshot.gif"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pb-60">
      <div className="grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <div className="m-8">
          <Card
            title="About Arnab!"
            url="https://www.linkedin.com/in/arnab156/"
            imageUrl={urlImageDefault}
            description="Arnab is a creative problem solver who loves working in a teams that are ideas driven!"
          />
          <p className="">My Gallup CliftonStrengths are <strong>Input, Achiever, Ideation, Futuristic, Learner</strong>.</p>
        </div>

        <div className="m-8">
          Ever since I was a young boy, I was told exactly how to talk, walk,
          or understand the world around me. My own learning experiences and
          challenges meant my quest for the world has been different than others.
          I am a problem solver and a creative thinker with over 15 years of
          experience in the fashion and technology complex. A seemingly ordinary
          journey from “unorganized” textile mills in Ichalkaranji, India to the
          sophisticated “organized” retail and technology companies such as
          Reliance, Walmart, FedEx, and now EXPR has been extraordinary for me,
          and I have learned these things:
          <ul className="pl-4 ml-6 text-center">
            <li>Listening and being an empathetic leader works slowly but surely
              just like the race between The Tortoise and the Hare.</li>
            <li>I love to compete and achieve individually as well as a team.
              I always think of how to get better, improve processes,
              and help people around me to do their best.</li>
          </ul>
        </div>

        <div className="m-8">
          All my career there has been no dearth of achievements but the most satisfying so far has been:
          <ul className="list-disc pl-4 ml-6">
            <li>Winning the Best Graduation Project at my undergraduate degree.</li>
            <li>When my HR from Shoprunner told me I was one of her top 10 hires of
              all time. On hard days, I remind myself of that!</li>
            <li>Problem-solving complex Web Accessibility issues and evangelizing
              good practices with everyone on the team and stakeholders
              at Bonobos and Shoprunner.</li>
          </ul>

          <p className="m-8 mb-20">
            I love learning about the world, am an outstanding painter, and love table tennis and tennis.
            I live with my husband, my cat, and several plants. My blessings are being made into a
            well-rounded individual by my parents and to have their love and support. My goal is to always
            support my husband and to make the world a “bit” more fun to live in for everyone.
          </p>
        </div>

        <Card title={"See More of Arnab's Experiences.."} url={"/experiences"} customClassName="m-8 mb-20">
          <p className="my-4 pb-4"><strong >Thank you for your support! </strong>
            Please <Link className={`${buttonStyle}`} href="/experiences" aria-label="go to arnab's experience">click here.</Link>
          </p>
        </Card>
      </div>
    </main>
  );
}
