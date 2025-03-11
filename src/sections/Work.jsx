import React, { useEffect } from 'react';
import { workExperiences } from '../utils/data';
import { Briefcase } from 'lucide-react';

const Work = () => {
  useEffect(() => {
    // Animation for the heading - immediate
    const heading = document.querySelector('.heading-animation');
    heading.classList.add('animate-fade-in');
    
    // Setup Intersection Observer for scroll-based animations
    const observerOptions = {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.2 // trigger when 20% of the element is visible
    };
    
    // Observer for work experience cards
    const workObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation class with staggered delay
          setTimeout(() => {
            entry.target.classList.add('animate-slide-in');
          }, 100 * index);
          
          // Unobserve after animation is triggered
          workObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observer for the contact note
    const noteObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          // Unobserve after animation is triggered
          noteObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all work experience cards
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card) => {
      workObserver.observe(card);
    });
    
    // Observe the contact note
    const contactNote = document.querySelector('.contact-note');
    if (contactNote) {
      noteObserver.observe(contactNote);
    }
    
    // Cleanup observers on component unmount
    return () => {
      workObserver.disconnect();
      noteObserver.disconnect();
    };
  }, []);

  return (
    <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center opacity-0 heading-animation transition-opacity duration-500">
        <Briefcase size={24} className="text-[#f9826c] mr-2" />
        Work Experience
      </h2>
      
      <div className="space-y-8">
        {workExperiences.map((experience) => (
          <div 
            key={experience.id} 
            className="bg-[#1f2428] rounded-lg p-6 border-l-4 transition-all duration-300 ease-in-out border-[#f9826c] hover:border-l-8 hover:shadow-lg opacity-0 work-card"
            style={{ transform: 'translateX(20px)' }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
                <p className="text-[#f9826c] text-xl">{experience.company}</p>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0">{experience.duration}</span>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {experience.description.map((item, index) => (
                <li key={index} className="pl-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div 
        className="mt-8 p-4 bg-[#252526] rounded-lg border border-[#1f2428] opacity-0 contact-note"
        style={{ transform: 'translateY(10px)' }}
      >
        <p className="text-gray-400">
          <span className="text-green-400">// </span>
          Want to know more about my work experience? Feel free to contact me for a detailed resume.
        </p>
      </div>
    </div>
  );
};

export default Work;