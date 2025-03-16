import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getRecentAlbums, getRecentPhotos } from "@/sanity/lib/client";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import GalleryImage from "@/components/GalleryImage";
import AlbumCard from "@/components/AlbumCard";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
    const recentPhotos: any[] = await getRecentPhotos(10);
    const recentAlbums: any[] = await getRecentAlbums(4);

    return (
        <div>
            <section>
                <SectionTitle title="Recent photos" description="Not grouped, just fresh." />
                <ScrollArea>
                    <div className="flex gap-4">
                        {recentPhotos.map((photo, i) => (
                            <div className="h-[400px] relative" key={i}>
                                <GalleryImage className="w-auto max-w-none" src={urlFor(photo).width(800).url() || ""} />
                            </div>
                        ))}
                        <div className="grid place-items-center min-w-[300px]">
                            <Button asChild>
                                <Link href="/photos">
                                    View all photos <Image />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </section>
            <section className="mt-24 @container">
                <SectionTitle title="Recent albums" description="Dive into something specific." />
                <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3 @7xl:grid-cols-4">
                    {recentAlbums.map((album, i) => (
                        <AlbumCard album={album} key={i} />
                    ))}
                </div>
            </section>
        </div>
    );
}
