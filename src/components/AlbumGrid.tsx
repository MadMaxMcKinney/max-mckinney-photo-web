import AlbumCard from "./AlbumCard";

export default function AlbumGrid({ albums }: { albums: any[] }) {
    return (
        <div className="@container">
            <div className="grid grid-cols-1 gap-4 @lg:grid-cols-2 @2xl:grid-cols-3 @7xl:grid-cols-4">
                {albums.map((album, i) => (
                    <AlbumCard album={album} key={i} />
                ))}
            </div>
        </div>
    );
}
