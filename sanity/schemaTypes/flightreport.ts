import {defineField, defineType} from "sanity";

export const flightReport = defineType({
  name: "flightReport",
  title: "Flight Report",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
        name: "excerpt",
        title: "Homepage Excerpt",
        type: "text",
        rows: 3,
    }),

    defineField({
      name: "airline",
      title: "Airline",
      type: "string",
    }),

    defineField({
      name: "aircraft",
      title: "Aircraft",
      type: "string",
    }),

    defineField({
      name: "departure",
      title: "Departure ICAO",
      type: "string",
    }),

    defineField({
      name: "arrival",
      title: "Arrival ICAO",
      type: "string",
    }),

    defineField({
      name: "flightTime",
      title: "Flight Time",
      type: "string",
    }),

    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    }),

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "body",
      title: "Flight Report",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
        options: {
            layout: "tags",
        },
    }),

  ],
});