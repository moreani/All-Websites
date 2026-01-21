import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">IT Companies AI</h3>
            <p className="text-white/80 text-sm">
              Intelligent Solutions for India's IT Ecosystem
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-white/80">Mumbai</span></li>
              <li><span className="text-white/80">Delhi</span></li>
              <li><span className="text-white/80">Bangalore</span></li>
              <li><span className="text-white/80">Hyderabad</span></li>
              <li><span className="text-white/80">Pune</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-white/80">Software Development</span></li>
              <li><span className="text-white/80">IT Consulting</span></li>
              <li><span className="text-white/80">Technology Services</span></li>
              <li><span className="text-white/80">Digital Solutions</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/20 text-center text-sm text-white/70">
          <p>© 2024 IT Companies AI. All rights reserved.</p>
          <p className="mt-2">Designed by Scalium Digital Media Private Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
