import React from 'react';
import { Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full flex flex-col font-[JetBrains_Mono]">
            <div className="flex-1 p-6 overflow-auto flex items-center justify-center">
                <div className="max-w-2xl">
                    <div className="flex items-center mb-4">
                        <Terminal size={32} className="text-green-400 mr-4" />
                        <h1 className="md:text-4xl text-2xl font-bold text-white">Hello, World!</h1>
                    </div>
                    <h2 className="md:text-2xl text-xl font-semibold text-gray-300 mb-4">I'm <span className="text-[#007ACC]">Harshana Batagalla</span></h2>
                    <p className="text-xl text-gray-400 mb-6 font-light">
                        A passionate Software Developer focused on creating impactful and innovative digital solutions.
                    </p>
                    <div className="flex space-x-4">
                        <button
                            className="px-6 py-2 bg-[#007ACC] text-white rounded hover:bg-[#005A9C] transition-colors cursor-pointer"
                            onClick={() => window.open('https://drive.google.com/file/d/1eZ-G6M5qV4yMksCDUKdzUiIi7suKs2QD/view?usp=sharing', '_blank')}
                        >
                            Resume
                        </button>
                        <button
                            className="px-6 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-700 transition-colors cursor-pointer"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-[#1E1E1E] border-t border-[#333333]">
                <div className="flex items-center text-gray-400">
                    <span className="text-green-400 mr-2">$</span>
                    <TypeAnimation
                        sequence={[
                            'npm start portfolio',
                            5000,
                            '',
                            0,
                            'npm start portfolio',
                            5000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;