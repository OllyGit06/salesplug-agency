import { Button } from "@/components/ui/button";
import { Upload, Brain, Phone, Play } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      step: "1",
      title: "Upload your scripts, FAQs, or product info",
      description: "Simply upload your existing materials and Callsi will understand your business instantly"
    },
    {
      icon: Brain,
      step: "2", 
      title: "Callsi trains instantly like your best employee",
      description: "Our AI learns your business knowledge and tone in minutes, not weeks"
    },
    {
      icon: Phone,
      step: "3",
      title: "AI agents start making and taking calls for you",
      description: "Your virtual team is ready to handle calls 24/7 with human-like conversations"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            From Scripts to Sales{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              in Minutes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started with Callsi is simple and fast. No technical knowledge required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              {/* Step Number */}
              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                  {step.step}
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 transform translate-x-8 w-16 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="xl" className="group">
            <Play className="w-5 h-5 mr-2" />
            Watch the Demo and See Callsi in Action
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;