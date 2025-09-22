import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import { User, GraduationCap, MapPin, Phone, Mail, FileText } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Create Your <span className="bg-gradient-primary bg-clip-text text-transparent">Profile</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Help our AI understand you better to find perfect internship matches
            </p>
            
            {/* Progress indicator */}
            <div className="flex items-center justify-center mt-6 space-x-2">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-3 h-3 rounded-full transition-all ${
                    num <= step ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-primary" />
                  <CardTitle>Personal Information</CardTitle>
                </div>
                <CardDescription>
                  Basic information to get started with your profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="your.email@example.com" className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" placeholder="+91 98765 43210" className="pl-10" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="location">Current Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="location" placeholder="City, State" className="pl-10" />
                  </div>
                </div>

                <Button onClick={nextStep} className="w-full" size="lg">
                  Continue to Education
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Education & Skills */}
          {step === 2 && (
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <CardTitle>Education & Skills</CardTitle>
                </div>
                <CardDescription>
                  Tell us about your educational background and skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="college">College/University</Label>
                  <Input id="college" placeholder="Enter your institution name" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="degree">Degree</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="bca">BCA</SelectItem>
                        <SelectItem value="bba">BBA</SelectItem>
                        <SelectItem value="bcom">B.Com</SelectItem>
                        <SelectItem value="ba">BA</SelectItem>
                        <SelectItem value="mtech">M.Tech</SelectItem>
                        <SelectItem value="mba">MBA</SelectItem>
                        <SelectItem value="mca">MCA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="year">Current Year</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="skills">Technical Skills</Label>
                  <Textarea 
                    id="skills" 
                    placeholder="e.g., JavaScript, Python, React, Machine Learning, Digital Marketing, etc."
                    rows={3}
                  />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={nextStep} className="flex-1">
                    Continue to Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Preferences */}
          {step === 3 && (
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <CardTitle>Internship Preferences</CardTitle>
                </div>
                <CardDescription>
                  Help us understand what you're looking for
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="domains">Preferred Domains</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {[
                      "Software Development",
                      "Data Science",
                      "Digital Marketing",
                      "Graphic Design",
                      "Content Writing",
                      "Business Development",
                      "Finance",
                      "HR"
                    ].map((domain) => (
                      <div key={domain} className="flex items-center space-x-2">
                        <Checkbox id={domain} />
                        <Label htmlFor={domain} className="text-sm font-normal">
                          {domain}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="workType">Work Type Preference</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="office">In-Office</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration">Preferred Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">
                    Back
                  </Button>
                  <Button variant="hero" className="flex-1" size="lg">
                    Create Profile & Get Matches
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;