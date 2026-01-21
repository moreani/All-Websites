import React from 'react';
import { Sparkles, Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-heading font-bold">AstroTech Solutions</h3>
                <p className="text-sm text-gray-400">astrologysoftware.co.in</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transforming cosmic insights into intelligent software solutions. We bridge ancient astrological wisdom with cutting-edge AI technology to empower your journey.
            </p>
            <div className="flex space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Personalized Software</li>
              <li className="text-gray-300">Research Tools</li>
              <li className="text-gray-300">API Integration</li>
              <li className="text-gray-300">Mobile Development</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 AstroTech Solutions. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Owned by</span>
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-primary hover:text-accent transition-colors"
              >
                <span className="font-semibold">Scalium.in</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Empowering lives through the perfect blend of ancient wisdom and modern technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;