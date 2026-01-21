
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-music rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl font-bold">MusicClasses.co.in</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Revolutionizing music education with AI-powered personalized learning pathways for students of all levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">YouTube</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Learning */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Learning</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Guitar Lessons</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Piano Lessons</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Vocal Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Music Theory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">All Instruments</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-sm leading-relaxed">
                  701, Stellar Tower, Chembur East,<br />
                  Sion Opposite, Diamond Garden,<br />
                  Basant Garden, Chembur,<br />
                  Mumbai, Maharashtra 400071
                </p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <a href="tel:+918369848475" className="text-sm hover:text-primary transition-colors">
                  +91 8369848475
                </a>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <a href="mailto:info@musicclasses.co.in" className="text-sm hover:text-primary transition-colors">
                  info@musicclasses.co.in
                </a>
              </div>
              <div>
                <p className="font-medium">Website:</p>
                <a href="https://musicclasses.co.in" className="text-sm hover:text-primary transition-colors">
                  musicclasses.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 MusicClasses.co.in. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
            <div className="text-gray-400 text-sm">
              Owned by <a href="https://scalium.in" className="text-primary hover:text-yellow-300 transition-colors">Scalium.in</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
