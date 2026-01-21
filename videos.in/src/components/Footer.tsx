
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-montserrat mb-2">Videos</h3>
            <p className="font-roboto text-gray-300">
              Empowering Creativity with AI-Driven Video Solutions
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="font-roboto text-gray-400 text-sm">
              Owned by <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">Scalium.in</a>
            </p>
            <p className="font-roboto text-gray-400 text-sm mt-2">
              © 2024 Videos.in. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
