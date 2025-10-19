import React from 'react';
import AnimatedSection from './AnimatedSection';

const journeyData = [
  {
    date: '2022 – 2024',
    title: 'Technicien Spécialisé en Développement Informatique (Full-Stack Web Development)',
    org: 'OFPPT',
    description: 'Gained solid skills in full-stack web development, focusing on modern frameworks and logical problem-solving.',
    tags: ['React', 'Laravel', 'MySQL', 'UML'],
  },
  {
    date: '2024 – 2025',
    title: 'Trainee in Web Development Fundamentals',
    org: 'OFPPT',
    description: 'Focused on front-end and back-end principles, UI/UX, and teamwork collaboration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'],
  },
];

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 md:py-32 bg-[#0b0b0b]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-glow">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-16"></div>
        </AnimatedSection>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/10 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="relative flex items-center justify-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full border-2 border-white/50 z-10 timeline-glow"></div>
                  
                  {/* Timeline Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] p-6 bg-[#101010] border border-white/15 rounded-xl shadow-lg shadow-black/30 card-glow transition-all duration-300 transform hover:-translate-y-1 ${
                      index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}>
                    <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-md text-gray-300 italic mb-3">{item.org}</p>
                    <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/20 text-white/85 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;