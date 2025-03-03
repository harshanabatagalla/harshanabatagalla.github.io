import React, { useState } from 'react';
import { projects } from '../utils/data';
import { FolderKanban, Github, ExternalLink } from 'lucide-react';
import { assets } from '../assets/assets';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div id="projects-section" className="h-full p-6 overflow-auto">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <FolderKanban size={24} className="text-[#007ACC] mr-2" />
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="bg-[#2D2D2D] rounded-lg overflow-hidden border border-[#333333] hover:border-[#007ACC] transition-transform transform hover:scale-105 shadow-lg relative"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {project.image && (
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div 
                  className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center space-x-4 transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-[#1E1E1E] rounded-full hover:bg-[#007ACC] transition-colors"
                    >
                      <Github className="h-6 w-6 text-white" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-[#1E1E1E] rounded-full hover:bg-[#007ACC] transition-colors"
                    >
                      <ExternalLink className="h-6 w-6 text-white" />
                    </a>
                  )}
                </div>
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-[#1E1E1E] px-3 py-1 rounded-md text-xs text-[#007ACC]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-[#252526] rounded-lg border border-[#333333]">
        <p className="text-gray-400">
          <span className="text-green-400">// </span>
          More projects available on my GitHub profile. Check them out!
        </p>
      </div>
    </div>
  );
};

export default Projects;