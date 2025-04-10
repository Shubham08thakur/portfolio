import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Database,
  Layers,
  Layout,
  PenTool,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "design" | "other";
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 88, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 82, category: "frontend" },
  { name: "Redux", level: 80, category: "frontend" },
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 82, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "SQL", level: 78, category: "backend" },
  { name: "Firebase", level: 75, category: "backend" },
  { name: "GraphQL", level: 72, category: "backend" },
  // Design
  { name: "Figma", level: 90, category: "design" },
  { name: "Adobe XD", level: 85, category: "design" },
  { name: "UI Design", level: 88, category: "design" },
  { name: "UX Research", level: 82, category: "design" },
  { name: "Prototyping", level: 87, category: "design" },
  // Other
  { name: "Git", level: 88, category: "other" },
  { name: "Docker", level: 75, category: "other" },
  { name: "AWS", level: 70, category: "other" },
  { name: "Testing", level: 78, category: "other" },
];

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-purple-500" />,
    skills: ["React.js", "TypeScript", "Next.js", "HTML/CSS", "Tailwind CSS", "Redux"],
    description: "Building responsive, performant and accessible user interfaces with modern tooling"
  },
  {
    name: "Backend Development",
    icon: <Server className="w-8 h-8 text-purple-500" />,
    skills: ["Node.js", "Express", "MongoDB", "SQL", "Firebase", "GraphQL"],
    description: "Creating scalable and secure server-side applications and APIs"
  },
  {
    name: "Design & UX",
    icon: <PenTool className="w-8 h-8 text-purple-500" />,
    skills: ["Figma", "Adobe XD", "UI Design", "UX Research", "Prototyping", "Design Systems"],
    description: "Crafting beautiful interfaces and meaningful user experiences"
  },
  {
    name: "Programming Languages",
    icon: <Code className="w-8 h-8 text-purple-500" />,
    skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "C++"],
    description: "Proficiency across multiple programming languages and paradigms"
  },
  {
    name: "Databases",
    icon: <Database className="w-8 h-8 text-purple-500" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "DynamoDB"],
    description: "Working with various database systems for different application needs"
  },
  {
    name: "DevOps & Tools",
    icon: <Terminal className="w-8 h-8 text-purple-500" />,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"],
    description: "Streamlining development workflow and infrastructure management"
  },
];

// SkillLevel component displays a visual representation of skill proficiency
const SkillLevel = ({ level }: { level: number }) => {
  const dots = 5; // 5 dots total
  const filledDots = Math.round((level / 100) * dots);

  return (
    <div className="flex space-x-1">
      {Array.from({ length: dots }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < filledDots ? "bg-purple-500" : "bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My technical skills and proficiencies across development and design
          </p>
        </div>
        
        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-dark-200 border-gray-800 hover:border-purple-500/30 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-2">
                  {category.icon}
                  <CardTitle className="text-white">{category.name}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className="bg-dark-300 border-gray-700 text-gray-300 hover:border-purple-400 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Key Skills with Proficiency */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Proficiencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills
              .sort((a, b) => b.level - a.level)
              .slice(0, 12)
              .map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-dark-200 border border-gray-800 rounded-lg"
                >
                  <span className="text-white">{skill.name}</span>
                  <SkillLevel level={skill.level} />
                </div>
              ))}
          </div>
        </div>
        
        {/* Technologies/Tools */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Node.js", "TypeScript", "MongoDB", "Express", 
              "Next.js", "Tailwind CSS", "Redux", "GraphQL", "Figma", 
              "Firebase", "Git", "Docker", "AWS", "PostgreSQL", "Webpack",
              "Jest", "Python", "Sass", "Material UI", "Cypress", "Vercel"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-dark-200 border border-gray-800 
                           text-gray-300 hover:bg-dark-100 hover:border-purple-500 
                           transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
