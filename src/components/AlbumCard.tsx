import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import { ArrowRight } from "lucide-react";

interface AlbumCardProps extends React.ComponentProps<"a"> {
    album: any;
}

export default function AlbumCard({ album, ...props }: AlbumCardProps) {
    return (
        <Link href={`/albums/${album.slug.current}`} key={props.key}>
            <Card className="group hover:bg-accent overflow-clip pt-0 transition-colors">
                <img src={urlFor(album.mainImage).width(800).url() || ""} className="aspect-video object-cover" />
                <CardHeader>
                    <CardTitle>
                        <div className="overflow-clip">
                            <div className="flex -translate-x-[18px] items-center transition-all group-hover:translate-x-0">
                                <ArrowRight size={"18"} />
                                {album?.title}
                            </div>
                        </div>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{album?.description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}
