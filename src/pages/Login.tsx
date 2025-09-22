import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import { Mail, Lock, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to access your personalized internship recommendations
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LogIn className="w-5 h-5 text-primary" />
                <span>Sign In</span>
              </CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button className="w-full" size="lg" variant="hero">
                Sign In
              </Button>

              <Separator />

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link 
                    to="/register" 
                    className="text-primary hover:underline font-medium"
                  >
                    Create one here
                  </Link>
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-xs text-muted-foreground text-center">
                  By signing in, you agree to the PM Internship Scheme 
                  <Link to="/terms" className="text-primary hover:underline mx-1">
                    Terms of Service
                  </Link>
                  and
                  <Link to="/privacy" className="text-primary hover:underline mx-1">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;