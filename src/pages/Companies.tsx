import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Companies = () => {
  const benefits = [
    {
      icon: Target,
      title: "AI-Powered Talent Matching",
      description: "Our advanced algorithms match your internship requirements with the most suitable candidates based on skills, interests, and career goals."
    },
    {
      icon: Users,
      title: "Access to Quality Candidates",
      description: "Connect with pre-screened, motivated students from top educational institutions across India."
    },
    {
      icon: CheckCircle,
      title: "Government Scheme Benefits",
      description: "Participate in the official PM Internship Scheme and receive government support and recognition."
    },
    {
      icon: Star,
      title: "Streamlined Hiring Process",
      description: "Reduce hiring time by 60% with our automated screening and matching system."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Register Your Company",
      description: "Create your company profile and get verified under the PM Internship Scheme"
    },
    {
      step: "2", 
      title: "Post Internship Opportunities",
      description: "Define your requirements, skills needed, and internship details"
    },
    {
      step: "3",
      title: "Get AI-Matched Candidates",
      description: "Receive curated candidate profiles that match your specific requirements"
    },
    {
      step: "4",
      title: "Interview & Hire",
      description: "Connect with candidates and complete the hiring process seamlessly"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Find the Perfect <br />
            <span className="text-secondary-foreground">Interns for Your Team</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Partner with the PM Internship Scheme and leverage AI to discover exceptional talent from India's top educational institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/company-register">Register Your Company</Link>
            </Button>
            <Button variant="professional" size="xl">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Partner With <span className="bg-gradient-primary bg-clip-text text-transparent">Our Platform?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of companies that have successfully hired talented interns through our AI-powered matching system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 border border-border/50">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              How It <span className="bg-gradient-secondary bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in just 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary mx-auto mt-6 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
              <div className="text-4xl font-bold text-success mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Matching Accuracy</div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
              <div className="text-4xl font-bold text-success mb-2">60%</div>
              <div className="text-muted-foreground">Faster Hiring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Find Your Next Intern?
          </h2>
          <p className="text-xl text-secondary-foreground/90 max-w-2xl mx-auto mb-8">
            Join the PM Internship Scheme today and start building your dream team with India's brightest talents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" asChild>
              <Link to="/company-register">Get Started Now</Link>
            </Button>
            <Button variant="professional" size="xl">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;