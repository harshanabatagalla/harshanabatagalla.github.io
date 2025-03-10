import React from 'react';
import { User, Layout, Server, Code, Database, Wrench } from 'lucide-react';
import { techSkills, categoryColors } from '../utils/data';

const About = () => {
  // Category icons mapping
  const categoryIcons = {
    "Frontend Technologies": <Layout size={20} />,
    "Backend Technologies": <Server size={20} />,
    "Programming Languages": <Code size={20} />,
    "Database": <Database size={20} />,
    "Other Tools": <Wrench size={20} />
  };

  return (
    <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <User size={24} className="text-[#f9826c] mr-2" />
          About Me
        </h2>
        
        <div className="space-y-4 text-gray-300 bg-[#1f2428] rounded-lg p-6 border border-[#1f2428]">
          <p>
            A self-motivated and skillful undergraduate, with a great interest in problem-solving.
            Skilled in JavaScript and TypeScript, with expertise in React and Node.js frameworks.
            Familiar with Angular and .NET Good team player who is always excited to face new challenges.
            Excited about tackling new challenges and working collaboratively in teams.
          </p>
          <p>
            With extensive hands-on experience, I excel in developing dynamic and user-friendly web applications, both on the frontend and backend.
            I stay abreast of industry trends, ensuring my skills remain current. As a fast learner, I adapt swiftly to new technologies and environments, consistently delivering high-quality solutions.
          </p>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-6">Skills</h3>
          
          <div className="space-y-8 bg-[#1f2428] rounded-lg p-6 border border-[#1f2428]">
            {Object.entries(techSkills).map(([category, skills]) => (
              <div key={category} className="mb-6 py-4 ">
                <div 
                  className="mb-4 pb-2 border-b flex items-center"
                  style={{ borderColor: categoryColors[category] }}
                >
                  <div 
                    className="mr-3 p-2 rounded-md" 
                    style={{ backgroundColor: `${categoryColors[category]}20` }}
                  >
                    <span style={{ color: categoryColors[category] }}>
                      {categoryIcons[category]}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-white">
                    {category}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2 ml-1">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="px-4 py-1 rounded-full text-xs flex items-center text-white"
                      style={{ 
                        border: `1px solid ${skill.borderColor}`
                      }}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;