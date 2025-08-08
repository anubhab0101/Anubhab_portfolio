import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CertificatesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">
                Anubhab<span className="text-primary">.</span>
              </span>
            </div>
            
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Python developer passionate about building scalable solutions with clean architecture and modern technologies.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-200"
              >
                Testimonials
              </button>
              <button 
                onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-200"
              >
                Certificates
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
            
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-500">
                &copy; 2024 Anubhab Mohapatra. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
