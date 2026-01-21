import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  BarChart3, 
  Users, 
  Brain, 
  CheckCircle, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Menu,
  X,
  TrendingUp,
  Shield,
  Target,
  Award,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [daysCounter, setDaysCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysCounter(prev => (prev + 1) % 1000);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-roboto text-gray-800 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-poppins font-semibold text-xl text-gray-900">Quit Smoking AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Services</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-primary font-medium text-sm">AI-Powered Solution</span>
                </div>
              </div>
              
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                Count Your Days<br />
                <span className="text-primary">Smoke-Free</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Harness the Power of AI to Quit Smoking for Good
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl text-primary">{daysCounter}</div>
                  <div className="text-sm text-gray-600">Days Tracked</div>
                </div>
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl text-primary">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="font-poppins font-bold text-2xl text-primary">10K+</div>
                  <div className="text-sm text-gray-600">Users Helped</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Healthy lifestyle - person enjoying outdoor activity"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Progress Tracking</div>
                      <div className="text-sm text-gray-600">Real-time insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Empowering Your Journey with <span className="text-primary">Data & AI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We understand that quitting smoking is not just a personal decision; it's a challenging journey that requires support and understanding.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Quit Smoking AI, our mission is to empower you with data-driven insights tailored to your unique quitting path. By analyzing your smoking habits and personal triggers, we offer personalized strategies that enhance your chances of success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Utilizing advanced machine learning algorithms, we continuously refine our recommendations based on the latest research and our growing database of quitter experiences. Join our community, and let's conquer this together!
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <Brain className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">AI-Powered</h3>
                  <p className="text-gray-600">Advanced algorithms analyze your patterns</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Shield className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Proven Methods</h3>
                  <p className="text-gray-600">Evidence-based approaches that work</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Data analytics dashboard"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-accent text-white p-4 rounded-xl shadow-lg">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed specifically for your smoke-free journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Personalized Data Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Using AI to assess your smoking habits and predict your challenges, we provide tailored advice to help you stay on track.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Visualize your quitting journey through graphs and metrics that highlight your successes and areas for improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Community Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain access to anonymized data from thousands of others like you, which helps in understanding quitting patterns and support strategies that work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborate with experts who provide evidence-based advice, psychological support, and encouragement based on your individual data profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your smoke-free journey? Contact us today and let our AI-powered platform guide you to success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background-light p-8 rounded-2xl">
              <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your smoking cessation goals..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-background-light p-8 rounded-2xl">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        701, Stellar Tower, Chembur East,<br />
                        Sion Opposite, Diamond Garden,<br />
                        Basant Garden, Chembur, Mumbai,<br />
                        Maharashtra 400071
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 8369848475</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@quitsmoking.in</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a 
                  href="https://wa.me/918369848475" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-green-500 text-white px-6 py-4 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Click here to chat with us</span>
                </a>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-background-light p-4 rounded-2xl">
                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5743489947!2d72.89873731744384!3d19.062247399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86d9b5e9c3b%3A0x5c5c5c5c5c5c5c5c!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <span className="font-poppins font-semibold text-xl">Quit Smoking AI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering your journey to a smoke-free life with data-driven insights and AI-powered support.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-primary transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-primary transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-primary transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-primary transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+91 8369848475</li>
                <li>info@quitsmoking.in</li>
                <li>quitsmoking.in</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              © 2025 Quit Smoking AI. All rights reserved. | Owned by{' '}
              <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-green-400 transition-colors">
                Scalium.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;