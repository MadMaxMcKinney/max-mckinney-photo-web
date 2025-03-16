import SectionTitle from "@/components/SectionTitle";
import GalleryImage from "@/components/GalleryImage";
import { getAlbum } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Key } from "react";
import PhotoGrid from "@/components/PhotoGrid";

export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const album = await getAlbum(slug);

    return (
        <div>
            <section className="@container">
                <SectionTitle title={album?.title} description={album?.description} />
                <PhotoGrid photos={album.images} />
            </section>
        </div>
    );
}
