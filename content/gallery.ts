import fs from "fs";
import path from "path";
import { load } from "js-yaml";

export interface GalleryImage {
  src: string;
  title: string;
  aircraft?: string;
  location?: string;
  date?: string;
  caption?: string;
}

interface GalleryData {
  images?: GalleryImage[];
}

export function getGalleryImages(): GalleryImage[] {
  const filePath = path.join(
    process.cwd(),
    "content",
    "gallery.yml"
  );

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const file = fs.readFileSync(filePath, "utf8");

  const data = load(file) as GalleryData;

  return data.images ?? [];
}