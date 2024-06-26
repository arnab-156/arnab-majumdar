import Image from "next/image";
import { Card } from "../components/card"
import { ApparelIcon } from "../components/icons";
import { cardWrapperStyle } from "../utility/stylevariables";
import { Tile } from "../components/tile";

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

        <Tile
          title="Interactive Vending Machines"
          subTitle="Custom made actiivewear in a custom vending machine, fits in any gym in a hotel or apartments."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53808934296_8330a5b182_w.jpg')] `}
          customClassName={cardWrapperStyle}
        />

        <Tile
          title="4-Way Quick Dry Activewear"
          subTitle="Elevated activwear inspired by Hancock Center. 4 way stretch and quick drying that is fitted for intense workouts."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53816126269_15992d8d81_w.jpg')] `}
          customClassName={cardWrapperStyle}
        />

        <Tile
          title="Purpleline 4-way stretch Activewear"
          subTitle="Inspired by the cloud gate of Chicago popularly known as Chicago Bean."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53816264031_61f89a98c0_w.jpg')] `}
          customClassName={cardWrapperStyle}
          imageContain
          imagePosition="bg-bottom"
        />

        <Tile
          title="Activewear sports bra and tights"
          subTitle="Best premium fit with premium quick drying and 4-way stretch fabric."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53815369512_6fe978ab35_w.jpg')] `}
          customClassName={cardWrapperStyle}
        />

        <Tile
          title="Chicago Pride Socks"
          subTitle="The best socks that you will need! Long lasting and chicago branded."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53816626939_a6bd893e6a_w.jpg')] `}
          customClassName={cardWrapperStyle}
          imageContain
        />

        <Tile
          title="Chi-Tee Performance T Shirt"
          subTitle="Activewear for the best workout and best fit! Inspired by Hancock Center."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53816534313_767f635e73_w.jpg')] `}
          customClassName={cardWrapperStyle}
        />

        <Tile
          title="Harness Strap Active Tank Top"
          subTitle="Best Chest day workout gear you need!. Quick drying and 4-way stretch fabric."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53816626934_09997b92c9_w.jpg')] `}
          customClassName={cardWrapperStyle}
          imageContain
          imagePosition="bg-center"
        />

        <div className={cardWrapperStyle}>
          <Card
            title="More information to come!"
            url="#"
            description="Contact me for more information about Concept to Consumer!"
          >
            <ApparelIcon height="100px" width="100px" />
          </Card>
        </div>

      </div>
    </main>
  );
}
