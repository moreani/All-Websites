import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-2xl font-bold">Industry.co.in</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              AI-powered market intelligence platform helping businesses make 
              data-driven decisions through advanced analytics and insights.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                <Globe size={20} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Market Analysis</span></li>
              <li><span className="text-gray-400">Consumer Insights</span></li>
              <li><span className="text-gray-400">Competitive Intelligence</span></li>
              <li><span className="text-gray-400">Industry Research</span></li>
              <li><span className="text-gray-400">AI Analytics</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-400 text-sm leading-relaxed">
                  701, Stellar Tower, Chembur East,<br />
                  Sion Opposite, Diamond Garden,<br />
                  Basant Garden, Chembur,<br />
                  Mumbai, Maharashtra 400071
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">+91 8369848475</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@industry.co.in</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">industry.co.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Industry.co.in. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Owned by <span className="text-red-400 font-semibold">Scalium.in</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
