
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">
              OnlineJobs
            </h3>
            <p className="font-roboto text-gray-300 mb-4">
              Your AI-Powered Job Search Portal
            </p>
            <p className="font-roboto text-gray-400 text-sm">
              Revolutionizing recruitment through artificial intelligence
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-roboto">
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://onlinejobs.co.in" className="text-gray-300 hover:text-primary transition-colors">Website</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 font-roboto text-gray-300">
              <p>📧 info@onlinejobs.co.in</p>
              <p>📞 +91 8369848475</p>
              <p>🌐 onlinejobs.co.in</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-roboto text-gray-400">
            &copy; 2024 OnlineJobs.co.in. All rights reserved. 
            <span className="text-primary ml-2">Owned by Scalium.in</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
