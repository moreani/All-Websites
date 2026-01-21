import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "About Us", href: "#vision" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <a href="#" className="text-2xl md:text-3xl font-poppins font-bold flex items-center">
            <span className={scrolled ? "text-primary-blue" : "text-white"}>Children</span>
            <span className="text-accent-orange font-medium">.co</span>
            <span className={scrolled ? "text-primary-blue" : "text-white"}>.in</span>
          </a>
        </div>
        
        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-poppins font-medium hover:text-accent-orange transition-colors ${
                scrolled ? "text-primary-blue" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="tel:+918369848475" 
            className={`flex items-center hover:text-accent-orange transition-colors ${
              scrolled ? "text-primary-blue" : "text-white"
            }`}
          >
            <Phone size={18} className="mr-2" />
            <span>+91 8369848475</span>
          </a>
          
          <a 
            href="mailto:info@children.co.in" 
            className={`flex items-center hover:text-accent-orange transition-colors ${
              scrolled ? "text-primary-blue" : "text-white"
            }`}
          >
            <Mail size={18} className="mr-2" />
            <span>info@children.co.in</span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="block md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X size={24} className={scrolled ? "text-primary-blue" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-primary-blue" : "text-white"} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0 z-40">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-poppins font-medium text-primary-blue hover:text-accent-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 border-t border-gray-100 space-y-4">
              <a href="tel:+918369848475" className="flex items-center text-primary-blue hover:text-accent-orange transition-colors">
                <Phone size={18} className="mr-2" />
                <span>+91 8369848475</span>
              </a>
              
              <a href="mailto:info@children.co.in" className="flex items-center text-primary-blue hover:text-accent-orange transition-colors">
                <Mail size={18} className="mr-2" />
                <span>info@children.co.in</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
