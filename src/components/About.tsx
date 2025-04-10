
import { Code, Layout, PenTool, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer with a passion for creating beautiful and functional user experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">My Journey</h3>
            <p className="text-gray-300">
              I'm a passionate full stack developer and UX/UI designer with several years of experience building 
              modern web applications. I specialize in creating intuitive, responsive interfaces that provide 
              exceptional user experiences.
            </p>
            <p className="text-gray-300">
              With a background in both development and design, I bring a unique perspective to projects that 
              helps bridge the gap between aesthetics and functionality. I'm constantly learning and exploring 
              new technologies to stay at the forefront of web development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span>Team Player</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span>Detail Oriented</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span>Creative Thinker</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-purple-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Full Stack Development</h4>
              <p className="text-gray-400">
                Building robust, scalable applications with modern technologies across the entire stack.
              </p>
            </div>
            
            <div className="card p-6 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6 text-purple-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">UI/UX Design</h4>
              <p className="text-gray-400">
                Creating intuitive, engaging interfaces that provide exceptional user experiences.
              </p>
            </div>
            
            <div className="card p-6 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-purple-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Responsive Design</h4>
              <p className="text-gray-400">
                Crafting interfaces that work flawlessly across all devices and screen sizes.
              </p>
            </div>
            
            <div className="card p-6 hover-scale">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-purple-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Clean Code</h4>
              <p className="text-gray-400">
                Writing maintainable, efficient code following best practices and patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
