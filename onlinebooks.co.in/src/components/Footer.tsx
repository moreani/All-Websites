import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="font-literata font-bold text-2xl">OnlineBooks AI</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your intelligent reading companion, revolutionizing book discovery with 
              AI-powered precision and personalized literary journeys.
            </p>
            <p className="text-sm text-gray-500">
              Owned by{' '}
              <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                Scalium.in
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-literata font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Book Suggestions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-literata font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                701, Stellar Tower, Chembur East<br />
                Mumbai, Maharashtra 400071
              </p>
              <p className="text-gray-400">
                <a href="tel:+918369848475" className="hover:text-white transition-colors">
                  +91 8369848475
                </a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:info@onlinebooks.co.in" className="hover:text-white transition-colors">
                  info@onlinebooks.co.in
                </a>
              </p>
              <p className="text-gray-400">
                <a href="https://onlinebooks.co.in" className="hover:text-white transition-colors">
                  onlinebooks.co.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} OnlineBooks AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for passionate readers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;