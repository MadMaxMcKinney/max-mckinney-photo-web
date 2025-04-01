import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "studio.photos.max",
    description: "Max McKinney's photography - automotive, architecture, liminal.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>{children}</body>
            <Analytics />
        </html>
    );
}
