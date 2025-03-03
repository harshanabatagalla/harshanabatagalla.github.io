import React, { useState } from 'react';
import ActivityBar from './components/ActivityBar';


function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="h-full flex flex-col bg-[#1E1E1E] text-white">
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}

export default App;