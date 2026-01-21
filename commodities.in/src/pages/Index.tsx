
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background-white font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-montserrat font-bold text-xl text-primary">
              Commodities Risk AI
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-primary hover:text-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-primary hover:text-accent transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-primary hover:text-accent transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-primary hover:text-accent transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Commodities Risk AI
            </h1>
            <h2 className="font-montserrat font-semibold text-2xl md:text-3xl mb-8 text-accent">
              Optimizing Portfolios, Mitigating Risks.
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white/90">
              Elevate your trading with AI-driven risk assessments, scenario simulations, and diversification strategies tailored for the commodities market. Make informed decisions today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-primary hover:bg-accent/90 font-montserrat font-semibold text-lg px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-primary font-montserrat font-semibold text-lg px-8 py-4"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <ArrowDown 
            className="mx-auto text-accent animate-bounce cursor-pointer" 
            size={32}
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto animate-slide-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-12 text-center">
              About Us
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
              <p>
                At <span className="font-semibold text-primary">Commodities Risk AI</span>, we specialize in leveraging artificial intelligence to empower commodity traders and investors in managing risks and optimizing their portfolios. Our platform delivers advanced analytics that assess potential risks—such as price volatility, counterparty risk, and geopolitical uncertainties—giving users the insights needed to navigate complex market dynamics confidently.
              </p>
              <p>
                Understanding the risks associated with commodity trading is essential for protecting investments and maximizing returns. Our state-of-the-art AI solutions enable users to simulate various market scenarios—like climate impacts on agricultural products or shifts in global demand for metals—allowing them to visualize the potential impacts on their portfolios. Gain the analytical edge you need to make informed decisions in a fast-paced environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background-white">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-16 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary text-xl">
                  AI-Driven Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed">
                  Utilize our sophisticated algorithms to analyze your portfolio's exposure to various risks, enabling you to understand potential threats and craft effective hedging strategies. Our AI provides insights into price volatility, counterparty reliability, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary text-xl">
                  Scenario Simulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed">
                  Run customizable "what-if" scenarios to predict the impact of significant market events. Whether it's a dip in monsoon rainfall or a surge in global demand for copper, our AI tools simulate outcomes on your portfolio, offering a dynamic understanding of risk.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary text-xl">
                  Diversification Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 leading-relaxed">
                  Our AI analyzes the correlation between different commodities, providing tailored recommendations for diversifying your portfolio. Enhance your risk management strategy by ensuring optimal distribution across various assets to mitigate losses.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-16 text-center">
            Contact Us
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            For inquiries, partnerships, or personalized solutions, reach out to us!
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="animate-slide-in">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary text-2xl">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="w-full h-32"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-6">
                  <a 
                    href="https://wa.me/918369848475" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold"
                  >
                    WhatsApp Chat →
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat text-primary text-xl">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    701, Stellar Tower, Chembur East,<br />
                    Sion Opposite, Diamond Garden, Basant Garden,<br />
                    Chembur, Mumbai, Maharashtra 400071
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat text-primary text-xl">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+918369848475" 
                    className="flex items-center gap-2 text-accent hover:text-accent/80 font-semibold"
                  >
                    <Phone size={20} />
                    +91 8369848475
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat text-primary text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:info@commodities.in" 
                    className="flex items-center gap-2 text-accent hover:text-accent/80 font-semibold"
                  >
                    <Mail size={20} />
                    info@commodities.in
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat text-primary text-xl">Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="http://commodities.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-semibold"
                  >
                    commodities.in
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-montserrat">
            Owned by <span className="text-accent font-semibold">Scalium.in</span>
          </p>
          <p className="mt-2 text-white/80">
            © 2024 Commodities Risk AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
