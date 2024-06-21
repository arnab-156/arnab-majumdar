import Image from "next/image";
import { Card } from "../components/card"
import { ApparelIcon } from "../components/icons";

const urlImageDefault = "/headshot.gif"
const defaultUrl = ""

export default function MoC() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center mt-8 mb-16">Made of Chicago</h1>
        <p className="text-xl font-bold text-center mt-8">
          Made of ChicagoⓇ is a Chicago based fashion active wear brand primarily selling on custom designed compact vending machines!
        </p>
        <Card
          title="More information to come!"
          url="#"
          description="more information to come."
        >
          <ApparelIcon height="100px" width="100px" />
        </Card>

        <Card
          title="More information to come!"
          url="#"
          description="more information to come."
        >
          <ApparelIcon height="100px" width="100px" />
        </Card>
        <Card
          title="More information to come!"
          url="#"
          description="more information to come."
        >
          <ApparelIcon height="100px" width="100px" />
        </Card>
        <Card
          title="More information to come!"
          url="#"
          description="more information to come."
        >
          <ApparelIcon height="100px" width="100px" />
        </Card>

      </div>
    </main>
  );
}
