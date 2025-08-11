import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/agriculture-hero.jpg";

const Hero = () => {
  const features = [
    "Advanced crop monitoring",
    "Sustainable farming practices",
    "Expert agricultural consulting"
  ];

  return (
    <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern agriculture with green fields and farming equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-natural-beige rounded-full text-sm font-medium text-earth-brown">
              <span className="w-2 h-2 bg-warm-green rounded-full mr-2"></span>
              Leading Agricultural Solutions
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Cultivating 
                <span className="text-transparent bg-gradient-to-r from-warm-green to-field-green bg-clip-text block">
                  Tomorrow's Harvest
                </span>
                Today
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Empowering farmers with cutting-edge technology and sustainable practices 
                to maximize yield while protecting our environment for future generations.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-warm-green" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Acres Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right side - additional space for the image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;