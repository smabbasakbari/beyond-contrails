import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FlightReportCard from "./FlightReportCard";

import { getFeaturedPost } from "@/lib/blog";

export default function LatestFlightReport() {
  const post = getFeaturedPost();

  if (!post) {
    return null;
  }

  return (
    <Section>

      <SectionHeading
        eyebrow="FEATURED FLIGHT"
        title="Featured Flight Report"
        description="Read my latest journey through Microsoft Flight Simulator."
      />

      <div className="mt-16">
        <FlightReportCard post={post} />
      </div>

    </Section>
  );
}