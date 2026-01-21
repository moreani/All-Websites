import React from 'react';
import { Network, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Network className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold font-montserrat">Networking AI Consult</h3>
                <p className="text-sm text-gray-400">Empowering Your Business</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through intelligent AI solutions and strategic networking approaches.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>+91 8369848475</p>
              <p>info@networking.co.in</p>
              <p>networking.co.in</p>
              <p className="text-sm">
                701, Stellar Tower, Chembur East,<br />
                Mumbai, Maharashtra 400071
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-400">© 2025 Networking AI Consult. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Owned by</span>
            <a 
              href="https://scalium.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-blue-400 font-semibold transition-colors"
            >
              Scalium.in
            </a>
            <Heart className="h-4 w-4 text-accent" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;