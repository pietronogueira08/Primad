import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PrecisionTechSection } from "@/components/sections/PrecisionTechSection";
import { BentoPortfolioSection } from "@/components/sections/BentoPortfolioSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTAContactSection } from "@/components/sections/CTAContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <PrecisionTechSection />
        <BentoPortfolioSection />
        <ProcessTimelineSection />
        <TestimonialsSection />
        <CTAContactSection />
      </main>
      <Footer />
    </>
  );
}
