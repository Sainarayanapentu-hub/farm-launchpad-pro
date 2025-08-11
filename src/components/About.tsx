import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Calendar, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: "25+",
      label: "Years Experience",
      description: "Leading agricultural innovation"
    },
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Farmers we've helped succeed"
    },
    {
      icon: Calendar,
      number: "1000+",
      label: "Projects Completed",
      description: "Successful implementations"
    },
    {
      icon: Target,
      number: "40%",
      label: "Average Yield Increase",
      description: "Improvement for our clients"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Pioneering Sustainable 
                <span className="text-transparent bg-gradient-to-r from-warm-green to-field-green bg-clip-text">
                  {" "}Agriculture Solutions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over two decades, we've been at the forefront of agricultural innovation, 
                helping farmers embrace technology while respecting traditional farming wisdom.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize agriculture through sustainable practices and cutting-edge technology, 
                  ensuring food security for future generations while protecting our planet's resources.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We combine traditional agricultural knowledge with modern technology, creating 
                  customized solutions that respect both the environment and the unique needs of each farm.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Learn Our Story
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-natural transition-all duration-300 border-border/50"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mx-auto">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-warm-green/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Sustainability</h4>
              <p className="text-muted-foreground">
                We prioritize practices that protect the environment for future generations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-harvest-gold/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🔬</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Innovation</h4>
              <p className="text-muted-foreground">
                Continuously advancing agricultural practices through technology and research.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-earth-brown/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Partnership</h4>
              <p className="text-muted-foreground">
                Building lasting relationships with farmers based on trust and mutual success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;