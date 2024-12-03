import Image from "next/image";
import { cardWrapperStyle } from "../utility/stylevariables";
import { Tile } from "../components/tile";

export default function MoC() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className={`mb-6 grid text-center 
        md:grid-cols-2 
        lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left
        `}>
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

        <div className={cardWrapperStyle}>
          <div className={`h-80 md:h-96 rounded-md relative bg-contain bg-no-repeat bg-center
          bg-[url("https://live.staticflickr.com/65535/53864021925_4c5120d354_w.jpg")]
          flex flex-col-reverse
          `}
          />
        </div>


        <Tile
          title="4-Way Quick Dry Activewear"
          subTitle="Elevated activwear inspired by Hancock Center. 4 way stretch and quick drying that is fitted for intense workouts."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53816126269_15992d8d81_w.jpg')] `}
          customClassName={cardWrapperStyle}
        />

        <Tile
          title="Activewear sports bra and tights"
          subTitle="Best premium fit with premium quick drying and 4-way stretch fabric."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53815369512_6fe978ab35_w.jpg')] `}
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
          title="Purpleline 4-way stretch Activewear"
          subTitle="Inspired by the cloud gate of Chicago popularly known as Chicago Bean."
          href=""
          url={`bg-[url('https://live.staticflickr.com/65535/53816264031_61f89a98c0_w.jpg')] `}
          customClassName={cardWrapperStyle}
          imageContain
          imagePosition="bg-bottom"
        />

        <div className={cardWrapperStyle}>
          <div className={`h-80 md:h-96 rounded-md relative bg-contain bg-no-repeat bg-center
          bg-[url("https://live.staticflickr.com/65535/53863824588_b419bfdd1e_w.jpg")]
          flex flex-col-reverse
          `}
          />
        </div>
      </div>

      <div className={"m-4"}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yiQIL2m9MC4?si=y65L-B1WRFMV76rg&amp;controls=0"
          title="youtube made of chicago video" allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-md w-screen md:w-[560px] mb-32"
        ></iframe>
      </div>

      <div className={`mb-6 grid text-center 
        md:grid-cols-2 
        lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left
        `}>

      </div>
    </main>
  );
}
