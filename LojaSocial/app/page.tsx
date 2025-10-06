import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CampaignsSection } from "@/components/campaigns-section";
import { SupportTypesSection } from "@/components/support-types-section";
import { HowToApplySection } from "@/components/how-to-apply-section";
import { ContributeSection } from "@/components/contribute-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <CampaignsSection />
      <SupportTypesSection />
      <HowToApplySection />
      <ContributeSection />
      <Footer />
    </main>
  );
}
