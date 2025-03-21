import SectionTitle from "@/components/SectionTitle";
import { getAllPhotos } from "@/sanity/lib/client";
import PhotoGrid from "@/components/PhotoGrid";

export default async function Home() {
    const allPhotos = await getAllPhotos();

    return (
        <div>
            <section>
                <SectionTitle title="All photos" description={`Every photo I've uploaded, all ${allPhotos.length} of them.`} />
                <PhotoGrid photos={allPhotos} />
            </section>
        </div>
    );
}
