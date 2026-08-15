import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

interface BlogPost {
  title: string;
  date: string;
  author?: string;
  cover?: string;
  excerpt?: string;
  youtubeUrl?: string;
  featured?: boolean;
  slug: string;
}

function getLatestPost(): BlogPost | null {
  const blogDirectory = path.join(
    process.cwd(),
    "content",
    "blog"
  );

  if (!fs.existsSync(blogDirectory)) {
    return null;
  }

  const files = fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".md"));

  const posts = files.map((file) => {
    const filePath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContent);

    return {
      title: data.title ?? "Untitled Flight",
      date: data.date ?? "",
      author: data.author,
      cover: data.cover,
      excerpt: data.excerpt,
      youtubeUrl: data.youtubeUrl,
      featured: data.featured ?? false,
      slug: file.replace(/\.md$/, ""),
    };
  });

  posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return posts[0] ?? null;
}

function getYouTubeId(url?: string) {
  if (!url) return null;

  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/live\/)([^?&/]+)/
  );

  return match ? match[1] : null;
}

export default function FeaturedStory() {
  const post = getLatestPost();

  if (!post) {
    return null;
  }

  const youtubeId = getYouTubeId(post.youtubeUrl);

  return (
    <Section className="relative z-20 -mt-16 rounded-t-[48px] bg-[#06070A]">

      <SectionHeading
        eyebrow="Latest Flight Report"
        title={post.title}
        description={
          post.excerpt ??
          "Explore the latest journey from Beyond Contrails."
        }
      />

      <GlassCard className="mt-16 overflow-hidden">

        <div className="relative aspect-video">

          {youtubeId ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={post.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : post.cover ? (
            <img
              src={post.cover}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-white/[0.03]">
              <p className="text-sm text-white/40">
                Flight report
              </p>
            </div>
          )}

        </div>

      </GlassCard>

    </Section>
  );
}