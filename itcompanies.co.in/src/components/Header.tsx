import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="logo mb-2 md:mb-0">
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            <span>IT Companies</span>
            <span className="text-accent"> AI</span>
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex gap-4 md:mr-6">
            <a href="tel:+918369848475" className="flex items-center text-text-medium hover:text-primary transition-colors">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">+91 8369848475</span>
            </a>
            <a href="mailto:info@itcompanies.co.in" className="flex items-center text-text-medium hover:text-primary transition-colors">
              <Mail size={16} className="mr-1" />
              <span className="text-sm">info@itcompanies.co.in</span>
            </a>
          </div>
          
          <nav>
            <ul className="flex gap-6">
              <li><a href="#about" className="text-text-dark hover:text-primary font-medium transition-colors">About</a></li>
              <li><a href="#services" className="text-text-dark hover:text-primary font-medium transition-colors">Services</a></li>
              <li><a href="#contact" className="text-text-dark hover:text-primary font-medium transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
