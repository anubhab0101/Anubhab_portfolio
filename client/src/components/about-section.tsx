import { Brain, Code, Cog, Server, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Python Development",
      color: "text-primary",
    },
    {
      icon: Cog,
      title: "Automation",
      color: "text-secondary",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "text-accent",
    },
    {
      icon: Server,
      title: "Backend Systems",
      color: "text-success",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate Python developer with a strong focus on writing
            efficient, maintainable code and building scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">About Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Anubhab — a Final-year student at CV Raman Global University who's really into Python, 
                front-end development, and game design. I enjoy turning ideas into clean, functional code and 
                designing user experiences that make sense. Whether I'm working on a Python backend-based website, 
                an app, or a game, I focus on making it simple, smooth, and meaningful.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow duration-300 hover:scale-105"
                  >
                    <CardContent className="p-4">
                      <skill.icon className={`w-8 h-8 ${skill.color} mb-2`} />
                      <h4 className="font-semibold">{skill.title}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">Bachelor's Degree</h4>
                      <p className="text-primary font-medium">CV Raman Global University</p>
                      <p className="text-muted-foreground">Bhubaneswar</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2022 - 2026</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">Higher Secondary</h4>
                      <p className="text-secondary font-medium dark:text-secondary-foreground">Sakti Higher Secondary School</p>
                      <p className="text-muted-foreground">Cuttack</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2020 - 2022</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
