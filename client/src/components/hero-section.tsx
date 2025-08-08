import { ChevronDown, User, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            {/* Profile picture */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-glow">
              <img
                src="/attached_assets/Picsart_24-07-26_16-27-41-892~3_upscaled.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-primary shadow-lg"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-[#2437a399]">
              Anubhab
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-up">
            Python Developer & Software Architect
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Final-year student at CV Raman Global University passionate about Python, 
            front-end development, and game design. I love building things that feel good 
            to use and actually solve real problems. Based in Cuttack.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            <a
              href="https://github.com/anubhab0101"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/anubhab-mohapatra-01-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/www_anubhabmaha1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <SiHackerrank className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://leetcode.com/u/anubhab_01_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <SiLeetcode className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://www.instagram.com/anubhab_01_/profilecard/?igsh=NTJ4am94Mjh2cnY%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/10 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
            </a>
          </div>

          {/* Scroll indicator above buttons */}
          <div className="flex flex-col items-center mb-4">
            <div className="animate-bounce mb-2">
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
  {/* Scroll indicator removed from behind buttons */}
    </section>
  );
}
