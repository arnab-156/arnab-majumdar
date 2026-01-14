import type { Metadata } from 'next';
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Navigation } from "../app/components/navigation";

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
        <html lang="en" className='font-nyu'>
            {/* <header>
                <script async src="//embedr.flickr.com/assets/client-code.js"></script>
            </header> */}
            <Head>
                <script async src="//embedr.flickr.com/assets/client-code.js"></script>
            </Head>
            <body>
                <Navigation />
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    )
};