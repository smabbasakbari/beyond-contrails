import FadeIn from "@/components/animations/FadeIn";

export default function HeroTagline() {
  return (
    <FadeIn delay={0.6}>
      <p className="mt-8 max-w-2xl text-center text-lg leading-8 text-gray-300">
        Exploring the world through flight simulation.
      </p>
    </FadeIn>
  );
}