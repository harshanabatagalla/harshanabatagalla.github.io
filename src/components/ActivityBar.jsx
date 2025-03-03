import React, { useState, useEffect } from 'react';
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

const ActivityBar = ({ activeSection, setActiveSection }) => {
    const [expanded, setExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

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
        { id: 'hero', icon: <Home size={24} />, label: 'Home' },
        { id: 'about', icon: <User size={24} />, label: 'About' },
        { id: 'work', icon: <Briefcase size={24} />, label: 'Work' },
        { id: 'education', icon: <GraduationCap size={24} />, label: 'Education' },
        { id: 'projects', icon: <FolderKanban size={24} />, label: 'Projects' },
        { id: 'testimonials', icon: <MessageSquareQuote size={24} />, label: 'Testimonials' },
        { id: 'contact', icon: <Mail size={24} />, label: 'Contact' },
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
                <button
                    key={section.id}
                    onClick={() => {
                        setActiveSection(section.id);
                        // Auto-close menu after selection on mobile when expanded
                        if (isMobile && expanded) {
                            setExpanded(false);
                        }
                    }}
                    className={`flex items-center p-2 mb-2 mx-2 rounded hover:text-white ${activeSection === section.id ? 'text-white bg-[#252526]' : ''
                        }`}
                    title={section.label}
                >
                    <div className="min-w-6">
                        {section.icon}
                    </div>
                    {expanded && (
                        <span className="ml-2">{section.label}</span>
                    )}
                </button>
            ))}

            <div className="flex-1"></div>

            <div>
                <button
                    onClick={() => {
                        window.open('https://github.com/harshanabatagalla', '_blank');
                        // Auto-close menu after selection on mobile when expanded
                        if (isMobile && expanded) {
                            setExpanded(false);
                        }
                    }}
                    className='flex items-center p-2 mb-2 mx-2 rounded hover:text-white cursor-pointer'
                    title="Github"
                >
                    <div className="min-w-6">
                        <Github size={24} />
                    </div>
                    {expanded && (
                        <span className="ml-2">Github</span>
                    )}
                </button>
                <button
                    onClick={() => {
                        window.open('https://www.linkedin.com/in/harshana-batagalla/', '_blank')
                        // Auto-close menu after selection on mobile when expanded
                        if (isMobile && expanded) {
                            setExpanded(false);
                        }
                    }}
                    className='flex items-center p-2 mb-2 mx-2 rounded hover:text-white cursor-pointer'
                    title="LinkedIn"
                >
                    <div className="min-w-6">
                        <Linkedin size={24} />
                    </div>
                    {expanded && (
                        <span className="ml-2">LinkedIn</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ActivityBar;