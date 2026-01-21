
import { Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-roboto text-primary">MusicClasses</h1>
          <span className="ml-2 text-sm text-gray-600 font-roboto">.in</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+918369848475" 
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Call us"
          >
            <Phone size={20} />
            <span className="hidden sm:inline font-roboto">+91 8369848475</span>
          </a>
          <a 
            href="mailto:info@musicclasses.in" 
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            aria-label="Email us"
          >
            <Mail size={20} />
            <span className="hidden sm:inline font-roboto">info@musicclasses.in</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
