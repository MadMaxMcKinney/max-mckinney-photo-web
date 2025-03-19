import type { Metadata } from "next";
import "@/app/globals.css";
import Image from "next/image";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Max McKinney Photos",
    description: "My photos — not on social media, but still on the internet.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
            <body className={`flex antialiased`}>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset className="mb-8 min-w-1">
                        {/* Header bar */}
                        <div className="grid grid-flow-col items-center justify-start gap-3 border-b border-[var(--sidebar-border)] p-6">
                            <SidebarTrigger />
                            <Link href="/" className="transition-opacity hover:opacity-70">
                                <Image src="/photos.max.svg" alt="Photos.Max logo" height={200} width={300} className="max-w-[120px]" />
                            </Link>
                        </div>
                        {/* Page content */}
                        <Breadcrumbs />
                        <div className="mt-4 p-6">{children}</div>
                    </SidebarInset>
                </SidebarProvider>
                <Toaster />
            </body>
        </html>
    );
}
