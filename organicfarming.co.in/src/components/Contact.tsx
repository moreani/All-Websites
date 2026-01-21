import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your farming operations with AI? Contact us today for a free consultation and discover how we can help you achieve sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="bg-background p-8 rounded-2xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block font-roboto font-medium text-text mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-roboto font-medium text-text mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-roboto font-medium text-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell us about your farming needs and how we can help"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 px-6 rounded-xl font-roboto font-medium hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Send Message
                <Send size={20} className="ml-2" />
              </button>
            </form>

            <div className="mt-8">
              <a
                href="https://wa.me/918369848475"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-4 px-6 rounded-xl font-roboto font-medium hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.519274408838!2d72.89278967592465!3d19.05312898212412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6c243a86b39%3A0x11f2f8d4c947e726!2sStellar%20Tower!5e0!3m2!1sen!2sin!4v1719131705925!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                className="rounded-2xl shadow-lg border-0"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Organic Farming AI Office Location"
              ></iframe>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-4 flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-text mb-2">Address</h3>
                  <p className="font-roboto text-gray-600">
                    701, Stellar Tower, Chembur East, Sion Opposite,<br />
                    Diamond Garden, Basant Garden, Chembur,<br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-text mb-2">Phone</h3>
                  <a 
                    href="tel:+918369848475" 
                    className="font-roboto text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    +91 83698 48475
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-text mb-2">Email</h3>
                  <a 
                    href="mailto:info@organicfarming.co.in" 
                    className="font-roboto text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    info@organicfarming.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Globe size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-text mb-2">Website</h3>
                  <a 
                    href="https://organicfarming.co.in" 
                    className="font-roboto text-gray-600 hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    organicfarming.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;