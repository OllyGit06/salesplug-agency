import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import LeadForm from "@/components/LeadForm";
import ContentGate from "@/components/ContentGate";
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
  return (
    <main className="min-h-screen">
      <Header />
      <VideoSection />
      <LeadForm />
      
      {/* Content gated behind form submission */}
      <ContentGate>
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
      </ContentGate>
    </main>
  );
};

export default Index;
