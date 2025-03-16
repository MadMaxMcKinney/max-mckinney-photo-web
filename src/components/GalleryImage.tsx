import { twMerge } from "tailwind-merge";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { urlFor } from "@/sanity/lib/image";

export default function GalleryImage({ photo, className }: { photo: any; className?: string }) {
    return (
        <Zoom wrapElement="span" zoomMargin={16} zoomImg={{ src: urlFor(photo).width(1800).url() || "" }}>
            <img className={twMerge(["h-full w-full rounded object-cover transition-all hover:cursor-zoom-in hover:brightness-115", className])} src={urlFor(photo).width(800).url() || ""} loading="lazy" />
        </Zoom>
    );
}
