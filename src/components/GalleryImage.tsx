"use client";

import { twMerge } from "tailwind-merge";
import useColorThief, { ColorThiefColor } from "use-color-thief";
import Zoom from "react-medium-image-zoom";
import { urlFor } from "@/sanity/lib/image";
import { Palette } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

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
    const { color, palette } = useColorThief(galleryImage, {
        colorCount: 5,
        format: "hex",
    });

    function getColors() {
        console.log(palette);
    }

    return (
        <button className="bg-primary text-accent relative flex h-[36px] w-[36px] items-center justify-center rounded-full opacity-100 transition-all duration-300 starting:opacity-0" onClick={getColors}>
            {palette.length > 0 && (
                <svg width="36" height="36" viewBox="0 0 36 36" className="scale-90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="18" cy="10.5" rx="6" ry="5.5" fill={palette[0] as string} className="opacity-100 transition-all starting:opacity-0" />
                    <circle cx="24.5" cy="17.5" r="5.5" fill={palette[1] as string} className="opacity-100 transition-all delay-75 starting:opacity-0" />
                    <circle cx="22.5" cy="24.5" r="5.5" fill={palette[2] as string} className="opacity-100 transition-all delay-150 starting:opacity-0" />
                    <circle cx="13.5" cy="24.5" r="5.5" fill={palette[3] as string} className="opacity-100 transition-all delay-200 starting:opacity-0" />
                    <circle cx="11.5" cy="17.5" r="5.5" fill={palette[4] as string} className="opacity-100 transition-all delay-250 starting:opacity-0" />
                </svg>
            )}
        </button>
    );
}
