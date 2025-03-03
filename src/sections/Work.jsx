import React from 'react';
import { workExperiences } from '../utils/data';
import { Briefcase } from 'lucide-react';

const Work = () => {
  return (
    <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Briefcase size={24} className="text-[#007ACC] mr-2" />
        Work Experience
      </h2>
      
      <div className="space-y-8">
        {workExperiences.map((experience) => (
          <div key={experience.id} className="bg-[#2D2D2D] rounded-lg p-6 border-l-4 border-[#007ACC]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
                <p className="text-[#007ACC] text-xl">{experience.company}</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">{experience.duration}</span>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {experience.description.map((item, index) => (
                <li key={index} className="pl-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;