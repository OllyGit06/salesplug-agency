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
    <main className="min-h-screen">
      <VideoSalesLetter onFormSubmit={() => setContentUnlocked(true)} />
      
      {/* Locked Content Overlay */}
      <div className={`relative ${!contentUnlocked ? 'pointer-events-none' : ''}`}>
        {!contentUnlocked && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="text-center p-8 bg-card rounded-2xl shadow-2xl border border-border max-w-md mx-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">Content Locked</h2>
              <p className="text-muted-foreground">
                Complete the form above to unlock full access to our landing page and continue watching the video.
              </p>
            </div>
          </div>
        )}
        
        <div className={!contentUnlocked ? 'opacity-30' : ''}>
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
      </div>
    </main>
  );
};

export default Index;
