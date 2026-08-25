import { groq } from "next-sanity";

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    "author": author->{ name, "avatar": avatar.asset->url, role },
    readTime,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags,
    featured,
    publishedAt
  }
`;

export const FEATURED_POST_QUERY = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    category,
    "author": author->{ name, "avatar": avatar.asset->url, role },
    readTime,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags,
    publishedAt
  }
`;

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "post" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    "author": author->{ name, "avatar": avatar.asset->url, role },
    readTime,
    excerpt,
    "coverImage": coverImage.asset->url,
    tags,
    publishedAt
  }
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    category,
    "author": author->{ name, "avatar": avatar.asset->url, role },
    readTime,
    excerpt,
    "coverImage": coverImage.asset->url,
    content,
    tags,
    publishedAt,
    "relatedProjects": relatedProjects[]->{ _id, title, slug, "coverImage": coverImage.asset->url, category },
    "relatedResearch": relatedResearch[]->{ _id, title, slug, status }
  }
`;

// ─── Updates (News) ──────────────────────────────────────────────────────────

export const NEWS_QUERY = groq`
  *[_type == "update"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    "coverImage": coverImage.asset->url,
    "author": author->{ name, "avatar": avatar.asset->url },
    tags,
    publishedAt
  }
`;

export const NEWS_BY_CATEGORY_QUERY = groq`
  *[_type == "update" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    "coverImage": coverImage.asset->url,
    "author": author->{ name, "avatar": avatar.asset->url },
    tags,
    publishedAt
  }
`;

export const NEWS_BY_SLUG_QUERY = groq`
  *[_type == "update" && slug.current == $slug][0] {
    title,
    slug,
    category,
    excerpt,
    "coverImage": coverImage.asset->url,
    "author": author->{ name, "avatar": avatar.asset->url, role },
    tags,
    content,
    publishedAt
  }
`;

// ─── Research ────────────────────────────────────────────────────────────────

export const RESEARCH_QUERY = groq`
  *[_type == "research"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    status,
    "authors": authors[]->{ name, "avatar": avatar.asset->url, role },
    abstract,
    "coverImage": coverImage.asset->url,
    tags,
    "project": project->{ title, slug },
    publishedAt
  }
`;

export const RESEARCH_BY_SLUG_QUERY = groq`
  *[_type == "research" && slug.current == $slug][0] {
    title,
    slug,
    status,
    "authors": authors[]->{ name, "avatar": avatar.asset->url, role },
    abstract,
    "coverImage": coverImage.asset->url,
    content,
    tags,
    "project": project->{ title, slug, "coverImage": coverImage.asset->url },
    publishedAt
  }
`;

export const FEATURED_RESEARCH_QUERY = groq`
  *[_type == "research" && status == "published"] | order(publishedAt desc)[0..2] {
    _id,
    title,
    slug,
    "authors": authors[]->{ name },
    abstract,
    tags,
    publishedAt
  }
`;

// ─── Projects ────────────────────────────────────────────────────────────────

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    description,
    "coverImage": coverImage.asset->url,
    technologies,
    status,
    githubUrl,
    liveUrl,
    featured
  }
`;

export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "project" && featured == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    description,
    "coverImage": coverImage.asset->url,
    technologies,
    status,
    githubUrl,
    liveUrl
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    title,
    slug,
    category,
    description,
    longDescription,
    "coverImage": coverImage.asset->url,
    "gallery": gallery[].asset->url,
    technologies,
    status,
    githubUrl,
    liveUrl,
    featured
  }
`;