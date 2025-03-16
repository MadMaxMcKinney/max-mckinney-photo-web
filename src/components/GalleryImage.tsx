import { twMerge } from "tailwind-merge";

export default function GalleryImage({ src, className }: { src: string; className?: string }) {
    return <img className={twMerge(["h-full rounded w-full object-cover transition-all hover:brightness-110 hover:cursor-zoom-in", className])} src={src} loading="lazy" />;
}
