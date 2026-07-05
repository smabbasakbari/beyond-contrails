import fg from "fast-glob";

export interface GalleryImage {
  src: string;
  title: string;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const files = await fg("public/gallery/*.{jpg,jpeg,png,webp}");

  return files.map((file) => ({
    src: file.replace("public", ""),
    title: file
      .split("/")
      .pop()!
      .replace(/\.[^/.]+$/, "")
      .replace(/-/g, " "),
  }));
}