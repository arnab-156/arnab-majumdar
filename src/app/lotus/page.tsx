import Image from "next/image";
import { Card } from "../components/card"

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
        />

        <Card
          title="Potrait Paintings"
          url="#"
          imageUrl={urlImageDefault}
          description="more information to come."
          customClassName="invert"
        />

        <Card
          title="Made of Chicago"
          url="/moc"
          imageUrl={urlImageDefault}
          description="concept to consumer"
          customClassName="invert"
        />

      </div>
    </main>
  );
}
