import { getRecentAlbums, getRecentPhotos } from "@/sanity/lib/client";
import SectionTitle from "@/components/SectionTitle";
import AlbumCard from "@/components/AlbumCard";
import ScrollingPhotoList from "@/components/ScrollingPhotoList";

export default async function Home() {
    const recentPhotos: any[] = await getRecentPhotos(10);
    const recentAlbums: any[] = await getRecentAlbums(4);

    return (
        <div>
            <section>
                <SectionTitle title="Recent photos" description="Not grouped, just fresh." />
                <ScrollingPhotoList photos={recentPhotos} />
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
