import type { Metadata } from 'next';
import "./globals.css";
import { Navigation } from "../app/components/navigation";

export const metadata: Metadata = {
    title: 'Arnab Majumdar',
    description: 'Portfolio page of technology, arts and design.'
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <header>
                <script async src="//embedr.flickr.com/assets/client-code.js"></script>
            </header>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    )
};