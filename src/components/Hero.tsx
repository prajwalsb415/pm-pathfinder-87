import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-internship.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered internship matching platform" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Powered by Advanced AI Matching</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find Your Perfect{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Internship
            </span>{" "}
            Match
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the Prime Minister's Internship Scheme and discover opportunities 
            tailored to your skills, interests, and career goals through our AI-powered platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/register" className="flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="professional" size="xl" asChild className="w-full sm:w-auto">
              <Link to="/internships">Explore Opportunities</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 mx-auto">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Matching Accuracy</div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-xl mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Internships</div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;