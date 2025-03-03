import React from 'react';
import { X } from 'lucide-react';

const TabBar = ({ activeSection, setActiveSection }) => {
  const getTabName = (section) => {
    switch (section) {
      case 'hero':
        return 'welcome.jsx';
      case 'about':
        return 'about.jsx';
      case 'work':
        return 'experience.js';
      case 'education':
        return 'education.md';
      case 'projects':
        return 'projects.json';
      case 'testimonials':
        return 'testimonials.jsx';
      case 'contact':
        return 'contact.jsx';
      default:
        return 'welcome.jsx';
    }
  };

  const getTabIcon = (section) => {
    const fileExtension = getTabName(section).split('.').pop();
    
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

  return (
    <div className="flex bg-[#252526] border-b border-[#1E1E1E] overflow-x-auto">
      <div 
        className={`flex items-center px-4 py-2 border-r border-[#1E1E1E] cursor-pointer ${
          activeSection === 'hero' ? 'bg-[#1E1E1E]' : 'bg-[#2D2D2D]'
        }`}
        onClick={() => setActiveSection('hero')}
      >
        <span className={`mr-2 ${getTabIcon('hero')}`}>●</span>
        <span className="text-gray-300">{getTabName('hero')}</span>
        <X size={14} className="ml-2 text-gray-500 hover:text-white" />
      </div>
      
      {activeSection !== 'hero' && (
        <div 
          className="flex items-center px-4 py-2 border-r border-[#1E1E1E] bg-[#1E1E1E] cursor-pointer"
        >
          <span className={`mr-2 ${getTabIcon(activeSection)}`}>●</span>
          <span className="text-gray-300">{getTabName(activeSection)}</span>
          <X size={14} className="ml-2 text-gray-500 hover:text-white" onClick={() => setActiveSection('hero')} />
        </div>
      )}
    </div>
  );
};

export default TabBar;