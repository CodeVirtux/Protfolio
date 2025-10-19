import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CodeIcon, ExternalLinkIcon } from './Icons';

const projectsData = [
  {
    title: "AI-Powered Code Assistant",
    description: "Intelligent code completion and review integrated with popular IDEs to boost developer productivity.",
    stack: ["TypeScript", "Python", "TensorFlow", "VS Code API", "Docker"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "CryptoTrade Dashboard",
    description: "A real-time cryptocurrency trading dashboard with advanced analytics and portfolio management features.",
    stack: ["Vue.js", "D3.js", "WebSocket", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1621383734041-5788008889fe?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Serverless E-commerce API",
    description: "A scalable, serverless backend for an e-commerce platform using microservices architecture.",
    stack: ["Node.js", "AWS Lambda", "DynamoDB", "API Gateway"],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Interactive Data Visualization",
    description: "A web-based tool for creating stunning and interactive charts from complex datasets.",
    stack: ["React", "D3.js", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    codeUrl: "#",
  },
    {
    title: "Real-time Collaborative Editor",
    description: "A Google Docs-like editor that allows multiple users to edit a document simultaneously.",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    image: "https://images.unsplash.com/photo-1516131206809-dd54865ca115?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "CI/CD Automation Pipeline",
    description: "An automated pipeline for building, testing, and deploying applications with Jenkins and Docker.",
    stack: ["Jenkins", "Docker", "GitHub Actions", "Shell Script"],
    image: "https://images.unsplash.com/photo-1669213198948-265608723913?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "#",
    codeUrl: "#",
  },
];

const ProjectCard = ({ title, description, image, stack, liveUrl, codeUrl, delay }) => (
    <AnimatedSection delay={delay}>
      <div className="group bg-black border border-white/15 rounded-xl overflow-hidden transition-all duration-300 card-glow hover:border-white/35 transform hover:-translate-y-2 flex flex-col h-full shadow-inner shadow-white/5">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-video object-cover grayscale transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">{title}</h3>
          <p className="text-white/70 mb-4 text-sm flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {stack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/5 border border-white/20 text-white/85 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto space-y-4 pt-4">
              <a href="#" className="block w-full text-center px-6 py-2 bg-white text-black font-semibold rounded-full text-sm transition-colors duration-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                  View Details
              </a>
              <div className="flex justify-center items-center space-x-6 text-sm">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-white/60 hover:text-white hover:underline transition-colors duration-300" aria-label={`View live demo of ${title}`}>
                      <ExternalLinkIcon className="w-4 h-4 mr-1.5" />
                      Live
                  </a>
                  <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-white/60 hover:text-white hover:underline transition-colors duration-300" aria-label={`View source code of ${title}`}>
                      <CodeIcon className="w-4 h-4 mr-1.5" />
                      Code
                  </a>
              </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#101010]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-glow">Projects</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-16"></div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;