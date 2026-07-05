import { FlightReport } from "@/types/flightreport";

interface Props {
  report: FlightReport;
}

export default function FlightReportDetails({ report }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-3">

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
            Airline
          </p>

          <p className="mt-3 text-2xl text-white">
            {report.airline}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
            Aircraft
          </p>

          <p className="mt-3 text-2xl text-white">
            {report.aircraft}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
            Flight Time
          </p>

          <p className="mt-3 text-2xl text-white">
            {report.flightTime}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
            Departure
          </p>

          <p className="mt-3 text-2xl text-white">
            {report.departure}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
            Arrival
          </p>

          <p className="mt-3 text-2xl text-white">
            {report.arrival}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
            Published
          </p>

          <p className="mt-3 text-2xl text-white">
            {new Date(report.publishedAt).toLocaleDateString("en-GB")}
          </p>
        </div>

      </div>

    </section>
  );
}