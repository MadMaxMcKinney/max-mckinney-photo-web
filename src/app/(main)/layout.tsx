import type { Metadata } from "next";
import "@/app/globals.css";
import Image from "next/image";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Max McKinney Photos",
    description: "Max McKinney's photography - automotive, architecture, liminal.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
            <body className={`antialiased flex`}>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset className="min-w-1">
                        {/* Header bar */}
                        <div className="grid grid-flow-col gap-3 items-center p-6 border-b border-[var(--sidebar-border)] justify-start">
                            <SidebarTrigger />
                            <Link href="/" className="transition-opacity hover:opacity-70">
                                <Image src="/photos.max.svg" alt="Photos.Max logo" height={200} width={300} className="max-w-[120px]" />
                            </Link>
                        </div>
                        {/* Page content */}
                        <Breadcrumbs />
                        <div className="p-6 mt-4">{children}</div>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}
