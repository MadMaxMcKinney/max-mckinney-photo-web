import { defineField, defineType } from "sanity";

export default defineType({
    name: "photoAlbum",
    title: "Photo Album",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
            },
        }),
        defineField({
            name: "genre",
            title: "Genre",
            type: "reference",
            validation: (Rule) => Rule.required(),
            to: [{ type: "photoAlbumGenre" }],
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "mainImage",
            title: "Main image",
            type: "image",
            validation: (Rule) => Rule.required(),
            options: {
                metadata: ["exif", "lqip", "palette", "blurhash"],
            },
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            validation: (Rule) => Rule.required(),
            of: [{ type: "image", options: { metadata: ["exif", "lqip", "palette", "blurhash"] } }],
            options: {
                layout: "grid",
            },
        }),
    ],
});
