import Header from "@/components/Header";
import InternshipCard from "@/components/InternshipCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Building2, Clock } from "lucide-react";
import { useState } from "react";

const Internships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Sample internships data
  const internships = [
    {
      title: "Frontend Developer Intern",
      company: "TechCorp India",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      duration: "6 months",
      stipend: "₹25,000/month",
      skills: ["React", "JavaScript", "CSS", "TypeScript"],
      matchScore: 95,
      isRecommended: true
    },
    {
      title: "Machine Learning Intern",
      company: "AI Innovations",
      location: "Hyderabad, Telangana",
      type: "Remote",
      duration: "4 months",
      stipend: "₹30,000/month",
      skills: ["Python", "TensorFlow", "Data Analysis", "Statistics"],
      matchScore: 92,
      isRecommended: true
    },
    {
      title: "Digital Marketing Intern",
      company: "Growth Masters",
      location: "Mumbai, Maharashtra",
      type: "Hybrid",
      duration: "3 months",
      stipend: "₹15,000/month",
      skills: ["SEO", "Social Media", "Analytics", "Content Writing"],
      matchScore: 88
    },
    {
      title: "Backend Developer Intern",
      company: "CloudTech Solutions",
      location: "Pune, Maharashtra",
      type: "Full-time",
      duration: "5 months",
      stipend: "₹22,000/month",
      skills: ["Node.js", "MongoDB", "Express", "AWS"],
      matchScore: 85
    },
    {
      title: "UI/UX Design Intern",
      company: "Design Studio",
      location: "Delhi, NCR",
      type: "Remote",
      duration: "4 months",
      stipend: "₹18,000/month",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      matchScore: 82
    },
    {
      title: "Data Analyst Intern",
      company: "Analytics Pro",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      duration: "6 months",
      stipend: "₹20,000/month",
      skills: ["SQL", "Python", "Excel", "Tableau"],
      matchScore: 80
    }
  ];

  const filterOptions = [
    "React", "Python", "JavaScript", "Machine Learning", "Digital Marketing",
    "Node.js", "UI/UX", "Data Analysis", "Remote", "Full-time", "Hybrid"
  ];

  const cities = ["All Cities", "Bangalore", "Mumbai", "Delhi", "Pune", "Hyderabad", "Chennai"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Discover <span className="bg-gradient-primary bg-clip-text text-transparent">Internships</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore {internships.length}+ verified internships from top companies across India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-2xl shadow-card mb-8 border border-border/50">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Location Filter */}
            <div className="lg:w-48">
              <Select>
                <SelectTrigger>
                  <MapPin className="w-4 h-4" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase().replace(" ", "-")}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Type Filter */}
            <div className="lg:w-40">
              <Select>
                <SelectTrigger>
                  <Building2 className="w-4 h-4" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Duration Filter */}
            <div className="lg:w-40">
              <Select>
                <SelectTrigger>
                  <Clock className="w-4 h-4" />
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Duration</SelectItem>
                  <SelectItem value="1-3">1-3 months</SelectItem>
                  <SelectItem value="3-6">3-6 months</SelectItem>
                  <SelectItem value="6+">6+ months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="professional">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filterOptions.slice(0, 8).map((filter) => (
              <Badge
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => {
                  setSelectedFilters(prev =>
                    prev.includes(filter)
                      ? prev.filter(f => f !== filter)
                      : [...prev, filter]
                  );
                }}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground">
            Showing {internships.length} internships
          </p>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by Match Score" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="match-high">Highest Match</SelectItem>
              <SelectItem value="match-low">Lowest Match</SelectItem>
              <SelectItem value="stipend-high">Highest Stipend</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              {...internship}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="professional" size="lg">
            Load More Internships
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Internships;