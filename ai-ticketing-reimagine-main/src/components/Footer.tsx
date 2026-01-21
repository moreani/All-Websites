
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-roboto font-bold text-primary mb-4">
                AirlineTickets.in
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Reimagine Travel: AI-Powered Automation for Seamless Ticketing Solutions in India.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="https://scalium.in" className="hover:text-primary transition-colors">Scalium.in</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +91 8369848475</p>
                <p>Email: info@airlinetickets.in</p>
                <p>Website: airlinetickets.in</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AirlineTickets.in. All rights reserved.</p>
            <p className="mt-2">Owned by <a href="https://scalium.in" className="text-primary hover:underline">Scalium.in</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
