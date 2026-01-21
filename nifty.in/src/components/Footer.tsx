import React from 'react';
import { TrendingUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="font-montserrat font-bold text-xl">
                Nifty Trading AI
              </span>
            </div>
            <p className="font-opensans text-gray-400 mb-4 leading-relaxed">
              AI Solutions for Intelligent Trading Insights. Empowering traders with advanced AI-driven tools for data-driven decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="font-opensans text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="font-opensans text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="font-opensans text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="font-opensans text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 font-opensans text-gray-400">
              <li>Predictive Analytics</li>
              <li>Automated Trading</li>
              <li>Risk Management</li>
              <li>Market Insights</li>
              <li>Training & Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 font-opensans text-gray-400">
              <p>701, Stellar Tower, Chembur East</p>
              <p>Mumbai, Maharashtra 400071</p>
              <p>Phone: +91 8369848475</p>
              <p>Email: info@nifty.in</p>
              <p>Website: nifty.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-opensans text-gray-400 text-sm">
            © {currentYear} Nifty Trading AI. All rights reserved.
          </p>
          <p className="font-opensans text-gray-400 text-sm mt-2 md:mt-0">
            Owned by <span className="text-accent font-semibold">Scalium.in</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;