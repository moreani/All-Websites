import { Facebook, Twitter, Linkedin, Instagram, Bot, Code } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-deepIndigo to-calmTeal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-softSaffron to-warmIvory rounded-full flex items-center justify-center">
                  <Bot className="w-3 h-3 text-deepIndigo" />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-roboto">XHTML.IN</h3>
            </div>
            <p className="text-lg font-open-sans font-light mb-6 text-warmIvory">
              Empowering Web Development Through Intelligent AI Solutions
            </p>
            <p className="text-warmIvory/80 font-open-sans leading-relaxed">
              Revolutionizing the digital landscape with cutting-edge AI technologies, 
              delivering exceptional web experiences that drive business growth and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold font-roboto mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-warmIvory/80 hover:text-softSaffron transition-colors font-open-sans"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-warmIvory/80 hover:text-softSaffron transition-colors font-open-sans"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-warmIvory/80 hover:text-softSaffron transition-colors font-open-sans"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-warmIvory/80 hover:text-softSaffron transition-colors font-open-sans"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold font-roboto mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-softSaffron transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-softSaffron transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-softSaffron transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-softSaffron transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-warmIvory/60 font-open-sans text-sm mb-4 md:mb-0">
            © 2025 XHTML.IN. All rights reserved. Owned by Scalium.in.
          </p>
          <div className="flex items-center space-x-6 text-sm text-warmIvory/60 font-open-sans">
            <a href="#" className="hover:text-softSaffron transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-softSaffron transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-softSaffron transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
