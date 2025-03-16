import { urlFor } from "@/sanity/lib/image";
import GalleryImage from "./GalleryImage";

export default function PreviewPhotoGrid({ photos }: { photos: any[] }) {
    return (
        <div className="@container">
            <div className="grid grid-cols-2 gap-4 @xl:grid-cols-3 @5xl:grid-cols-6">
                {photos.map((photo, i) => (
                    <GalleryImage key={i} src={urlFor(photo).width(800).url() || ""} zoomSrc={urlFor(photo).width(1400).url() || ""} className="aspect-square" />
                ))}
            </div>
        </div>
    );
}
