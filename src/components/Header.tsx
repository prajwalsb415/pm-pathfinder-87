import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Building2, LogIn, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                PM Internship AI
              </span>
              <span className="text-xs text-muted-foreground">Smart Career Matching</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/internships" 
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth"
            >
              <Users className="w-4 h-4" />
              <span>Browse Internships</span>
            </Link>
            <Link 
              to="/companies" 
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth"
            >
              <Building2 className="w-4 h-4" />
              <span>For Companies</span>
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login" className="flex items-center space-x-1">
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/register" className="flex items-center space-x-1">
                <UserPlus className="w-4 h-4" />
                <span className="hidden sm:inline">Get Started</span>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;