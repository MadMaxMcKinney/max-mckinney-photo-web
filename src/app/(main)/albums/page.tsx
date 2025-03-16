import SectionTitle from "@/components/SectionTitle";
import { getAllAlbums } from "@/sanity/lib/client";
import AlbumGrid from "@/components/AlbumGrid";

export default async function Albums() {
    const allAlbums = await getAllAlbums();

    return (
        <div>
            <section className="">
                <SectionTitle title="All albums" description={`Feel like a bit of organization, but not too much? Here's all my albums.`} />
                <AlbumGrid albums={allAlbums} />
            </section>
        </div>
    );
}
