import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"));
}

function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    cover: data.cover ?? "",
    excerpt: data.excerpt ?? "",
    aircraft: data.aircraft ?? "",
    airline: data.airline ?? "",
    departure: data.departure ?? "",
    arrival: data.arrival ?? "",
    flighttime: data.flighttime ?? "",
    gallery: data.gallery ?? [],
    youtubeUrl: data.youtubeUrl ?? undefined,
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((file) => file.replace(/\.md$/, ""))
    .map((slug) => getPostBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlugOrNull(slug: string): BlogPost | null {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export function getFeaturedPost(): BlogPost | null {
  const posts = getAllPosts();

  return (
    posts.find((post) => post.featured) ??
    posts[0] ??
    null
  );
}