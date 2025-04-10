import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Blockchain Drug Supply Chain",
    description: "A blockchain-based solution for tracking pharmaceutical supply chains, ensuring transparency and authenticity of medications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Blockchain", "Solidity"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true
  },
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce platforms with analytics, inventory management, and order processing capabilities.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A feature-rich task management application with real-time updates, team collaboration, and progress tracking.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true
  },
  {
    title: "AI Content Generator",
    description: "A tool that leverages machine learning to generate high-quality content for blogs, social media, and marketing materials.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    title: "Personal Finance Tracker",
    description: "An application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Node.js", "MongoDB", "D3.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    title: "Smart Home Controller",
    description: "An IoT solution that connects and controls smart home devices through a unified, user-friendly interface.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MQTT", "IoT"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work across web development and UX/UI design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="card overflow-hidden group hover-scale">
              <div className="relative overflow-hidden h-56">
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
        
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project, index) => (
            <Card key={index} className="bg-dark-100 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">{project.description}</p>
                    <div className="flex gap-2 mt-auto">
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
