import React, { useEffect } from 'react';
import { educationData, certifications } from '../utils/data';
import { GraduationCap, FileBadge } from 'lucide-react';

const Education = () => {
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
        
        // Observer for education cards
        const educationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add animation class with staggered delay
                    setTimeout(() => {
                        entry.target.classList.add('animate-slide-in');
                    }, 100 * index);
                    
                    // Unobserve after animation is triggered
                    educationObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observer for certification section and cards
        const certificationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add animation class with staggered delay
                    setTimeout(() => {
                        entry.target.classList.add('animate-fade-in-up');
                    }, 100 * index);
                    
                    // Unobserve after animation is triggered
                    certificationObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe certification heading
        const certHeading = document.querySelector('.cert-heading-animation');
        if (certHeading) {
            certificationObserver.observe(certHeading);
        }
        
        // Observe all education cards
        const educationCards = document.querySelectorAll('.education-card');
        educationCards.forEach((card) => {
            educationObserver.unobserve(card); // ensure clean state
            educationObserver.observe(card);
        });
        
        // Observe all certification cards
        const certificationCards = document.querySelectorAll('.certification-card');
        certificationCards.forEach((card) => {
            certificationObserver.unobserve(card); // ensure clean state
            certificationObserver.observe(card);
        });
        
        // Cleanup observers on component unmount
        return () => {
            educationObserver.disconnect();
            certificationObserver.disconnect();
        };
    }, []);

    return (
        <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center opacity-0 heading-animation transition-opacity duration-500">
                <GraduationCap size={24} className="text-[#f9826c] mr-2" />
                Education
            </h2>
            
            <div className="space-y-8">
                {educationData.map((education) => (
                    <div 
                        key={education.id} 
                        className="bg-[#1f2428] rounded-lg p-6 border-l-4 transition-all duration-300 ease-in-out border-[#f9826c] hover:border-l-8 hover:shadow-lg opacity-0 education-card"
                        style={{ transform: 'translateX(20px)' }} // Initial transform state inline
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                                <p className="text-[#f9826c]">{education.institution}</p>
                            </div>
                            <span className="text-gray-400 mt-2 md:mt-0">{education.duration}</span>
                        </div>
                        
                        <p className="text-gray-300">{education.description}</p>
                    </div>
                ))}
            </div>
            
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4 opacity-0 cert-heading-animation transition-opacity duration-500 flex items-center">
                    <FileBadge size={24} className="text-[#f9826c] mr-2"/>
                    Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((certification) => (
                        <div 
                            key={certification.id} 
                            className="bg-[#1f2428] p-4 rounded-lg border border-[#1f2428] cursor-pointer hover:bg-[#414246] transition-colors duration-300 opacity-0 certification-card"
                            style={{ transform: 'translateY(10px)' }} // Initial transform state inline
                            onClick={() => window.open(certification.link, '_blank')}
                        >
                            <h4 className="text-lg font-medium text-white">{certification.title}</h4>
                            <p className="text-gray-400">{certification.organization} • {certification.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Education;