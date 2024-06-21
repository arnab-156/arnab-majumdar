"use client"
// import { TriviaProvider } from "../../provider/TriviaProvider";

export default function TriviaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* <TriviaProvider> */}
            {children}
            {/* </TriviaProvider> */}
        </section>
    )
}