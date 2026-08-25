import { defineField, defineType } from "sanity";

export const researchType = defineType({
  name: "research",
  title: "Research",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Research Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Idea", value: "idea" },
          { title: "In Progress", value: "in-progress" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
      },
      initialValue: "idea",
    }),

    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    }),

    defineField({
      name: "abstract",
      title: "Abstract",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "content",
      title: "Research Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "project",
      title: "Related Project",
      type: "reference",
      to: [{ type: "project" }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        }),

        defineField({
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
        }),

        defineField({
          name: "ogImage",
          title: "Social Share Image",
          type: "image",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      status: "status",
      media: "coverImage",
    },

    prepare({ title, status, media }) {
      return {
        title,
        subtitle: status,
        media,
      };
    },
  },
});
