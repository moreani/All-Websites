import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Shield, 
  Eye, 
  Zap, 
  BarChart3, 
  Target, 
  MapPin,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Check
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-montserrat font-bold text-primary">
                Security Guards AI
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </nav>

            {/* Contact Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:+918369848475" 
                className="p-2 text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-200"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:info@securityguards.co.in" 
                className="p-2 text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  Contact
                </button>
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <a 
                    href="tel:+918369848475" 
                    className="p-2 text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-200"
                  >
                    <Phone size={20} />
                  </a>
                  <a 
                    href="mailto:info@securityguards.co.in" 
                    className="p-2 text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-200"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 text-white pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-85c0c291e8e5?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Revolutionizing Security
            <span className="block text-accent">with AI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Intelligent solutions for a secure tomorrow. Transform your security infrastructure with cutting-edge AI technology.
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
          >
            Get Started
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-6">
                Securing Tomorrow with Intelligent Solutions
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  In an ever-changing world, ensuring the safety of assets, personnel, and premises is paramount. 
                  Security Guards AI integrates cutting-edge artificial intelligence solutions to transform traditional security models.
                </p>
                <p>
                  Our AI-driven technologies enhance surveillance capabilities, automate threat detection, and optimize 
                  security personnel deployment, making businesses safer and more efficient. With a deep understanding 
                  of the Indian security landscape, we're dedicated to helping enterprises navigate risks while maximizing operational efficiency.
                </p>
                <p>
                  We leverage advanced analytics and machine learning to predict potential threats, allowing you to act 
                  proactively rather than reactively. Join us in pioneering a safer future with technology at its core.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-gray-600">Enterprises Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-gray-600">Threat Detection Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=700&fit=crop&crop=center&auto=format&q=80" 
                alt="AI Security Technology"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border border-gray-100">
                <Shield className="w-12 h-12 text-accent mb-2" />
                <div className="font-semibold text-primary">AI-Powered Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
              Our AI Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-driven security solutions designed to protect your business and enhance operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-4">
                AI-Powered Surveillance
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Utilizing machine learning algorithms for real-time monitoring and alerts, ensuring threats are detected before they escalate.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  24/7 Intelligent Monitoring
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Real-time Threat Alerts
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Advanced Analytics
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-4">
                Automated Threat Detection
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Scanning camera feeds and data systems to identify unusual patterns and notify security personnel instantly.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Pattern Recognition
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Instant Notifications
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  False Alarm Reduction
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-4">
                Security Optimization
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Analyzing data to optimize the deployment of security staff, ensuring high-risk areas are adequately covered.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Resource Allocation
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Risk Assessment
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Cost Efficiency
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <BarChart3 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-4">
                Predictive Analytics
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Implementing AI to analyze past incidents and predict potential threats, allowing for strategic planning.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Trend Analysis
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Risk Forecasting
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-accent mr-2" />
                  Strategic Planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
              Ready to Elevate Your Security Strategy?
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with our AI security experts today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-montserrat font-semibold text-primary mb-6">
                Send us a Message
              </h3>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                    placeholder="Enter your full name"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                    placeholder="Enter your email address"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your security requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-montserrat font-semibold text-primary mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        701, Stellar Tower, Chembur East, Sion Opposite, 
                        Diamond Garden, Basant Garden, Chembur, 
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <a 
                        href="tel:+918369848475"
                        className="text-gray-600 hover:text-accent transition-colors duration-200"
                      >
                        +91 8369848475
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <a 
                        href="mailto:info@securityguards.co.in"
                        className="text-gray-600 hover:text-accent transition-colors duration-200"
                      >
                        info@securityguards.co.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">WhatsApp</h4>
                      <a 
                        href="https://wa.me/918369848475"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 hover:text-accent transition-colors duration-200"
                      >
                        Chat with us
                        <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-xl shadow-lg p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5647834577646!2d72.89838741490244!3d19.05250678711004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c72f4b1c1b%3A0x1c1c1c1c1c1c1c1c!2sChembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1622345678901!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-4">Security Guards AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Transforming security through intelligent AI solutions. 
                Securing tomorrow with cutting-edge technology and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>+91 8369848475</p>
                <p>info@securityguards.co.in</p>
                <p>Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Security Guards AI | All Rights Reserved</p>
            <p className="mt-2">
              Owned by{' '}
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-200"
              >
                Scalium.in
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918369848475"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default App;