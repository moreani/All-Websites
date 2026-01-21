
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-motivationBackground">
      {/* Header */}
      <header className="bg-motivationWhite shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-heading font-bold text-2xl text-primary">
            Motivation AI
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:+918369848475" 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">+91 8369848475</span>
            </a>
            <a 
              href="mailto:info@motivation.co.in" 
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">info@motivation.co.in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative hero-gradient text-motivationWhite py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Unlock Your Potential with<br />
              <span className="text-yellow-300">AI-Driven Motivation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover personalized pathways to inspire and transform your journey.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-motivationWhite px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-motivationWhite">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-8 gradient-text animate-fade-in">
              About Motivation AI
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in">
              Motivation AI stands at the intersection of technology and self-improvement. By employing advanced AI algorithms, we deliver a personalized experience tailored to each user's unique journey. Our mission is to provide the tools and resources that empower individuals to push past obstacles, set achievable goals, and enjoy a meaningful pursuit of personal success. Whether you are seeking inspiration or practical advice, our platform continuously evolves with you, ensuring that your growth journey is engaging and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-motivationBackground">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-center mb-16 gradient-text">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover animate-scale-in bg-motivationWhite border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-motivationWhite rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-primary">
                  AI-Powered Content Curation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Using AI, we analyze your interests, preferences, and challenges to deliver content that resonates. Discover articles, videos, and exercises curated for your personal growth.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover animate-scale-in bg-motivationWhite border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-motivationWhite rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-secondary">
                  Adaptive Learning Paths
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our smart technology adapts your learning experience based on progress and feedback, ensuring that you're always challenged and engaged.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover animate-scale-in bg-motivationWhite border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-motivationWhite rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-4 text-accent">
                  Daily AI-Generated Affirmations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Each day, receive unique affirmations tailored to your goals and past interactions, helping you to remain motivated and focused.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-motivationWhite">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-center mb-16 gradient-text">
            Get in Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-gray-300 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-gray-300 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-gray-300 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold rounded-full"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="animate-fade-in">
              <div className="bg-motivationBackground p-8 rounded-lg mb-8">
                <h3 className="font-heading font-bold text-xl mb-6 text-primary">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    <span>+91 8369848475</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span>info@motivation.co.in</span>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://wa.me/918369848475" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4927043224766!2d72.89655231490263!3d19.04556598708873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f0a8d3b8c5%3A0x7c8c8f0a8d3b8c5!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Motivation AI Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-motivationWhite py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Motivation AI. All rights reserved.</p>
          <p className="text-gray-400">Owned by Scalium.in</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
