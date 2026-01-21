import React from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold font-poppins">
                  Online Trading Insights
                </h3>
                <p className="text-sm text-gray-400 font-roboto">
                  Empowering Traders with AI-Driven Analytics
                </p>
              </div>
            </div>
            
            <p className="text-gray-400 font-roboto leading-relaxed mb-6">
              Transform your trading experience with cutting-edge AI technology. 
              Our platform provides the insights and tools you need to make informed 
              decisions in today's dynamic financial markets.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <span className="text-sm text-gray-400 font-roboto">
                Visit our main website:
              </span>
              <a 
                href="https://onlinetrading.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-orange-400 font-roboto flex items-center space-x-1 transition-colors"
              >
                <span>onlinetrading.co.in</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors font-roboto">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-roboto">
            © 2025 Online Trading Insights. All rights reserved. | 
            <span className="text-accent ml-1">Owned by Scalium.in</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;