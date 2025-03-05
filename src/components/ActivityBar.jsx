import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Base_Path } from '../utils/data';

import {
    Home,
    User,
    Briefcase,
    GraduationCap,
    FolderKanban,
    MessageSquareQuote,
    Mail,
    Github,
    Linkedin,
    PanelRightClose,
    PanelRightOpen
} from 'lucide-react';

const ActivityBar = () => {
    const [expanded, setExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    // Set initial expanded state and detect mobile
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Only auto-collapse on initial load for mobile
            if (mobile && expanded) {
                setExpanded(false);
            } else if (!mobile && !expanded) {
                setExpanded(true);
            }
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const sections = [
        { path: `${Base_Path}/`, icon: <Home size={24} />, label: 'Home' },
        { path: `${Base_Path}/about`, icon: <User size={24} />, label: 'About' },
        { path: `${Base_Path}/work`, icon: <Briefcase size={24} />, label: 'Work' },
        { path: `${Base_Path}/education`, icon: <GraduationCap size={24} />, label: 'Education' },
        { path: `${Base_Path}/projects`, icon: <FolderKanban size={24} />, label: 'Projects' },
        { path: `${Base_Path}/testimonials`, icon: <MessageSquareQuote size={24} />, label: 'Testimonials' },
        { path: `${Base_Path}/contact`, icon: <Mail size={24} />, label: 'Contact' },
    ];

    // Container classes based on mobile/desktop and expanded/collapsed state
    const containerClasses = isMobile
        ? expanded
            // Mobile expanded: fixed overlay on top of content
            ? "fixed h-full z-50 w-48 shadow-lg flex flex-col py-4 bg-[#333333] text-gray-400 transition-all duration-300"
            // Mobile collapsed: normal sidebar
            : "h-full w-16 flex flex-col py-4 bg-[#333333] text-gray-400 transition-all duration-300"
        : // Desktop: always normal sidebar, just different widths
        `h-full flex flex-col py-4 bg-[#333333] text-gray-400 transition-all duration-300 ${expanded ? 'w-48' : 'w-16'
        }`;

    return (
        <div className={containerClasses}>
            <div className="flex justify-between items-center px-4 mb-4">
                <button
                    className="pb-2 hover:text-white"
                    onClick={toggleExpanded}
                    title={expanded ? "Collapse Menu" : "Expand Menu"}
                >
                    {expanded ? <PanelRightOpen size={24} /> : <PanelRightClose size={24} />}
                </button>
            </div>

            {sections.map((section) => (
                <Link
                    key={section.path}
                    to={section.path}
                    className={`flex items-center p-2 px-4 mb-2 hover:text-white ${location.pathname === section.path ? 'text-white bg-[#252526] border-l-3 border-[#007ACC]' : ''
                        }`}
                    title={section.label}
                    onClick={() => {
                        // Auto-close menu after selection on mobile when expanded
                        if (isMobile && expanded) {
                            setExpanded(false);
                        }
                    }}
                >
                    <div className="min-w-6">
                        {section.icon}
                    </div>
                    {expanded && (
                        <span className="ml-2">{section.label}</span>
                    )}
                </Link>
            ))}

            <div className="flex-1"></div>

            <div>
                <a
                    href="https://github.com/harshanabatagalla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center p-2 mb-2 mx-2 rounded hover:text-white cursor-pointer'
                    title="Github"
                    onClick={() => {
                        // Auto-close menu after selection on mobile when expanded
                        if (isMobile && expanded) {
                            setExpanded(false);
                        }
                    }}
                >
                    <div className="min-w-6">
                        <Github size={24} />
                    </div>
                    {expanded && (
                        <span className="ml-2">Github</span>
                    )}
                </a>
                <a
                    href="https://www.linkedin.com/in/harshana-batagalla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center p-2 mb-2 mx-2 rounded hover:text-white cursor-pointer'
                    title="LinkedIn"
                    onClick={() => {
                        // Auto-close menu after selection on mobile when expanded
                        if (isMobile && expanded) {
                            setExpanded(false);
                        }
                    }}
                >
                    <div className="min-w-6">
                        <Linkedin size={24} />
                    </div>
                    {expanded && (
                        <span className="ml-2">LinkedIn</span>
                    )}
                </a>
            </div>
        </div>
    );
};

export default ActivityBar;