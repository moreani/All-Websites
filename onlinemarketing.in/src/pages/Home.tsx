import { Link as ScrollLink, Element, animateScroll } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Phone, Mail, MapPin, ArrowRight, Check } from 'lucide-react';

// Components
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#0F7DFF]">
              <span className="text-[#1F2937]">ONLINE</span>MARKETING.IN
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-[#6B7280] hover:text-[#0F7DFF] font-medium cursor-pointer transition-colors"
                activeClass="text-[#0F7DFF]"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#1F2937]" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
            <div className="container mx-auto px-4 py-2">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block py-3 text-[#6B7280] hover:text-[#0F7DFF] font-medium transition-colors"
                  activeClass="text-[#0F7DFF]"
                  onClick={closeMenu}
                >
                  {link.label}
                </ScrollLink>
              ))}
              <div className="flex flex-col space-y-2 py-3 border-t border-gray-100">
                <a href="tel:+918369848475" className="flex items-center text-[#6B7280] hover:text-[#0F7DFF]">
                  <Phone size={16} className="mr-2" /> +91 8369848475
                </a>
                <a href="mailto:info@onlinemarketing.in" className="flex items-center text-[#6B7280] hover:text-[#0F7DFF]">
                  <Mail size={16} className="mr-2" /> info@onlinemarketing.in
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Element name="home" className="pt-16">
          <Hero />
        </Element>
        
        <Element name="services">
          <Services />
        </Element>
        
        <Element name="about">
          <About />
        </Element>
        
        <Element name="portfolio">
          <Portfolio />
        </Element>
        
        <Element name="contact">
          <Contact />
        </Element>
      </main>

      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#0F7DFF] text-white rounded-full shadow-lg hover:bg-[#0B5DC7] transition-colors z-40"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
