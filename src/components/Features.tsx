import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Camera, 
  Recycle, 
  Trophy, 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  Mic 
} from "lucide-react";
import aiScanningImage from "@/assets/ai-food-scanning.jpg";
import wasteManagementImage from "@/assets/waste-management.jpg";
import gamificationImage from "@/assets/gamification-rewards.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Expiry Tracker",
      description: "Smart scanning technology that automatically tracks expiry dates and sends timely donation reminders.",
      badge: "AI-Enabled",
      image: aiScanningImage
    },
    {
      icon: Camera,
      title: "QR Code Validation",
      description: "Quick pickup validation system with QR codes for seamless food donation and tracking.",
      badge: "Instant",
      image: null
    },
    {
      icon: Recycle,
      title: "Smart Waste Management",
      description: "Categorize unusable food waste into compostable, recyclable, or bio-gas usable materials automatically.",
      badge: "Eco-Friendly",
      image: wasteManagementImage
    },
    {
      icon: Trophy,
      title: "Gamification & Rewards",
      description: "Earn Green Points for every contribution and redeem them for discounts and eco-friendly products.",
      badge: "Rewarding",
      image: gamificationImage
    },
    {
      icon: Shield,
      title: "AI Freshness Detection",
      description: "Advanced image analysis ensures food safety by checking freshness before donation approval.",
      badge: "Safe",
      image: null
    },
    {
      icon: BarChart3,
      title: "Impact Dashboard",
      description: "Track your community impact with real-time metrics on meals donated, waste reduced, and CO₂ saved.",
      badge: "Analytics",
      image: null
    },
    {
      icon: AlertTriangle,
      title: "Emergency Relief Mode",
      description: "Priority system for natural disasters connecting bulk donations with relief teams instantly.",
      badge: "Critical",
      image: null
    },
    {
      icon: Mic,
      title: "Voice Assistant",
      description: "Multi-language voice support for accessibility, making donations simple for everyone.",
      badge: "Accessible",
      image: null
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-primary font-medium">
            Unique Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Revolutionary Food Rescue Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines AI, community engagement, and smart logistics to create 
            the most efficient food donation and waste management system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
              <CardHeader className="space-y-4">
                {feature.image && (
                  <div className="relative overflow-hidden rounded-lg h-32 mb-2">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;