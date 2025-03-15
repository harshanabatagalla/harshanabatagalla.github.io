import React, { useState, useEffect } from 'react';
import { FileCode, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Preload the background image
        const img = new Image();
        img.src = "bg.gif";
        img.onload = () => {
            setIsLoading(false);
        };

        // Set a timeout as fallback in case the image takes too long
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    // Modern animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const slideInFromLeft = {
        hidden: { x: -60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                duration: 0.6
            }
        }
    };

    const slideInFromRight = {
        hidden: { x: 60, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                duration: 0.6
            }
        }
    };

    const scaleUp = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                duration: 0.6
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(249, 130, 108, 0.3)",
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.97
        }
    };

    const secondaryButtonVariants = {
        hover: {
            scale: 1.05,
            borderColor: "#f9826c",
            color: "#f9826c",
            boxShadow: "0px 5px 15px rgba(249, 130, 108, 0.15)",
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.97
        }
    };

    return (
        <div className="h-full flex flex-col font-[JetBrains_Mono] relative">
            {isLoading && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-t-[#f9826c] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-300">Loading...</p>
                    </div>
                </motion.div>
            )}

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src="bg.gif"
                    alt="background.gif"
                    className="w-full h-full object-cover object-bottom opacity-5"
                />
            </div>
            
            <div className="flex-1 p-4 md:p-6 overflow-auto flex z-10 justify-center items-center">
                <motion.div 
                    className="max-w-4xl w-full"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="glass-card p-6 md:p-8 rounded-lg overflow-hidden"
                        variants={scaleUp}
                    >
                        <motion.div 
                            className="flex items-center mb-4 md:mb-6"
                            variants={slideInFromLeft}
                        >
                            <div className="flex space-x-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-xs md:text-sm text-gray-400">terminal</span>
                        </motion.div>
                        
                        <div className="font-mono space-y-3 md:space-y-4">
                            <div className="py-2">
                                <motion.h1 
                                    className="text-3xl md:text-6xl font-bold text-white mb-4"
                                    variants={slideInFromLeft}
                                >
                                    Hello, I'm <br/> 
                                    <motion.span 
                                        className='text-[#f9826c]'
                                        variants={slideInFromRight}
                                    >
                                        Harshana Batagalla.
                                    </motion.span>
                                </motion.h1>
                                
                                <motion.div 
                                    className="mt-4 md:mt-6"
                                    variants={slideInFromLeft}
                                >
                                    <motion.p 
                                        className="text-base md:text-xl mb-4 text-gray-300"
                                        variants={slideInFromRight}
                                    >
                                        A passionate <motion.span 
                                            className="text-blue-400"
                                            animate={{ 
                                                color: ["#60A5FA", "#38BDF8", "#2563EB", "#60A5FA"],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            Full-stack developer
                                        </motion.span> focused on creating impactful and innovative digital solutions.
                                    </motion.p>
                                    <motion.div 
                                        className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6"
                                        variants={scaleUp}
                                    >
                                        <motion.button
                                            onClick={() => window.open('https://drive.google.com/file/d/1eZ-G6M5qV4yMksCDUKdzUiIi7suKs2QD/view?usp=sharing', '_blank')}
                                            className="px-4 py-2 md:px-6 md:py-2 bg-[#f9826c] text-[#381d16] rounded-md transition-all text-center text-md md:text-lg cursor-pointer flex items-center justify-center"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <motion.span 
                                                initial={{ x: -5, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                                className="flex items-center"
                                            >
                                                <FileCode size={16} className="mr-2" />
                                                <span className="font-semibold">View Resume</span>
                                            </motion.span>
                                        </motion.button>
                                        <motion.button
                                            onClick={() => navigate('/contact')}
                                            className="px-4 py-2 md:px-6 md:py-2 border border-[#414141]-2 text-gray-300 rounded-md transition-all text-center text-md md:text-lg cursor-pointer flex items-center justify-center"
                                            variants={secondaryButtonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                        >
                                            <motion.span 
                                                initial={{ x: -5, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="flex items-center"
                                            >
                                                <Coffee size={16} className="mr-2" />
                                                <span className="font-medium">Contact Me</span>
                                            </motion.span>
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;