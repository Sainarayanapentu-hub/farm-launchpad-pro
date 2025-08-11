import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      content: ["123 Agricultural Drive", "Farmington Valley, CA 94523"],
    },
    {
      icon: Phone,
      title: "Call Us",
      content: ["Main: (555) 123-4567", "Emergency: (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email Us",
      content: ["info@agritech.com", "support@agritech.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your agricultural operations? Contact our team of experts 
            to discuss your specific needs and get a customized solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-elevated border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size (acres)</Label>
                <Input id="farmSize" placeholder="e.g., 500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your farming operation and how we can help..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-border/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="p-6 bg-harvest-gold/10 border-harvest-gold/20">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  24/7 Emergency Support
                </h3>
                <p className="text-muted-foreground text-sm">
                  For urgent agricultural emergencies, our team is available around the clock.
                </p>
                <Button variant="accent" size="sm">
                  Call Emergency Line
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;