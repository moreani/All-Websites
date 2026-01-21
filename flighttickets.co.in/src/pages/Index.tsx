
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-montserrat font-bold text-primary">
              FlightTickets.AI
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="flex items-center space-x-3">
                <a href="tel:+918369848475" className="text-primary hover:text-blue-700">
                  <Phone size={20} />
                </a>
                <a href="mailto:info@flighttickets.co.in" className="text-primary hover:text-blue-700">
                  <Mail size={20} />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <nav className="py-4 space-y-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary"
                >
                  Contact
                </button>
                <div className="flex items-center space-x-4 px-4">
                  <a href="tel:+918369848475" className="text-primary">
                    <Phone size={20} />
                  </a>
                  <a href="mailto:info@flighttickets.co.in" className="text-primary">
                    <Mail size={20} />
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 123, 255, 0.8), rgba(0, 123, 255, 0.6)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 animate-fade-in-up">
            Unlock Seamless Travel with AI Automation
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            FlightTickets.AI revolutionizes the way Indian businesses and consumers book flights, 
            leveraging cutting-edge artificial intelligence to deliver unparalleled efficiency and personalization.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-black hover:bg-yellow-400 px-8 py-3 text-lg font-medium animate-fade-in-up animation-delay-400"
          >
            Request a Demo
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            About FlightTickets.AI: Your Partner in Smart Travel
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                FlightTickets.AI is dedicated to transforming the travel booking experience in India through the power of artificial intelligence. We understand the unique challenges faced by Indian businesses and consumers, from navigating complex flight schedules to securing the best possible fares.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our AI-powered platform is designed to address these challenges head-on, offering a seamless, efficient, and personalized travel booking experience. Our team comprises seasoned travel industry experts and leading AI developers who share a common vision: to make travel accessible and enjoyable for everyone.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are deeply rooted in the Indian market, understanding its nuances and catering to its specific needs. Our platform supports multiple Indian languages and payment methods, ensuring accessibility and convenience for all users.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="AI Travel Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            AI-Powered Solutions for a Smarter Travel Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop" 
                  alt="AI Automation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-primary">
                  AI-Driven Flight Booking Automation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Automate your flight booking process with our intelligent AI algorithms. We analyze millions of data points to identify the most cost-effective and convenient flight options, saving you time and money. Our platform factors in festivals and peak times, giving you valuable insights for Indian businesses.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop" 
                  alt="Personalized Recommendations"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-primary">
                  Personalized Travel Recommendations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Receive personalized flight recommendations based on your travel history, preferences, and budget. Our AI engine learns from your past bookings to suggest flights that align with your needs. We offer customized itinerary options considering regional weather patterns and local events.
                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop" 
                  alt="Price Monitoring"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-primary">
                  Real-Time Price Monitoring and Alerts
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Never miss out on the best deals with our real-time price monitoring system. Our AI algorithms track flight prices 24/7, alerting you when prices drop or special offers become available. Get alerts directly in your language of choice and preferred payment methods.
                </p>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop" 
                  alt="Delay Analysis"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-primary">
                  Predictive Delay Analysis
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Anticipate potential flight delays with our predictive delay analysis feature. Our AI models analyze historical flight data and real-time conditions to predict potential delays, allowing you to make informed decisions and avoid disruptions to your travel plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 text-gray-800">
            Get in Touch: Let's Reimagine Your Travel Together
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-blue-700">
                    Submit Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold mb-4 text-lg">Contact Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                      <div>
                        <p className="text-gray-700">
                          701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, 
                          Basant Garden, Chembur, Mumbai, Maharashtra 400071
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-phone-alt text-primary"></i>
                      <a href="tel:+918369848475" className="text-gray-700 hover:text-primary">
                        +91 8369848475
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-envelope text-primary"></i>
                      <a href="mailto:info@flighttickets.co.in" className="text-gray-700 hover:text-primary">
                        info@flighttickets.co.in
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-globe text-primary"></i>
                      <span className="text-gray-700">flighttickets.co.in</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/918369848475" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-secondary text-white p-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={24} />
                <span className="font-medium">Chat with us on WhatsApp</span>
              </a>

              {/* Google Maps */}
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5422284475946!2d72.89123731490314!3d19.047089487109456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b7c7ef4f7b%3A0x7c7c7c7c7c7c7c7c!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FlightTickets.AI Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 FlightTickets.AI. All rights reserved.</p>
          <p className="text-gray-400">Owned by Scalium.in</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918369848475"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default Index;
