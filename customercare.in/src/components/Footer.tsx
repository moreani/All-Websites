import React from 'react';
import { Bot, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-accent" />
              <span className="text-xl font-montserrat font-bold">CustomerCare AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming Customer Experiences with Intelligent Automation
            </p>
            <p className="text-sm text-gray-500">
              701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, 
              Basant Garden, Chembur, Mumbai, Maharashtra 400071
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Phone: +91 8369848475</p>
              <p>Email: info@customercare.in</p>
              <div className="flex items-center space-x-2">
                <span>Website:</span>
                <a 
                  href="https://customercare.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors flex items-center"
                >
                  customercare.in
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 CustomerCare AI. All rights reserved. | Owned by{' '}
            <a 
              href="https://scalium.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Scalium.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;