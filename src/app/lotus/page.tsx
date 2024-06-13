import Image from "next/image";

export default function Lotus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 ">
      <div className="mb-32 grid text-center lg:w-half lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <h1 className="text-3xl font-bold text-center mt-8">Lotus Mahal</h1>
        <div className="m-8 w-[300px] h-[300px] bg-gray-200 rounded p-4">something</div>
        <div className="m-8 w-[300px] h-[300px] bg-gray-200 rounded p-4">something</div>
        <div className="m-8 w-[300px] h-[300px] bg-gray-200 rounded p-4">something</div>
        <div className="m-8 w-[300px] h-[300px] bg-gray-200 rounded p-4">something</div>
        <div className="m-8 w-[300px] h-[300px] bg-gray-200 rounded p-4">something</div>
      </div>
    </main>
  );
}
