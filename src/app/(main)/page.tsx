import { getRecentAlbums, getRecentFavoritePhotos, getRecentPhotos } from "@/sanity/lib/client";
import SectionTitle from "@/components/SectionTitle";
import PreviewPhotoGrid from "@/components/PreviewPhotoGrid";
import AlbumGrid from "@/components/AlbumGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AlbumCard from "@/components/AlbumCard";

export default async function Home() {
    const recentPhotos = await getRecentPhotos(6);
    const recentAlbums = await getRecentAlbums(3);
    const recentFavoritePhotos = await getRecentFavoritePhotos(6);

    return (
        <div>
            <section>
                <SectionTitle
                    title="Recent photos"
                    description="Not grouped, just fresh."
                    action={
                        <Button variant={"outline"} asChild>
                            <Link href={"/photos"}>All photos</Link>
                        </Button>
                    }
                />
                <PreviewPhotoGrid photos={recentPhotos} />
            </section>
            <section className="mt-24">
                <SectionTitle
                    title="Recent albums"
                    description="Dive into something specific."
                    action={
                        <Button variant={"outline"} asChild>
                            <Link href={"/albums"}>All albums</Link>
                        </Button>
                    }
                />
                <div className="@container">
                    <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3">
                        {recentAlbums.map((album, i) => (
                            <AlbumCard album={album} key={i} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="mt-24">
                <SectionTitle
                    title="Recent Max's picks"
                    description="Some of my favorites."
                    action={
                        <Button variant={"outline"} asChild>
                            <Link href={"/photos/favorites"}>All favorites</Link>
                        </Button>
                    }
                />
                <PreviewPhotoGrid photos={recentFavoritePhotos} />
            </section>
        </div>
    );
}
