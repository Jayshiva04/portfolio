import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Download, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">Contact</Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss AI-driven solutions and full-stack development opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:jayshivat02@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      jayshivat02@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a 
                      href="tel:+919655779196" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9655779196
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Resume Download */}
            <Card className="glass-card p-8">
              <h3 className="text-xl font-heading font-bold mb-4">Resume</h3>
              <p className="text-muted-foreground mb-6">
                Download my complete resume for detailed information about my experience and skills.
              </p>
              <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity hero-glow">
                <Download className="w-4 h-4 mr-2" />
                Download Resume PDF
              </Button>
            </Card>

            {/* Social Links */}
            <Card className="glass-card p-8">
              <h3 className="text-xl font-heading font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/jayshiva-t-118503226" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow text-center"
                >
                  <Linkedin className="w-6 h-6 mx-auto mb-2" />
                  <p className="font-medium">LinkedIn</p>
                </a>
                <a 
                  href="https://github.com/Jayshiva04" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 p-4 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow text-center"
                >
                  <Github className="w-6 h-6 mx-auto mb-2" />
                  <p className="font-medium">GitHub</p>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="What's this about?" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or how we can work together..."
                  rows={6}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity hero-glow"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="glass-card p-8 mt-12 text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Ready to Build Something <span className="gradient-text">Amazing</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're looking for AI integration, full-stack development, or innovative automation solutions, 
            I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity hero-glow">
              <Mail className="w-4 h-4 mr-2" />
              Start a Conversation
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary hover:bg-primary/5">
              View My Work
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;