import React from 'react';
import AnimatedSection from './AnimatedSection';

const smallCircles = [
  { top: '5%', left: '30%', size: 'w-16 h-16', seed: 'person1', anim: 'float-orbit-1 8s ease-in-out infinite' },
  { top: '25%', left: '85%', size: 'w-20 h-20', seed: 'person2', anim: 'float-orbit-2 10s ease-in-out infinite' },
  { top: '80%', left: '90%', size: 'w-12 h-12', seed: 'person3', anim: 'float-orbit-3 9s ease-in-out infinite' },
  { top: '75%', left: '15%', size: 'w-24 h-24', seed: 'person4', anim: 'float-orbit-4 12s ease-in-out infinite' },
  { top: '40%', left: '0%', size: 'w-14 h-14', seed: 'person5', anim: 'float-orbit-5 7s ease-in-out infinite' },
];

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Image Composition */}
                    <AnimatedSection>
                        <div className="relative w-full max-w-md mx-auto h-96">
                            {/* Main Portrait */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                <img
                                    src="/about-photo.jpg"
                                    alt="Abdellah Ait-si"
                                    className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-2 border-white shadow-2xl shadow-black/50"
                                />
                            </div>

                            {/* Orbiting Circles */}
                            {smallCircles.map((circle, index) => (
                                <div
                                    key={index}
                                    className="absolute"
                                    style={{ top: circle.top, left: circle.left }}
                                >
                                    <div 
                                        className={`${circle.size} rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]`}
                                        style={{ animation: circle.anim }}
                                    >
                                        <img
                                            src={`https://picsum.photos/seed/${circle.seed}/100/100?grayscale`}
                                            alt={`Collaborator ${index + 1}`}
                                            className="w-full h-full object-cover rounded-full border border-white/25"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                    
                    {/* Right Column - Text Content */}
                    <AnimatedSection delay={200}>
                        <h2 className="text-3xl md:text-4xl font-bold text-glow mb-2">About Me</h2>
                        <p className="text-xl text-gray-300 mb-6">Hi! I'm Abdellah Ait-si, a Full-Stack Web Developer.</p>
                        <p className="text-gray-300 leading-relaxed">
                            I'm passionate about building elegant and functional web applications, finding the perfect balance between creativity and logic to solve real-world problems.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default About;