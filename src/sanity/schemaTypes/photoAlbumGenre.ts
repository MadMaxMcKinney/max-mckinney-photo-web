import { defineField, defineType } from "sanity";

export default defineType({
    name: "photoAlbumGenre",
    title: "Photo Album Genre",
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
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],
});
