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
    const [canScrollRight, setCanScrollRight] = useState(false);

    function handleScroll(e: Event) {
        const target = e.target as HTMLDivElement;
        setCanScrollLeft(target.scrollLeft > 0);
        setCanScrollRight(target.scrollLeft < target.scrollWidth - target.clientWidth - 200);
    }

    useEffect(() => {
        scrollAreaRef.current?.addEventListener("scroll", handleScroll);
    });

    return (
        <div className="relative">
            {/* Left scroll indicator */}
            <ScrollIndicatorOverlay direction="left" visible={canScrollLeft} />

            {/* Content */}
            <div className="@container relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth" ref={scrollAreaRef}>
                {photos.map((photo, i) => (
                    <div className="relative h-[200px] snap-center @lg:h-[300px] @xl:h-[400px]" key={i}>
                        <GalleryImage className="w-auto max-w-none" src={urlFor(photo).width(800).url() || ""} />
                    </div>
                ))}
                <div className="grid snap-center place-items-center pr-12 pl-8">
                    <Button asChild variant={"secondary"}>
                        <Link href="/photos">
                            View all photos <Image />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Right scroll indicator */}
            <ScrollIndicatorOverlay direction="right" visible={canScrollRight} />
        </div>
    );
}

function ScrollIndicatorOverlay({ direction, visible }: { direction: "left" | "right"; visible: boolean }) {
    return <div className={`pointer-events-none absolute top-0 bottom-0 ${direction === "left" ? "left-0 bg-linear-to-r" : "right-0 bg-linear-to-l"} z-10 w-12 from-black to-black/0 md:w-24 ${visible ? "opacity-70" : "opacity-0"} transition-opacity duration-300`}></div>;
}
