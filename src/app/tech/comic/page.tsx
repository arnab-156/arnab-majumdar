'use client'
import { ComicProvider } from "@/app/provider/ComicProvider";
import { Comic } from "@/app/components/comic";

export default function ComicPage() {
  return (
    <main className="flex min-h-screen flex-col pt-8 rounded content-center justify-center m-0">
      <ComicProvider>
        <Comic />
      </ComicProvider>
    </main>
  );
}
