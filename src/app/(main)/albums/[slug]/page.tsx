import SectionTitle from "@/components/SectionTitle";
import { getAlbum } from "@/sanity/lib/client";
import PhotoGrid from "@/components/PhotoGrid";

export default async function SpecificAlbum({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const album = await getAlbum(slug);

    return (
        <div>
            <section className="@container">
                <SectionTitle title={album?.title!} description={album?.description!} />
                <PhotoGrid photos={album.images!} />
            </section>
        </div>
    );
}
