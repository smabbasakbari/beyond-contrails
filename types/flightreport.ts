import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/types";

export interface FlightReport {
  _id: string;

  title: string;

  slug: {
    current: string;
  };

  publishedAt: string;

  excerpt: string;

  airline: string;

  aircraft: string;

  departure: string;

  arrival: string;

  flightTime: string;

  featured: boolean;

  youtubeUrl?: string;

  heroImage: SanityImageSource;

  gallery: SanityImageSource[];

  body: PortableTextBlock[];

  tags: string[];
}