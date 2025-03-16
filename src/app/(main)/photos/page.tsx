import SectionTitle from "@/components/SectionTitle";
import GalleryImage from "@/components/GalleryImage";
import { getAllPhotos } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
    const allPhotos: any[] = await getAllPhotos();

    return (
        <div>
            <section className="@container">
                <SectionTitle title="All photos" description={`Every photo I've uploaded, all ${allPhotos.length} of them.`} />
                <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-5">
                    {allPhotos.map((photo, i) => (
                        <div className="aspect-square relative" key={i}>
                            <GalleryImage src={urlFor(photo).width(800).url() || ""} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
