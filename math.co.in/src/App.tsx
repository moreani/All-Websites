import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Calculator, Brain, BarChart3, Network, MapPin, Send, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="font-roboto font-bold text-2xl text-primary">
              Maths.co.in
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">Contact</button>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex space-x-4">
              <a href="tel:+918369848475" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                <Phone size={16} className="mr-1" />
                +91 8369848475
              </a>
              <a href="mailto:info@maths.co.in" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                <Mail size={16} className="mr-1" />
                info@maths.co.in
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">About</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Services</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary">Contact</button>
                <div className="border-t pt-2">
                  <a href="tel:+918369848475" className="flex items-center px-3 py-2 text-gray-700 hover:text-primary">
                    <Phone size={16} className="mr-2" />
                    +91 8369848475
                  </a>
                  <a href="mailto:info@maths.co.in" className="flex items-center px-3 py-2 text-gray-700 hover:text-primary">
                    <Mail size={16} className="mr-2" />
                    info@maths.co.in
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-roboto font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Unlock the Power of AI with a 
              <span className="text-primary"> Solid Mathematical Foundation</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Master the essential mathematical concepts behind artificial intelligence and machine learning. 
              Equip yourself for a career in India's booming tech sector.
            </p>
            <div className="max-w-4xl mx-auto text-gray-600 mb-10 text-lg leading-relaxed">
              <p>
                In today's data-driven world, a strong grasp of mathematics is crucial for success in AI. 
                Maths.co.in offers comprehensive online courses designed to bridge the gap between mathematical 
                theory and practical AI applications. Whether you're a student, a working professional, or simply 
                curious about AI, our expert instructors will guide you through the core concepts you need to thrive. 
                We'll help you understand the algorithms, build your own models, and solve real-world problems with confidence.
              </p>
            </div>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Explore Our Courses
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-gray-900 mb-8">
                Why Maths Matters in the Age of AI
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Artificial intelligence is built on a foundation of mathematics. Understanding concepts like 
                  linear algebra, calculus, probability, and statistics is essential for anyone who wants to 
                  truly master AI. Without this foundation, you're simply using AI as a black box, unable to 
                  understand how it works or to troubleshoot problems.
                </p>
                <p>
                  At Maths.co.in, we believe that a strong mathematical foundation is the key to unlocking the 
                  full potential of AI. Our courses are designed to provide you with the knowledge and skills you need to:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Brain size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Understand AI algorithms:</strong> Learn the mathematical principles behind machine learning algorithms like linear regression, logistic regression, neural networks, and support vector machines.</span>
                  </li>
                  <li className="flex items-start">
                    <Calculator size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Build your own AI models:</strong> Go beyond simply using pre-built AI tools and learn how to design, train, and evaluate your own models.</span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Solve real-world problems:</strong> Apply your mathematical knowledge to solve practical problems in areas like finance, healthcare, marketing, and more.</span>
                  </li>
                  <li className="flex items-start">
                    <Network size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Stay ahead of the curve:</strong> As AI continues to evolve, a strong mathematical foundation will allow you to adapt to new technologies and trends.</span>
                  </li>
                </ul>
                <p className="text-accent font-semibold">
                  Contribute to India's AI Ecosystem: Play a vital role in India's growing AI industry by 
                  developing cutting-edge solutions and driving innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Mathematics and AI Education"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Our Comprehensive AI Math Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the mathematical foundations that power artificial intelligence and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Linear Algebra for AI"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-4">Linear Algebra for AI</h3>
                <p className="text-gray-700 leading-relaxed">
                  This course covers the fundamentals of linear algebra, including vectors, matrices, linear 
                  transformations, and eigenvalues. You'll learn how these concepts are used in AI applications 
                  such as image recognition, natural language processing, and recommendation systems. We focus on 
                  practical examples and coding exercises to help you apply your knowledge. This course provides 
                  a foundational knowledge for many machine learning techniques.
                </p>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Calculus for Machine Learning"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-4">Calculus for Machine Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  This course provides a thorough understanding of calculus, focusing on differentiation, integration, 
                  optimization, and their applications in machine learning. Learn how to use gradient descent to train 
                  machine learning models and understand the mathematical underpinnings of neural networks. This course 
                  explains how machine learning models learn and improve.
                </p>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Probability and Statistics for Data Science"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-4">Probability and Statistics for Data Science</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn the fundamentals of probability and statistics, including probability distributions, hypothesis 
                  testing, regression analysis, and Bayesian inference. You'll learn how to analyze data, draw conclusions, 
                  and make predictions using statistical methods. This is a crucial course for understanding data-driven 
                  decision-making in AI. We show how to interpret data and make informed predictions.
                </p>
              </div>
            </div>

            {/* Course 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Discrete Mathematics for Computer Science and AI"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-4">Discrete Mathematics for Computer Science and AI</h3>
                <p className="text-gray-700 leading-relaxed">
                  This course covers essential discrete math topics such as set theory, logic, graph theory, and 
                  combinatorics. These concepts are vital for understanding algorithms, data structures, and the 
                  theoretical foundations of computer science and AI. We cover the fundamental building blocks of 
                  algorithms and data structures used in AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-roboto font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with us to begin your mathematical AI education
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your interest in AI mathematics..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="text-primary mr-3" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+918369848475" className="text-primary hover:underline">+91 8369848475</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="text-primary mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@maths.co.in" className="text-primary hover:underline">info@maths.co.in</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://wa.me/918369848475" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center w-full"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0234567890123!2d72.8906!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAzLjQiTiA3MsKwNTMnMjYuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maths.co.in Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-roboto font-bold text-2xl text-white mb-4">
              Maths.co.in
            </div>
            <p className="text-gray-400 mb-2">
              Empowering India with the Mathematical Foundations of AI
            </p>
            <p className="text-gray-500 text-sm">
              Copyright © 2025 Maths.co.in. All rights reserved. | Owned by Scalium.in
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;