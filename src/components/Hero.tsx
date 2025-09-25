import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-food-donation.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>AI-Powered Food Rescue Platform</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Turn Food Waste Into{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Community Impact
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect surplus food with those who need it most. Our AI-powered platform makes 
                food donation simple, safe, and impactful while reducing waste and building stronger communities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                Start Donating
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 hover:bg-muted/50 text-lg px-8 py-6"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Meals Donated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.5K</div>
                <div className="text-sm text-muted-foreground">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">80%</div>
                <div className="text-sm text-muted-foreground">Waste Reduced</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={heroImage} 
                alt="Community food donation and sharing" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero/10"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-medium p-6 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-medium text-foreground">Live Donation</div>
                  <div className="text-xs text-muted-foreground">Fresh meals being shared now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;