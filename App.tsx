import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHoveringLink(
        target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button') !== null
      );
    };

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', checkScrollTop);
    }
  }, [showScroll]);

  return (
    <div className="bg-[#0b0b0b] text-white selection:bg-white selection:text-black">
      <div className="backdrop-noise"></div>
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-200"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isHoveringLink ? '40px' : '10px',
          height: isHoveringLink ? '40px' : '10px',
          border: `2px solid ${isHoveringLink ? 'rgba(255,255,255,0.5)' : 'white'}`,
          transform: `translate(-50%, -50%) scale(${isHoveringLink ? 1 : 1})`,
          backgroundColor: isHoveringLink ? 'rgba(255,255,255,0.1)' : 'white',
        }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {showScroll && (
        <a 
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full border border-white/50 bg-black/50 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white back-to-top-btn"
        >
          <svg className="w-6 h-6 text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </a>
      )}
    </div>
  );
}

export default App;