import { Card } from "../components/card";
import { Tile } from "../components/tile";
import { ApparelIcon } from "../components/icons";
import { cardWrapperStyle, pinkBackgroundTheme, yellowBackgroundTheme } from "../utility/stylevariables";
import Link from "next/link";
import Image from "next/image";

export default function Lotus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pb-20">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left pb-60 px-6">
        <h1 className="text-3xl font-bold text-center m-8 uppercase text-pink-800">Art & Design</h1>
        <h2 className="text-xl font-bold text-center m-8 dark:invert">
          Welcome to the world of creativity and design.
        </h2>
        <Card
          title="Go to Lotus Mahal!"
          url="https://lotusmahal.com/"
          description="Lotus Mahal is dedicated to connecting people through the timeless art of letter writing in today's world."
          customClassName={`${cardWrapperStyle}`}
          imageUrl="https://live.staticflickr.com/65535/53819325384_d2b8af917f_w.jpg"
        />

        <Tile
          title="Greeting Cards by Lotus Mahal"
          subTitle="Watercolor greeting cards printed onto high quality paper in variety of price points and designs."
          href="https://lotusmahal.com/collections/watercolor-cards"
          url={`bg-[url('https://live.staticflickr.com/65535/53807737642_cbaee14e20_w.jpg')] `}
          customClassName={`${cardWrapperStyle}`}
        />

        <Tile
          title="Handmade Watercolor Candles."
          subTitle="Watercolors printed handpoured, all in the Made in USA."
          href="https://lotusmahal.com/collections/moon-river"
          url={`bg-[url('https://live.staticflickr.com/65535/53807873807_014bfe7fc8_w.jpg')] `}
          customClassName={cardWrapperStyle}
          imageContain
          shadowColor="shadow-blue-800"
        />

        <Tile
          title="Eye on India - The Saree Project"
          subTitle="Fashion + Education + Sustainability"
          href="/lotus/eye-on-india"
          url={`bg-[url('https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg')] `}
          customClassName={cardWrapperStyle}
          imageContain
          shadowColor="shadow-yellow-800"
        />


        <Tile
          title="Aster for Lotus Mahal"
          href="https://lotusmahal.com/products/aster-for-lotus"
          subTitle="Handcrafted collaboration between Lotus's and Aster Candles from Rhode Island. Highlighting the power of creativity and made in USA products."
          url={`bg-[url('https://live.staticflickr.com/65535/54185085183_b5cbf63871_w.jpg')] `}
          customClassName={cardWrapperStyle}
          shadowColor="shadow-yellow-800"
          openInNewTab
        />

        <Tile
          title="Moon Rivers del Rio Luna"
          href="https://lotusmahal.com/products/blood-and-envy-candles"
          subTitle="Handcrafted and subtle luxurious fragrance in Arkansas. Highlighting the power of creativity and made in USA products."
          url={`bg-[url('https://live.staticflickr.com/65535/54185085168_ba4fa7b38f_w.jpg')] `}
          shadowColor="shadow-pink-800"
          openInNewTab
        />

        <Tile
          title="Made of Chicago"
          href="/moc"
          subTitle="Chicago-inspired activewear brand available on interactive vending machines right at your hotel or building gyms!"
          url={`bg-[url('https://live.staticflickr.com/65535/53809112039_8d183992a8_w.jpg')] `}
          customClassName={cardWrapperStyle}
          imageContain
          shadowColor="shadow-red-800"
        />

        <Tile
          href="/lotus/samsung"
          title="AT&T Samsung Design Project"
          subTitle="Education: Incorporating technology in Design Process!"
          url={`bg-[url('https://live.staticflickr.com/65535/53851021701_6619ae0f97_w.jpg')] `}
          customClassName={cardWrapperStyle}
          shadowColor="shadow-blue-400"
        />


        <div className="m-8">
          <Card
            title="Coming soon: Fashion Business 101"
            url="#"
            description="Start your Fashion Business and all you need to know! Coming in 2025!"
            customClassName="invert"
          >
            <ApparelIcon height="100px" width="100px" />
          </Card>
        </div>
      </div>
      <Link href="#navigation" className='hover:underline'>go to top</Link>
    </main>
  );
}
