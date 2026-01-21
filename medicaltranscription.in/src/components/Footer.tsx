
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-lato text-primary">
              Medical Transcription AI
            </h3>
            <p className="text-gray-400 mt-2">
              Transforming Healthcare Narratives into Accurate Digital Records
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              Owned by{' '}
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Scalium.in
              </a>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 Medical Transcription AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
