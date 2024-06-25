'use client'
import { Suspense } from "react";
import { ComicProvider } from "@/app/provider/ComicProvider";
import { Comic } from "@/app/components/comic";

export default function ComicPage() {
  return (
    <main className="flex min-h-screen flex-col pt-8 rounded content-center justify-center m-0">
      <h1 className="text-xl font-bold text-center mt-8">Enjoy today{"'"}s Comic!</h1>
      <ComicProvider>
        <Suspense fallback={<div>Loading</div>}>

          <Comic />

        </Suspense>
      </ComicProvider>
    </main>
  );
}
