import { useState } from "react";
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink, Verified } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Certificate } from "@shared/schema";

export function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: certificates = [], isLoading } = useQuery<Certificate[]>({
    queryKey: ['/api/certificates'],
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-muted rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="relative">
            <div className="h-96 bg-muted rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  if (certificates.length === 0) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              No certificates available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentCertificate = certificates[currentIndex];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills
            and stay current with industry trends.
          </p>
        </div>

        <div className="relative">
          {/* Main Certificate Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-card via-card to-card/80">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Certificate Image */}
                  <div className="relative group">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
                      <img
                        src={currentCertificate.image ? currentCertificate.image.replace(/^@assets\//, '/attached_assets/') : "/placeholder-certificate.svg"}
                        alt={currentCertificate.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                        {currentCertificate.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary font-semibold mb-4">
                        <Verified className="w-5 h-5" />
                        <span>{currentCertificate.issuer}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {currentCertificate.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>Completed: {new Date(currentCertificate.issueDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>

                      {currentCertificate.credentialId && (
                        <div className="text-sm text-muted-foreground">
                          <strong>Credential ID:</strong> {currentCertificate.credentialId}
                        </div>
                      )}
                    </div>

                    {/* Skills */}
                    {currentCertificate.skills && (
                      <div>
                        <h4 className="font-semibold mb-2">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentCertificate.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-sm">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Navigation and Verification */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2">
                        {/* Navigation Buttons */}
                        {certificates.length > 1 && (
                          <>
                            <Button
                              onClick={prevSlide}
                              variant="outline"
                              size="sm"
                              className="border-2 hover:bg-primary hover:text-white transition-all duration-300"
                            >
                              <ChevronLeft className="w-4 h-4 mr-1" />
                              Previous
                            </Button>
                            
                            <Button
                              onClick={nextSlide}
                              variant="outline"
                              size="sm"
                              className="border-2 hover:bg-primary hover:text-white transition-all duration-300"
                            >
                              Next
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </>
                        )}
                      </div>

                      {/* Verification Link */}
                      {currentCertificate.credentialUrl && currentCertificate.credentialUrl !== "#" && (
                        <Button
                          asChild
                          className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
                        >
                          <a
                            href={currentCertificate.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Verify</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dots Indicator */}
        {certificates.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Certificate Counter */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} of {certificates.length} certificates
          </p>
        </div>
      </div>
    </section>
  );
}