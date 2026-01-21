
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-roboto font-bold text-3xl md:text-4xl lg:text-5xl text-primary-blue mb-6">
            Contact Us
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business travel with AI? Contact us today for a free demo and personalized consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-bg-light rounded-2xl p-8 shadow-lg">
            <h3 className="font-roboto font-bold text-2xl text-primary-blue mb-6">
              Get In Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-open-sans font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                  placeholder="Your Full Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-open-sans font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block font-open-sans font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-open-sans font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Tell us about your business travel needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white font-open-sans font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-bg-light rounded-2xl p-8 shadow-lg">
              <h3 className="font-roboto font-bold text-2xl text-primary-blue mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-map-marker-alt text-primary-blue"></i>
                  </div>
                  <div>
                    <h4 className="font-open-sans font-semibold text-gray-800 mb-2">Address</h4>
                    <p className="font-open-sans text-gray-600 leading-relaxed">
                      701, Stellar Tower, Chembur East, Sion Opposite,<br />
                      Diamond Garden, Basant Garden, Chembur,<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-phone text-primary-blue"></i>
                  </div>
                  <div>
                    <h4 className="font-open-sans font-semibold text-gray-800 mb-2">Phone</h4>
                    <a href="tel:+918369848475" className="font-open-sans text-gray-600 hover:text-primary-blue transition-colors">
                      +91 8369848475
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-envelope text-primary-blue"></i>
                  </div>
                  <div>
                    <h4 className="font-open-sans font-semibold text-gray-800 mb-2">Email</h4>
                    <a href="mailto:info@businesstravel.co.in" className="font-open-sans text-gray-600 hover:text-primary-blue transition-colors">
                      info@businesstravel.co.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mt-1">
                    <i className="fas fa-globe text-primary-blue"></i>
                  </div>
                  <div>
                    <h4 className="font-open-sans font-semibold text-gray-800 mb-2">Website</h4>
                    <a href="https://businesstravel.co.in" className="font-open-sans text-gray-600 hover:text-primary-blue transition-colors">
                      businesstravel.co.in
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a 
                  href="https://wa.me/918369848475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-accent-green hover:bg-accent-green/90 text-white font-open-sans font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fab fa-whatsapp text-xl mr-3"></i>
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.797234567!2d72.8936!3d19.0576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c2d1234567%3A0x1234567890abcdef!2sChembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Business Travel AI Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
