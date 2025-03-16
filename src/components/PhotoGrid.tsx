import { urlFor } from "@/sanity/lib/image";
import GalleryImage from "./GalleryImage";

export default function PhotoGrid({ photos }: { photos: any[] }) {
    return (
        <div className="grid grid-cols-2 gap-4 @2xl:grid-cols-3 @3xl:grid-cols-4 @5xl:grid-cols-5">
            {photos.map((photo, i) => (
                <GalleryImage key={i} src={urlFor(photo).width(800).url() || ""} zoomSrc={urlFor(photo).width(1400).url() || ""} className="aspect-square" />
            ))}
        </div>
    );
}
