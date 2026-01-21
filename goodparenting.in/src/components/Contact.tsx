
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    challenge: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      challenge: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-family-gray">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-deep-text mb-6">
              Connect with Our 
              <span className="text-gradient block mt-2">Parenting AI Experts</span>
            </h2>
            <div className="w-24 h-1 bg-nurturing-teal mx-auto mb-8"></div>
            <p className="text-xl text-soft-text max-w-3xl mx-auto leading-relaxed">
              Ready to begin your AI-powered parenting journey? Get in touch with our experts for personalized guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-deep-text mb-6">
                  Get Your Personalized Consultation
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-deep-text font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nurturing-teal focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-deep-text font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nurturing-teal focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-deep-text font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nurturing-teal focus:border-transparent transition-all duration-300"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="childAge" className="block text-deep-text font-medium mb-2">
                        Child's Age
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nurturing-teal focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select age range</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="11-15">11-15 years</option>
                        <option value="16+">16+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-deep-text font-medium mb-2">
                      Specific Parenting Challenge
                    </label>
                    <input
                      type="text"
                      id="challenge"
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nurturing-teal focus:border-transparent transition-all duration-300"
                      placeholder="e.g., behavioral issues, academic stress, screen time management"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-deep-text font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nurturing-teal focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us more about your parenting goals and challenges..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-nurturing-teal text-white rounded-lg font-semibold text-lg hover:bg-nurturing-teal/90 transition-all duration-300 hover-scale flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-playfair font-bold text-deep-text mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-nurturing-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-nurturing-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-text mb-1">Our Office</h4>
                      <p className="text-soft-text leading-relaxed">
                        701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-warm-coral/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-warm-coral" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-text mb-1">Phone</h4>
                      <a 
                        href="tel:+918369848475" 
                        className="text-soft-text hover:text-nurturing-teal transition-colors duration-300"
                      >
                        +91 8369848475
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-nurturing-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-nurturing-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-text mb-1">Email</h4>
                      <a 
                        href="mailto:info@goodparenting.in" 
                        className="text-soft-text hover:text-nurturing-teal transition-colors duration-300"
                      >
                        info@goodparenting.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle size={32} />
                  <h3 className="text-2xl font-playfair font-bold">
                    Quick WhatsApp Consultation
                  </h3>
                </div>
                <p className="mb-6 leading-relaxed">
                  Need immediate parenting guidance? Connect with our AI experts on WhatsApp for instant support.
                </p>
                <a 
                  href="https://wa.me/918369848475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover-scale"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl p-2 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5834847842633!2d72.89866!3d19.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzAwLjAiTiA3MsKwNTMnNTUuMiJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
