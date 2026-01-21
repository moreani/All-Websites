
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-roboto font-bold text-2xl mb-4">Business Travel AI</h3>
            <p className="font-open-sans text-white/80 mb-6">
              Automating Business Travel, Elevating Efficiency in India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+918369848475"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-green transition-colors duration-200"
              >
                <i className="fas fa-phone text-sm"></i>
              </a>
              <a 
                href="mailto:info@businesstravel.co.in"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-green transition-colors duration-200"
              >
                <i className="fas fa-envelope text-sm"></i>
              </a>
              <a 
                href="https://wa.me/918369848475"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-green transition-colors duration-200"
              >
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-roboto font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block font-open-sans text-white/80 hover:text-white transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block font-open-sans text-white/80 hover:text-white transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block font-open-sans text-white/80 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-roboto font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 font-open-sans text-white/80">
              <div>
                <i className="fas fa-map-marker-alt mr-3"></i>
                Mumbai, Maharashtra
              </div>
              <div>
                <i className="fas fa-phone mr-3"></i>
                <a href="tel:+918369848475" className="hover:text-white transition-colors">
                  +91 8369848475
                </a>
              </div>
              <div>
                <i className="fas fa-envelope mr-3"></i>
                <a href="mailto:info@businesstravel.co.in" className="hover:text-white transition-colors">
                  info@businesstravel.co.in
                </a>
              </div>
              <div>
                <i className="fas fa-globe mr-3"></i>
                <a href="https://businesstravel.co.in" className="hover:text-white transition-colors">
                  businesstravel.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-open-sans text-white/80 mb-4 md:mb-0">
              © 2025 Business Travel AI. All rights reserved.
            </div>
            <div className="font-open-sans text-white/80">
              Owned by <a href="https://scalium.in" className="text-accent-green hover:text-white transition-colors">Scalium.in</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
