import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InternshipCard from "@/components/InternshipCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample internship data
  const recommendedInternships = [
    {
      title: "Software Development Intern",
      company: "TechCorp India",
      location: "Bangalore, Karnataka", 
      type: "Full-time",
      duration: "6 months",
      stipend: "₹25,000/month",
      skills: ["React", "Node.js", "JavaScript", "Python"],
      matchScore: 95,
      isRecommended: true
    },
    {
      title: "Data Science Intern",
      company: "Analytics Pro",
      location: "Mumbai, Maharashtra",
      type: "Remote",
      duration: "4 months", 
      stipend: "₹20,000/month",
      skills: ["Python", "Machine Learning", "SQL", "Pandas"],
      matchScore: 88,
      isRecommended: true
    },
    {
      title: "Digital Marketing Intern",
      company: "Growth Masters",
      location: "Delhi, NCR",
      type: "Hybrid",
      duration: "3 months",
      stipend: "₹15,000/month",
      skills: ["SEO", "Social Media", "Analytics", "Content Writing"],
      matchScore: 82
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      
      {/* Recommended Internships Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your AI-Powered <span className="bg-gradient-secondary bg-clip-text text-transparent">Recommendations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Based on your profile and preferences, here are the internships our AI algorithm recommends for you.
            </p>
            <Button variant="professional" asChild>
              <Link to="/register">Complete Profile to See More Matches</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {recommendedInternships.map((internship, index) => (
              <InternshipCard
                key={index}
                {...internship}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/internships" className="flex items-center space-x-2">
                <span>Explore All Internships</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join thousands of students who have found their dream internships through our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/register">Create Your Profile</Link>
            </Button>
            <Button variant="professional" size="xl" asChild>
              <Link to="/companies">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
