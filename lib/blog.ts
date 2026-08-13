import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, file);
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
        gallery: Array.isArray(data.gallery) ? data.gallery : [],
        youtubeUrl: data.youtubeUrl ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: data.featured ?? false,
        content,
        };

    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

export function getFeaturedPost(): BlogPost | null {
  return getAllPosts().find((post) => post.featured) ?? null;
}