import { getRecentAlbums, getRecentPhotos } from "@/sanity/lib/client";
import SectionTitle from "@/components/SectionTitle";
import PreviewPhotoGrid from "@/components/PreviewPhotoGrid";
import AlbumGrid from "@/components/AlbumGrid";

export default async function Home() {
    const recentPhotos = await getRecentPhotos(6);
    const recentAlbums = await getRecentAlbums(4);

    return (
        <div>
            <section>
                <SectionTitle title="Recent photos" description="Not grouped, just fresh." />
                {/* <ScrollingPhotoList photos={recentPhotos} /> */}
                <PreviewPhotoGrid photos={recentPhotos} />
            </section>
            <section className="mt-24">
                <SectionTitle title="Recent albums" description="Dive into something specific." />
                <AlbumGrid albums={recentAlbums} />
            </section>
        </div>
    );
}
