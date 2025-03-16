import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import React from "react";
import { urlFor } from "@/sanity/lib/image";

interface AlbumCardProps extends React.ComponentProps<"a"> {
    album: any;
}

export default function AlbumCard({ album, ...props }: AlbumCardProps) {
    return (
        <Link href={`/albums/${album.slug.current}`} key={props.key}>
            <Card className="pt-0 overflow-clip">
                <img src={urlFor(album.mainImage).width(800).url() || ""} className="aspect-video object-cover" />
                <CardHeader>
                    <CardTitle>{album?.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{album?.description}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}
