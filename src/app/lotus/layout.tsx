import Image from "next/image";
import Link from "next/link";

export default function LotusLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="bg-gradient-to-t from-pink-200 to-white">
            <div className="h-2 bg-gradient-to-r from-pink-200 via-white to-blue-200" />
            {children}
        </section>
    )
};
