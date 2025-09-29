import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Clock, DollarSign, Globe, ShieldCheck } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost sales with consistent outbound calling",
      description: "Never miss a sales opportunity with AI agents working around the clock"
    },
    {
      icon: Clock,
      title: "Deliver 24/7 customer service without extra staff",
      description: "Provide instant support at all hours without hiring night shifts"
    },
    {
      icon: DollarSign,
      title: "Save thousands on hiring and training costs",
      description: "One AI agent costs less than a part-time employee's daily wage"
    },
    {
      icon: Globe,
      title: "Scale outreach globally in multiple languages",
      description: "Expand internationally without language barriers or timezone limitations"
    },
    {
      icon: ShieldCheck,
      title: "Enjoy risk-free growth with our 30-day refund guarantee",
      description: "Try Callsi completely risk-free and see the results yourself"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Grow Faster With AI{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              That Never Sleeps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations and unlock unprecedented growth potential
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-smooth">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-start space-x-4">
                  <benefit.icon className="w-6 h-6 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="xl" className="group">
            <TrendingUp className="w-5 h-5 mr-2" />
            Start Growing Today
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;