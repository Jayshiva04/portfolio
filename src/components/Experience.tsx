import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Business Hero",
      position: "Fullstack Developer",
      period: "Dec 2024 – Jul 2025",
      location: "Bangalore",
      type: "Full-time",
      highlights: [
        "Built real-time support dashboard with modular UI components using React, Next.js, and ShadCN UI",
        "Reduced manual lead response time by 40% through WhatsApp automation with AiSensy and GraphQL-based Meta flows",
        "Enabled real-time multi-user chat syncing using WebSockets for enhanced team collaboration",
        "Developed FastAPI endpoints for message handling, chat storage, and webhook-based call log ingestion",
        "Optimized data fetch logic reducing operational latency for AWS-hosted transcript display"
      ],
      challenge: {
        title: "Key Challenge",
        description: "Solved slow media processing by analyzing Meta vs AiSensy endpoints and implementing hybrid solution with Meta's direct endpoint."
      }
    },
    {
      company: "Business Hero",
      position: "Fullstack Intern",
      period: "Sep 2024 – Nov 2024",
      location: "Remote / Bangalore",
      type: "Internship",
      highlights: [
        "Built and deployed Business Hero's marketing website independently using Framer",
        "Contributed React components to internal dashboard following Tailwind + ShadCN UI system",
        "Developed FastAPI routes and practiced backend schema design",
        "Generated internal team assets using Midjourney AI prompts"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">Experience</Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card p-8 hover:bg-secondary/30 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-primary">{exp.position}</h3>
                  <h4 className="text-xl font-semibold">{exp.company}</h4>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.type}
                  </Badge>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-4">
                <h5 className="font-semibold text-lg">Key Projects & Achievements:</h5>
                <div className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenge (if present) */}
              {exp.challenge && (
                <Card className="mt-6 bg-primary/5 border-primary/20 p-6">
                  <h5 className="font-semibold text-primary mb-3">{exp.challenge.title}:</h5>
                  <p className="text-muted-foreground leading-relaxed">{exp.challenge.description}</p>
                </Card>
              )}
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="glass-card p-8 mt-12">
          <h3 className="text-2xl font-heading font-bold mb-6 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="flex justify-center">
            <div className="text-center p-6 rounded-lg bg-secondary/30">
              <h4 className="font-semibold text-lg mb-2">Full Stack Development Course</h4>
              <p className="text-muted-foreground mb-2">Code Purple Academy</p>
              <Badge variant="outline">2024</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;