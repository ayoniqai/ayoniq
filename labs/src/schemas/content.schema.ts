import { z } from "zod";

// Base schema for all content types
export const baseSchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.string().or(z.date()).transform(val => new Date(val).toISOString()),
  featured: z.boolean().optional().default(false),
  coverImage: z.string().optional(),
});

// Project Schema
export const projectSchema = baseSchema.extend({
  status: z.enum(["Active", "Completed", "Archived"]),
  researchers: z.number().int().nonnegative().optional(),
  researchArea: z.string().optional(),
});
export type ProjectFrontmatter = z.infer<typeof projectSchema>;

// Publication Schema
export const publicationSchema = baseSchema.extend({
  type: z.string(), // e.g., "Research Paper", "Technical Report", "Dataset"
  team: z.string(),
  downloadUrl: z.string().optional(),
});
export type PublicationFrontmatter = z.infer<typeof publicationSchema>;

// Research Area Schema
export const researchSchema = baseSchema.extend({
  icon: z.string().optional(), // name of the lucide icon
});
export type ResearchFrontmatter = z.infer<typeof researchSchema>;

// Dataset Schema
export const datasetSchema = baseSchema.extend({
  size: z.string(),
  format: z.string(),
  license: z.string(),
  downloadUrl: z.string().optional(),
});
export type DatasetFrontmatter = z.infer<typeof datasetSchema>;

// News/Blog Schema
export const newsSchema = baseSchema.extend({
  category: z.string(),
  author: z.string().optional(),
  icon: z.string().optional(),
});
export type NewsFrontmatter = z.infer<typeof newsSchema>;

// Person Schema
// We don't extend baseSchema here because 'date' and 'summary' might not make sense for a person profile, but let's extend a subset or define a new one.
export const personSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(), // Short bio for cards
  avatarUrl: z.string().optional(),
  twitter: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
});
export type PersonFrontmatter = z.infer<typeof personSchema>;
