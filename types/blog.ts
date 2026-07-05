export interface BlogPost {
  slug: string;

  title: string;

  date: string;

  author: string;

  excerpt: string;

  aircraft: string;

  airline: string;

  departure: string;

  arrival: string;

  flightTime: string;

  featured: boolean;

  draft?: boolean;

  tags: string[];

  cover: string;
}