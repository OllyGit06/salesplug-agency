import { Button } from "@/components/ui/button";
import { TrendingUp, ShieldCheck, Clock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight">
              Scale Your Sales & Support
              <br />
              <span className="text-primary-glow">
                With AI Telephony
              </span>
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Stop missing calls. Stop losing sales. Let Salesplug Agency work 24/7 to grow your business 
              while you focus on what matters most.
            </p>
          </div>
          
          {/* Key Benefits Recap */}
          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="space-y-3">
              <TrendingUp className="w-8 h-8 mx-auto opacity-80" />
              <h3 className="font-semibold">Boost Sales</h3>
              <p className="text-sm opacity-80">24/7 outbound calling that never stops working</p>
            </div>
            <div className="space-y-3">
              <Clock className="w-8 h-8 mx-auto opacity-80" />
              <h3 className="font-semibold">Save Time</h3>
              <p className="text-sm opacity-80">Automate repetitive calls and focus on strategy</p>
            </div>
            <div className="space-y-3">
              <ShieldCheck className="w-8 h-8 mx-auto opacity-80" />
              <h3 className="font-semibold">Risk-Free</h3>
              <p className="text-sm opacity-80">30-day guarantee with full refund protection</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-12 group shadow-lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Get Started Risk-Free Today
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-12"
              >
                Watch Demo First
              </Button>
            </div>
            
            {/* Trust Elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div>✨ Setup in Under 5 Minutes</div>
              <div>🚀 24/6 Expert Support</div>
            </div>
          </div>
          
          {/* Urgency Element */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-lg font-semibold mb-2">Join 120,000+ Businesses Already Growing with Salesplug Agency</p>
            <p className="opacity-90">
              Don't let your competitors get ahead. Start automating your phone operations today 
              and see why Salesplug Agency is the #1 choice for AI telephony solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;