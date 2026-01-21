import React from 'react';
import { Plane, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Plane className="h-8 w-8 text-white" />
            <span className="font-montserrat font-semibold text-xl text-white">
              CabinCrew.AI
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-roboto text-white mb-2">
              © 2025 CabinCrew.AI. All rights reserved.
            </p>
            <p className="font-roboto text-gray-300 text-sm flex items-center justify-center md:justify-end space-x-1">
              <span>Owned by</span>
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-orange-300 transition-colors duration-200 font-medium"
              >
                Scalium.in
              </a>
              <Heart className="h-4 w-4 text-accent ml-1" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;