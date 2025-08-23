import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Python" },
        { name: "TypeScript" },
        { name: "SQL" }
      ]
    },
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "ShadCN" }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "FastAPI" },
        { name: "WebSocket" },
        { name: "REST APIs" },
        { name: "GraphQL" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL" },
        { name: "SQLite" },
        { name: "Supabase" }
      ]
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS (Amplify, S3)" },
        { name: "GitHub Actions" },
        { name: "Alembic" }
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Git" },
        { name: "Figma" },
        { name: "Framer" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">Technical Skills</Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Technology <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover:bg-secondary/30 transition-all duration-300 hover-glow animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="justify-center py-2 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;