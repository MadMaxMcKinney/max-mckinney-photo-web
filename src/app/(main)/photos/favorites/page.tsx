import SectionTitle from "@/components/SectionTitle";
import { getAllFavoritePhotos } from "@/sanity/lib/client";
import PhotoGrid from "@/components/PhotoGrid";

export default async function Home() {
    const allPhotos = await getAllFavoritePhotos();

    return (
        <div>
            <section>
                <SectionTitle title="Max's picks" description={`Maybe not the best of the best, but my favorite nonetheless!`} />
                <PhotoGrid photos={allPhotos} />
            </section>
        </div>
    );
}
