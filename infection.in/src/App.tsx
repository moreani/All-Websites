import React, { useState } from 'react';
import { 
  ChevronDown, 
  Shield, 
  Users, 
  BookOpen, 
  Syringe, 
  Droplets, 
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-roboto">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-opensans font-semibold text-xl text-text">Infection Insights</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-text hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-text hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-text hover:text-primary transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-text hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-text hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="block px-3 py-2 text-text hover:text-primary w-full text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 text-text hover:text-primary w-full text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block px-3 py-2 text-text hover:text-primary w-full text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block px-3 py-2 text-text hover:text-primary w-full text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-opensans font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Your Guide to Understanding Infectious Diseases
          </h1>
          <p className="font-roboto text-xl sm:text-2xl mb-8 opacity-90">
            Stay Informed, Stay Healthy
          </p>
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-primary hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-opensans font-bold text-4xl sm:text-5xl text-text mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Infection Insights is dedicated to raising awareness about infectious diseases through easily understandable, localized content. Our goal is to promote public health by providing evidence-based information on vaccination, hygiene, and disease prevention tailored to the diverse demographics of India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With an emphasis on clarity and accessibility, we empower individuals and communities to take proactive steps in safeguarding their health. By leveraging AI technologies and community engagement, we ensure that vital health education reaches every corner of society.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-text">Community-Driven</h3>
                  <p className="text-gray-600">Empowering communities through education</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare professionals working together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-2xl">10,000+</h4>
                <p className="text-blue-100">People Educated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-opensans font-bold text-4xl sm:text-5xl text-text mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive health education services designed to inform, protect, and empower communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health Education */}
            <div className="bg-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-opensans font-semibold text-2xl text-text mb-4">Health Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive workshops and webinars on various infectious diseases, promoting understanding of symptoms, treatment, and prevention.
              </p>
            </div>

            {/* Content Creation */}
            <div className="bg-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-opensans font-semibold text-2xl text-text mb-4">Content Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                Infographics, videos, and articles tailored to diverse literacy levels, ensuring accessibility of health information.
              </p>
            </div>

            {/* Vaccination Awareness */}
            <div className="bg-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Syringe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-opensans font-semibold text-2xl text-text mb-4">Vaccination Awareness</h3>
              <p className="text-gray-600 leading-relaxed">
                Building community-driven initiatives to spread awareness about the importance of vaccinations and combat misinformation.
              </p>
            </div>

            {/* Hygiene Best Practices */}
            <div className="bg-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-opensans font-semibold text-2xl text-text mb-4">Hygiene Best Practices</h3>
              <p className="text-gray-600 leading-relaxed">
                Disseminating simple and effective hygiene practices that individuals can adopt to prevent infections.
              </p>
            </div>

            {/* AMR Education */}
            <div className="bg-cardBg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-opensans font-semibold text-2xl text-text mb-4">AMR Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing educational resources on Antimicrobial Resistance, its implications, and preventive strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-opensans font-bold text-4xl sm:text-5xl text-text mb-6">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to learn more or collaborate with us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-cardBg rounded-2xl p-8 shadow-lg">
              <h3 className="font-opensans font-semibold text-2xl text-text mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-cardBg rounded-2xl p-8 shadow-lg">
                <h3 className="font-opensans font-semibold text-2xl text-text mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text">Address</p>
                      <p className="text-gray-600">
                        701, Stellar Tower, Chembur East,<br />
                        Sion Opposite, Diamond Garden,<br />
                        Basant Garden, Chembur,<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text">Phone</p>
                      <a href="tel:+918369848475" className="text-accent hover:underline">
                        +91 8369848475
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text">Email</p>
                      <a href="mailto:info@infection.in" className="text-accent hover:underline">
                        info@infection.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-opensans font-semibold text-xl text-text mb-2">
                    Quick Chat on WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get instant responses to your queries
                  </p>
                  <a
                    href="https://wa.me/918369848475?text=Hi%20Infection%20Insights%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat with us</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-cardBg rounded-2xl p-8 shadow-lg">
                <h3 className="font-opensans font-semibold text-2xl text-text mb-6">Find Us</h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8374042853635!2d72.89019737498727!3d19.062518652110896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c636c33b5d4f%3A0x7f5ce8e21a1b6c7e!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704364800000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Infection Insights Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-opensans font-semibold text-lg">Infection Insights</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                © 2024 Infection Insights. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Owned by <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Scalium.in</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;