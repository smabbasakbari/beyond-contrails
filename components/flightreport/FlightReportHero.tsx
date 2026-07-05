import Image from "next/image";

import { FlightReport } from "@/types/flightreport";
import { urlFor } from "@/lib/sanity/image";

interface Props {
  report: FlightReport;
}

export default function FlightReportHero({ report }: Props) {
  return (
    <section className="relative h-[80vh] overflow-hidden">

      <Image
        src={urlFor(report.heroImage).width(2400).url()}
        alt={report.title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/45 to-[#06070A]" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-sky-400">
            {report.departure} → {report.arrival}
          </p>

          <h1 className="mt-6 text-5xl font-light text-white md:text-7xl">
            {report.title}
          </h1>

          <div className="mt-8 flex items-center justify-center gap-4 text-lg text-gray-300">

            <span>{report.airline}</span>

            <span className="text-sky-400">•</span>

            <span>{report.aircraft}</span>

            <span className="text-sky-400">•</span>

            <span>{report.flightTime}</span>

          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-gray-400">
            {new Date(report.publishedAt).toLocaleDateString("en-GB")}
          </p>

        </div>

      </div>

    </section>
  );
}