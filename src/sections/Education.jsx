import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { educationData, certifications } from "../utils/data";
import { GraduationCap, FileBadge } from "lucide-react";

const Education = () => {
    const educationControls = useAnimation();
    const certificationControls = useAnimation();

    // Start animations when component mounts
    useEffect(() => {
        // Trigger animations immediately on component mount
        const startAnimations = async () => {
            await educationControls.start((i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut"
                }
            }));
            
            await certificationControls.start((i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut"
                }
            }));
        };
        
        startAnimations();
    }, [educationControls, certificationControls]);

    return (
        <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
            {/* Heading with animation */}
            <motion.h2
                className="text-2xl font-bold text-white mb-6 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <GraduationCap size={24} className="text-[#f9826c] mr-2" />
                Education
            </motion.h2>
            
            <div className="space-y-4">
                {educationData.map((education, index) => (
                    <motion.div
                        key={education.id}
                        className="bg-[#1f2428] rounded-lg p-6 border-l-4 border-[#f9826c] hover:border-l-8 hover:shadow-lg transition-all ease-in-out duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        custom={index}
                        animate={educationControls}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                                <p className="text-[#f9826c]">{education.institution}</p>
                            </div>
                            <span className="text-gray-400 mt-2 md:mt-0">{education.duration}</span>
                        </div>
                        <p className="text-gray-300">{education.description}</p>
                    </motion.div>
                ))}
            </div>
            
            {/* Certifications Section */}
            <motion.h3
                className="text-xl font-semibold text-white my-8 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <FileBadge size={24} className="text-[#f9826c] mr-2" />
                Certifications
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((certification, index) => (
                    <motion.div
                        key={certification.id}
                        className="bg-[#1f2428] p-4 rounded-lg border border-[#1f2428] cursor-pointer hover:bg-[#414246] transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        custom={index}
                        animate={certificationControls}
                        onClick={() => window.open(certification.link, "_blank")}
                    >
                        <h4 className="text-lg font-medium text-white">{certification.title}</h4>
                        <p className="text-gray-400">{certification.organization} • {certification.year}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;