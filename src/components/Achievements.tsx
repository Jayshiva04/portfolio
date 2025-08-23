import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "KIMO's Edge '23",
      description: "4th Rank out of 500+ participants",
      category: "Competition",
      detail: "Intra-College Tech Competition",
      icon: Trophy,
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    },
    {
      title: "Anna University Academic Topper",
      description: "1st Rank, First Semester (CGPA 9.1)",
      category: "Academic",
      detail: "Outstanding academic achievement",
      icon: Award,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "WhatsApp Automation Impact",
      description: "40% reduction in manual response time",
      category: "Professional",
      detail: "Measurable business impact through automation",
      icon: Zap,
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    }
  ];

  const stats = [
    {
      number: "8.74",
      label: "Final CGPA",
      description: "B.E Computer Science"
    },
    {
      number: "40%",
      label: "Efficiency Gain",
      description: "WhatsApp automation impact"
    },
    {
      number: "4th",
      label: "Competition Rank",
      description: "Out of 500+ participants"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">Achievements</Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 text-center hover:bg-secondary/30 transition-all duration-300 hover-glow animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="space-y-2">
                <h3 className="text-3xl font-heading font-bold gradient-text">{stat.number}</h3>
                <p className="font-semibold">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`glass-card p-6 hover:bg-secondary/30 transition-all duration-300 hover-glow animate-slide-up border ${achievement.color.split(' ').pop()}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="space-y-4">
                {/* Achievement Header */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${achievement.color.replace('border-', '').replace('/20', '')}`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-bold text-lg">{achievement.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                    <p className="text-primary font-semibold mb-1">{achievement.description}</p>
                    <p className="text-muted-foreground text-sm">{achievement.detail}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;