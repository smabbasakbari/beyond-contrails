import FlightReportCard from "./FlightReportCard";
import { getAllPosts } from "@/lib/blog";

export default function FlightReportGrid() {
  const posts = getAllPosts();

  if (!posts.length) {
    return (
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <p className="text-center text-gray-500">
          No flight reports published yet.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-32 lg:grid-cols-2">
      {posts.map((post) => (
        <FlightReportCard
          key={post.slug}
          post={post}
        />
      ))}
    </section>
  );
}