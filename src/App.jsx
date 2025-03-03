import React, { useState } from 'react';
import TabBar from './components/Tabbar';
import ActivityBar from './components/ActivityBar';
import StatusBar from './components/StatusBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'work':
        return <Work />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#1E1E1E] text-white">
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TabBar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex-1 overflow-hidden">
            {renderSection()}
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;