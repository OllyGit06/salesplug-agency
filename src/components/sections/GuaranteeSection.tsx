import { Button } from "@/components/ui/button";
import { ShieldCheck, HeadphonesIcon, Video, Clock } from "lucide-react";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "30-Day Refund Guarantee",
      description: "If Salesplug Connect doesn't work for your business, get 100% of your money back"
    },
    {
      icon: HeadphonesIcon,
      title: "24/6 Live Chat & Ticket Support", 
      description: "Get help when you need it with our dedicated support team"
    },
    {
      icon: Video,
      title: "Tech Assistance via Skype/TeamViewer",
      description: "Personal screen-sharing support to get you set up perfectly"
    }
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="w-10 h-10 text-accent-foreground" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Try Salesplug Connect{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                100% Risk-Free
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We know new tech can feel uncertain — so we're taking on all the risk. Use Salesplug Connect for 30 days, 
              and if it doesn't work for your business, we'll refund 100% of your payment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-white rounded-xl shadow-sm border">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <guarantee.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border text-center space-y-6">
            <div className="flex items-center justify-center space-x-4 text-accent">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">Limited Time: No Risk, All Reward</span>
            </div>
            <p className="text-muted-foreground">
              Join thousands of businesses already using Salesplug Connect to automate their phone operations. 
              Start today and see results within 24 hours, or get your money back.
            </p>
            <Button variant="guarantee" size="xl" className="group">
              <ShieldCheck className="w-5 h-5 mr-2" />
              Start Risk-Free Today
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;