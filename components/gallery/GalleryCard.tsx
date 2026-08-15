import Image from "next/image";

interface GalleryCardProps {
  src: string;
  title: string;
  onClick: () => void;
}

export default function GalleryCard({
  src,
  title,
  onClick,
}: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-3xl text-left"
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-sm font-medium text-white">
          {title}
        </p>
      </div>
    </button>
  );
}