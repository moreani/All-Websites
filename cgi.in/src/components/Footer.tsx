
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold font-roboto-slab">CGI</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-open-sans text-white/80 mb-1">
              © 2025 CGI. All rights reserved.
            </p>
            <p className="font-open-sans text-white/60 text-sm">
              Owned by{' '}
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Scalium.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
