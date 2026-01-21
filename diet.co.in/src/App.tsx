import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Brain, BarChart3, Shield, MapPin, MessageCircle, Send, Check } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-emerald-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">DietAI</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition-colors">
                Contact
              </button>
            </nav>

            {/* Contact Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+918369848475" className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:info@diet.co.in" className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <div className="px-4 py-4 space-y-4">
                <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors">
                  Contact
                </button>
                <div className="pt-4 border-t border-gray-100 flex space-x-4">
                  <a href="tel:+918369848475" className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                    <Phone className="h-5 w-5" />
                  </a>
                  <a href="mailto:info@diet.co.in" className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  DietAI: Your 
                  <span className="text-emerald-600"> Personalized</span>
                  <br />
                  Nutrition Partner
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Intelligent Nutrition for a Healthier India. Transform your health journey with AI-powered personalized diet plans tailored to your unique needs and cultural preferences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Diet Plans
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all"
                >
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">AI Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Healthy Indian cuisine with technology elements"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Diverse team working on health and technology solutions"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-400 rounded-2xl p-6 shadow-xl">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Revolutionizing Nutrition with 
                  <span className="text-emerald-600"> Artificial Intelligence</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At DietAI, we believe that optimal nutrition should be accessible to everyone. Our cutting-edge AI technology analyzes your unique health profile, dietary preferences, and cultural background to create personalized nutrition plans that actually work.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 rounded-full p-2 mt-1">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Evidence-Based Approach</h3>
                    <p className="text-gray-600">Our recommendations are backed by extensive nutritional research and validated by certified dietitians.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 rounded-full p-2 mt-1">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cultural Sensitivity</h3>
                    <p className="text-gray-600">We understand Indian dietary preferences and regional cuisines, ensuring your meal plans feel familiar and enjoyable.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 rounded-full p-2 mt-1">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">Our AI continuously learns from your progress and adapts your nutrition plan for optimal results.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                More than just a platform, DietAI is your dedicated partner in achieving lasting health transformation. Our team of nutritionists, data scientists, and software engineers work tirelessly to ensure you receive the most accurate and effective guidance on your wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">AI-Powered</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of nutrition with our comprehensive suite of intelligent health solutions designed specifically for the Indian lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-emerald-100 rounded-2xl p-4 w-fit mb-6 group-hover:bg-emerald-200 transition-colors">
                <Brain className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Diet Plans</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our advanced AI algorithms analyze your health data, lifestyle, and preferences to create customized diet plans that respect your cultural food choices and dietary restrictions.
              </p>
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="AI-powered nutrition analysis"
                className="rounded-2xl w-full h-48 object-cover"
              />
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-amber-100 rounded-2xl p-4 w-fit mb-6 group-hover:bg-amber-200 transition-colors">
                <BarChart3 className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Nutrition Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Simply log your meals and let our AI track your calorie intake, macronutrient balance, and provide instant feedback on your nutritional choices throughout the day.
              </p>
              <img
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Nutrition data analysis"
                className="rounded-2xl w-full h-48 object-cover"
              />
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-blue-100 rounded-2xl p-4 w-fit mb-6 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Health Insights</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our AI analyzes your health patterns to identify potential risks and provides personalized recommendations for prevention, helping you stay ahead of health issues.
              </p>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Health insights and analytics"
                className="rounded-2xl w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in <span className="text-emerald-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your health journey? Contact us today to learn more about our AI-powered nutrition solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
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
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your health goals and how we can help"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {formStatus === 'sending' && (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  )}
                  {formStatus === 'sent' && (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Message Sent!</span>
                    </>
                  )}
                  {formStatus === 'idle' && (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Our Location</h4>
                      <p className="text-gray-600">
                        701, Stellar Tower, Chembur East,<br />
                        Sion Opposite, Diamond Garden,<br />
                        Basant Garden, Chembur,<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+918369848475" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        +91 8369848475
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:info@diet.co.in" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        info@diet.co.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918369848475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5789659187896!2d72.89016781490223!3d19.04525828710961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c850f0a66b4f%3A0x4d4b7f4e2a4e5f7c!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635760000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DietAI Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Brain className="h-8 w-8 text-emerald-400 mr-2" />
              <span className="text-2xl font-bold">DietAI</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2025 DietAI. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Owned by <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Scalium.in</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;