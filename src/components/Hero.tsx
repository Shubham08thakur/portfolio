
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{ 
        background: "linear-gradient(to bottom right, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.99))"
      }}
    >
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <div>
              <h2 className="text-lg sm:text-xl text-purple-400 font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2">
                Shubham Thakur
              </h1>
              <h3 className="text-xl sm:text-2xl text-gray-300 mt-4">
                Full Stack Developer & UX/UI Designer
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg max-w-xl">
              I create beautiful, functional, and user-centered digital experiences.
              With expertise in both development and design, I bridge the gap
              between aesthetics and functionality.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 hover:border-purple-500 text-white"
              >
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 blur-lg opacity-30"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-purple-500/30 bg-dark-100 h-80 w-80 md:h-96 md:w-96">
                <img 
                  src="/lovable-uploads/e5305e66-d871-4779-9edc-de3b2978f347.png" 
                  alt="Shubham Thakur" 
                  className="w-full h-full object-cover object-center transform scale-110"
                  style={{ objectPosition: "center 30%" }}
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
