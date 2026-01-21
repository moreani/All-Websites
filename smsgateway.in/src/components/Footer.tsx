import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              SMSGateway.in
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              AI-Powered Messaging Solutions for the Future of Indian Enterprise.
            </p>
            <p className="text-gray-400">
              Transforming business communication through innovative AI-driven automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold font-montserrat mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold font-montserrat mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="tel:+918369848475" className="hover:text-white transition-colors">
                  +91 8369848475
                </a>
              </li>
              <li>
                <a href="mailto:info@smsgateway.in" className="hover:text-white transition-colors">
                  info@smsgateway.in
                </a>
              </li>
              <li>
                <a href="https://smsgateway.in" className="hover:text-white transition-colors">
                  smsgateway.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 SMSGateway.in. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by{' '}
              <a
                href="https://scalium.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-400 transition-colors inline-flex items-center gap-1"
              >
                Scalium.in
                <ExternalLink size={14} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;