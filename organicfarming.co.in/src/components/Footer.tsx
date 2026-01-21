import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="font-poppins font-bold text-xl mb-2">Organic Farming AI</h3>
            <p className="font-roboto text-accent">Cultivating a Sustainable Future with Intelligent Agriculture</p>
          </div>
          
          <div className="border-t border-primary/30 pt-6">
            <p className="font-roboto text-sm text-accent mb-2">
              &copy; 2025 Organic Farming AI. All rights reserved.
            </p>
            <p className="font-roboto text-sm text-accent flex items-center justify-center">
              Made with <Heart size={16} className="mx-1 text-red-400" /> by 
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 hover:text-white transition-colors duration-300 font-medium"
              >
                Scalium.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;