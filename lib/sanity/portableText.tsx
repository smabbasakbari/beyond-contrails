import { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-12 text-5xl font-light text-white">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mt-10 text-4xl font-light text-white">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-8 text-3xl font-light text-white">
        {children}
      </h3>
    ),

    normal: ({ children }) => (
      <p className="mt-6 leading-8 text-gray-300">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-sky-500 pl-6 italic text-gray-400">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-2 pl-8 text-gray-300">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-2 pl-8 text-gray-300">
        {children}
      </ol>
    ),
  },
};