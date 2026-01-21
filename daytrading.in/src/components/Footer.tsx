
const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-roboto font-bold text-brand-primary">DayTrading.AI</span>
          </div>
          <p className="font-open-sans opacity-80 mb-4">
            Empowering Traders with Intelligent AI Solutions
          </p>
          <div className="border-t border-gray-700 pt-4">
            <p className="font-open-sans text-sm opacity-60">
              Owned by <span className="text-brand-accent">Scalium.in</span>
            </p>
            <p className="font-open-sans text-sm opacity-60 mt-2">
              © 2024 DayTrading.AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
