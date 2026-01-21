
const Footer = () => {
  return (
    <footer className="bg-cinema-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-outfit text-2xl font-bold mb-4">
              MovieReviews<span className="text-gold-accent">.AI</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming Indian Cinema Through AI-Powered Insights
            </p>
            <p className="text-sm text-gray-400">
              Intelligent Cinema Analytics for the Digital Age
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gold-accent mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Sentiment Analysis</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Box Office Prediction</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Audience Segmentation</a></li>
              <li><a href="#services" className="hover:text-gold-accent transition-colors">Content Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gold-accent mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-gold-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gold-accent mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:info@moviereviews.in" className="hover:text-gold-accent transition-colors">
                  info@moviereviews.in
                </a>
              </li>
              <li>
                <a href="tel:+918369848475" className="hover:text-gold-accent transition-colors">
                  +91 8369848475
                </a>
              </li>
              <li>
                <a href="https://wa.me/918369848475" target="_blank" rel="noopener noreferrer" className="hover:text-gold-accent transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://moviereviews.in" className="hover:text-gold-accent transition-colors">
                  moviereviews.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MovieReviews.AI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Owned by <a href="https://scalium.in" className="text-gold-accent hover:underline">Scalium.in</a>
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 max-w-4xl mx-auto">
              MovieReviews.AI leverages advanced artificial intelligence to analyze Indian cinema data across multiple languages and platforms. 
              Our insights help entertainment industry professionals make data-driven decisions in content creation, marketing, and distribution 
              across India's diverse entertainment landscape.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
