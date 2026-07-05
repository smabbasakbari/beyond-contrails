import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "./FlightReportCard";

import { client } from "@/lib/sanity/client";
import { latestFlightReportQuery } from "@/lib/sanity/queries";

import { FlightReport } from "@/types/flightreport";

export default async function LatestFlightReport() {
  const post = await client.fetch<FlightReport | null>(
    latestFlightReportQuery
  );

  if (!post) {
    return null;
  }

  return (
    <Section>

      <SectionHeading
        eyebrow="FEATURED FLIGHT"
        title="Latest Flight Report"
        description="Read my latest journey through Microsoft Flight Simulator."
      />

      <div className="mt-16">
        <BlogCard post={post} />
      </div>

    </Section>
  );
}