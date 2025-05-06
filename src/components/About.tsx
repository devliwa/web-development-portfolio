import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML & CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'UI/UX Design', percentage: 70 },
    { name: 'TypeScript', percentage: 65 },
  ];
  
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div 
          ref={(el) => (sectionsRef.current[0] = el)}
          className="opacity-0 translate-y-10 transition-all duration-1000 delay-100"
        >
          <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About text */}
          <div 
            ref={(el) => (sectionsRef.current[1] = el)}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-200"
          >
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate web developer with over 5 years of experience creating modern, 
              responsive websites and applications. I specialize in building clean, efficient, 
              and user-friendly interfaces that provide exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in web development began when I built my first website in college. 
              Since then, I've worked on various projects ranging from small business websites 
              to complex web applications, constantly expanding my skills and staying up-to-date 
              with the latest technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me hiking, reading about new technologies, 
              or experimenting with new design concepts. I believe in continuous learning 
              and pushing the boundaries of what's possible on the web.
            </p>
          </div>
          
          {/* Skills */}
          <div 
            ref={(el) => (sectionsRef.current[2] = el)}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-300"
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: '0%',
                        animation: `progressAnimation 1.5s ease-out forwards ${0.5 + index * 0.1}s` 
                      }}
                      data-width={`${skill.percentage}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Education & Experience */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div 
            ref={(el) => (sectionsRef.current[3] = el)}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-400"
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 pb-8">
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                <h4 className="text-xl font-medium">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">University Name, 2018-2022</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Graduated with honors. Focused on web development and user interface design.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                <h4 className="text-xl font-medium">Web Development Bootcamp</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Coding Academy, 2017</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Intensive 12-week program covering modern web development technologies.
                </p>
              </div>
            </div>
          </div>
          
          {/* Experience */}
          <div 
            ref={(el) => (sectionsRef.current[4] = el)}
            className="opacity-0 translate-y-10 transition-all duration-1000 delay-500"
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400 pb-8">
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                <h4 className="text-xl font-medium">Senior Frontend Developer</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Tech Company, 2022-Present</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Lead the development of responsive web applications. Collaborate with designers and backend developers to create seamless user experiences.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                <h4 className="text-xl font-medium">Web Developer</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Digital Agency, 2019-2022</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Developed websites for various clients. Implemented responsive designs and ensured cross-browser compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Keyframes for skill bar animation */}
      <style jsx>{`
        @keyframes progressAnimation {
          from { width: 0%; }
          to { width: var(--width, 0%); }
        }
        .bg-blue-600 {
          --width: attr(data-width);
        }
      `}</style>
    </section>
  );
};

export default About;