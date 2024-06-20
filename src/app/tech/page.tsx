import { Card } from "../components/card"
import { CalculatorIcon } from "../components/icons";

export default function Tech() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center m-8 uppercase">Technology</h1>
        <p className="m-6">
          Highlights simple lightweight code and projects for fun and pleasure.
          Made to demonstate simple front end web technologies as games and utilities to
          be used from your phone.
        </p>
        <p className="m-6">
          Some projects might need you to log in. This is to remove anonymous
          use of many of the paid services. For now, the service is free to use!
          More information to come!
        </p>
        <div className="m-8">
          <Card
            title="Free Tic Tac Toe game for you to enjoy on the go!"
            url="/games/tic-tac-toe"
            imageUrl="/tic-tac-toe.gif"
            description="Simple Tik Tac Toe Game for when you are bored."
          />
        </div>

        <div className="m-8">
          <Card
            title="Basic Calculator"
            url="/tech/calculator"
            customClassName=""
          >
            <CalculatorIcon height="100px" width="100px" />
          </Card>
        </div>

        <div className="m-8">
          <Card
            title="Coming soon: Free Trivia for you to enjoy on the go!"
            url="/games/quiz"
            imageUrl="/quiz.png"
            description="Log in to unlock you this free content and service!"
          />
        </div>

        <div className="m-8">
          <Card
            title="Coming soon: Resume Generator!"
            url="/tech/create-resume"
            imageUrl="/cv.png"
            description="Log in to unlock you this free service to create your own resume!"
          />
        </div>

        <div className="m-8">
          <Card
            title="Coming soon: Course - Launch your website for free!"
            url="#"
            imageUrl="/tic-tac-toe.gif"
            description="Technology education resources that are available to you!"
          />
        </div>

        <div className="m-8">
          <Card
            title="Coming soon: Fashion Business 101"
            url="#"
            imageUrl="/tic-tac-toe.gif"
            description="Start your Fashion Business and all you need to know!"
          />
        </div>

      </div>
    </main>
  );
}
