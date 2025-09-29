import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Clock, Users2 } from "lucide-react";

const SolutionSection = () => {
  const benefits = [
    {
      icon: Phone,
      title: "Human-Like Intelligence",
      description: "AI agents that sound and respond like your best employees"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Never miss another call, even during holidays and weekends"
    },
    {
      icon: Users2,
      title: "Unlimited Scale",
      description: "Handle thousands of calls simultaneously without hiring"
    }
  ];

  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Salesplug Agency Handles Every Call{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  So You Don't Have To
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Salesplug Agency's AI agents make and answer calls with human-like intelligence. Whether it's outbound sales or inbound support, 
                your business is always covered 24/7. No excuses. No missed opportunities.
              </p>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="cta" size="lg">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Start Your Free Trial
            </Button>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Incoming Call</h4>
                    <p className="text-sm text-muted-foreground">Customer Support Request</p>
                  </div>
                  <div className="ml-auto bg-accent text-white px-3 py-1 rounded-full text-sm">
                    Connected
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm"><span className="font-semibold">Customer:</span> "Hi, I need help with my recent order."</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm"><span className="font-semibold">AI Agent:</span> "I'd be happy to help you with that. Let me pull up your account information right now."</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Response Time: 0.2s</span>
                  <span>Satisfaction: 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;