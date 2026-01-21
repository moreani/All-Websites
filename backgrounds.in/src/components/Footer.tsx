import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-width">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold font-poppins mb-2">
              Backgrounds <span className="gradient-text">AI</span>
            </h3>
            <p className="text-gray-400">Your Vision, Realized in Pixel-Perfect Backgrounds</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Backgrounds AI. All rights reserved.
              </p>
              
              <div className="flex items-center text-gray-400">
                <span>Owned by</span>
                <Heart className="mx-2 text-red-500" size={16} />
                <a 
                  href="https://scalium.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors font-semibold"
                >
                  Scalium.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;