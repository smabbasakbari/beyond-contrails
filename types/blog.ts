export interface BlogPost {
  slug: string;

  title: string;
  date: string;
  author: string;

  cover: string;
  excerpt: string;

  aircraft: string;
  airline: string;

  departure: string;
  arrival: string;

  flighttime: string;

  gallery: string[];

  youtubeUrl?: string;

  tags: string[];

  featured: boolean;

  content: string;
}