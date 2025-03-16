"use client";

import { useEffect, useRef, useState } from "react";
import GalleryImage from "./GalleryImage";
import { Button } from "./ui/button";
import { Image } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function ScrollingPhotoList({ photos }: { photos: any[] }) {
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    function handleScroll(e: Event) {
        const target = e.target as HTMLDivElement;
        setCanScrollLeft(target.scrollLeft > 0);
    }

    useEffect(() => {
        scrollAreaRef.current?.addEventListener("scroll", handleScroll);
    });

    return (
        <div className="relative">
            {/* Left scroll indicator */}
            <ScrollIndicatorOverlay direction="left" visible={canScrollLeft} />

            {/* Content */}
            <div className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth" ref={scrollAreaRef}>
                {photos.map((photo, i) => (
                    <div className="relative h-[400px] snap-center" key={i}>
                        <GalleryImage className="w-auto max-w-none" src={urlFor(photo).width(800).url() || ""} />
                    </div>
                ))}
                <div className="grid min-w-[300px] snap-center place-items-center">
                    <Button asChild>
                        <Link href="/photos">
                            View all photos <Image />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Right scroll indicator */}
            <ScrollIndicatorOverlay direction="right" visible={true} />
        </div>
    );
}

function ScrollIndicatorOverlay({ direction, visible }: { direction: "left" | "right"; visible: boolean }) {
    return <div className={`pointer-events-none absolute top-0 bottom-0 ${direction === "left" ? "left-0 bg-linear-to-r" : "right-0 bg-linear-to-l"} z-10 w-24 from-black to-black/0 ${visible ? "opacity-70" : "opacity-0"} transition-opacity duration-300`}></div>;
}
