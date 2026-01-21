
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-sm font-roboto">ER</span>
            </div>
            <div>
              <h3 className="text-lg font-bold font-roboto">ExchangeRates Academy</h3>
            </div>
          </div>
          
          <p className="text-blue-200 mb-4 font-lora">
            Empowering Your Currency Knowledge through AI Insights
          </p>
          
          <div className="border-t border-blue-600 pt-4">
            <p className="text-sm text-blue-200 font-roboto">
              Owned by <a href="https://scalium.in" className="text-accent hover:text-white transition-colors">Scalium.in</a>
            </p>
            <p className="text-xs text-blue-300 mt-2">
              © 2024 ExchangeRates Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
