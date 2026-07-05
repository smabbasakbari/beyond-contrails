import FadeIn from "@/components/animations/FadeIn";

export default function HeroHeading() {
  return (
    <FadeIn delay={0.4}>
      <h1 className="mt-8 text-center text-6xl font-light leading-none tracking-[0.14em] text-white md:text-8xl">
        <span className="block">BEYOND</span>
        <span className="block mt-2">CONTRAILS</span>
      </h1>
    </FadeIn>
  );
}