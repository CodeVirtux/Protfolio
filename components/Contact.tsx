import React, { useState, FormEvent } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Mock form submission
        setStatus('success');
        setTimeout(() => setStatus(''), 3000);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-glow">Contact Me</h2>
                    <div className="w-20 h-1 bg-white mx-auto mb-16"></div>
                </AnimatedSection>

                <div className="max-w-2xl mx-auto">
                    <AnimatedSection delay={200}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <input type="text" id="name" name="name" required className="peer w-full p-3 bg-transparent border-b-2 border-gray-600 focus:border-white outline-none transition-colors" placeholder=" " />
                                <label htmlFor="name" className="absolute left-3 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Name</label>
                            </div>
                            <div className="relative">
                                <input type="email" id="email" name="email" required className="peer w-full p-3 bg-transparent border-b-2 border-gray-600 focus:border-white outline-none transition-colors" placeholder=" " />
                                <label htmlFor="email" className="absolute left-3 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Email</label>
                            </div>
                            <div className="relative">
                                <textarea id="message" name="message" rows={4} required className="peer w-full p-3 bg-transparent border-b-2 border-gray-600 focus:border-white outline-none transition-colors resize-none" placeholder=" "></textarea>
                                <label htmlFor="message" className="absolute left-3 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Message</label>
                            </div>
                            <button type="submit" className="w-full px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transform transition-transform duration-300 btn-glow focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">Send Message</button>
                        </form>
                    </AnimatedSection>
                </div>
            </div>

            {/* Success Toast */}
            <div className={`fixed bottom-5 right-5 p-4 rounded-lg text-white transition-all duration-300 ${status === 'success' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{backgroundColor: '#1a1a1a', border: '1px solid #333'}}>
                Message sent successfully!
            </div>
        </section>
    );
};

export default Contact;