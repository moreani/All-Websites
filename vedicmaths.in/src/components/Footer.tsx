import React from 'react';
import { Brain, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">Vedic Maths AI</h3>
                <p className="text-sm text-gray-400 font-roboto">Ancient Wisdom • Modern AI</p>
              </div>
            </div>
            <p className="font-roboto text-gray-300 leading-relaxed max-w-md">
              Harnessing Ancient Wisdom with AI-Powered Learning. Transform your mathematical abilities with our innovative platform that combines Vedic mathematics with cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="block font-roboto text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block font-roboto text-gray-300 hover:text-white transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block font-roboto text-gray-300 hover:text-white transition-colors duration-200"
              >
                Courses
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block font-roboto text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3">
              <p className="font-roboto text-gray-300 text-sm">
                701, Stellar Tower, Chembur East,<br />
                Mumbai, Maharashtra 400071
              </p>
              <p className="font-roboto text-gray-300 text-sm">
                <a href="tel:+918369848475" className="hover:text-white transition-colors duration-200">
                  +91 8369848475
                </a>
              </p>
              <p className="font-roboto text-gray-300 text-sm">
                <a href="mailto:info@vedicmaths.in" className="hover:text-white transition-colors duration-200">
                  info@vedicmaths.in
                </a>
              </p>
              <p className="font-roboto text-gray-300 text-sm">
                <a
                  href="https://vedicmaths.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  vedicmaths.in
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-roboto text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Vedic Maths AI. All rights reserved.
          </p>
          <p className="font-roboto text-gray-400 text-sm text-center md:text-right mt-2 md:mt-0">
            Owned by{' '}
            <a
              href="https://scalium.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors duration-200"
            >
              Scalium.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;