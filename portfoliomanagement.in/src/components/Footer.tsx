
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-montserrat font-bold mb-2">
              Portfolio Management AI
            </h3>
            <p className="font-roboto text-gray-300">
              Empowering Your Investments with Intelligent Insights
            </p>
          </div>
          
          <div className="border-t border-primary/20 pt-4">
            <p className="font-roboto text-sm text-gray-400">
              Owned by <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Scalium.in</a>
            </p>
            <p className="font-roboto text-xs text-gray-500 mt-2">
              © 2024 Portfolio Management AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
