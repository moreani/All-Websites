import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 font-poppins">
          © 2025 Owned by{' '}
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
    </footer>
  );
};

export default Footer;