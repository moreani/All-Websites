import React from 'react';
import { Mail, Phone, FileText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-poppins font-bold text-neutral-800">
                Annual Report Creator
              </h1>
              <p className="text-xs text-neutral-600 hidden sm:block">
                Revolutionizing Your Annual Reports
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@annualreport.in"
              className="flex items-center space-x-2 text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">info@annualreport.in</span>
            </a>
            <a
              href="tel:+918369848475"
              className="flex items-center space-x-2 text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">+91 8369848475</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;