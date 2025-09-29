import { Button } from "@/components/ui/button";
import { Phone, Play } from "lucide-react";
import heroImage from "@/assets/hero-callsi.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0f2fe%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Breakthrough AI Telephony Agents{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  That Work 24/7
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Callsi's human-like AI phone agents handle sales, appointments, support & more — all without hiring staff.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch the Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span>4.8/5 Rating</span>
              </div>
              <div>120,000+ Businesses</div>
              <div>30-Day Guarantee</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Callsi AI Telephony Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              24/7 Active
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;