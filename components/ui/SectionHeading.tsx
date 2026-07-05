interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-sky-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-5xl font-light tracking-tight text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}