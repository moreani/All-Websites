
const Footer = () => {
  return (
    <footer className="bg-cricket-text text-cricket-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-heading font-bold mb-4">
                <span className="text-cricket-accent">CricketScore</span> AI
              </h3>
              <p className="font-body text-cricket-white/80 leading-relaxed">
                Explore the emotional and analytical side of cricket with CricketScore AI. 
                Data-driven insights for the modern cricket fan.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body">
                <li>
                  <a href="#about" className="text-cricket-white/80 hover:text-cricket-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-cricket-white/80 hover:text-cricket-accent transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-cricket-white/80 hover:text-cricket-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-heading font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 font-body text-cricket-white/80">
                <p>📧 info@cricketscore.org</p>
                <p>📞 +91 8369848475</p>
                <p>🌐 cricketscore.org</p>
              </div>
            </div>
          </div>

          <div className="border-t border-cricket-white/20 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-cricket-white/70">
                © 2024 CricketScore AI. All rights reserved.
              </p>
              <p className="font-body text-cricket-white/70">
                Owned by <span className="text-cricket-accent">Scalium.in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
