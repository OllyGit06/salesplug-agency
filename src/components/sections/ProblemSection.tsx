import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Too Busy to Call",
      description: "Business owners are overwhelmed with daily operations"
    },
    {
      icon: Users,
      title: "Hiring is Expensive",
      description: "Training staff costs thousands with inconsistent results"
    },
    {
      icon: AlertTriangle,
      title: "Missed Opportunities",
      description: "Every missed call is a potential lost sale or customer"
    },
    {
      icon: DollarSign,
      title: "Inconsistent Results",
      description: "Human agents have off days, AI agents never do"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Why Business Owners Struggle With Calls
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            If you want to grow, you have to pick up the phone. But most owners are too busy or dislike telemarketing. 
            In fact, <span className="font-semibold text-primary">65% of sellers</span> say calling is the worst part of their job.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-red-800">
              Missed calls, expensive staff, and inconsistent results cost you sales every single day.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;