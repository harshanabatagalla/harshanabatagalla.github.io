import React from 'react';
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
    Menu
} from 'lucide-react';

const ActivityBar = ({ activeSection, setActiveSection }) => {
    const sections = [
        { id: 'hero', icon: <Home size={24} />, label: 'Home' },
        { id: 'about', icon: <User size={24} />, label: 'About' },
        { id: 'work', icon: <Briefcase size={24} />, label: 'Work' },
        { id: 'education', icon: <GraduationCap size={24} />, label: 'Education' },
        { id: 'projects', icon: <FolderKanban size={24} />, label: 'Projects' },
        { id: 'testimonials', icon: <MessageSquareQuote size={24} />, label: 'Testimonials' },
        { id: 'contact', icon: <Mail size={24} />, label: 'Contact' },
    ];

    return (
        <div className="h-full w-16 flex flex-col items-center py-4 bg-[#333333] text-gray-400">
            <button
                className="p-2 mb-4 hover:text-white md:hidden"
                // onClick={}
                title="Menu"
            >
                <Menu size={24} />
            </button>

            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`p-2 mb-4 rounded hover:text-white ${activeSection === section.id ? 'text-white bg-[#252526]' : ''
                        }`}
                    title={section.label}
                >
                    {section.icon}
                </button>
            ))}

            <div className="flex-1"></div>

            <button
                className="p-2 py-4 hover:text-white"
                title="Github"
                onClick={() => window.open('https://github.com/harshanabatagalla', '_blank')}
            >
                <Github size={24} />
            </button>
            <button
                className="p-2 py-4 hover:text-white"
                title="Github"
                onClick={() => window.open('https://www.linkedin.com/in/harshana-batagalla/', '_blank')}
            >
                <Linkedin size={24} />
            </button>
        </div>
    );
};

export default ActivityBar;