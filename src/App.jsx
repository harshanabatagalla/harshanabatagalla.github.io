import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ActivityBar from './components/ActivityBar';
import TabBar from './components/Tabbar';
import StatusBar from './components/StatusBar';

// Import page components
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <Router>
      <div className="h-full flex flex-col bg-[#1E1E1E] text-white">
        <div className="flex-1 flex overflow-hidden">
          <ActivityBar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TabBar />
            <div className="flex-1 overflow-hidden">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Redirect /portfolio to homepage */}
                <Route path="/portfolio" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </div>
        <StatusBar />
      </div>
    </Router>
  );
}

export default App;