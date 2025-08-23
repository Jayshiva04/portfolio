import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import portraitImage from "@/assets/Jayshiva_Passportsizepic.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm font-medium">
              🚀 Available for AI-focused roles
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Jayshiva T
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
              Full-stack Developer | AI & Automation Specialist
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Building intelligent automation and real-time systems that solve real business problems with AI.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Bangalore, India
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              9655779196
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              jayshivat02@gmail.com
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity hero-glow">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary hover:bg-primary/5">
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/jayshiva-t-118503226" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/Jayshiva04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:jayshivat02@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110"></div>
            <img 
              src={portraitImage} 
              alt="Jayshiva T - Full-stack Developer" 
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;