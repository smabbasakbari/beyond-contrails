import Image from "next/image";
import Link from "next/link";

import { FlightReport } from "@/types/flightreport";
import { urlFor } from "@/lib/sanity/image";

interface BlogCardProps {
  post: FlightReport;
}

export default function BlogCard({
  post,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-sky-400/40"
    >
      <div className="relative aspect-video overflow-hidden">

        <Image
          src={urlFor(post.heroImage).width(1200).url()}
          alt={post.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

      </div>

      <div className="p-8">

        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-sky-400">
          <span>{post.departure}</span>
          <span>→</span>
          <span>{post.arrival}</span>
        </div>

        <h2 className="mt-4 text-3xl font-light text-white">
          {post.title}
        </h2>

        <p className="mt-5 text-gray-400">
          {post.excerpt}
        </p>

        <div className="mt-8 flex items-center justify-between text-sm text-gray-500">

          <span>
            {new Date(post.publishedAt).toLocaleDateString("en-GB")}
          </span>

          <span>
            {post.aircraft}
          </span>

        </div>

      </div>
    </Link>
  );
}