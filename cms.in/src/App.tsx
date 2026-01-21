import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Users, 
  Cog, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  ChevronDown,
  Cpu,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react';

function App() {
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
    }
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-xl sm:text-2xl font-montserrat font-bold text-darkGray">
                CMS AI Solutions
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="tel:+918369848475" 
                className="flex items-center space-x-2 text-darkGray hover:text-primary transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+91 8369848475</span>
              </a>
              <a 
                href="mailto:info@cms.in" 
                className="flex items-center space-x-2 text-darkGray hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span className="font-medium">info@cms.in</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-lightGray via-white to-lightGray overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-8 inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <Sparkles className="h-5 w-5 text-primary animate-float" />
              <span className="text-darkGray font-medium">Empowering Content Management through AI</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-darkGray mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-primary">CMS AI Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your content management processes with our cutting-edge AI software, 
              designed to streamline workflows, enhance user engagement, and drive meaningful insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-3xl sm:text-4xl font-montserrat font-bold text-darkGray mb-6">
                Redefining Content Management with{' '}
                <span className="text-primary">Artificial Intelligence</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At CMS AI Solutions, our mission is to empower organizations with intelligent tools that redefine content management. 
                By integrating AI technology, we not only automate mundane tasks but also provide businesses with the insight 
                necessary to make informed decisions about their content strategies.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our dedicated team of experts specializes in developing software that is tailored to the unique needs of 
                enterprises in India and beyond, ensuring maximum impact and value from every interaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-montserrat font-semibold text-darkGray mb-2">Data-Driven</h4>
                  <p className="text-gray-600 text-sm">Insights from AI analytics</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-montserrat font-semibold text-darkGray mb-2">Scalable</h4>
                  <p className="text-gray-600 text-sm">Grows with your business</p>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="AI and Content Management Technology"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-3xl sm:text-4xl font-montserrat font-bold text-darkGray mb-6">
              AI Software Development Services
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of AI-powered solutions transforms how you manage, 
              analyze, and optimize your content ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold text-darkGray mb-4 text-center">
                Content Automation
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Streamline content creation and publishing with AI-driven tools that save time and reduce human error.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold text-darkGray mb-4 text-center">
                Predictive Analytics
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Utilize advanced analytics to gain insights into content performance and user engagement patterns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold text-darkGray mb-4 text-center">
                User Personalization
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Deploy AI algorithms that customize content delivery based on user behavior and preferences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Cog className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-montserrat font-semibold text-darkGray mb-4 text-center">
                Integration Solutions
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Design scalable software solutions that integrate seamlessly with existing content management systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-3xl sm:text-4xl font-montserrat font-bold text-darkGray mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Ready to transform your content management with AI? Let's discuss how our solutions can 
                drive your business forward.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-darkGray">Address</h4>
                    <p className="text-gray-600">
                      701, Stellar Tower, Chembur East, Sion Opposite,<br />
                      Diamond Garden, Basant Garden, Chembur,<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-darkGray">Phone</h4>
                    <a href="tel:+918369848475" className="text-primary hover:text-red-700 transition-colors">
                      +91 8369848475
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-darkGray">Email</h4>
                    <a href="mailto:info@cms.in" className="text-primary hover:text-red-700 transition-colors">
                      info@cms.in
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918369848475"
                className="inline-flex items-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>

            <div className="animate-slide-up">
              <form className="bg-lightGray rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-montserrat font-semibold text-darkGray mb-6">
                  Send us a Message
                </h4>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-darkGray font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-darkGray font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-darkGray font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-montserrat font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-12 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799018659!2d-74.25985987773!3d40.69767006389524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17bd810785%3A0x8c8c5c3ccf85c8b0!2s701%2C%20Stellar%20Tower%2C%20Chembur%20East%2C%20Sion%20Opposite%2C%20Diamond%20Garden%2C%20Basant%20Garden%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1603713736934!5m2!1sen!2sin"
                width="100%" 
                height="400" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkGray text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-montserrat font-semibold">CMS AI Solutions</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 CMS AI Solutions. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Owned by <span className="text-primary">Scalium.in</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;