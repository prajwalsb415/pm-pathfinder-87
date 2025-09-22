import { Brain, Target, Zap, Shield, Users, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze your skills, interests, and career goals to find perfect internship matches.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Get tailored suggestions based on your profile, academic background, and career aspirations.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Zap,
      title: "Instant Applications",
      description: "Apply to multiple internships with one click using your comprehensive digital profile.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Shield,
      title: "Verified Opportunities",
      description: "All internships are verified and approved under the PM Internship Scheme guidelines.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Users,
      title: "Industry Networks",
      description: "Connect with professionals and build valuable networks in your field of interest.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: TrendingUp,
      title: "Career Growth Tracking",
      description: "Monitor your progress and receive insights to accelerate your professional development.",
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our <span className="bg-gradient-primary bg-clip-text text-transparent">AI Platform?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of internship matching with cutting-edge technology designed to accelerate your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;