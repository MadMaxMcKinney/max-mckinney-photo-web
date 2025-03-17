import { getRecentAlbums, getRecentPhotos } from "@/sanity/lib/client";
import SectionTitle from "@/components/SectionTitle";
import PreviewPhotoGrid from "@/components/PreviewPhotoGrid";
import AlbumGrid from "@/components/AlbumGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
    const recentPhotos = await getRecentPhotos(6);
    const recentAlbums = await getRecentAlbums(4);

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
                {/* <ScrollingPhotoList photos={recentPhotos} /> */}
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
                <AlbumGrid albums={recentAlbums} />
            </section>
        </div>
    );
}
