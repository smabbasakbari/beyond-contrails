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
    <div className="group relative aspect-video overflow-hidden rounded-3xl">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />

      <div
        onClick={onClick}
        className="group relative aspect-video cursor-pointer overflow-hidden rounded-3xl"
      >
      
      </div>
    </div>
  );
}