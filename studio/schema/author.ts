import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),

    defineField({
      name: "github",
      title: "GitHub",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    }),

    defineField({
      name: "x",
      title: "X",
      type: "url",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "avatar",
    },
  },
});
