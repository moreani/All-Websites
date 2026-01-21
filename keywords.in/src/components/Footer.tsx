import React from 'react';
import { Brain, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-poppins font-bold">KeywordAI</span>
            </div>
            <p className="text-gray-300 font-roboto">
              Unlock the Power of Insights with Intelligent Data Analytics
            </p>
            <p className="text-gray-400 font-roboto text-sm">
              Transforming businesses through AI-driven data analytics solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-primary transition-colors duration-200 font-roboto"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-300 font-roboto text-sm">
              <p>701, Stellar Tower, Chembur East</p>
              <p>Mumbai, Maharashtra 400071</p>
              <p>Phone: +91 8369848475</p>
              <p>Email: info@keyword.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 font-roboto text-sm mb-4 md:mb-0">
            © 2024 KeywordAI. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-400 font-roboto text-sm">
            <span>Owned by</span>
            <a 
              href="https://scalium.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors duration-200 flex items-center space-x-1"
            >
              <span>Scalium.in</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;