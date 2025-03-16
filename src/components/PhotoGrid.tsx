import { urlFor } from "@/sanity/lib/image";
import GalleryImage from "./GalleryImage";

export default function PhotoGrid({ photos }: { photos: any[] }) {
    return (
        <div className="@container">
            <div className="grid grid-cols-2 gap-4 @2xl:grid-cols-3 @3xl:grid-cols-4 @5xl:grid-cols-5">
                {photos.map((photo, i) => (
                    <GalleryImage key={i} photo={photo} className="aspect-square" />
                ))}
            </div>
        </div>
    );
}
