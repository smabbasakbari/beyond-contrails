import { BlogPost } from "@/types/blog";

interface Props {
  report: BlogPost;
}

export default function FlightReportTags({ report }: Props) {
  if (!report.tags?.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <div className="flex flex-wrap gap-3">

        {report.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2 text-sm text-sky-300"
          >
            {tag}
          </span>
        ))}

      </div>

    </section>
  );
}