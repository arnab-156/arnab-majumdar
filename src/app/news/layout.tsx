import { title } from "process";
import Image from "next/image";
import { Marquee } from "../components/marquee"

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const newsData = ["Massive Stampede in India kills scores..",
        "Nike stocks crashes post dismal quarter results.",
        "France election update: Macron center in peril round  1."];

    return (
        <section>
            <Marquee news={newsData} />
            {children}
        </section>
    )
}