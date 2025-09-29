import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Monthly",
      subtitle: "Callsi Elite",
      price: "$47",
      period: "/ month",
      features: [
        "20,000 Welcome Credits",
        "50 Daily Calls",
        "Up to 15 Campaigns", 
        "5 AI Voices",
        "Inbound & Outbound Calls",
        "Free Upgrades + 24/6 Support"
      ],
      popular: false,
      cta: "Start Monthly Plan"
    },
    {
      name: "Yearly", 
      subtitle: "Callsi Elite",
      price: "$297",
      period: "/ year",
      originalPrice: "$564",
      savings: "Save $267",
      features: [
        "All Monthly Features",
        "1 Year Free Upgrades", 
        "Priority 24/6 Chat Support",
        "Advanced Analytics",
        "Custom Voice Training",
        "API Access"
      ],
      popular: true,
      cta: "Start Yearly Plan"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Choose the Plan{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              That Fits Your Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start with either plan and scale as you grow. Cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary shadow-xl' : 'shadow-md'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-hero text-primary-foreground text-center py-2 text-sm font-semibold">
                  <Crown className="w-4 h-4 inline mr-2" />
                  Most Popular - Best Value
                </div>
              )}
              
              <CardHeader className={`text-center space-y-4 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.subtitle}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-2">
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                    )}
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {plan.savings}
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "default"} 
                  size="lg" 
                  className="w-full group"
                >
                  <Star className="w-4 h-4 mr-2" />
                  {plan.cta}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-sm border max-w-2xl mx-auto">
          <p className="text-muted-foreground text-sm">
            <strong>30-Day Money-Back Guarantee</strong> • No Setup Fees • Cancel Anytime • 24/6 Support
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;