import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function FeaturedFilm() {
  return (
    <Section className="relative z-20 -mt-16 rounded-t-[48px] bg-[#06070A]">

      <SectionHeading
        eyebrow="Latest Film"
        title="Inibuilds A350 • Lufthansa Anniversary Flight"
        description="A cinematic journey through Microsoft Flight Simulator featuring the Lufthansa A350 in stunning 4K."
      />

      <GlassCard className="mt-16 overflow-hidden">

        <div className="relative aspect-video">

          <video
            className="h-full w-full object-cover"
            controls
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/hero_a350.mp4" type="video/mp4" />
          </video>

        </div>

      </GlassCard>

    </Section>
  );
}