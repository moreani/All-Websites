import React, { useState } from 'react';
import { 
  Sparkles, 
  Wheat, 
  Heart, 
  Users, 
  Globe, 
  ChefHat, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Award
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-lora">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-royalBlue" />
              <span className="font-roboto font-bold text-xl text-gray-900">Punjabi.In</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-royalBlue transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-royalBlue transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-royalBlue transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-royalBlue transition-colors">Contact</button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-royalBlue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-2 py-4">
                <button onClick={() => scrollToSection('hero')} className="text-left px-4 py-2 text-gray-700 hover:text-royalBlue hover:bg-gray-50 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 text-gray-700 hover:text-royalBlue hover:bg-gray-50 transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left px-4 py-2 text-gray-700 hover:text-royalBlue hover:bg-gray-50 transition-colors">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-gray-700 hover:text-royalBlue hover:bg-gray-50 transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 bg-gradient-to-br from-royalBlue via-emeraldGreen to-brightYellow min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="font-roboto font-bold text-5xl lg:text-7xl mb-6 text-brightYellow">
                Punjabi.In
              </h2>
              <h1 className="font-roboto font-bold text-3xl lg:text-5xl mb-6 leading-tight">
                Empowering Punjab through 
                <span className="text-brightYellow"> Intelligent Technology</span> Solutions
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Welcome to Punjabi.In - Leading the AI Revolution in Punjab! Our mission is to empower the Punjabi community through innovative agricultural and health insights, custom AI solutions, and cultural consultancy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="bg-brightYellow text-royalBlue font-roboto font-bold px-8 py-4 rounded-lg hover:bg-golden transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-white text-white font-roboto font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-royalBlue transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-96 h-96">
                {/* Main Center Circle with Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                    <Sparkles className="h-24 w-24 text-white" />
                  </div>
                </div>

                {/* Service Icons in Outer Circle */}
                {/* Agriculture - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-16 h-16 bg-emeraldGreen rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <Wheat className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Health - Top Right */}
                <div className="absolute top-8 right-8">
                  <div className="w-16 h-16 bg-deepRed rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* AI Solutions - Right */}
                <div className="absolute top-1/2 right-0 transform translate-x-2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-royalBlue rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Cultural Consultancy - Bottom Right */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-16 h-16 bg-orangeSaffron rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Community - Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <div className="w-16 h-16 bg-brightYellow rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <Users className="h-8 w-8 text-gray-800" />
                  </div>
                </div>

                {/* Culinary - Bottom Left */}
                <div className="absolute bottom-8 left-8">
                  <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <ChefHat className="h-8 w-8 text-gray-800" />
                  </div>
                </div>

                {/* Innovation - Left */}
                <div className="absolute top-1/2 left-0 transform -translate-x-2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-emeraldGreen rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Excellence - Top Left */}
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 bg-deepRed rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Connecting Lines (Optional decorative elements) */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 384 384">
                    <circle cx="192" cy="192" r="120" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-roboto font-bold text-4xl text-gray-900 mb-6">About Punjabi.In</h2>
            <div className="w-24 h-1 bg-royalBlue mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Punjabi.In is at the forefront of integrating artificial intelligence into the heart of Punjab's agricultural ecosystem. We understand the challenges that farmers face and aim to provide actionable insights through our advanced analytics tools designed for crop monitoring and health management.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                By facilitating intelligent retail solutions, we ensure that agricultural products reach markets effectively, reducing waste and maximizing profitability.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In addition, our cultural consultancy uses AI to connect businesses with the rich traditions and trends of the Punjabi community, ensuring that cultural sensitivities are respected and enhanced.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-royalBlue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-roboto font-bold text-2xl text-royalBlue">AI-Powered</p>
                  <p className="text-sm text-gray-600">Advanced Solutions</p>
                </div>
                <div className="text-center">
                  <div className="bg-emeraldGreen w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-roboto font-bold text-2xl text-emeraldGreen">Targeted</p>
                  <p className="text-sm text-gray-600">For Punjab Community</p>
                </div>
                <div className="text-center">
                  <div className="bg-brightYellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-8 w-8 text-gray-800" />
                  </div>
                  <p className="font-roboto font-bold text-2xl text-brightYellow">Excellence</p>
                  <p className="text-sm text-gray-600">In Innovation</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emeraldGreen mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-bold text-lg text-gray-900 mb-2">Agricultural Innovation</h3>
                    <p className="text-gray-600">Advanced AI analytics for crop monitoring, yield prediction, and sustainable farming practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emeraldGreen mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-bold text-lg text-gray-900 mb-2">Health & Wellness</h3>
                    <p className="text-gray-600">Real-time health support systems designed specifically for agricultural workers and communities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emeraldGreen mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-roboto font-bold text-lg text-gray-900 mb-2">Cultural Preservation</h3>
                    <p className="text-gray-600">AI-powered solutions that honor and enhance Punjabi cultural traditions and values.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-roboto font-bold text-4xl text-gray-900 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-royalBlue mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored for the Punjabi community's unique needs and cultural values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-emeraldGreen to-emeraldGreen/80 p-8 rounded-2xl text-white group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wheat className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-roboto font-bold text-xl mb-4">Smart Agriculture & Health Insights</h3>
              <ul className="space-y-2 text-white/90">
                <li>• AI analytics for crop monitoring and yield prediction</li>
                <li>• Pest detection and prevention systems</li>
                <li>• Health chatbots for agricultural workers</li>
                <li>• Inventory management optimization</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-royalBlue to-royalBlue/80 p-8 rounded-2xl text-white group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-roboto font-bold text-xl mb-4">Custom AI Solutions Development</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Tailored AI consulting for local businesses</li>
                <li>• Ethical AI usage guidance</li>
                <li>• Responsible innovation workshops</li>
                <li>• Cultural sensitivity integration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-deepRed to-deepRed/80 p-8 rounded-2xl text-white group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-roboto font-bold text-xl mb-4">Cultural Consultancy & Market Insights</h3>
              <ul className="space-y-2 text-white/90">
                <li>• AI-powered Punjabi trend analysis</li>
                <li>• Cultural preference insights</li>
                <li>• Community feedback mechanisms</li>
                <li>• Market research and analytics</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-brightYellow to-golden p-8 rounded-2xl text-gray-800 group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="font-roboto font-bold text-xl mb-4">AI-Powered Cultural Hub</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Adaptive Punjabi language learning platform</li>
                <li>• AI-generated cultural content</li>
                <li>• Arts and entertainment connections</li>
                <li>• Cultural event recommendations</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-gradient-to-br from-orangeSaffron to-orangeSaffron/80 p-8 rounded-2xl text-white group hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-roboto font-bold text-xl mb-4">Community & Culinary Engagement</h3>
              <ul className="space-y-2 text-white/90">
                <li>• AI connections based on shared interests</li>
                <li>• Personalized recipe generation</li>
                <li>• Culinary event promotions</li>
                <li>• Cultural cuisine recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-roboto font-bold text-4xl text-gray-900 mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-royalBlue mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Ready to transform your business with AI? Let's start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-6">Send us a Message</h3>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalBlue focus:border-royalBlue transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalBlue focus:border-royalBlue transition-colors"
                    placeholder="your@email.com"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royalBlue focus:border-royalBlue transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-royalBlue text-white font-roboto font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-royalBlue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-roboto font-bold text-lg text-gray-900 mb-2">Address</h4>
                      <p className="text-gray-600">
                        701, Stellar Tower, Chembur East, Sion Opposite,<br />
                        Diamond Garden, Basant Garden, Chembur,<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-emeraldGreen mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-roboto font-bold text-lg text-gray-900 mb-2">Phone</h4>
                      <a href="tel:+918369848475" className="text-emeraldGreen hover:text-emeraldGreen/80 transition-colors">
                        +91 83698 48475
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-deepRed mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-roboto font-bold text-lg text-gray-900 mb-2">Email</h4>
                      <a href="mailto:info@punjabi.in" className="text-deepRed hover:text-deepRed/80 transition-colors">
                        info@punjabi.in
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <a
                    href="https://wa.me/918369848475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emeraldGreen text-white font-roboto font-bold py-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center group"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Connect on WhatsApp
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6547756406147!2d72.8856!3d19.0516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4b6e4e7%3A0x82ef7c77f4e4e4e7!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Punjabi.In Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-brightYellow" />
                <span className="font-roboto font-bold text-xl">Punjabi.In</span>
              </div>
              <p className="text-gray-400 mb-4">
                Cultivating Innovation Through Culture and Community
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Punjabi.In. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-roboto font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-brightYellow transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-brightYellow transition-colors">Services</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-brightYellow transition-colors">Contact</button>
                <a href="https://punjabi.in" className="block text-gray-400 hover:text-brightYellow transition-colors">punjabi.in</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-roboto font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <div className="w-10 h-10 bg-royalBlue rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-emeraldGreen rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-deepRed rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <span className="text-white font-bold text-sm">in</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Owned by <span className="text-brightYellow">Scalium.in</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;