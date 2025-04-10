
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Blockchain Drug Supply Chain",
    description: "A blockchain-based solution for tracking pharmaceutical supply chains, ensuring transparency and authenticity of medications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Blockchain", "Solidity"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce platforms with analytics, inventory management, and order processing capabilities.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A feature-rich task management application with real-time updates, team collaboration, and progress tracking.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work across web development and UX/UI design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden group hover-scale">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-2">
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-200/80 backdrop-blur-sm rounded-full text-white hover:text-purple-400 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-dark-200/80 backdrop-blur-sm rounded-full text-white hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-gray-700 hover:border-purple-500 text-white"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
