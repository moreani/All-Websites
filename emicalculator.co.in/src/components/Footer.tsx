import React from 'react';
import { Calculator, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl">EMI Calculator AI</h3>
                <p className="text-sm text-gray-300 font-opensans">Smart Financial Guidance</p>
              </div>
            </div>
            <p className="font-opensans text-gray-300 leading-relaxed">
              Empowering your financial decisions with AI-driven insights and personalized 
              recommendations for optimal loan choices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="font-opensans text-gray-300 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-opensans text-gray-300 hover:text-primary transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="font-opensans text-gray-300 hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-opensans text-gray-300 hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-montserrat font-semibold text-lg">Get in Touch</h4>
            <div className="space-y-2 font-opensans text-gray-300">
              <p>📍 701, Stellar Tower, Chembur East</p>
              <p>📞 +91 8369848475</p>
              <p>✉️ info@emicalculator.co.in</p>
              <p>🌐 emicalculator.co.in</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 font-opensans text-gray-300">
              <span>© 2024 EMI Calculator AI. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 font-opensans text-gray-300">
              <span>Owned with</span>
              <Heart className="h-4 w-4 text-primary" />
              <span>by</span>
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-red-400 transition-colors font-semibold"
              >
                Scalium.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;