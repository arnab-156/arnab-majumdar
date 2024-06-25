import Image from "next/image";
import { Card } from "../components/card"
import { ApparelIcon } from "../components/icons";
import { Tile } from "../components/tile";

export default function MoC() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center justify-items-center md:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 md:text-left pb-60 px-6">
        <h1 className="text-3xl font-bold text-center mt-8 mb-16">Made of Chicago</h1>
        <p className="text-xl font-bold text-center mt-8">
          Made of ChicagoⓇ is a Chicago based fashion active wear brand primarily selling on custom designed compact vending machines!
        </p>

        <Tile
          title={"Custom Built Vending Machines"}
          href={"#"}
          url={`bg-[url('https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg')]`}
          subTitle={"Level up your workout with our custom activewear vending machines perfect for gyms, hotels and apartments!"}
          shadowColor="shadow-red-200 justify-self-center"
        />

        <Tile
          title={"Men's 4-way Quick Dry T Shirt"}
          href={"#"}
          url={`bg-[url('https://live.staticflickr.com/65535/53816126269_15992d8d81_w.jpg')]`}
          subTitle={"Level up your workout with 4 way stretch fit high quality apparel."}
          shadowColor="shadow-red-200"
          customClassName="bg-pink-800"
        />

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
