import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Project Name",
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "AI", value: "ai" },
          { title: "AI Infrastructure", value: "ai-infrastructure" },
          { title: "FinTech", value: "fintech" },
          { title: "Web", value: "web" },
          { title: "Developer Tools", value: "developer-tools" },
          { title: "Research", value: "research" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: "longDescription",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Idea", value: "idea" },
          { title: "In Development", value: "in-development" },
          { title: "Active", value: "active" },
          { title: "Completed", value: "completed" },
          { title: "Archived", value: "archived" },
        ],
      },
      initialValue: "in-development",
    }),

    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),

    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
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
      category: "category",
      status: "status",
      media: "coverImage",
    },

    prepare({ title, category, status, media }) {
      return {
        title,
        subtitle: `${category || "Project"} • ${status || "Unknown"}`,
        media,
      };
    },
  },
});
