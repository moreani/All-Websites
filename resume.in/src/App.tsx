import React, { useState } from 'react';
import { Phone, Mail, MapPin, Users, Brain, TrendingUp, Shield, ChevronRight, Menu, X, CheckCircle, Star, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
    console.log('Form submitted:', formData);
    // Handle form submission logic here
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
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-brand-blue">Resumes.in</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-brand-blue transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand-blue transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand-blue transition-colors">Contact</button>
              <div className="flex items-center space-x-4 ml-8">
                <a href="tel:+918369848475" className="text-brand-blue hover:text-blue-700 transition-colors">
                  <Phone size={20} />
                </a>
                <a href="mailto:info@resumes.in" className="text-brand-blue hover:text-blue-700 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-brand-blue transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-brand-blue transition-colors">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-brand-blue transition-colors">Contact</button>
                <div className="flex items-center space-x-4 pt-3">
                  <a href="tel:+918369848475" className="text-brand-blue hover:text-blue-700 transition-colors">
                    <Phone size={20} />
                  </a>
                  <a href="mailto:info@resumes.in" className="text-brand-blue hover:text-blue-700 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your <span className="text-brand-blue">Hiring</span> with AI Intelligence
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                India's most advanced AI recruitment platform - from resume parsing to perfect candidate matching
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                  <ChevronRight size={20} className="ml-2" />
                </button>
                <button className="border border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=faces,top&auto=format"
                alt="AI Recruitment Technology" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-green/10 p-2 rounded-lg">
                    <TrendingUp className="text-brand-green" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">75% Faster</p>
                    <p className="text-sm text-gray-600">Time to Hire</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Revolutionizing Indian Recruitment
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format"
                alt="AI Technology in Recruitment" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                India's hiring landscape is rapidly evolving, and Resumes.in stands at the forefront of this transformation. We've developed cutting-edge artificial intelligence specifically designed for the Indian job market, understanding local nuances, languages, and cultural contexts that generic solutions miss.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our AI-powered platform processes thousands of resumes in seconds, identifying top candidates through sophisticated matching algorithms that go beyond keyword searches. We analyze skills, experience patterns, career trajectories, and cultural fit indicators to deliver hiring recommendations that traditional methods simply cannot match.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Built by recruitment experts and AI specialists, our technology has helped over 500 Indian companies reduce their time-to-hire by 75% while improving candidate quality scores by 60%. From startups in Bangalore to enterprises in Mumbai, we're enabling businesses to build stronger teams faster than ever before.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-brand-blue">500+</div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-brand-green">75%</div>
                  <div className="text-sm text-gray-600">Faster Hiring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive AI Recruitment Solutions
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Resume Parsing & Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced natural language processing extracts and structures data from resumes in multiple Indian languages and formats. Our AI understands regional education systems, certification bodies, and career progression patterns unique to India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-brand-green" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Candidate Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Proprietary matching algorithms analyze job requirements against candidate profiles using 200+ data points including technical skills, soft skills, experience relevance, salary expectations, and location preferences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Screening & Shortlisting</h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate manual resume screening with AI that learns your hiring preferences and company culture. Our system automatically shortlists candidates and provides detailed summaries with interview suggestions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bias-Free Recruitment Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive dashboard tracking reveals hiring patterns, identifies potential biases, and provides actionable insights. Monitor diversity metrics and candidate journey analytics for data-driven decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">API Integration & Custom Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly integrate our AI capabilities into your existing HR tech stack through robust APIs. Custom training on your historical hiring data ensures increasingly accurate recommendations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Star className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support & Training</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated support team and comprehensive training programs ensure your team maximizes the platform's potential. Regular updates and feature enhancements keep you ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
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
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your hiring challenges and requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Get Started
                  <ChevronRight size={20} className="ml-2" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-blue/10 p-2 rounded-lg">
                      <MapPin className="text-brand-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600 mt-1">
                        701, Stellar Tower, Chembur East,<br />
                        Sion Opposite, Diamond Garden,<br />
                        Basant Garden, Chembur,<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-blue/10 p-2 rounded-lg">
                      <Phone className="text-brand-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+918369848475" className="text-brand-blue hover:text-blue-700">
                        +91 8369848475
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-blue/10 p-2 rounded-lg">
                      <Mail className="text-brand-blue" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@resumes.in" className="text-brand-blue hover:text-blue-700">
                        info@resumes.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Connect</h3>
                <a
                  href="https://wa.me/918369848475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp Us
                </a>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Location</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <MapPin size={48} className="text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Located in the heart of Mumbai's business district for easy accessibility.
                </p>
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
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Resumes.in</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                AI-Powered Recruitment Revolution for India. Transform your hiring process with intelligent candidate matching and automated screening solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">Twitter</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 8369848475</li>
                <li>info@resumes.in</li>
                <li>resumes.in</li>
                <li className="text-sm">Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Resumes.in. All rights reserved.</p>
            <p className="mt-2">Owned by Scalium.in</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;