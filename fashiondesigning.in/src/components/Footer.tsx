
const Footer = () => {
  return (
    <footer className="bg-accent text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold font-roboto">Fashion Designing AI</h3>
            <p className="text-gray-300 font-lora">Transforming Creativity with Intelligent Design</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">
              Owned by{' '}
              <a 
                href="http://scalium.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                Scalium.in
              </a>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              © 2024 Fashion Designing AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
