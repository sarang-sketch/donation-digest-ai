import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Search, Truck, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "List Your Food",
      description: "Upload photos of surplus food with expiry details. Our AI automatically categorizes and validates freshness.",
      color: "from-primary to-primary-hover"
    },
    {
      icon: Search,
      title: "Smart Matching",
      description: "AI instantly connects your donation with nearby NGOs, charities, or individuals based on location and need.",
      color: "from-accent to-accent-hover"
    },
    {
      icon: Truck,
      title: "Quick Pickup",
      description: "Receive pickup confirmation with QR codes for validation. Track delivery in real-time through our platform.",
      color: "from-success to-success"
    },
    {
      icon: Heart,
      title: "Make Impact",
      description: "Earn Green Points, see your community impact, and help build a sustainable food ecosystem.",
      color: "from-warning to-warning"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-primary font-medium">
            Simple Process
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            How ZeroWaste Bites Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From surplus food to community impact in just four simple steps. 
            Our streamlined process makes donation effortless and rewarding.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Step Number */}
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-medium`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-6 py-3 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Join 2,500+ Active Food Heroes</span>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
          >
            Start Your Impact Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;