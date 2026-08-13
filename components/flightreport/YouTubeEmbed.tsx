import { BlogPost } from "@/types/blog";

interface Props {
  report: BlogPost;
}

export default function YouTubeEmbed({ report }: Props) {
  if (!report.youtubeUrl) {
    return null;
  }

  const match = report.youtubeUrl.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^?&/]+)/
  );

  if (!match) {
    return null;
  }

  const videoId = match[1];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <h2 className="mb-10 text-center text-5xl font-light text-white">
        Watch the Flight
      </h2>

      <div className="overflow-hidden rounded-3xl">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={report.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

    </section>
  );
}