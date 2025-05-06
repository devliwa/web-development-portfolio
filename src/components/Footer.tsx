import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold text-blue-400">Portfolio</a>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating beautiful, functional web experiences that help businesses grow and succeed.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full mt-4 md:mt-0 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;