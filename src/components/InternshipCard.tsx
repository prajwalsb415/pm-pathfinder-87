import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, MapPin, Clock, IndianRupee, Star } from "lucide-react";

interface InternshipCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  skills: string[];
  matchScore: number;
  logo?: string;
  isRecommended?: boolean;
}

const InternshipCard = ({
  title,
  company,
  location,
  type,
  duration,
  stipend,
  skills,
  matchScore,
  isRecommended = false
}: InternshipCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 border border-border/50 hover:border-primary/20 relative overflow-hidden">
      {isRecommended && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="default" className="bg-gradient-secondary text-secondary-foreground">
            <Star className="w-3 h-3 mr-1" />
            AI Match
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground font-medium">{company}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-success">{matchScore}%</div>
            <div className="text-xs text-muted-foreground">Match</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <IndianRupee className="w-4 h-4" />
            <span>{stipend}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="professional" size="sm" className="flex-1">
            View Details
          </Button>
          <Button 
            variant={isRecommended ? "hero" : "default"} 
            size="sm" 
            className="flex-1"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;