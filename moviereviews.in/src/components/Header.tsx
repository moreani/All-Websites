
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-outfit text-2xl font-bold text-cinema-dark">
            MovieReviews<span className="text-gold-accent">.AI</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="tel:+918369848475" 
            className="flex items-center space-x-2 text-cinema-dark hover:text-gold-accent transition-colors duration-300"
          >
            <Phone size={18} />
            <span className="hidden md:block font-medium">+91 8369848475</span>
          </a>
          <a 
            href="mailto:info@moviereviews.in" 
            className="flex items-center space-x-2 text-cinema-dark hover:text-gold-accent transition-colors duration-300"
          >
            <Mail size={18} />
            <span className="hidden md:block font-medium">info@moviereviews.in</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
