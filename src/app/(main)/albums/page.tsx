import SectionTitle from "@/components/SectionTitle";
import GalleryImage from "@/components/GalleryImage";
import AlbumCard from "@/components/AlbumCard";
import { getAllAlbums } from "@/sanity/lib/client";

export default async function Albums() {
    const allAlbums = await getAllAlbums();

    return (
        <div>
            <section className="@container">
                <SectionTitle title="All albums" description={`Feel like a bit of organization, but not too much? Here's all my albums.`} />
                <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3 @7xl:grid-cols-4">
                    {allAlbums.map((album, i) => (
                        <AlbumCard album={album} key={i} />
                    ))}
                </div>
            </section>
        </div>
    );
}
