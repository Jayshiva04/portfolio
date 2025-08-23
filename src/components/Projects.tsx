import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Zap, MessageSquare } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Real-time Support Dashboard",
      description: "A comprehensive dashboard for customer support with real-time chat, modular UI components, and multi-user synchronization. Built with React, Next.js, and ShadCN UI.",
      technologies: ["React", "Next.js", "ShadCN UI", "WebSocket", "FastAPI"],
      features: [
        "Real-time multi-user chat syncing",
        "Modular UI components for chat, settings, responses",
        "WebSocket-based live updates",
        "Responsive design with modern UI"
      ],
      icon: MessageSquare,
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      title: "WhatsApp Automation System",
      description: "Intelligent automation system integrating AiSensy endpoints and GraphQL-based Meta flows. Reduced manual lead response time by 40%.",
      technologies: ["FastAPI", "GraphQL", "AiSensy API", "Meta API", "WebHooks"],
      features: [
        "40% reduction in manual response time",
        "GraphQL-based Meta flow integration",
        "Automated lead processing",
        "Webhook-based call log ingestion"
      ],
      icon: Zap,
      color: "bg-green-500/10 text-green-400"
    },
    {
      title: "WhatsApp Channel Scheduler",
      description: "Automated content scheduling system for WhatsApp Channels, enabling hands-free marketing campaigns with queue management.",
      technologies: ["Python", "FastAPI", "WhatsApp API", "Scheduler", "AWS"],
      features: [
        "Automated content publishing",
        "Queue-based content management",
        "Hands-free marketing campaigns",
        "AWS-hosted transcript display"
      ],
      icon: Calendar,
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      title: "WhatsApp Groups Dashboard",
      description: "Real-time dashboard for WhatsApp group management with threaded views, AI-assisted summaries, and action-item extraction.",
      technologies: ["React", "FastAPI", "AI/ML", "Real-time API", "WebSocket"],
      features: [
        "Real-time group message fetching",
        "Threaded conversation views",
        "AI-assisted summaries",
        "Action-item extraction"
      ],
      icon: Users,
      color: "bg-orange-500/10 text-orange-400",
      status: "In Development"
    }
  ];

  const practiceProjects = [
    {
      title: "Coffee Shop Website",
      description: "Frontend practice project with modern design",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "E-commerce Page",
      description: "Frontend practice project with shopping cart functionality",
      technologies: ["React", "State Management", "UI/UX"]
    },
    {
      title: "Shiv Musical Accessories",
      description: "React app with routing and mobile responsiveness",
      technologies: ["React", "React Router", "Responsive Design"]
    }
  ];

  const pdfParser = {
    title: "PDF Parser Application",
    description: "Full-stack application for parsing and processing PDF documents with backend API and frontend interface",
    technologies: ["Python", "FastAPI", "React"],
    github: "https://github.com/Jayshiva04/pdf-parser"
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">Projects</Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Featured <span className="gradient-text">AI Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing AI integration and automation
          </p>
        </div>

        {/* Featured AI Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover:bg-secondary/30 transition-all duration-300 hover-glow animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${project.color}`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">{project.title}</h3>
                      {project.status && (
                        <Badge variant="secondary" className="mt-1">
                          {project.status}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                {project.title !== "WhatsApp Groups Dashboard" && (
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Screenshots
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Practice Projects Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              <span className="gradient-text">Practice Projects</span>
            </h3>
            <p className="text-muted-foreground">Frontend development practice and learning projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Practice Projects (first 3 columns) */}
            {practiceProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="space-y-3">
                  <h4 className="font-heading font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-muted/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
            
            {/* PDF Parser with GitHub link (4th column) */}
            <Card className="glass-card p-6 hover:bg-secondary/30 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="space-y-4">
                <h4 className="font-heading font-semibold text-primary group-hover:text-accent transition-colors">
                  {pdfParser.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {pdfParser.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pdfParser.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/20 hover:bg-primary/5 text-primary"
                    asChild
                  >
                    <a href={pdfParser.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;