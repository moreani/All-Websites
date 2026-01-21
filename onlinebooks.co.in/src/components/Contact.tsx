import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    genres: '',
    goals: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-light-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-literata font-bold text-4xl lg:text-5xl text-text-dark mb-6">
            Join India's Most{' '}
            <span className="text-primary">Intelligent Reading Community</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Ready to transform your reading experience? Get in touch and let our AI help you discover 
            your next literary adventure.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <h3 className="font-literata font-bold text-2xl lg:text-3xl text-text-dark mb-8">
              Start Your Reading Journey
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-dark mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="genres" className="block text-sm font-semibold text-text-dark mb-2">
                  Favorite Genres
                </label>
                <input
                  type="text"
                  id="genres"
                  name="genres"
                  value={formData.genres}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Fiction, Mystery, Romance, etc."
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-semibold text-text-dark mb-2">
                  Reading Goals
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your reading preferences and what you hope to discover..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg"
              >
                <span>Start My Reading Journey</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Business Info Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="font-literata font-bold text-2xl text-text-dark mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Office Address</h4>
                    <p className="text-text-light">
                      701, Stellar Tower, Chembur East<br />
                      Sion Opposite, Diamond Garden<br />
                      Basant Garden, Chembur<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Phone</h4>
                    <a href="tel:+918369848475" className="text-text-light hover:text-primary transition-colors">
                      +91 8369848475
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Email</h4>
                    <a href="mailto:info@onlinebooks.co.in" className="text-text-light hover:text-primary transition-colors">
                      info@onlinebooks.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark mb-1">Website</h4>
                    <a href="https://onlinebooks.co.in" className="text-text-light hover:text-primary transition-colors">
                      onlinebooks.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Social */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-literata font-bold text-xl mb-2">
                    Quick Chat on WhatsApp
                  </h3>
                  <p className="text-green-100">
                    Get instant book recommendations and support
                  </p>
                </div>
                <a 
                  href="https://wa.me/918369848475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 p-4 rounded-2xl transition-all hover:scale-110"
                >
                  <MessageSquare className="w-8 h-8" />
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white rounded-3xl p-4 shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8891234567!2d72.8894!3d19.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzA4LjAiTiA3MsKwNTMnMjEuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;