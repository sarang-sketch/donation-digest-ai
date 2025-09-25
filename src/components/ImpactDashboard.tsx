import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Leaf, 
  MapPin, 
  Clock, 
  Award 
} from "lucide-react";

const ImpactDashboard = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "Meals Donated",
      value: "52,847",
      change: "+23%",
      description: "This month",
      color: "text-success"
    },
    {
      icon: Users,
      title: "People Fed",
      value: "31,205",
      change: "+18%",
      description: "Lives impacted",
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "CO₂ Saved",
      value: "145.2",
      change: "+31%",
      description: "Tons reduced",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Active Cities",
      value: "127",
      change: "+12%",
      description: "Locations served",
      color: "text-warning"
    }
  ];

  const recentActivity = [
    {
      action: "Fresh Meals Donated",
      location: "Mumbai Restaurant District",
      time: "2 min ago",
      amount: "45 meals"
    },
    {
      action: "Waste Diverted",
      location: "Delhi University Campus",
      time: "5 min ago",
      amount: "23 kg"
    },
    {
      action: "Emergency Relief",
      location: "Flood Relief Center",
      time: "12 min ago",
      amount: "200 meals"
    },
    {
      action: "Community Pickup",
      location: "Bangalore Tech Park",
      time: "18 min ago",
      amount: "67 meals"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-primary font-medium">
            Real-Time Impact
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Community Impact Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the real-time difference our community is making. Every donation, 
            every pickup, every meal shared creates lasting positive change.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-card hover:shadow-medium transition-all duration-300 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className={`w-8 h-8 rounded-lg bg-gradient-accent/10 flex items-center justify-center`}>
                  <metric.icon className={`w-4 h-4 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-foreground">
                    {metric.value}
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className={`${metric.color} font-medium`}>{metric.change}</span>
                    <span className="text-muted-foreground">{metric.description}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Activity Feed */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">Live Activity Feed</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm text-success font-medium">Live</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{activity.action}</div>
                      <div className="text-sm text-muted-foreground flex items-center space-x-2">
                        <MapPin className="w-3 h-3" />
                        <span>{activity.location}</span>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="font-semibold text-success">{activity.amount}</div>
                      <div className="text-sm text-muted-foreground flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Achievement Card */}
            <Card className="bg-gradient-warm text-warning-foreground border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <CardTitle className="text-lg">Community Hero</CardTitle>
                    <p className="text-sm opacity-90">This Month's Achievement</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed opacity-90">
                  Our community has prevented <span className="font-bold">12.3 tons</span> of food 
                  waste from reaching landfills this month alone!
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Response Time</span>
                  <span className="font-semibold text-foreground">8 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-semibold text-success">94.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Volunteers</span>
                  <span className="font-semibold text-accent">1,247</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;