import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js. Features include product filtering, user authentication, shopping cart, and payment integration.",
      image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity tool for managing tasks and projects. Built with React and Firebase, featuring drag-and-drop functionality, task assignments, and progress tracking.",
      image: "https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecast application that displays current and future weather conditions for any location. Utilizes a weather API and features dynamic theming based on conditions.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "APIs", "CSS"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills. Features smooth animations, dark mode, and contact form functionality.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    }
  ];
  
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement | null>(null);
  
  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) observer.observe(titleRef.current);
    
    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 delay-100"
        >
          <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
          <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Here are some of my recent projects. Each project was selected to showcase different skills and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="opacity-0 translate-y-10 transition-all duration-1000 group"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex space-x-3">
                      <a 
                        href={project.demoLink} 
                        className="text-white hover:text-blue-400 transition-colors"
                        aria-label={`View ${project.title} demo`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a 
                        href={project.codeLink} 
                        className="text-white hover:text-blue-400 transition-colors"
                        aria-label={`View ${project.title} code`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;