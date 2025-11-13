import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from 'next/font/local';
import "./globals.css";
import { Navigation } from "../app/components/navigation";

const nyuPerstare = localFont({
    src: [
        {
            path: '../../public/fonts/nyu/NYUPerstare-Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/nyu/NYUPerstare-Regular.otf',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
    title: 'Arnab Majumdar',
    description: 'Portfolio page of technology, arts and design.',
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
            <body className={nyuPerstare.className}>
                <Navigation />
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    )
};
