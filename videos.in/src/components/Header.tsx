
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-montserrat text-gray-800">
              Videos
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+918369848475" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-roboto text-sm">+91 8369848475</span>
            </a>
            
            <a 
              href="mailto:info@videos.in"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="font-roboto text-sm">info@videos.in</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
