import BlogCard from "./FlightReportCard";
import { client } from "@/lib/sanity/client";
import { allFlightReportsQuery } from "@/lib/sanity/queries";
import { FlightReport } from "@/types/flightreport"

export default async function BlogGrid() {
    const posts = await client.fetch<FlightReport[]>(
      allFlightReportsQuery
    );

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-32 lg:grid-cols-2">
      {posts.map((post) => (
        <BlogCard
          key={post._id}
          post={post}
        />
      ))}
    </section>
  );
}