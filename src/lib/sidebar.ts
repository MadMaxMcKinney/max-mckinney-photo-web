import { Boxes, Building, Car, DiscAlbum, Star, Image } from "lucide-react";

export const SidebarLinks = [
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
                title: "Max's picks",
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
                href: "/genres/automotive",
                icon: Car,
            },
            {
                title: "Architecture",
                href: "/genres/architecture",
                icon: Building,
            },
            {
                title: "Liminal",
                href: "/genres/liminal",
                icon: Boxes,
            },
        ],
    },
];
