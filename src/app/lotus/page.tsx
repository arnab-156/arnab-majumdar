import { Card } from "../components/card";
import { Tile } from "../components/tile";
import { ApparelIcon } from "../components/icons";
import { cardWrapperStyle } from "../utility/stylevariables";

export default function Lotus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left pb-60 px-6">
        <h1 className="text-3xl font-bold text-center m-8 uppercase text-pink-800">Welcome to Lotus Mahal</h1>
        <h2 className="text-xl font-bold text-center m-8 dark:invert">
          Boutique collections of rare and beautiful treasures, inexpensive but invaluable.
        </h2>
        <Card
          title="Go to Lotus Mahal!"
          url="https://lotusmahal.com/"
          description="Boutique collections of rare and beautiful treasures, inexpensive but invaluable. Click here!"
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
          href="/moc"
          title="Made of Chicago"
          subTitle="A interactive activewear company available on interactive vending machines at your hotel and building gyms!"
          url={`bg-[url('https://live.staticflickr.com/65535/53809112039_8d183992a8_w.jpg')] `}
          customClassName={cardWrapperStyle}
          imageContain
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
    </main>
  );
}
