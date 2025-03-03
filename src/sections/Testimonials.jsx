import React from 'react';
import { testimonials } from '../utils/data';
import { MessageSquareQuote } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <MessageSquareQuote size={24} className="text-[#007ACC] mr-2" />
        Testimonials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-[#2D2D2D] rounded-lg p-6 border border-[#333333]">
            <div className="flex items-start mb-4">
              {testimonial.avatar && (
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.position} at {testimonial.company}</p>
              </div>
            </div>
            
            <blockquote>
              <span className="top-0 left-0 text-4xl text-[#007ACC] opacity-30">"</span>
              <p dangerouslySetInnerHTML={{ __html: testimonial.text }} className='text-gray-300 pt-2 text-sm' />
            </blockquote>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-[#252526] rounded-lg border border-[#333333]">
        <p className="text-gray-400">
          <span className="text-green-400">// </span>
          These testimonials reflect my commitment to delivering high-quality work and maintaining excellent professional relationships.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;