import React, { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../utils/data";
import { MessageSquareQuote, ChevronDown, ChevronUp } from "lucide-react";

const Testimonials = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  const toggleTestimonial = (id, e) => {
    e.stopPropagation();
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateText = (text, maxLength = 200, expanded = false) => {
    if (expanded) return text;
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
      <motion.h2
        className="text-2xl font-bold text-white mb-6 flex items-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <MessageSquareQuote size={24} className="text-[#f9826c] mr-2" />
        Testimonials
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            onClick={(e) =>
              testimonial.text.length > 200 && toggleTestimonial(testimonial.id, e)
            }
            className={`
              bg-[#1f2428]
              rounded-lg
              p-6
              border
              border-[#1f2428]
              transition-all
              duration-300
              ease-in-out
              cursor-pointer
              hover:border-[#f9826c] hover:shadow-lg
            `}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
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
                className="text-gray-300 pt-2 text-sm"
                dangerouslySetInnerHTML={{
                  __html: truncateText(
                    testimonial.text,
                    200,
                    expandedTestimonials[testimonial.id]
                  ),
                }}
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
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 p-4 bg-[#252526] rounded-lg border border-[#1f2428]"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400">
          <span className="text-green-400">// </span>
          These testimonials reflect my commitment to delivering high-quality work and maintaining excellent professional relationships.
        </p>
      </motion.div>
    </div>
  );
};

export default Testimonials;
