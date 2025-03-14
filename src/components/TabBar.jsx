import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { Base_Path } from '../utils/data';

const TabBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Track open tabs in state, but initialize with only the current path
    const [openTabs, setOpenTabs] = useState([location.pathname]);
    
    // Update openTabs when location changes (via ActivityBar clicks)
    useEffect(() => {
        // Only add new tabs, don't replace existing
        if (!openTabs.includes(location.pathname)) {
            const newTabs = [...openTabs, location.pathname];
            setOpenTabs(newTabs);
        }
    }, [location.pathname]);

    const getTabName = (path) => {
        switch (path) {
            case `${Base_Path}`:
            case `/`:
            case `${Base_Path}/`:
                return 'welcome.jsx';
            case `${Base_Path}/about`:
                return 'about.jsx';
            case `${Base_Path}/work`:
                return 'experience.js';
            case `${Base_Path}/education`:
                return 'education.md';
            case `${Base_Path}/projects`:
                return 'projects.json';
            case `${Base_Path}/testimonials`:
                return 'testimonials.jsx';
            case `${Base_Path}/contact`:
                return 'contact.jsx';
            default:
                return 'unknown.file';
        }
    };

    const getTabIcon = (path) => {
        const fileExtension = getTabName(path)?.split('.').pop();
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

    // Handle tab close
    const handleCloseTab = (e, tabPath) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Don't close if it's the last tab
        if (openTabs.length <= 1) return;
        
        // Remove the tab
        const newTabs = openTabs.filter(tab => tab !== tabPath);
        setOpenTabs(newTabs);
        
        // If closing the active tab, navigate to the last tab in the list
        if (tabPath === location.pathname) {
            navigate(newTabs[newTabs.length - 1]);
        }
    };

    return (
        <div className="flex bg-[#1f2428] border-b border-[#24292e] overflow-x-auto font-[JetBrains_Mono]">
            {openTabs.map((tabPath) => (
                <Link
                    key={tabPath}
                    to={tabPath}
                    className={`flex items-center px-4 py-2 border-r border-t-1 border-[#24292e] cursor-pointer ${
                        tabPath === location.pathname ? 'bg-[#24292e] border-t-[#f9826c]' : 'bg-[#1f2428]'
                    }`}
                >
                    <span className={`mr-2 ${getTabIcon(tabPath)}`}>●</span>
                    <span className="text-gray-300">{getTabName(tabPath)}</span>
                    <span
                        onClick={(e) => handleCloseTab(e, tabPath)}
                        className="ml-2 cursor-pointer"
                    >
                        <X size={14} className="text-gray-500 hover:text-white" />
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default TabBar;