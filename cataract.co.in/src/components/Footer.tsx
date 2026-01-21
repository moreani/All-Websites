
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CataractAI</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Visionary Solutions for Eye Care Excellence. Transforming healthcare through innovative AI technology.
            </p>
            <p className="text-sm text-gray-400">
              Empowering healthcare providers with cutting-edge AI solutions for better patient outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-300">
              <p>701, Stellar Tower, Chembur East</p>
              <p>Mumbai, Maharashtra 400071</p>
              <p>
                <a href="tel:+918369848475" className="hover:text-accent transition-colors duration-300">
                  +91 8369848475
                </a>
              </p>
              <p>
                <a href="mailto:info@cataract.co.in" className="hover:text-accent transition-colors duration-300">
                  info@cataract.co.in
                </a>
              </p>
              <p>
                <a href="https://cataract.co.in" className="hover:text-accent transition-colors duration-300">
                  cataract.co.in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} CataractAI. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Owned by</span>
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium"
              >
                Scalium.in
              </a>
              <Heart size={14} className="text-red-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
