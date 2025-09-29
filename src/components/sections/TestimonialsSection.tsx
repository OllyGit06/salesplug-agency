import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const stats = [
    { rating: "4.8", platform: "Google", reviews: "2,500+" },
    { rating: "4.6", platform: "Trustpilot", reviews: "1,800+" },
    { rating: "4.9", platform: "G2", reviews: "500+" },
    { rating: "4.7", platform: "Capterra", reviews: "300+" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      content: "Salesplug Agency transformed the way we handle calls. It feels like having a full-time sales team for a fraction of the cost.",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      role: "Owner, Rodriguez Real Estate",
      content: "I was skeptical about AI handling our calls, but Salesplug Agency sounds so natural that clients can't tell the difference. Game changer!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Marketing Director, GrowthCorp",
      content: "Our lead qualification improved by 300% after implementing Salesplug Agency. The 24/7 availability means we never miss an opportunity.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Trusted by{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              120,000+ Businesses
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of successful businesses already using Salesplug Agency
          </p>
        </div>
        
        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3 p-6 bg-white rounded-xl shadow-sm border">
              <div className="flex justify-center text-yellow-400 mb-2">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">{stat.rating} Stars</div>
                <div className="text-sm text-muted-foreground">{stat.platform}</div>
                <div className="text-xs text-muted-foreground">{stat.reviews} Reviews</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Customer Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mb-3">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Company Backing */}
        <div className="bg-gradient-feature rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Backed by Teknikforce</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Salesplug Agency is proudly backed by Teknikforce, a company with 120,000+ satisfied users and 
            5-star ratings across Google, Trustpilot, G2, and Capterra. Your success is our reputation.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div>⭐ 5-Star Google Rating</div>
            <div>🏆 Top Rated on Trustpilot</div>
            <div>🥇 Leader on G2 & Capterra</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;