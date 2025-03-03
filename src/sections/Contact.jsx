import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    
        emailjs
          .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
              from_name: formData.name,
              to_name: "Harshana Batagalla",
              from_email: formData.email,
              to_email: "harshanabatagalla@gmail.com",
              message: formData.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. I will get back to you as soon as possible.");
    
              setFormData({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
              alert("oops! something went wrong. Please try again.");
            }
          );
        }

    return (
        <div id="contact-section" className="h-full p-6 overflow-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail size={24} className="text-[#007ACC] mr-2" />
                Contact Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-[#1E1E1E] border border-[#333333] rounded text-white focus:outline-none focus:border-[#007ACC]"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-[#1E1E1E] border border-[#333333] rounded text-white focus:outline-none focus:border-[#007ACC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2 bg-[#1E1E1E] border border-[#333333] rounded text-white focus:outline-none focus:border-[#007ACC]"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#007ACC] text-white rounded flex items-center hover:bg-[#005A9C] transition-colors"
                        >
                            <Send size={16} className="mr-2" />
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="bg-[#2D2D2D] rounded-lg p-6 border border-[#333333]">
                    <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>

                    <div className="space-y-4">
                        <div className="flex items-start cursor-pointer" onClick={() => window.open('mailto:harshanabatagalla@gmail.com')}>
                            <Mail size={20} className="text-[#007ACC] mt-1 mr-3" />
                            <div>
                                <h4 className="text-white font-medium">Email</h4>
                                <p className="text-gray-400">harshana.batagalla@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start cursor-pointer" onClick={() => window.open('tel:+94763226659')}>
                            <Phone size={20} className="text-[#007ACC] mt-1 mr-3" />
                            <div>
                                <h4 className="text-white font-medium">Phone</h4>
                                <p className="text-gray-400">+94 763226659</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <MapPin size={20} className="text-[#007ACC] mt-1 mr-3" />
                            <div>
                                <h4 className="text-white font-medium">Location</h4>
                                <p className="text-gray-400">Colombo, Sri Lanka.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h4 className="text-white font-medium mb-2">Availability</h4>
                        <p className="text-gray-400">
                            I'm currently available for freelance work and full-time positions.
                            Feel free to reach out if you have a project in mind or job opportunity.
                        </p>
                    </div>

                    <div className="mt-6 p-4 bg-[#252526] rounded border border-[#333333]">
                        <p className="text-gray-400">
                            <span className="text-green-400">// </span>
                            Response time: Usually within 24 hours
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;