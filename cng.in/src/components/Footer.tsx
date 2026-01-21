import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <div>
                  <h3 className="font-oswald font-bold text-lg">CNG Smart Solutions</h3>
                  <p className="text-xs text-gray-400">Precision Management for Gas Stations</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Leading the future of gas station management with AI-driven smart solutions. 
                We deliver cutting-edge technology for enhanced safety, efficiency, and operational excellence.
              </p>
              <div className="text-sm text-gray-400">
                <p className="mb-1">📍 701, Stellar Tower, Chembur East, Mumbai - 400071</p>
                <p className="mb-1">📞 <a href="tel:+918369848475" className="hover:text-primary">+91 8369848475</a></p>
                <p>✉️ <a href="mailto:info@cng.in" className="hover:text-primary">info@cng.in</a></p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-oswald font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="https://wa.me/918369848475" className="hover:text-primary transition-colors">WhatsApp</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-oswald font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Real-time Monitoring</li>
                <li>Predictive Maintenance</li>
                <li>Safety Management</li>
                <li>Data Analytics</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm mb-2">
                  © 2024 CNG Smart Solutions. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs flex items-center justify-center md:justify-start">
                  Owned by 
                  <a 
                    href="https://scalium.in" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-1 text-primary hover:text-accent transition-colors font-medium"
                  >
                    Scalium.in
                  </a>
                  <Heart className="w-3 h-3 text-red-500 ml-1" />
                </p>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="bg-primary hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
    </footer>
  );
};

export default Footer;