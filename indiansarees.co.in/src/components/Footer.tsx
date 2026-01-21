
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-montserrat font-bold text-pink mb-4">
            Indian Sarees Inventory AI
          </div>
          <p className="text-gray-400 mb-4">
            Smart Inventory Solutions for Saree Retailers
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-500">
              Owned by{' '}
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink hover:text-pink/80 transition-colors duration-300"
              >
                Scalium.in
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © 2024 Indian Sarees Inventory AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
