
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-text text-white py-12">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="font-playfair text-2xl font-bold text-warm-coral mb-4">
                Good Parenting
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Empowering Indian parents with AI-driven parenting intelligence for nurturing tomorrow's leaders.
              </p>
              <div className="text-sm text-gray-400">
                <p>goodparenting.in</p>
                <p>info@goodparenting.in</p>
                <p>+91 8369848475</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-warm-coral transition-colors duration-300"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-warm-coral transition-colors duration-300"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-warm-coral transition-colors duration-300"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-warm-coral transition-colors duration-300">
                    AI Ethics Statement
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">AI Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Development Tracking</li>
                <li>Behavioral Analysis</li>
                <li>Educational Planning</li>
                <li>Cultural Integration</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-warm-coral transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-warm-coral transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-warm-coral transition-colors duration-300">
                    Data Protection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-warm-coral transition-colors duration-300">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-300 text-center md:text-left">
                © 2024 Good Parenting. All rights reserved.
              </div>
              
              <div className="flex items-center gap-2 text-gray-300">
                <span>Made with</span>
                <Heart size={16} className="text-warm-coral" />
                <span>for Indian families | Owned by</span>
                <a 
                  href="https://scalium.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warm-coral hover:text-warm-coral/80 transition-colors duration-300 font-semibold"
                >
                  Scalium.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
