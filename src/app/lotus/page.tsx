import Image from "next/image";
import { Card } from "../components/card"
import { PaintIcon, GreetingCardIcon, ApparelIcon } from "../components/icons";

const urlImageDefault = "/headshot.gif"

export default function Lotus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center m-8 uppercase">Welcome to Lotus Mahal</h1>
        <p className="text-xl font-bold text-center m-8">
          Boutique collections of rare and beautiful treasures, inexpensive but invaluable.
        </p>
        <Card
          title="Go to Lotus Mahal!"
          url="https://www.lotusmahal.com"
          imageUrl={urlImageDefault}
          description="Click here to go to Lotus Mahal Homepage."
        />

        <Card
          title="Greeting Cards!"
          url="#"
          imageUrl={urlImageDefault}
          description="more information to come."
          customClassName="invert"
        >
          <GreetingCardIcon height="100px" width="100px" />
        </Card>

        <Card
          title="Potrait Paintings"
          url="#"
          description="more information to come."
          customClassName="invert"
        >
          <PaintIcon height="100px" width="100px" />
        </Card>

        <Card
          title="Made of Chicago"
          url="/moc"
          description="concept to consumer"
          customClassName="invert"
        >
          <ApparelIcon height="100px" width="100px" />
        </Card>
      </div>
    </main>
  );
}
