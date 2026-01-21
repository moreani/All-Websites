import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo */}
          <div className="flex items-center space-x-3">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-poppins font-bold">Annual Report Creator</h3>
              <p className="text-sm text-neutral-400">AI-Powered Reporting Solutions</p>
            </div>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-neutral-400 font-roboto">
              © 2025 Annual Report Creator. All rights reserved.
            </p>
          </div>

          {/* Right - Owned by */}
          <div className="text-right">
            <p className="text-neutral-400 font-roboto mb-2">Owned by</p>
            <a
              href="https://scalium.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors font-poppins font-semibold"
            >
              <span>Scalium.in</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-neutral-700">
          <div className="text-center">
            <p className="text-sm text-neutral-500 font-roboto">
              Transforming the future of annual reporting with artificial intelligence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;