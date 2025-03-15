import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { User, Layout, Server, Code, Database, Wrench, Rocket } from 'lucide-react';
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

  // Card hover animation variants
  const cardHoverVariants = {
    initial: { 
      boxShadow: "0px 0px 0px rgba(249, 130, 108, 0)" 
    },
    hover: { 
      boxShadow: "0px 0px 15px rgba(249, 130, 108, 0.2)",
      scale: 1.01,
      transition: { duration: 0.2 }
    }
  };

  // Skill item hover animation variants
  const skillItemVariants = {
    initial: { 
      backgroundColor: "#2c313a",
      scale: 1
    },
    hover: { 
      backgroundColor: "#30363d",
      scale: 1.05,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: { 
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="h-full p-4 md:p-6 overflow-auto font-[JetBrains_Mono] bg-[#24292e] text-gray-300">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl font-bold text-white mb-6 flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <User size={24} className="text-[#f9826c] mr-2" />
          About Me
        </motion.h2>
        
        {/* About section with picture */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
        >
          {/* Profile picture */}
          <motion.div 
            className="lg:w-1/3 flex justify-center items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div 
              className="relative sm:w-80 sm:h-100 w-50 h-80 rounded-full overflow-hidden bg-[#f9826c]"
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                rotate: -3,
                boxShadow: "0px 0px 20px rgba(249, 130, 108, 0.4)"
              }}
            >
              <motion.img 
                src="/dp.png" 
                alt="Harshana Batagalla" 
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "dp.png";
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#24292e] to-transparent"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 0.4 }}
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          
          {/* About text */}
          <motion.div
            className="lg:w-2/3 space-y-4 bg-[#1f2428] rounded-lg p-5 border border-[#30363d] sm:text-lg text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
            whileHover={cardHoverVariants.hover}
            variants={cardHoverVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              A self-motivated and skillful undergraduate, with a great interest in problem-solving.
              Skilled in JavaScript and TypeScript, with expertise in React and Node.js frameworks.
              Familiar with Angular and .NET. A good team player who is always excited to face new challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              With extensive hands-on experience, I excel in developing dynamic and user-friendly web applications, both on the frontend and backend.
              I stay updated with industry trends, ensuring my skills remain current. As a fast learner, I adapt swiftly to new technologies and environments, consistently delivering high-quality solutions.
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Skills section */}
        <div>
          <motion.h3
            className="text-xl font-semibold text-white mb-6 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span 
              className="inline-block mr-2 text-[#f9826c]"
              animate={{ 
                rotate: [0, -5, 0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut",
                delay: 1,
                repeatDelay: 5,
                repeat: Infinity
              }}
            >
              <Rocket />
            </motion.span>
            Skills
          </motion.h3>
          
          <motion.div 
            className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {Object.entries(techSkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                className="bg-[#1f2428] rounded-lg p-5 border border-[#30363d] h-full overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                whileHover={cardHoverVariants.hover}
                variants={cardHoverVariants}
                transition={{ 
                  duration: 0.4, 
                  ease: "easeOut",
                  delay: 0.1 * index 
                }}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (0.1 * index) }}
                >
                  <motion.div 
                    className="mr-3 p-2 rounded-md bg-[#24292e] text-[#f9826c]"
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1,
                      backgroundColor: "#2d333b"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {categoryIcons[category]}
                  </motion.div>
                  <motion.h4 
                    className="md:text-lg text:md font-medium text-white"
                    whileHover={{ color: "#f9826c" }}
                    transition={{ duration: 0.2 }}
                  >
                    {category}
                  </motion.h4>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="flex items-center px-3 py-2 rounded-md bg-[#2c313a] text-sm text-gray-300 cursor-pointer"
                      variants={skillItemVariants}
                      initial="initial"
                      whileHover="hover"
                      animate={{ 
                        opacity: [0, 1],
                        y: [10, 0]
                      }}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.3 + (0.05 * skillIndex)
                      }}
                    >
                      <motion.div
                        className="flex items-center w-full"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-10 h-10 mr-2"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.span
                          whileHover={{ color: "#fff" }}
                        >
                          {skill.name}
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;