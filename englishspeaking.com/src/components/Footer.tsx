
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="font-roboto font-bold text-2xl mb-4 text-brand-blue">
              EnglishSpeaking.ai
            </h3>
            <p className="font-roboto text-gray-300 max-w-md mx-auto">
              Master English with AI-Powered Learning. Interactive learning tailored for your professional success.
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="#" 
              className="font-roboto text-gray-300 hover:text-brand-blue transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="font-roboto text-gray-300 hover:text-brand-blue transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="font-roboto text-gray-400">
              © 2024 EnglishSpeaking.ai. All rights reserved. | Owned by{' '}
              <a 
                href="https://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-brand-green transition-colors duration-300"
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
