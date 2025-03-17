import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SidebarLinks } from "@/lib/sidebar";

export default async function Genres() {
    const sidebarGenres = SidebarLinks.filter((group) => group.category.toLowerCase() === "genres")[0].links;

    return (
        <div>
            <section className="@container">
                <SectionTitle title="All genres" description={`Looking for a specific vibe, check out my different genres.`} />
                <div className="grid grid-cols-2 gap-4 @5xl:grid-cols-3">
                    {sidebarGenres.map((genre, i) => (
                        <Link href={`${genre.href}`} key={i}>
                            <Card className="group hover:bg-accent flex-row items-center gap-4 overflow-clip px-6 transition-colors">
                                <genre.icon size={20} />
                                <h2 className="text-lg">{genre.title}</h2>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
