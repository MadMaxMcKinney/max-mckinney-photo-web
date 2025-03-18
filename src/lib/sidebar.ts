import { Boxes, Building, Car, DiscAlbum, Star, Image } from "lucide-react";

type SidebarLink = {
    title: string;
    slug: string;
    icon: React.ElementType;
};

type SidebarGroup = {
    category: string;
    links: SidebarLink[];
};

export const SidebarLinks: SidebarGroup[] = [
    {
        category: "Photos",
        links: [
            {
                title: "All photos",
                slug: "/photos",
                icon: Image,
            },
            {
                title: "All albums",
                slug: "/albums",
                icon: DiscAlbum,
            },
            {
                title: "Max's picks",
                slug: "/photos/favorites",
                icon: Star,
            },
        ],
    },
    {
        category: "Genres",
        links: [
            {
                title: "Automotive",
                slug: "/genres/automotive",
                icon: Car,
            },
            {
                title: "Liminal",
                slug: "/genres/liminal",
                icon: Boxes,
            },
            {
                title: "Urban",
                slug: "/genres/urban",
                icon: Building,
            },
        ],
    },
];
