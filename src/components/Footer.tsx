import { Button } from "@/components/ui/button";
import { Leaf, Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ZeroWaste Bites</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Transforming surplus food into community impact through AI-powered 
              donation matching and smart waste management.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-background/80">Made with love for our planet</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-3">
              <a href="#features" className="block text-background/80 hover:text-background transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="block text-background/80 hover:text-background transition-colors">
                How It Works
              </a>
              <a href="#impact" className="block text-background/80 hover:text-background transition-colors">
                Impact Dashboard
              </a>
              <a href="#community" className="block text-background/80 hover:text-background transition-colors">
                Community
              </a>
            </div>
          </div>

          {/* For Organizations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Organizations</h3>
            <div className="space-y-3">
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Restaurants
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Hotels & Hostels
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Corporate Canteens
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                NGOs & Charities
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">
                Emergency Relief
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-background/80">
                <Mail className="w-4 h-4" />
                <span>hello@zerowastebites.com</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Delhi, Bangalore</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-background/80 text-sm">
              Get the latest updates on our impact and new features
            </p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-background/40"
              />
              <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/60 text-sm">
            © 2024 ZeroWaste Bites. All rights reserved.
          </div>
          <div className="flex space-x-6 text-background/60 text-sm">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;