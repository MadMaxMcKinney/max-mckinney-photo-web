import { twMerge } from "tailwind-merge";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function GalleryImage({ src, zoomSrc, className }: { src: string; zoomSrc: string; className?: string }) {
    return (
        <Zoom wrapElement="span" zoomMargin={16} zoomImg={{ src: zoomSrc }}>
            <img className={twMerge(["h-full w-full rounded object-cover transition-all hover:cursor-zoom-in hover:brightness-115", className])} src={src} loading="lazy" />
        </Zoom>
    );
}
