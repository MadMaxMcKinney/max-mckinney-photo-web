import { type SchemaTypeDefinition } from "sanity";
import photoAlbum from "./photoAlbum";
import photoAlbumGenre from "./photoAlbumGenre";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [photoAlbum, photoAlbumGenre],
};
