import { twMerge } from "tailwind-merge";

export default function GalleryImage({ src, className }: { src: string; className?: string }) {
    return <img className={twMerge(["h-full w-full rounded object-cover transition-all hover:cursor-zoom-in hover:brightness-115", className])} src={src} loading="lazy" />;
}
