import SectionTitle from "@/components/SectionTitle";
import { getAlbum } from "@/sanity/lib/client";
import PhotoGrid from "@/components/PhotoGrid";

export default async function SpecificAlbum({ params }: { params: Promise<{ albumSlug: string }> }) {
    const { albumSlug } = await params;
    const album = await getAlbum(albumSlug);

    return (
        <div>
            <section>
                <SectionTitle title={album?.title!} description={album?.description!} />
                <PhotoGrid photos={album.images!} />
            </section>
        </div>
    );
}
