import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Cpu, BarChart3, Droplets, Shield, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Crop Management",
      description: "Advanced monitoring and optimization of crop growth cycles using precision agriculture techniques.",
      features: ["Soil analysis", "Growth tracking", "Harvest planning"]
    },
    {
      icon: Cpu,
      title: "Smart Technology",
      description: "IoT sensors and AI-powered analytics to provide real-time insights for better decision making.",
      features: ["IoT monitoring", "AI analytics", "Automation systems"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Comprehensive data analysis to identify trends, predict outcomes, and optimize operations.",
      features: ["Performance metrics", "Predictive modeling", "Custom reports"]
    },
    {
      icon: Droplets,
      title: "Water Management",
      description: "Efficient irrigation systems and water conservation strategies for sustainable farming.",
      features: ["Smart irrigation", "Water conservation", "Quality monitoring"]
    },
    {
      icon: Shield,
      title: "Pest Control",
      description: "Integrated pest management solutions using eco-friendly and targeted approaches.",
      features: ["Biological control", "Monitoring systems", "Prevention strategies"]
    },
    {
      icon: Lightbulb,
      title: "Consulting",
      description: "Expert guidance from agricultural specialists to help you implement best practices.",
      features: ["Strategic planning", "Implementation support", "Training programs"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Agricultural Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive services designed to enhance productivity, sustainability, 
            and profitability across all aspects of modern agriculture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-warm-green rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-natural">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let our experts help you implement the right solutions for your specific needs. 
            Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;