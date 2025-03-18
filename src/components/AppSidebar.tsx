"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SidebarLinks } from "@/lib/sidebar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function AppSidebar() {
    const { setOpenMobile } = useSidebar();
    const pathname = usePathname();

    function handleLinkClick() {
        setOpenMobile(false);
    }

    function isNavActive(slug: string) {
        if (pathname.toLowerCase() === slug.toLowerCase()) {
            return true;
        }
        return false;
    }

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader></SidebarHeader>
            <SidebarContent>
                {SidebarLinks.map((group, i) => (
                    <SidebarGroup key={i}>
                        {/* Group title */}
                        <SidebarGroupLabel>{group.category}</SidebarGroupLabel>
                        {/* Group content */}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.links.map((link, j) => (
                                    <SidebarMenuItem key={j}>
                                        <SidebarMenuButton asChild onClick={handleLinkClick} isActive={isNavActive(link.slug)}>
                                            <Link href={link.slug}>
                                                <link.icon /> {link.title}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter className="pb-3 pb-4 group-data-[collapsible=icon]:hidden">
                <p className="text-accent-foreground/40 w-full text-center text-sm">@madmaxmckinney</p>
                <Button variant={"secondary"} className="w-full" asChild>
                    <a href="https://maxmckinney.com" target="_blank" rel="noopener noreferrer">
                        Check out my design work
                        <ArrowUpRight />
                    </a>
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
}
