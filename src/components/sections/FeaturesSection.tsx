import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Globe2, 
  Mic, 
  ScrollText, 
  Smartphone, 
  ShieldCheck 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Phone,
      title: "Outbound Sales & Lead Qualification",
      description: "AI agents make sales calls, qualify leads, and book appointments automatically"
    },
    {
      icon: Calendar,
      title: "Appointment Booking & Reminders",
      description: "Seamless Google Calendar integration for scheduling and automated reminders"
    },
    {
      icon: MessageSquare,
      title: "Inbound Support & Message Taking",
      description: "Handle customer inquiries and take detailed messages 24/7"
    },
    {
      icon: FileText,
      title: "Customer Surveys & Feedback Calls",
      description: "Collect valuable feedback and conduct surveys with conversational AI"
    },
    {
      icon: Globe2,
      title: "Multilingual Conversations",
      description: "Serve global customers with AI agents that speak multiple languages"
    },
    {
      icon: Mic,
      title: "Multiple Human-Like Voice Options",
      description: "Choose from various natural-sounding voices to match your brand"
    },
    {
      icon: ScrollText,
      title: "Call Transcripts & Notifications",
      description: "Get detailed transcripts and instant notifications for every call"
    },
    {
      icon: Smartphone,
      title: "SMS Follow-Ups With Links",
      description: "Automatically send SMS with purchase links and follow-up information"
    },
    {
      icon: ShieldCheck,
      title: "100% Cold-Calling & DND Compliant",
      description: "Stay compliant with all regulations for cold calling and Do Not Disturb lists"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Everything Your Business Needs{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              In One Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Callsi combines all essential telephony features into one powerful AI-driven platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-smooth hover:border-primary/20">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;