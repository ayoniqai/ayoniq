import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";
import {
  projectSchema,
  publicationSchema,
  researchSchema,
  datasetSchema,
  newsSchema,
  ProjectFrontmatter,
  PublicationFrontmatter,
  ResearchFrontmatter,
  NewsFrontmatter,
  personSchema,
  PersonFrontmatter
} from "@/src/schemas/content.schema";

const CONTENT_ROOT = path.join(process.cwd(), "content");

// Generic function to read MDX files from a directory
function getMDXFiles(dir: string) {
  try {
    const fullPath = path.join(CONTENT_ROOT, dir);
    if (!fs.existsSync(fullPath)) return [];
    
    // We expect each item to be in its own folder with an index.mdx
    // e.g., content/projects/my-project/index.mdx
    // OR just a standard file content/projects/my-project.mdx
    const entries = fs.readdirSync(fullPath, { withFileTypes: true });
    
    const files: { slug: string; filePath: string }[] = [];
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const indexPath = path.join(fullPath, entry.name, "index.mdx");
        if (fs.existsSync(indexPath)) {
          files.push({ slug: entry.name, filePath: indexPath });
        }
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        files.push({ slug: entry.name.replace(/\.mdx$/, ""), filePath: path.join(fullPath, entry.name) });
      }
    }
    
    return files;
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return [];
  }
}

// Generic function to parse a single MDX file
function getMDXData<T>(
  slug: string, 
  dir: string, 
  schema: z.ZodSchema<T>
): { data: T; content: string; slug: string } | null {
  const fullPathFolder = path.join(CONTENT_ROOT, dir, slug, "index.mdx");
  const fullPathFile = path.join(CONTENT_ROOT, dir, `${slug}.mdx`);
  
  let filePath = "";
  if (fs.existsSync(fullPathFolder)) {
    filePath = fullPathFolder;
  } else if (fs.existsSync(fullPathFile)) {
    filePath = fullPathFile;
  } else {
    return null;
  }
  
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  
  try {
    const validatedData = schema.parse(data);
    return {
      data: validatedData,
      content,
      slug,
    };
  } catch (error) {
    console.error(`Validation error in ${filePath}:`, error);
    return null;
  }
}

// --- Specific Content Fetchers ---

export function getProjects() {
  const files = getMDXFiles("projects");
  const projects = files
    .map(f => getMDXData(f.slug, "projects", projectSchema))
    .filter((p): p is NonNullable<typeof p> => p !== null);
  
  // Sort by date descending
  return projects.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function getProjectBySlug(slug: string) {
  return getMDXData(slug, "projects", projectSchema);
}

export function getPublications() {
  const files = getMDXFiles("publications");
  const publications = files
    .map(f => getMDXData(f.slug, "publications", publicationSchema))
    .filter((p): p is NonNullable<typeof p> => p !== null);
  
  return publications.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function getPublicationBySlug(slug: string) {
  return getMDXData(slug, "publications", publicationSchema);
}

export function getResearchAreas() {
  const files = getMDXFiles("research");
  const research = files
    .map(f => getMDXData(f.slug, "research", researchSchema))
    .filter((p): p is NonNullable<typeof p> => p !== null);
  
  return research.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function getResearchBySlug(slug: string) {
  return getMDXData(slug, "research", researchSchema);
}

export function getDatasets() {
  const files = getMDXFiles("datasets");
  const datasets = files
    .map(f => getMDXData(f.slug, "datasets", datasetSchema))
    .filter((p): p is NonNullable<typeof p> => p !== null);
  
  return datasets.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function getDatasetBySlug(slug: string) {
  return getMDXData(slug, "datasets", datasetSchema);
}

export function getNews() {
  const files = getMDXFiles("news");
  const news = files
    .map(f => getMDXData(f.slug, "news", newsSchema))
    .filter((p): p is NonNullable<typeof p> => p !== null);
  
  return news.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function getNewsBySlug(slug: string) {
  return getMDXData(slug, "news", newsSchema);
}

export function getPeople() {
  const files = getMDXFiles("people");
  const people = files
    .map(f => getMDXData(f.slug, "people", personSchema))
    .filter((p): p is NonNullable<typeof p> => p !== null);
  
  return people; // Order as needed, perhaps alphabetical or by role priority
}

export function getPersonBySlug(slug: string) {
  return getMDXData(slug, "people", personSchema);
}
