import SectionTitle from "@/components/SectionTitle";
import GalleryImage from "@/components/GalleryImage";
import { getAllPhotos } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import PhotoGrid from "@/components/PhotoGrid";

export default async function Home() {
    const allPhotos: any[] = await getAllPhotos();

    return (
        <div>
            <section className="@container">
                <SectionTitle title="All photos" description={`Every photo I've uploaded, all ${allPhotos.length} of them.`} />
                <PhotoGrid photos={allPhotos} />
            </section>
        </div>
    );
}
