import React, { useState, useEffect } from 'react';
import { testimonials } from '../utils/data';
import { MessageSquareQuote, ChevronDown, ChevronUp } from 'lucide-react';

const Testimonials = () => {
  // State to track which testimonials are expanded
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

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
    
    // Observer for testimonial cards
    const testimonialObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation class with staggered delay
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
          }, 100 * index);
          
          // Unobserve after animation is triggered
          testimonialObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observer for the note at the bottom
    const noteObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          // Unobserve after animation is triggered
          noteObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card) => {
      testimonialObserver.observe(card);
    });
    
    // Observe the footer note
    const footerNote = document.querySelector('.footer-note');
    if (footerNote) {
      noteObserver.observe(footerNote);
    }
    
    // Cleanup observers on component unmount
    return () => {
      testimonialObserver.disconnect();
      noteObserver.disconnect();
    };
  }, []);

  // Function to toggle testimonial expansion
  const toggleTestimonial = (id, e) => {
    // Prevent event from bubbling up if needed
    e.stopPropagation();
    setExpandedTestimonials(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to truncate text
  const truncateText = (text, maxLength = 200, expanded = false) => {
    if (expanded) return text;
    return text.length > maxLength 
      ? text.slice(0, maxLength) + '...' 
      : text;
  };

  return (
    <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center opacity-0 heading-animation transition-opacity duration-500">
        <MessageSquareQuote size={24} className="text-[#f9826c] mr-2" /> 
        Testimonials 
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            onClick={(e) => testimonial.text.length > 200 && toggleTestimonial(testimonial.id, e)}
            className={`
              bg-[#1f2428] 
              rounded-lg 
              p-6 
              border 
              border-[#1f2428]
              transition-all 
              duration-300 
              ease-in-out
              opacity-0
              testimonial-card
              ${testimonial.text.length > 200 ? 'cursor-pointer hover:border-[#f9826c] hover:shadow-lg' : ''}
            `}
            style={{ transform: 'translateY(10px)' }}
          >
            <div className="flex items-start mb-4">
              {testimonial.avatar && (
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400">
                  {testimonial.position} at {testimonial.company}
                </p>
              </div>
            </div>
            
            <blockquote>
              <span className="top-0 left-0 text-4xl text-[#f9826c] opacity-30">"</span>
              <p 
                dangerouslySetInnerHTML={{ 
                  __html: truncateText(
                    testimonial.text, 
                    200, 
                    expandedTestimonials[testimonial.id]
                  ) 
                }} 
                className='text-gray-300 pt-2 text-sm' 
              />
              
              {testimonial.text.length > 200 && (
                <div className="flex justify-between items-center">
                  <button 
                    onClick={(e) => toggleTestimonial(testimonial.id, e)}
                    className="flex items-center text-[#f9826c] hover:text-blue-600 mt-2 text-sm"
                  >
                    {expandedTestimonials[testimonial.id] ? (
                      <>
                        Show Less <ChevronUp size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown size={16} className="ml-1" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </blockquote>
          </div>
        ))}
      </div>
      
      <div 
        className="mt-8 p-4 bg-[#252526] rounded-lg border border-[#1f2428] opacity-0 footer-note"
        style={{ transform: 'translateX(20px)' }}
      >
        <p className="text-gray-400">
          <span className="text-green-400">// </span> 
          These testimonials reflect my commitment to delivering high-quality work and maintaining excellent professional relationships.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;