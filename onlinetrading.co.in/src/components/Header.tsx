import React from 'react';
import { Phone, Mail, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold font-poppins text-gray-900">
                Online Trading Insights
              </h1>
              <p className="text-xs text-gray-600 font-roboto">
                Empowering Traders with AI-Driven Analytics
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:+918369848475" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-roboto">+91 8369848475</span>
            </a>
            <a 
              href="mailto:info@onlinetrading.co.in" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="font-roboto">info@onlinetrading.co.in</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;