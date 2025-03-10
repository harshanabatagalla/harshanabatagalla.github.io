import React, { useState } from 'react';
import { Terminal, ArrowDownCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="h-full flex flex-col font-[JetBrains_Mono] relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[#1f2428]/10 z-0"></div>
            
            <div className="flex-1 p-4 md:p-6 overflow-auto flex items-center justify-center z-10">
                <div className="max-w-4xl w-full">
                    <div className="glass-card p-6 md:p-8 rounded-lg overflow-hidden bg-[#1f2428]/70 backdrop-blur-sm">
                        <div className="flex items-center mb-4 md:mb-6">
                            <div className="flex space-x-2 mr-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-xs md:text-sm text-gray-400">terminal</span>
                        </div>

                        <div className="font-mono space-y-3 md:space-y-4">
                            <p className="text-xs md:text-sm text-gray-500">// Crafting code, Building dreams</p>
                            
                            <div className="text-sm md:text-base">
                                <span className="text-blue-400">let</span>{" "}
                                <span className="text-green-400">developer</span>{" "}
                                <span className="text-white">=</span>{" "}
                                <span className="text-yellow-400">"Software Developer"</span>
                                <span className="text-white">;</span>
                            </div>
                            
                            <div className="py-2">
                                <TypeAnimation
                                    sequence={[
                                        'Hello, I\'m Harshana Batagalla.',
                                        500,
                                    ]}
                                    wrapper="h2"
                                    cursor={true}
                                    repeat={0}
                                    style={{ 
                                        fontSize: 'clamp(1rem, 5vw, 2rem)', 
                                        fontWeight: 'bold', 
                                        display: 'block',
                                        color: 'white'
                                    }}
                                />
                                
                                    <div className="mt-4 md:mt-6 animate-fade-in">
                                        <p className="text-base md:text-xl mb-4 text-gray-300">
                                            A passionate <span className="text-blue-400">Full-stack developer</span>  focused on creating impactful and innovative digital solutions.
                                        </p>
                                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
                                            <button 
                                                onClick={() => window.open('https://drive.google.com/file/d/1eZ-G6M5qV4yMksCDUKdzUiIi7suKs2QD/view?usp=sharing', '_blank')}
                                                className="px-4 py-2 md:px-6 md:py-2 bg-[#c56755] text-white rounded-md transition-transform hover:scale-105 text-center text-sm md:text-base cursor-pointer"
                                            >
                                                Resume
                                            </button>
                                            <button 
                                                onClick={() => navigate('/contact')}
                                                className="px-4 py-2 md:px-6 md:py-2 border border-gray-600 text-gray-300 rounded-md transition-transform hover:scale-105 text-center text-sm md:text-base cursor-pointer
                                                "
                                            >
                                                Contact Me
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="p-4 bg-[#181818] border-t border-[#333333]">
                <div className=" text-gray-400 text-xs md:text-base max-w-4xl ml-2">
                    <span className="text-green-400 mr-2">$</span>
                    <TypeAnimation
                        sequence={[
                            'npm start portfolio',
                            5000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={0}
                        className="overflow-hidden whitespace-nowrap"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;