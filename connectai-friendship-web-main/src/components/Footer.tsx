
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2025 Friendship AI. All rights reserved.
            </p>
          </div>
          
          <div className="text-sm text-gray-400">
            Owned by{' '}
            <a 
              href="https://scalium.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-brand hover:text-accent-brand transition-colors duration-300"
            >
              Scalium.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
