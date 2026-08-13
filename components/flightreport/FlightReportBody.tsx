import { BlogPost } from "@/types/blog";
import { markdownToHtml } from "@/lib/markdown";

interface Props {
  report: BlogPost;
}

export default async function FlightReportBody({
  report,
}: Props) {
  const html = await markdownToHtml(report.content);

  return (
    <article className="mx-auto max-w-4xl px-6 py-24">

      <div
        className="
          prose
          prose-invert
          prose-lg
          max-w-none

          prose-headings:font-light
          prose-headings:text-white

          prose-p:text-gray-300
          prose-p:leading-8

          prose-a:text-sky-400

          prose-strong:text-white

          prose-blockquote:border-sky-400
          prose-blockquote:text-gray-400
        "
        dangerouslySetInnerHTML={{ __html: html }}
      />

    </article>
  );
}