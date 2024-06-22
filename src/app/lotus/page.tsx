import { Card } from "../components/card";
import Link from "next/link";
import { PaintIcon, GreetingCardIcon, ApparelIcon, LotusIcon } from "../components/icons";
import { lotus_pink as pink, cardWrapperStyle } from "../utility/stylevariables";

export default function Lotus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left pb-60">
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

        <Link
          href="https://lotusmahal.com/collections/watercolor-cards"
          className={`m-4 shadow-pink-800 shadow-md bg-cover h-96 rounded relative
            bg-[url('https://live.staticflickr.com/65535/53807737642_cbaee14e20_w.jpg')] 
            hover:drop-shadow-lg hover:duration-300 hover:scale-105 hover:duration-300
            `}
        >
          <div className="p-4 m-2 bg-white/40 rounded absolute bottom-0">
            <h2 className="font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">Greeting Cards by Lotus Mahal</h2>
            <h3 className="text-overflow-ellipsis overflow-hidden line-clamp-3 text-xs">Watercolor greeting cards printed onto high quality paper in variety of price points and designs.</h3>
          </div>
        </Link>

        <Link
          href="https://lotusmahal.com/collections/moon-river"
          className={`m-4 shadow-blue-800 shadow-md bg-contain bg-no-repeat h-96 rounded relative bg-white
            bg-[url('https://live.staticflickr.com/65535/53807873807_014bfe7fc8_w.jpg')] 
            hover:drop-shadow-lg hover:duration-300 hover:scale-105 hover:duration-300
            `}
        >
          <div className="p-4 m-2 bg-white/40 rounded absolute bottom-0">
            <h2 className="font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">Handmade Watercolor Candles</h2>
            <h3 className="text-overflow-ellipsis overflow-hidden line-clamp-3 text-xs">Watercolors printed handpoured, all in the Made in USA.</h3>
          </div>
        </Link>


        <Link
          href="/moc"
          className={`m-4 shadow-red-800 shadow-md bg-contain bg-no-repeat h-96 rounded relative bg-white
            bg-[url('https://live.staticflickr.com/65535/53809112039_8d183992a8_w.jpg')] 
            hover:drop-shadow-lg hover:scale-105 hover:duration-300
            `}
        >
          <div className="p-4 m-2 bg-white/40 rounded absolute bottom-0">
            <h2 className="font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">Made of Chicago</h2>
            <h3 className="text-overflow-ellipsis overflow-hidden line-clamp-3 text-xs">A interactive activewear company available on interactive vending machines at your hotel and building gyms!</h3>
          </div>
        </Link>


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
    </main>
  );
}
