import { Card } from "../components/card";
import { PaintIcon, GreetingCardIcon, ApparelIcon, LotusIcon } from "../components/icons";
import { lotus_pink as pink, cardWrapperStyle } from "../utility/stylevariables";

export default function Lotus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center m-8 uppercase text-pink-800">Welcome to Lotus Mahal</h1>
        <p className="text-xl font-bold text-center m-8 dark:invert">
          Boutique collections of rare and beautiful treasures, inexpensive but invaluable.
        </p>
        <Card
          title="Go to Lotus Mahal!"
          url="https://lotusmahal.com/"
          description="Boutique collections of rare and beautiful treasures, inexpensive but invaluable. Click here!"
          customClassName={cardWrapperStyle}
        >
          <LotusIcon height="100px" width="100px" color={pink} />
        </Card>

        <Card
          title="Greeting Cards!"
          url="#"
          description="more information to come."
          customClassName="m-4 invert"
        >
          <GreetingCardIcon height="100px" width="100px" />
        </Card>

        <Card
          title="Potrait Paintings"
          url="#"
          description="more information to come."
          customClassName="m-4 invert"
        >
          <PaintIcon height="100px" width="100px" />
        </Card>

        <Card
          title="Made of Chicago"
          url="/moc"
          description="concept to consumer"
          customClassName="m-4 invert"
        >
          <ApparelIcon height="100px" width="100px" />
        </Card>
      </div>
    </main>
  );
}
