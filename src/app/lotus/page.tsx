import Image from "next/image";
import { Card } from "../components/card"


const cardInformationList = [{
  title: "welcome",
  url: "#",
  urlText: "",
  description: "",
}]

const urlImageDefault = "/headshot.gif"

export default function Lotus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center mt-8 mb-16">Lotus Mahal</h1>
        <p>Boutique collections of rare and beautiful treasures, inexpensive but invaluable.</p>
        <Card
          title="More information to come!"
          url="#"
          imageUrl={urlImageDefault}
          description="more information to come."
        />

        <Card
          title="More information to come!"
          url="#"
          imageUrl={urlImageDefault}
          description="more information to come."
        />

        <Card
          title="More information to come!"
          url="#"
          imageUrl={urlImageDefault}
          description="more information to come."
        />

        <Card
          title="More information to come!"
          url="#"
          imageUrl={urlImageDefault}
          description="more information to come."
        />

      </div>
    </main>
  );
}
