
const Footer = () => {
  return (
    <footer className="bg-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">Poems.ai</h3>
            <p className="font-roboto text-gray-300 mb-4 max-w-md">
              Experience Poetry Like Never Before. Discover the world of poetry with AI-powered analysis, personalized recommendations, and immersive audio experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-roboto font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-roboto text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-roboto font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 font-roboto text-gray-300">
              <li>+91 8369848475</li>
              <li>info@poems.in</li>
              <li>poems.in</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-roboto text-gray-400">
            Owned by <a href="https://scalium.in" className="text-white hover:text-accent transition-colors">Scalium.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
