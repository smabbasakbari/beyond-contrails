import { groq } from "next-sanity";

export const allFlightReportsQuery = groq`
*[_type == "flightReport"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  heroImage,
  excerpt,
  airline,
  aircraft,
  departure,
  arrival,
  flightTime,
  featured
}
`;

export const latestFlightReportQuery = groq`
coalesce(
  *[_type == "flightReport" && featured == true] | order(publishedAt desc)[0],
  *[_type == "flightReport"] | order(publishedAt desc)[0]
){
  _id,
  title,
  slug,
  publishedAt,
  heroImage,
  excerpt,
  airline,
  aircraft,
  departure,
  arrival,
  flightTime,
  featured
}
`;

export const flightReportBySlugQuery = groq`
*[_type == "flightReport" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  heroImage,
  excerpt,
  airline,
 aircraft,
 departure,
 arrival,
 flightTime,
 youtubeUrl,
 featured,
 tags,
 gallery,
 body
}
`;