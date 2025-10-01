import { useState } from "react";
import VideoSalesLetter from "@/components/VideoSalesLetter";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  const [contentUnlocked, setContentUnlocked] = useState(false);

  return (
    <main className="min-h-screen relative">
      {/* Background Content - Blurred when locked */}
      <div className={`${!contentUnlocked ? 'blur-xl opacity-20 pointer-events-none' : ''} transition-all duration-500`}>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <PricingSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </div>

      {/* Video Sales Letter Module - On Top */}
      {!contentUnlocked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-2xl overflow-y-auto py-8">
          <div className="w-full">
            <VideoSalesLetter onFormSubmit={() => setContentUnlocked(true)} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
