import SectionTitle from "@/components/SectionTitle";
import AlbumCard from "@/components/AlbumCard";
import { getAlbumsByGenre } from "@/sanity/lib/client";
import { capitalize } from "@/lib/utils";

export default async function Genres({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const albumsByGenre = await getAlbumsByGenre(slug);

    return (
        <div>
            <section className="@container">
                <SectionTitle title={`${capitalize(slug)}`} description={`Feeling something specific huh? Enjoy!`} />
                <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3 @7xl:grid-cols-4">
                    {albumsByGenre.map((album, i) => (
                        <AlbumCard album={album} key={i} />
                    ))}
                </div>
            </section>
        </div>
    );
}
