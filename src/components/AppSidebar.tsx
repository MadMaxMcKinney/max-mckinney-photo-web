import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ArrowUpRight, Boxes, Building, Car, DiscAlbum, Image, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const SidebarLinks = [
    {
        category: "Photos",
        links: [
            {
                title: "All photos",
                href: "/photos",
                icon: Image,
            },
            {
                title: "All albums",
                href: "/albums",
                icon: DiscAlbum,
            },
            {
                title: "Favorites",
                href: "/photos/favorites",
                icon: Star,
            },
        ],
    },
    {
        category: "Genres",
        links: [
            {
                title: "Automotive",
                href: "/genre/automotive",
                icon: Car,
            },
            {
                title: "Architecture",
                href: "/genre/architecture",
                icon: Building,
            },
            {
                title: "Liminal",
                href: "/genre/liminal",
                icon: Boxes,
            },
        ],
    },
];

export function AppSidebar() {
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
                                        <SidebarMenuButton asChild>
                                            <Link href={link.href}>
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
