
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  FrontendIcon, BackendIcon, DatabaseIcon, DesignModelingIcon, 
  ToolsIcon, FigmaIcon, ProductivityIcon, CoreSkillsIcon 
} from './Icons';


const skillsData = [
  {
    category: "Frontend",
    icon: <FrontendIcon className="w-6 h-6 text-white/80" />,
    skills: ["HTML5", "CSS", "JavaScript", "React"]
  },
  {
    category: "Backend",
    icon: <BackendIcon className="w-6 h-6 text-white/80" />,
    skills: ["PHP", "Laravel", "Python"]
  },
  {
    category: "Databases",
    icon: <DatabaseIcon className="w-6 h-6 text-white/80" />,
    skills: ["MySQL"]
  },
  {
    category: "Software Design & Modeling",
    icon: <DesignModelingIcon className="w-6 h-6 text-white/80" />,
    skills: ["UML", "MSD", "MLD", "Algorithms"]
  },
  {
    category: "Tools & Technologies",
    icon: <ToolsIcon className="w-6 h-6 text-white/80" />,
    skills: ["Git", "GitHub", "VS Code", "Jenkins", "Jira"]
  },
  {
    category: "Design",
    icon: <FigmaIcon className="w-6 h-6 text-white/80" />,
    skills: ["Figma"]
  },
  {
    category: "Productivity & Project Management",
    icon: <ProductivityIcon className="w-6 h-6 text-white/80" />,
    skills: ["Excel", "Word", "PowerPoint", "MS Project"]
  },
  {
    category: "Core Skills",
    icon: <CoreSkillsIcon className="w-6 h-6 text-white/80" />,
    skills: ["Problem Solving"]
  },
];


const SkillCard: React.FC<{ category: string; icon: React.ReactNode; skills: string[]; delay: number; }> = ({ category, icon, skills, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="bg-[#101010] border border-white/10 rounded-xl p-6 h-full transition-all duration-300 skill-card-glow">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-sm font-semibold text-white uppercase tracking-widest">{category}</h3>
      </div>
      <hr className="border-white/10 mb-5" />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-1.5 bg-white/5 border border-white/20 text-white/80 rounded-full text-xs font-medium cursor-default transition-all duration-300 skill-pill-glow">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-glow">My Skills</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-16"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillsData.map((categoryData, index) => (
            <SkillCard key={categoryData.category} {...categoryData} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;