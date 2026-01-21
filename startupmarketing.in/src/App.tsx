import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Rocket,
  Eye,
  Settings
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
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
    <div className="font-body text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="font-heading font-bold text-xl text-gray-900">Startup Marketing AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/5 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to <span className="text-primary">Startup Marketing AI</span>
              </h1>
              <p className="text-xl lg:text-2xl text-accent font-semibold mb-4">
                Empowering Startups with Intelligent Marketing Solutions
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Transform your startup's marketing with our AI tools tailored for your unique needs. 
                Leverage data-driven insights and automation to accelerate your growth in the competitive Indian market.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI Marketing Technology"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 animate-float">
                <div className="bg-accent text-white p-4 rounded-full shadow-lg">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pb-8">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Startup Marketing AI, we understand the challenges faced by startups in the fast-paced Indian market. 
                With limited resources and a need for quick adaptability, we provide AI-driven marketing solutions that 
                enable emerging businesses to optimize their outreach efforts.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our innovative tools harness the power of data analytics to identify trends, automate marketing campaigns, 
                and enhance customer engagement. We are committed to fueling the success of startups by making cutting-edge 
                technology accessible and applicable for every growing business.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Growth Focused</h3>
                  <p className="text-sm text-gray-600">Strategies that scale with your business</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Target className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI Powered</h3>
                  <p className="text-sm text-gray-600">Intelligent automation for better results</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Startup Team Working"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered marketing solutions designed specifically for startups
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Eye className="h-12 w-12 text-primary" />,
                title: "AI-Powered Market Insights",
                description: "Utilize our advanced analytics tools to gain deep insights into market trends and consumer behavior. Make informed decisions that propel your startup forward."
              },
              {
                icon: <Zap className="h-12 w-12 text-accent" />,
                title: "Automated Marketing Campaigns",
                description: "Streamline your marketing efforts with AI-driven automation that delivers personalized content to your audience, increasing engagement and conversion rates."
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-primary" />,
                title: "Performance Tracking",
                description: "Monitor your campaigns in real time. Our tools provide actionable insights that allow you to optimize your strategies for maximum impact and ROI."
              },
              {
                icon: <Settings className="h-12 w-12 text-accent" />,
                title: "Strategy Development",
                description: "Work with our expert team to design a tailor-made marketing strategy that aligns with your business goals and leverages the latest AI technologies."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-background-light rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Reach out for personalized marketing solutions for your startup.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        701, Stellar Tower, Chembur East, Sion Opposite,<br />
                        Diamond Garden, Basant Garden, Chembur,<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a 
                        href="tel:+918369848475" 
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        +91 8369848475
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href="mailto:info@startupmarketing.in" 
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        info@startupmarketing.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <ExternalLink className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Website</h4>
                      <a 
                        href="https://www.startupmarketing.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        www.startupmarketing.in
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Connect with Us</h4>
                  <a
                    href="https://wa.me/918369848475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp for Quick Inquiries
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5976890447935!2d72.8944!3d19.0426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c5a7c7c7c7%3A0x7c7c7c7c7c7c7c7c!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647536574739!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Startup Marketing AI Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <span className="font-heading font-bold text-xl">Startup Marketing AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering Startups with Intelligent Marketing Solutions
            </p>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2025 Startup Marketing AI. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Owned by Scalium.in
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;