import { createClient } from "next-sanity";
import { defineQuery } from "groq";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function getAllPhotos() {
    const photosQuery = defineQuery(`*[_type == "photoAlbum"].images[]`);
    const photos = await client.fetch(photosQuery);
    return photos;
}

export async function getAllAlbums() {
    const albumsQuery = defineQuery(`*[_type == "photoAlbum"]`);
    const albums = await client.fetch(albumsQuery);
    return albums;
}

export async function getRecentPhotos(count: number) {
    const photosQuery = defineQuery(`*[_type == "photoAlbum"].images[] | order(_createdAt desc)[0..${count - 1}]`);
    const photos = await client.fetch(photosQuery);
    return photos;
}

export async function getRecentAlbums(count: number) {
    const albumsQuery = defineQuery(`*[_type == "photoAlbum"] | order(_createdAt desc)[0..${count - 1}]`);
    const albums = await client.fetch(albumsQuery);
    return albums;
}

export async function getAlbum(albumSlug: string) {
    const albumQuery = defineQuery(`*[_type == "photoAlbum" && slug.current == "${albumSlug}"][0]`);
    const album = await client.fetch(albumQuery);
    return album;
}
