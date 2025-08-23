import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">About Me</Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            AI-Driven <span className="gradient-text">Full-Stack Developer</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Full-stack developer with hands-on experience building <strong className="text-primary">real-time dashboards</strong>, <strong className="text-primary">WhatsApp automation flows</strong>, and <strong className="text-primary">scalable web applications</strong> using FastAPI and React. I specialize in creating intelligent solutions that bridge complex AI capabilities with real-world business needs, delivering measurable impact through automation and optimization.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-heading font-semibold text-primary mb-2">AI Agent Development</h3>
                <p className="text-sm text-muted-foreground">Building intelligent automation systems</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-heading font-semibold text-primary mb-2">LLM Applications</h3>
                <p className="text-sm text-muted-foreground">Implementing AI-powered solutions</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-heading font-semibold text-primary mb-2">Real-time Systems</h3>
                <p className="text-sm text-muted-foreground">Creating data-driven applications</p>
              </div>
            </div>

            <div className="text-center p-6 bg-secondary/30 rounded-lg border border-border/50">
              <h4 className="font-heading font-semibold mb-2 text-foreground">Education</h4>
              <p className="text-muted-foreground">
                <strong>B.E Computer Science</strong> • CGPA 8.74 • Aug 2020 – May 2024
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;