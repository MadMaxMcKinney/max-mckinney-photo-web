"use client";

import { twMerge } from "tailwind-merge";
import useColorThief, { ColorThiefColor } from "use-color-thief";
import Zoom from "react-medium-image-zoom";
import { urlFor } from "@/sanity/lib/image";
import { Palette, Check } from "lucide-react";
import { useRef, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { toast } from "sonner";

export default function GalleryImage({ photo, className }: { photo: any; className?: string }) {
    const photoSrc = urlFor(photo).width(1800).url() || "";

    return (
        <Zoom
            wrapElement="span"
            zoomMargin={16}
            zoomImg={{ src: photoSrc }}
            ZoomContent={(data) => {
                return (
                    <>
                        {data.img}
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                            {data.modalState == "LOADING" || (data.modalState == "LOADED" && <ImageActionPaletteButton galleryImage={photoSrc} />)}
                            {data.buttonUnzoom}
                        </div>
                    </>
                );
            }}
        >
            <img className={twMerge(["h-full w-full rounded object-cover transition-all hover:cursor-zoom-in hover:brightness-115", className])} src={urlFor(photo).width(800).url() || ""} loading="lazy" />
        </Zoom>
    );
}

function ImageActionPaletteButton({ galleryImage }: { galleryImage: string }) {
    const { palette } = useColorThief(galleryImage, {
        colorCount: 5,
        format: "hex",
    });

    const menuRef = useRef<HTMLDivElement>(null);
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    function copyColor(color: string) {
        navigator.clipboard.writeText(color);
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 1000);
    }

    return (
        <div ref={menuRef}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="z-10">
                    <button className="bg-primary text-accent hover:bg-primary/50 relative flex h-[36px] w-[36px] items-center justify-center rounded-full transition-all duration-300 hover:cursor-pointer starting:opacity-0">
                        {copiedColor ? (
                            <Check className="h-5 w-5 transition-all starting:scale-50 starting:opacity-0" />
                        ) : (
                            palette.length > 0 && (
                                <svg width="36" height="36" viewBox="0 0 36 36" className="scale-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="18" cy="10.5" rx="6" ry="5.5" fill={palette[0] as string} className="transition-all starting:opacity-0" />
                                    <circle cx="24.5" cy="17.5" r="5.5" fill={palette[1] as string} className="transition-all delay-75 starting:opacity-0" />
                                    <circle cx="22.5" cy="24.5" r="5.5" fill={palette[2] as string} className="transition-all delay-150 starting:opacity-0" />
                                    <circle cx="13.5" cy="24.5" r="5.5" fill={palette[3] as string} className="transition-all delay-200 starting:opacity-0" />
                                    <circle cx="11.5" cy="17.5" r="5.5" fill={palette[4] as string} className="transition-all delay-250 starting:opacity-0" />
                                </svg>
                            )
                        )}
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent container={menuRef.current}>
                    <DropdownMenuLabel>Dominant colors</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {palette.map((color, i) => (
                        <DropdownMenuItem key={i} onClick={() => copyColor(color as string)}>
                            <span className="border-border h-4 w-4 rounded-full border" style={{ backgroundColor: color as string }} />
                            {color}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
