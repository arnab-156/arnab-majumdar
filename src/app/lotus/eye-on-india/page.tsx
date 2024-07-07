import Image from "next/image";

export default function EyeOnIndia() {
  return (
    <main className="flex min-h-screen flex-col pt-6 pb-56">
      <h1 className="p-4 m-2 bg-white/80 rounded text-center dark:text-black font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">Eye on India - Saree Project</h1>

      <div className={`h-96 rounded relative bg-contain bg-no-repeat bg-center
          bg-[url('https://live.staticflickr.com/65535/53841418931_301432a964_w.jpg')]
          flex flex-col-reverse rounded
          `}
      >
      </div>

      <p className="text-xl font-bold text-center my-6 max-w-md m-auto">
        Saree project was conceptualized to bring education about Indian fashion and sustainability. This concept combines experiential learning,
        and sustanalibility. Reuse of old donated sarees of various materials were collected and distributed among select group of students in a faculty guided
        classroom project. Students incorporated Zero-waste theory and repurposed the old sarees to create wonders and ideas that are American and Indian.
      </p>

      <div className="flex overflow-x-auto scroll-smooth m-auto">
        <img className="object-cover h-full w-auto" height={400} width={100} src="https://live.staticflickr.com/65535/53841836415_df642b7100_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53841745874_5fb9279b60_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53841745864_94303ea498_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53840630757_09779a76bd_w.jpg" alt="" />
      </div>

      <p className="text-xl font-bold text-center my-6 max-w-md m-auto">
        An immediate Festival favorite, the Sari Project took off with Columbia College{"'"}s fashion
        faculty and students driving the project towards taking a traditional piece of fabric, the sari, and turning it into a
        modern garment. As you can imagine, this is was a sizable undertaking that took a level of coordination and fresh
        ideas that was heavily facilitated by Arnab Majumdar who has been with the project since the beginning.

        <img className="object-cover h-full w-auto m-auto rounded-md mb-4"
          height={400} width={300}
          src="https://live.staticflickr.com/65535/53841525101_2742109ce3_w.jpg"
          alt="" />

      </p>


      <h2 className="p-4 m-2 bg-white/80 rounded text-center dark:text-black font-bold text-overflow-ellipsis overflow-hidden line-clamp-2">
        Sears/Willis Tower Exhibit - Chicago
      </h2>

      <div className="flex overflow-x-auto scroll-smooth m-auto">
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53841854630_e40d61b56e_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={400} width={100} src="https://live.staticflickr.com/65535/53841445021_b579c70e3e_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53840550557_e1d41556a9_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53839425086_c36fa84f70_w.jpg" alt="" />
      </div>

      <p className="text-xl font-bold text-center my-6 max-w-md m-auto">
        The Sari Project has cemented itself as an Eye on India Festival must see. The undeniable combination of design,
        fashion, and education that has endless potential.
        <br />
        Thanks to all the faculty participants Liz Williams, Beata Kania, Michael Olszewski, and Beth Shorrock as well as Eye on India Foundation for the
        opportunity. Most importantly thank you to all the studuents who participated, learned about India and showcased their amazing creativity.

        <img className="object-cover h-full w-auto m-auto mb-4 rounded"
          height={400} width={300}
          src="https://live.staticflickr.com/65535/53841877519_f0d9d2d6c4_w.jpg" alt=""
        />
      </p>

      <h2 className="p-4 m-2 bg-white/80 rounded text-center dark:text-black font-bold text-overflow-ellipsis overflow-hidden line-clamp-2">
        Classroom Experiencial Learning: Bridging cultural barriers
      </h2>

      <div className="flex overflow-x-auto scroll-smooth m-auto mt-10">
        <img className="object-cover h-full w-auto" height={400} width={100} src="https://live.staticflickr.com/65535/53841763894_ec9e57887b_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53840550542_d86349f7b5_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53841798994_a4d3c8bcd9_w.jpg" alt="" />
        <img className="object-cover h-full w-auto" height={200} width={100} src="https://live.staticflickr.com/65535/53841773419_1a74e6a45c_w.jpg" alt="" />
      </div>

      <div className="flex flex-col m-auto">
        <img className="object-cover h-full w-full my-6 rounded" height={400} width={600} src="https://live.staticflickr.com/65535/53841877549_d4a22556d4_w.jpg" alt="" />
      </div>


      <h3 className="p-4 m-2 bg-white/80 rounded text-center dark:text-black font-bold text-overflow-ellipsis overflow-hidden line-clamp-2">
        Thank you for visiting!
      </h3>
    </main>
  );
}
