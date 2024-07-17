export default function LincolnPark() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 pb-56">
      <div className="mb-32 grid items-center text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1
          className="p-4 m-2 rounded text-center dark:text-black font-bold text-overflow-ellipsis overflow-hidden line-clamp-2">
          Lincoln Park Conservatory
        </h1>

        <p className="text-xl my-6 max-w-md m-auto text-center">
          Lincoln Park Conservatory, built between 1890 and 1895, is America{`'`}s only public Victorian-style greenhouse. <br />
          During a pivotal period in Chicago{`'`}s history, the Lincoln Park Conservatory emerged from the ashes of a swamp and a cemetery,
          once a breeding ground for diseases like cholera, to become a beacon of health and beauty.
        </p>

        <div className={`h-80 md:h-96 rounded-md relative bg-contain bg-no-repeat bg-center
          bg-[url("https://live.staticflickr.com/65535/53863196190_faa7d80208_w.jpg")]
          flex flex-col-reverse
          `}
        />

        <div className="flex justify-center my-2">
          <a
            data-flickr-embed="true"
            href="https://www.flickr.com/photos/200915664@N03/53861035527/in/dateposted-public/"
            title="Arnab"
          >
            <img
              src="https://live.staticflickr.com/31337/53861035527_5204b8d1f8_w.jpg"
              alt="Arnab at Lincoln Park Conservatory"
              width={400}
              height={400}
            />
          </a>
        </div>

        <p className="text-xl my-6 max-w-md m-auto p-4">
          Designed by architects Joseph Lyman Silsbee and M.E. Bell, the Conservatory was referred to as a
          {` '`}Paradise under glass.{`'`} It supported {`'`}a luxuriant tropical growth, blending the whole into a natural grouping of Nature{`'`}s
          loveliest forms.{`'`} A lot of changes have taken place at the Conservatory since its beginnings, such as limestone being
          added across the perimeter. But some things have remained the same: the steam heating system, the old-fashioned ventilation
          systems, and the warmth it provides Chicagoans during its frigid winters.
        </p>

        <div className="flex overflow-x-auto scroll-smooth m-auto mt-6">
          <img className="object-cover h-full w-auto m-2 rounded-md" height={200} width={100} src="https://live.staticflickr.com/65535/53863030713_dbf928df2f_w.jpg" alt="plants of lincoln park conservatory example 1" />
          <img className="object-cover h-full w-auto m-2 rounded-md" height={250} width={100} src="https://live.staticflickr.com/65535/53863196170_155d515da9_w.jpg" alt="plants of lincoln park conservatory example 2" />
          <img className="object-cover h-full w-auto m-2 rounded-md" height={200} width={100} src="https://live.staticflickr.com/65535/53861882087_b4a61d234e_w.jpg" alt="plants of lincoln park conservatory example 3" />
          <img className="object-cover h-full w-auto m-2 rounded-md" height={200} width={100} src="https://live.staticflickr.com/65535/53863030718_6d9d6d9264_w.jpg" alt="plants of lincoln park conservatory example 4" />
          <img className="object-cover h-full w-auto m-2 rounded-md" height={200} width={100} src="https://live.staticflickr.com/65535/53861882117_8881de984c_w.jpg" alt="plants of lincoln park conservatory example 4.5" />
        </div>

        <div className="flex overflow-x-auto scroll-smooth m-auto my-6">
          <img className="object-cover h-full w-auto m-2 rounded-md" height={200} width={100} src="https://live.staticflickr.com/65535/53862785236_a53ca755ae_w.jpg" alt="plants of lincoln park conservatory example 5" />
          <img className="object-cover h-full w-auto m-2 rounded-md" height={400} width={100} src="https://live.staticflickr.com/65535/53861882032_f34ab37b34_w.jpg" alt="plants of lincoln park conservatory example 7" />
          <img className="object-cover h-full w-auto m-2 rounded-md" height={200} width={100} src="https://live.staticflickr.com/65535/53863144554_28d446360a_w.jpg" alt="plants of lincoln park conservatory example 8" />
          <img className="object-cover h-full w-auto m-2 rounded-md" height={200} width={100} src="https://live.staticflickr.com/65535/53861987602_6eaa22a6a7_w.jpg" alt="plants of lincoln park conservatory example 9" />
          <img className="object-cover h-full w-auto m-2 rounded-md" height={200} width={100} src="https://live.staticflickr.com/65535/53863249039_87b36f2194_w.jpg" alt="plants of lincoln park conservatory example 10" />
          {/* <img className="object-cover h-full w-auto m-2" height={200} width={100} src="" alt="plants of lincoln park conservatory example 11" /> */}
        </div>

        <h2 className="p-4 m-2 bg-white/80 rounded text-center dark:text-black font-bold text-overflow-ellipsis overflow-hidden">
          Plants can inspire people! Docents give an opportunity for visitors of all ages to look at nature more closely.
          Some see science, some math, and some design. There is history of Panama hats and cash crop trade, there is something for everyone
          and there are ideas for the future!
        </h2>


        <div className={`h-80 rounded-md relative bg-cover bg-center m-auto w-full md:h-96
          bg-[url('https://live.staticflickr.com/65535/53861882202_cc5a2c1db2_w.jpg')] my-6
          `}
        />

        {/* <img className="object-cover h-full w-auto m-2" height={600} width={100} src="" alt="plants of lincoln park conservatory example 6" /> */}

      </div>
      <div className={`h-80 rounded-md relative bg-cover bg-center m-auto w-full md:h-96
          bg-[url('https://live.staticflickr.com/65535/53862785116_c3e273321c_w.jpg')] my-6
          `}
      />

      <h3 className="p-4 m-2 bg-white/80 rounded text-center dark:text-black font-bold text-overflow-ellipsis overflow-hidden line-clamp-2">
        Thank you for visiting!
      </h3>
    </main>
  );
}
