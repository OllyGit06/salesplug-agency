import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Star, Crown, Users, Building2, Briefcase } from "lucide-react";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("entrepreneurs");

  const entrepreneurPlans = [
    {
      name: "Startup Tier",
      subtitle: "Elite License + Training",
      price: "£1,200",
      period: "one-time",
      features: [
        "Complete Elite License",
        "Full Training Program",
        "Setup & Configuration",
        "Basic Support Package",
        "Documentation Access"
      ],
      popular: false,
      cta: "Get Startup Tier"
    },
    {
      name: "Startup Plus",
      subtitle: "Pro License + Training",
      price: "£2,400",
      period: "one-time",
      features: [
        "Complete Pro License",
        "Advanced Training Program",
        "Priority Setup Support",
        "Extended Support Package",
        "Advanced Documentation"
      ],
      popular: true,
      cta: "Get Startup Plus"
    },
    {
      name: "Startup Elite",
      subtitle: "Pro + Lead Generation",
      price: "£6,000",
      period: "one-time",
      features: [
        "Complete Pro License",
        "Elite Training Program",
        "Lead Generation Support",
        "Premium Support Package",
        "1-on-1 Consultation"
      ],
      popular: false,
      cta: "Get Startup Elite"
    }
  ];

  const businessPlans = [
    {
      name: "Small Business",
      subtitle: "2 Campaigns • 50 Calls/Day",
      price: "£1,200-£1,600",
      period: "/ month",
      setupFee: "£2,000",
      features: [
        "2 Active Campaigns",
        "50 Outbound Calls/Day",
        "Elite Plan Features",
        "Campaign Management",
        "Monthly Reporting"
      ],
      popular: false,
      cta: "Start Small Business"
    },
    {
      name: "Business",
      subtitle: "4 Campaigns • 100 Calls/Day",
      price: "£2,500-£4,000",
      period: "/ month",
      setupFee: "£4,000",
      features: [
        "4 Active Campaigns",
        "100 Outbound Calls/Day",
        "Elite Plan Features",
        "Advanced Management",
        "Weekly Reporting"
      ],
      popular: true,
      cta: "Start Business Plan"
    },
    {
      name: "Business Plus",
      subtitle: "6 Campaigns • 200 Calls/Day",
      price: "£4,000-£8,000",
      period: "/ month",
      setupFee: "£6,400",
      features: [
        "6 Active Campaigns",
        "200 Outbound Calls/Day",
        "Pro Plan Features",
        "Premium Management",
        "Daily Reporting"
      ],
      popular: false,
      cta: "Start Business Plus"
    }
  ];

  const enterprisePlan = {
    name: "Enterprise",
    subtitle: "Custom Tailored Solutions",
    price: "Custom Pricing",
    period: "",
    setupFee: "from £8,000+",
    features: [
      "Unlimited Campaigns",
      "Custom Call Volume",
      "Dedicated Account Manager",
      "Custom SLAs",
      "24/7 Priority Support",
      "Custom Integrations"
    ],
    cta: "Get Custom Quote"
  };

  const getCurrentPlans = () => {
    switch (activeTab) {
      case "entrepreneurs":
        return entrepreneurPlans;
      case "business":
        return businessPlans;
      case "enterprise":
        return [enterprisePlan];
      default:
        return entrepreneurPlans;
    }
  };

  const renderPricingCard = (plan: any, index: number) => (
    <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary shadow-xl' : 'shadow-md'}`}>
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-hero text-primary-foreground text-center py-2 text-sm font-semibold">
          <Crown className="w-4 h-4 inline mr-2" />
          Most Popular
        </div>
      )}
      
      <CardHeader className={`text-center space-y-4 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
        <div>
          <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
          <p className="text-muted-foreground">{plan.subtitle}</p>
        </div>
        
        <div className="space-y-2">
          {plan.setupFee && (
            <div className="text-sm text-muted-foreground">
              Setup: {plan.setupFee}
            </div>
          )}
          <div className="flex items-baseline justify-center space-x-2">
            <span className="text-4xl font-bold text-primary">{plan.price}</span>
            {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {plan.features.map((feature: string, i: number) => (
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
  );

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Choose Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Select the category that best fits your business needs
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="entrepreneurs" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Entrepreneurs</span>
            </TabsTrigger>
            <TabsTrigger value="business" className="flex items-center space-x-2">
              <Building2 className="w-4 h-4" />
              <span>Business</span>
            </TabsTrigger>
            <TabsTrigger value="enterprise" className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4" />
              <span>Enterprise</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="entrepreneurs" className="space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold">Own Your Telephony Business</h3>
              <p className="text-muted-foreground">One-time license with complete training program</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {entrepreneurPlans.map((plan, index) => renderPricingCard(plan, index))}
            </div>
          </TabsContent>

          <TabsContent value="business" className="space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold">Sales & Support Services</h3>
              <p className="text-muted-foreground">We run campaigns on behalf of your clients</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {businessPlans.map((plan, index) => renderPricingCard(plan, index))}
            </div>
          </TabsContent>

          <TabsContent value="enterprise" className="space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h3 className="text-2xl font-bold">Custom Enterprise Solutions</h3>
              <p className="text-muted-foreground">Tailored solutions for large businesses with custom requirements</p>
            </div>
            <div className="flex justify-center max-w-2xl mx-auto">
              {renderPricingCard(enterprisePlan, 0)}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12 p-6 bg-card rounded-xl shadow-sm border max-w-2xl mx-auto">
          <p className="text-muted-foreground text-sm">
            <strong>30-Day Money-Back Guarantee</strong> • Expert Support • SLA Agreements • Setup Assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;