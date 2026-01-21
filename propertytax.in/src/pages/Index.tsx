
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Calculator, TrendingUp, Shield, FileText, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-property-white font-open-sans">
      {/* Header */}
      <header className="bg-property-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold text-property-primary font-open-sans">
              PropertyTax
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+918369848475" className="flex items-center text-gray-600 hover:text-property-primary transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +91 8369848475
              </a>
              <a href="mailto:info@propertytax.in" className="flex items-center text-gray-600 hover:text-property-primary transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@propertytax.in
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-property-primary to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-teal-700 text-white mb-4 px-4 py-2">
                AI-Powered Tax Automation
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-teal-200">PropertyTax</span>
              </h1>
              <p className="text-xl mb-8 text-teal-100 leading-relaxed">
                Your intelligent solution for automated property tax calculations. Full control over your tax liabilities with just a few clicks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-teal-700 text-white hover:bg-teal-800 font-semibold px-8 py-4 text-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-property-primary px-8 py-4 text-lg"
                  onClick={() => scrollToSection('services')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                alt="AI Tax Automation" 
                className="rounded-lg shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-teal-700 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  <div>
                    <div className="font-bold">AI Powered</div>
                    <div className="text-sm">Tax Calculations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-property-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <div className="w-24 h-1 bg-property-primary mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Property Management" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                PropertyTax is at the forefront of simplifying property tax management for property owners across India. Our <strong>Automated Tax Calculation Tool</strong> employs advanced AI algorithms to ensure precise calculations tailored to individual property details and local tax laws.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With PropertyTax, you can eliminate the guesswork involved in tax calculations, ensuring that you comply with current regulations and optimize your financial planning. Our mission is to make property tax management effortless, allowing you to focus on growing your investments rather than worrying about liabilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-property-primary">99%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-property-primary">24/7</div>
                  <div className="text-sm text-gray-600">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-property-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions for all your property tax needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-property-primary">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 text-property-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Automated Tax Calculations</h3>
                <p className="text-gray-600">
                  Instantly calculate your property taxes based on current laws, using detailed inputs specific to your property portfolio.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-600">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Regular Updates</h3>
                <p className="text-gray-600">
                  Stay current with automatic updates reflecting any changes in tax regulations and rates, ensuring accuracy in your calculations.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-property-primary">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-property-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">User-Friendly Interface</h3>
                <p className="text-gray-600">
                  Our platform is designed for ease of use, allowing you to navigate effortlessly while accessing powerful tools tailored for your needs.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-600">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Detailed Reports</h3>
                <p className="text-gray-600">
                  Generate comprehensive reports detailing your tax status, options for savings, and future projections to inform your financial strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-property-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <div className="w-24 h-1 bg-property-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Have questions or need assistance? Reach out to us!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-property-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Address</h3>
                    <p className="text-gray-600">
                      701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, 
                      Basant Garden, Chembur, Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-property-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <a href="tel:+918369848475" className="text-property-primary hover:underline">
                      +91 8369848475
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-property-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href="mailto:info@propertytax.in" className="text-property-primary hover:underline">
                      info@propertytax.in
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://wa.me/918369848475" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-property-primary hover:bg-blue-700 h-12 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Google Maps Embed */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2856442089663!2d72.89906!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNTMnNTYuNiJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PropertyTax Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-property-primary mb-4">PropertyTax</div>
              <p className="text-gray-300 mb-4">
                Automating Tax Calculations for Smart Property Management
              </p>
              <div className="flex space-x-4">
                <a href="tel:+918369848475" className="text-gray-300 hover:text-property-primary">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:info@propertytax.in" className="text-gray-300 hover:text-property-primary">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-property-primary">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-property-primary">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-property-primary">Contact</button></li>
                <li><a href="http://propertytax.in" className="text-gray-300 hover:text-property-primary">Website</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>701, Stellar Tower, Chembur East</p>
                <p>Mumbai, Maharashtra 400071</p>
                <p>+91 8369848475</p>
                <p>info@propertytax.in</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 PropertyTax. All rights reserved. Owned by Scalium.in
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
