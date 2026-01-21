
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-rates-text text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold font-roboto text-primary mb-2">RatesAI</h3>
          <p className="font-lato text-gray-300">Empowering You with Transparent Price Insights</p>
        </div>
        
        <div className="border-t border-gray-600 pt-6">
          <p className="font-lato text-gray-400">
            Owned by <a href="https://scalium.in" className="text-primary hover:underline">Scalium.in</a>
          </p>
          <p className="font-lato text-gray-400 mt-2">
            © 2024 RatesAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
