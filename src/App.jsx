import { useEffect, useState } from 'react';
import { HashRouter  as Router, Routes, Route, Navigate } from 'react-router-dom';
import ActivityBar from './components/ActivityBar';
import TabBar from './components/TabBar';
import StatusBar from './components/StatusBar';
import { Base_Path } from './utils/data';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

// Import page components 
import Hero from './sections/Hero'; 
import About from './sections/About'; 
import Work from './sections/Work'; 
import Education from './sections/Education'; 
import Projects from './sections/Projects'; 
import Testimonials from './sections/Testimonials'; 
import Contact from './sections/Contact';  

function App() {  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to handle resize and determine if mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      {/* Only render the cursor on desktop */}
      {!isMobile && (
        <Cursor 
          isGelly={true} 
          cursorSize={30} 
          cursorBackgrounColor="rgba(249, 130, 108, 0.3)" 
        />
      )}
      
      <div className="h-full flex flex-col bg-[#24292e] text-white">
        <div className="flex-1 flex overflow-hidden">
          <ActivityBar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TabBar />
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route path={`${Base_Path}`} element={<Hero />} />
                <Route path={`${Base_Path}/about`} element={<About />} />
                <Route path={`${Base_Path}/work`} element={<Work />} />
                <Route path={`${Base_Path}/education`} element={<Education />} />
                <Route path={`${Base_Path}/projects`} element={<Projects />} />
                <Route path={`${Base_Path}/testimonials`} element={<Testimonials />} />
                <Route path={`${Base_Path}/contact`} element={<Contact />} />
                {/* Redirect /portfolio to homepage */}
                {/* <Route path="/portfolio" element={<Navigate to="/" replace />} /> */}
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