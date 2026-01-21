
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Shield, Zap, TrendingUp, MessageCircle, Menu, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. Our team will get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-backgroundWhite font-roboto">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-montserrat font-bold text-brandPrimary">
                  MoneyTransfer.AI
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-textColor hover:text-brandPrimary transition-colors duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-textColor hover:text-brandPrimary transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-textColor hover:text-brandPrimary transition-colors duration-200"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-textColor hover:text-brandPrimary transition-colors duration-200"
                >
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection('services')}
                  className="bg-brandPrimary hover:bg-blue-600 text-white px-6 py-2"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-textColor hover:text-brandPrimary p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-textColor hover:text-brandPrimary transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-textColor hover:text-brandPrimary transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-textColor hover:text-brandPrimary transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-textColor hover:text-brandPrimary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-brandPrimary/10 text-brandPrimary border-brandPrimary/20">
                AI-Powered Financial Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-textColor mb-6 leading-tight">
                Experience Seamless Money Transfers 
                <span className="text-brandPrimary"> Powered by AI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Innovate your financial transactions with cutting-edge artificial intelligence, 
                ensuring secure, fast, and efficient services for the Indian market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  size="lg" 
                  className="bg-brandPrimary hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold"
                >
                  Get Started
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')}
                  variant="outline" 
                  size="lg" 
                  className="border-brandPrimary text-brandPrimary hover:bg-brandPrimary hover:text-white px-8 py-4 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brandPrimary to-brandAccent rounded-full opacity-20 blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="AI-powered financial technology"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-textColor mb-4">
              About MoneyTransfer.AI
            </h2>
            <div className="w-24 h-1 bg-brandPrimary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                alt="Advanced technology and AI systems"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At MoneyTransfer.AI, we combine deep financial expertise with sophisticated artificial intelligence 
                technologies to transform how organizations handle money transfers. With over a decade of experience 
                in the financial sector, our team understands the unique challenges that businesses face when 
                conducting cross-border transactions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We streamline operations, mitigate fraud, and ensure compliance with regulations, helping you stay 
                ahead in a rapidly evolving marketplace.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to leverage AI capabilities to enhance customer experiences by reducing time spent 
                on transactions, minimizing security risks, and ultimately increasing profitability for our 
                partners in India's vibrant economy.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-brandPrimary mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-brandPrimary mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-backgroundLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-textColor mb-4">
              Our AI Solutions
            </h2>
            <div className="w-24 h-1 bg-brandPrimary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to revolutionize your financial operations 
              with our comprehensive suite of solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brandPrimary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brandPrimary group-hover:text-white transition-colors duration-300">
                  <Shield className="h-8 w-8 text-brandPrimary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-textColor">
                  Fraud Detection & Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Implement machine learning algorithms that monitor transactions in real-time, 
                  identifying suspicious activities and mitigating risks before they escalate.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brandPrimary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brandPrimary group-hover:text-white transition-colors duration-300">
                  <Zap className="h-8 w-8 text-brandPrimary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-textColor">
                  Smart Payment Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Optimize transaction routing and processing speeds, enhancing customer satisfaction 
                  through quicker payments while ensuring compliance with financial regulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brandPrimary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brandPrimary group-hover:text-white transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-brandPrimary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-textColor">
                  Predictive Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Harness the power of AI analytics to forecast trends in money transfers, 
                  allowing businesses to make informed decisions based on real-time data.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-brandPrimary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brandPrimary group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="h-8 w-8 text-brandPrimary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-montserrat font-semibold text-textColor">
                  Customer Support Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Improve client interactions with AI-driven chatbots that provide 24/7 assistance, 
                  address common inquiries, and streamline the support process.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-textColor mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-brandPrimary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to discover how AI can transform your money transfer services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-textColor mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brandPrimary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-brandPrimary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textColor mb-2">Address</h4>
                    <p className="text-gray-600">
                      701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, 
                      Basant Garden, Chembur, Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brandPrimary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-brandPrimary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textColor mb-2">Phone</h4>
                    <a href="tel:+918369848475" className="text-brandPrimary hover:underline">
                      +91 8369848475
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brandPrimary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-brandPrimary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textColor mb-2">Email</h4>
                    <a href="mailto:info@moneytransfer.in" className="text-brandPrimary hover:underline">
                      info@moneytransfer.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textColor mb-2">WhatsApp</h4>
                    <a 
                      href="https://wa.me/918369848475" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5851234567!2d72.8873!3d19.0530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzEwLjgiTiA3MsKwNTMnMTQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat font-semibold text-textColor">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-textColor mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-textColor mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-textColor mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full min-h-[120px]"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-brandPrimary hover:bg-blue-600 text-white py-3 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-textColor text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-brandPrimary mb-4">
                MoneyTransfer.AI
              </h3>
              <p className="text-gray-300 mb-4">
                Revolutionizing Financial Transactions with AI Precision
              </p>
              <p className="text-gray-400 text-sm">
                Transforming the future of money transfers with cutting-edge artificial intelligence.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-brandPrimary transition-colors duration-200"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-brandPrimary transition-colors duration-200"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-brandPrimary transition-colors duration-200"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-montserrat font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Mumbai, Maharashtra 400071</p>
                <p>
                  <a href="tel:+918369848475" className="hover:text-brandPrimary transition-colors duration-200">
                    +91 8369848475
                  </a>
                </p>
                <p>
                  <a href="mailto:info@moneytransfer.in" className="hover:text-brandPrimary transition-colors duration-200">
                    info@moneytransfer.in
                  </a>
                </p>
                <p>
                  <a href="https://moneytransfer.in" className="hover:text-brandPrimary transition-colors duration-200">
                    moneytransfer.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MoneyTransfer.AI. All rights reserved. | 
              <span className="ml-2">Owned by 
                <a href="https://scalium.in" className="text-brandPrimary hover:underline ml-1">
                  Scalium.in
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
