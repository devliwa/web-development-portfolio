import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation for the hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  // Scroll to About section when clicking the arrow
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-16 relative"
    >
      <div 
        ref={heroRef}
        className="container mx-auto px-6 py-12 flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Hello, I'm</span>
          <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
          A passionate <span className="text-teal-600 dark:text-teal-400">web developer</span> creating beautiful, functional experiences
        </h2>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I build modern, responsive websites and applications with a focus on clean code, 
            performance, and exceptional user experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <ArrowDownCircle size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;