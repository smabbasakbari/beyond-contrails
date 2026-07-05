import Image from "next/image";

export default function GalleryWatermark() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <Image
        src="/plane_w_heading.svg"
        alt="Beyond Contrails"
        width={450}
        height={450}
        draggable={false}
        className="select-none opacity-10"
      />
    </div>
  );
}