import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white font-primary mb-2">InflationAI</h3>
            <p className="text-gray-400 font-secondary">
              Automate to Outperform: AI-Powered Financial Automation for a Stronger India.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <p className="text-gray-400 font-secondary">
                © 2025 InflationAI. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="font-secondary">Owned by</span>
                <a
                  href="https://scalium.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-yellow-300 transition-colors duration-300 font-secondary inline-flex items-center gap-1"
                >
                  Scalium.in
                  <ExternalLink size={14} />
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