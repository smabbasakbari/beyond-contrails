import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/sanity/portableText";
import { FlightReport } from "@/types/flightreport";

interface Props {
  report: FlightReport;
}

export default function FlightReportBody({ report }: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10">

      <PortableText
        value={report.body}
        components={portableTextComponents}
      />

    </section>
  );
}