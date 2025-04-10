
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
};

const frontendSkills: Skill[] = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 88 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 82 },
  { name: "MongoDB", level: 80 },
  { name: "SQL", level: 78 },
  { name: "Firebase", level: 75 },
];

const designSkills: Skill[] = [
  { name: "Figma", level: 90 },
  { name: "Adobe XD", level: 85 },
  { name: "UI Design", level: 88 },
  { name: "UX Research", level: 82 },
  { name: "Prototyping", level: 87 },
];

const SkillBar = ({ name, level }: Skill) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-white">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <Progress value={level} className="h-2 bg-gray-700">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </Progress>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">Frontend Development</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">Backend Development</h3>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">Design</h3>
            <div className="space-y-4">
              {designSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["React", "Node.js", "TypeScript", "MongoDB", "Express", "Next.js", "Tailwind CSS", "Redux", "GraphQL", "Figma", "Firebase", "Git"].map((tech, index) => (
              <div 
                key={index}
                className="px-5 py-3 bg-dark-200 border border-gray-800 rounded-lg text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
