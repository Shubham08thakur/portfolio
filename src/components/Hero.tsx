
import { ArrowRight, Download, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Full Stack Developer",
    "UX/UI Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    let isMounted = true;
    const role = roles[currentRoleIndex];
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseDuration = 1500;

    const typeEffect = () => {
      if (!isMounted) return;

      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting && charIndex <= currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex));
        charIndex++;
        typingSpeed = 100;
      } 
      
      if (isDeleting) {
        setTypedText(currentRole.substring(0, charIndex));
        charIndex--;
        typingSpeed = 50;
      }
      
      if (charIndex === currentRole.length + 1) {
        isDeleting = true;
        typingSpeed = pauseDuration;
      }
      
      if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
      
      setTimeout(typeEffect, typingSpeed);
    };

    setTimeout(typeEffect, typingSpeed);

    return () => { isMounted = false; };
  }, [currentRoleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{ 
        background: "linear-gradient(to bottom right, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.99))"
      }}
    >
      {/* Background gradient effects with animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all duration-300 mb-2">
                Hello, I'm
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Shubham Thakur
              </h1>
              <div className="h-10 mt-4">
                <h3 className="text-xl sm:text-2xl text-gray-300 inline-flex items-center">
                  <span className="mr-2">I'm a</span>
                  <span className="text-purple-400">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </h3>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg max-w-xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
              I create beautiful, functional, and user-centered digital experiences.
              With expertise in both development and design, I bridge the gap
              between aesthetics and functionality.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white group transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 hover:border-purple-500 text-white group"
              >
                Download CV
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4 animate-fade-in" style={{ animationDelay: "1s" }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6 hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="h-6 w-6 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="relative hover-scale">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 blur-lg opacity-30 animate-pulse"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-purple-500/30 bg-dark-100 h-80 w-80 md:h-96 md:w-96">
                <img 
                  src="/lovable-uploads/e5305e66-d871-4779-9edc-de3b2978f347.png" 
                  alt="Shubham Thakur" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%", transform: "scale(0.95)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
