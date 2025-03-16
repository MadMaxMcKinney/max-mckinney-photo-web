import SectionTitle from "@/components/SectionTitle";
import GalleryImage from "@/components/GalleryImage";
import { getAlbum } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Key } from "react";

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const album = await getAlbum(slug);

    return (
        <div>
            <section className="@container">
                <SectionTitle title={album?.title} description={album?.description} />
                <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-5">
                    {album.images?.map((photo: SanityImageSource, i: Key | null | undefined) => (
                        <div className="aspect-square relative" key={i}>
                            <GalleryImage src={urlFor(photo).width(800).url() || ""} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
