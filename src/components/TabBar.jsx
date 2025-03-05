import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const TabBar = () => {
    const location = useLocation();

    const getTabName = (path) => {
        switch (path) {
            case '/':
                return 'welcome.jsx';
            case '/about':
                return 'about.jsx';
            case '/work':
                return 'experience.js';
            case '/education':
                return 'education.md';
            case '/projects':
                return 'projects.json';
            case '/testimonials':
                return 'testimonials.jsx';
            case '/contact':
                return 'contact.jsx';
            default:
                return 'welcome.jsx';
        }
    };

    const getTabIcon = (path) => {
        const fileExtension = getTabName(path).split('.').pop();

        switch (fileExtension) {
            case 'jsx':
                return 'text-blue-400';
            case 'js':
                return 'text-yellow-400';
            case 'json':
                return 'text-orange-400';
            case 'md':
                return 'text-gray-400';
            default:
                return 'text-blue-400';
        }
    };

    // Always show home tab
    const homePath = '/';
    const activePath = location.pathname;

    return (
        <div className="flex bg-[#252526] border-b border-[#1E1E1E] overflow-x-auto font-[JetBrains_Mono]">
            <Link
                to={homePath}
                className={`flex items-center px-4 py-2 border-r border-[#1E1E1E] cursor-pointer ${
                    homePath === activePath ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'
                }`}
            >
                <span className={`mr-2 ${getTabIcon(homePath)}`}>●</span>
                <span className="text-gray-300">{getTabName(homePath)}</span>
                <X size={14} className="ml-2 text-gray-500 hover:text-white" />
            </Link>

            {activePath !== homePath && (
                <Link
                    to={activePath}
                    className="flex items-center px-4 py-2 border-r border-[#1E1E1E] bg-[#1E1E1E] cursor-pointer"
                >
                    <span className={`mr-2 ${getTabIcon(activePath)}`}>●</span>
                    <span className="text-gray-300">{getTabName(activePath)}</span>
                    <Link 
                        to={homePath} 
                        className="ml-2"
                    >
                        <X size={14} className="text-gray-500 hover:text-white" />
                    </Link>
                </Link>
            )}
        </div>
    );
};

export default TabBar;