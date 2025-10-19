import React, { useState, useEffect } from 'react';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-bold text-glow">Virtox</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-label={`Scroll to ${link} section`}
            >
              {link}
            </a>
          ))}
          <a
            href="/CV_Abdellah_Ait-si.pdf"
            download
            className="group relative inline-block px-6 py-2 text-sm font-medium text-black bg-white rounded-full transition-all duration-300 transform hover:scale-105 btn-glow focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Download CV
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="/CV_Abdellah_Ait-si.pdf"
              download
              className="px-6 py-2 text-sm font-medium text-black bg-white rounded-full transition-transform duration-300 transform hover:scale-105 btn-glow"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;