import React from "react";
import { motion } from "framer-motion";
import { workExperiences } from "../utils/data";
import { Briefcase } from "lucide-react";

const Work = () => {
  return (
    <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
      {/* Heading with animation */}
      <motion.h2
        className="text-2xl font-bold text-white mb-6 flex items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Briefcase size={24} className="text-[#f9826c] mr-2" />
        Work Experience
      </motion.h2>

      <div className="space-y-8">
        {workExperiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            className="bg-[#1f2428] rounded-lg p-6 border-l-4 transition-all duration-300 ease-in-out border-[#f9826c] hover:border-l-8 hover:shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
                <p className="text-[#f9826c] text-lg">{experience.company}</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">{experience.duration}</span>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {experience.description.map((item, index) => (
                <li key={index} className="pl-1">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Contact Note Section */}
      <motion.div
        className="mt-8 p-4 bg-[#252526] rounded-lg border border-[#1f2428]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400">
          <span className="text-green-400">// </span>
          Want to know more about my work experience? Feel free to contact me for a detailed resume.
        </p>
      </motion.div>
    </div>
  );
};

export default Work;
