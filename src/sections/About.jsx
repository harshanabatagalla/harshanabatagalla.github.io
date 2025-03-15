import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { User, Layout, Server, Code, Database, Wrench } from 'lucide-react';
import { techSkills } from '../utils/data';

const categoryIcons = {
  "Frontend Technologies": <Layout size={20} className="text-[#f9826c]" />,
  "Backend Technologies": <Server size={20} className="text-[#f9826c]" />,
  "Programming Languages": <Code size={20} className="text-[#f9826c]" />,
  "Database": <Database size={20} className="text-[#f9826c]" />,
  "Other Tools": <Wrench size={20} className="text-[#f9826c]" />
};

const About = () => {
  // Single animation control for the entire component
  const controls = useAnimation();

  // Start animations immediately when component mounts
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div className="h-full p-4 overflow-auto font-[JetBrains_Mono] bg-[#24292e] text-gray-300" >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-2xl font-bold text-white mb-6 flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <User size={24} className="text-[#f9826c] mr-2" />
          About Me
        </motion.h2>
        
        <motion.div
          className="space-y-4 bg-[#1f2428] rounded-lg p-5 border border-[#24292e] md:text-lg text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
        >
          <p>
            A self-motivated and skillful undergraduate, with a great interest in problem-solving.
            Skilled in JavaScript and TypeScript, with expertise in React and Node.js frameworks.
            Familiar with Angular and .NET. A good team player who is always excited to face new challenges.
          </p>
          <p>
            With extensive hands-on experience, I excel in developing dynamic and user-friendly web applications, both on the frontend and backend.
            I stay updated with industry trends, ensuring my skills remain current. As a fast learner, I adapt swiftly to new technologies and environments, consistently delivering high-quality solutions.
          </p>
        </motion.div>
        
        <div className="mt-8">
          <motion.h3
            className="text-xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={controls}
          >
            Skills
          </motion.h3>
          
          <div className="space-y-6">
            {Object.entries(techSkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                className="bg-[#1f2428] rounded-lg p-5 border border-[#30363d]"
                initial={{ opacity: 0, y: 10 }}
                animate={controls}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeOut",
                  // Small stagger but much faster overall
                  delay: 0.05 * index 
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 p-2 rounded-md bg-[#24292e] text-[#f9826c]">
                    {categoryIcons[category]}
                  </div>
                  <h4 className="md:text-lg text:md font-medium text-white">
                    {category}
                  </h4>
                </div>
                
                <div className="grid md:grid-cols-3 sm:grid-cols-2 cols-1 gap-4">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center px-3 py-1.5 rounded-md bg-[#2c313a] text-sm text-gray-300 hover:bg-[#30363d] transition-all md:gap-0 gap-3"
                    >
                      <img src={skill.icon} alt={skill.name} className="w-10 h-10 mr-2" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;