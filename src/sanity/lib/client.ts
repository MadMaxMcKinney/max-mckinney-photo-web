import { createClient } from "next-sanity";
import { defineQuery } from "groq";
import { apiVersion, dataset, projectId } from "../env";
import { PhotoAlbum } from "../../../sanity.types";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function getAllPhotos() {
    const getAllPhotosQuery = defineQuery(`*[_type == "photoAlbum"].images[]`);
    const photos: PhotoAlbum["images"][] = await client.fetch(getAllPhotosQuery);
    return photos;
}

export async function getAllAlbums() {
    const getAllAlbumsQuery = defineQuery(`*[_type == "photoAlbum"]`);
    const albums: PhotoAlbum[] = await client.fetch(getAllAlbumsQuery);
    return albums;
}

export async function getRecentPhotos(count: number) {
    const getRecentPhotosQuery = defineQuery(`*[_type == "photoAlbum"].images[] | order(_createdAt desc)[0..${count - 1}]`);
    const photos: PhotoAlbum["images"][] = await client.fetch(getRecentPhotosQuery);
    return photos;
}

export async function getRecentAlbums(count: number) {
    const getRecentAlbumQuery = defineQuery(`*[_type == "photoAlbum"] | order(_createdAt desc)[0..${count - 1}]`);
    const albums: PhotoAlbum[] = await client.fetch(getRecentAlbumQuery);
    return albums;
}

export async function getAlbum(albumSlug: string) {
    const getAlbumQuery = defineQuery(`*[_type == "photoAlbum" && slug.current == "${albumSlug}"][0]`);
    const album: PhotoAlbum = await client.fetch(getAlbumQuery);
    return album;
}

export async function getAlbumsByGenre(genre: string) {
    const getAlbumsByGenreQuery = defineQuery(`*[_type == "photoAlbum" && genre->slug.current == "${genre}"]`);
    const albums: PhotoAlbum[] = await client.fetch(getAlbumsByGenreQuery);
    return albums;
}

export async function getLastUpdateDate() {
    const getLastUpdateDateQuery = defineQuery(`*[_type == "photoAlbum"] | order(_updatedAt desc)[0]`);
    const album: PhotoAlbum = await client.fetch(getLastUpdateDateQuery);
    return album._updatedAt;
}

export async function getDocumentTitleBySlug(slug: string) {
    const getDocumentTitleBySlugQuery = defineQuery(`*[slug.current == "${slug}"][0].title`);
    const title: string = await client.fetch(getDocumentTitleBySlugQuery);
    return title;
}
