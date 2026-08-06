import { HomeHero } from "@/components/home/HomeHero";
import { Pathways } from "@/components/home/Pathways";
import { StorySection } from "@/components/home/StorySection";
import { ExperiencesStrip } from "@/components/home/ExperiencesStrip";
import { WatchListenPreview } from "@/components/home/WatchListenPreview";
import { MarketingAd } from "@/components/home/MarketingAd";
import { EmailSignup } from "@/components/home/EmailSignup";
import { getFeaturedPrograms } from "@/lib/programs";

export default async function Home() {
  const featured = await getFeaturedPrograms(3);

  return (
    <>
      <HomeHero />
      <Pathways />
      <StorySection />
      <ExperiencesStrip programs={featured} />
      <WatchListenPreview />
      <MarketingAd />
      <EmailSignup />
    </>
  );
}
