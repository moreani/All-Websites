
import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-opensans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold text-accent">
            AI Wedding Culling
          </h1>
          <div className="flex items-center gap-4">
            <a href="tel:+918369848475" className="flex items-center gap-2 text-accent hover:text-primary transition-colors">
              <Phone size={20} />
              <span className="hidden md:inline">+91 8369848475</span>
            </a>
            <a href="mailto:info@weddingphotography.co.in" className="flex items-center gap-2 text-accent hover:text-primary transition-colors">
              <Mail size={20} />
              <span className="hidden md:inline">Contact</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2340&auto=format&fit=crop')"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-accent mb-6">
            Transform Your Wedding Photography with AI
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Effortlessly Perfect Memories - Your Wedding, Our AI Precision
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Let our AI automate the selection of your most precious memories, so you can focus on capturing the magic.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('services')}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-8">
              Redefining Wedding Photography with AI
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At AI Wedding Culling, we understand that wedding photography is not just a job; it's an art form. 
              Our AI technology is designed to enhance this art by taking the painstaking work of photo selection off your shoulders. 
              We utilize advanced algorithms to identify blurry, duplicate, or less flattering photos, allowing photographers 
              to focus on their creative vision.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our service resonates with the diverse Indian wedding landscape, ensuring that every significant moment—from 
              the Mehendi to the final farewell—is captured flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-4">
              Our AI-Powered Solutions
            </h3>
            <p className="text-lg text-gray-600">
              Cutting-edge technology designed for wedding photographers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-in-right">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="text-xl font-playfair font-bold text-accent mb-4">
                  Smart Photo Culling
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Automatically filter out blurry, duplicated, and unflattering photos from extensive collections, 
                  saving hours of manual work.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-in-right">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="text-xl font-playfair font-bold text-accent mb-4">
                  Hero Shot Identification
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Utilize sophisticated AI algorithms to determine the best images that showcase the essence of each event, 
                  simplifying the selection process.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-in-right">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="text-xl font-playfair font-bold text-accent mb-4">
                  Event and Subject Grouping
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Efficiently organize photos by significant events (Sangeet, Ceremony, Reception) or subjects (Bride, Groom, Guests). 
                  This feature saves time and enhances storytelling.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-in-right">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="text-xl font-playfair font-bold text-accent mb-4">
                  Facial Recognition Insights
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our AI identifies blinking eyes or awkward expressions, facilitating effortless removal and 
                  perfecting your albums.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-4">
                Get In Touch
              </h3>
              <p className="text-lg text-gray-600">
                Ready to transform your wedding photography workflow?
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-playfair font-bold text-accent mb-6">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-1">Address</h5>
                        <p className="text-gray-600">
                          701, Stellar Tower, Chembur East, Sion Opposite,<br />
                          Diamond Garden, Basant Garden, Chembur,<br />
                          Mumbai, Maharashtra 400071
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-1">Phone</h5>
                        <a href="tel:+918369848475" className="text-gray-600 hover:text-primary transition-colors">
                          +91 8369848475
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-accent mb-1">Email</h5>
                        <a href="mailto:info@weddingphotography.co.in" className="text-gray-600 hover:text-primary transition-colors">
                          info@weddingphotography.co.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Button 
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white w-full py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://wa.me/918369848475" target="_blank" rel="noopener noreferrer">
                      💬 Chat with Us on WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5875891234567!2d72.8995!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNTMnNTguMiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AI Wedding Culling Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-playfair font-bold text-accent mb-6">Send us a Message</h4>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-accent mb-2">
                          Name *
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
                        <label htmlFor="email" className="block text-sm font-semibold text-accent mb-2">
                          Email *
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
                        <label htmlFor="message" className="block text-sm font-semibold text-accent mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="w-full min-h-[120px] resize-none"
                          placeholder="Tell us about your photography needs..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h5 className="text-2xl font-playfair font-bold mb-4">AI Wedding Culling</h5>
            <p className="text-gray-300 mb-6">
              Effortlessly Perfect Memories - Your Wedding, Our AI Precision
            </p>
            <div className="flex justify-center items-center gap-8 mb-8">
              <a href="tel:+918369848475" className="text-gray-300 hover:text-white transition-colors">
                📞 +91 8369848475
              </a>
              <a href="mailto:info@weddingphotography.co.in" className="text-gray-300 hover:text-white transition-colors">
                📧 info@weddingphotography.co.in
              </a>
              <a href="https://weddingphotography.co.in" className="text-gray-300 hover:text-white transition-colors">
                🌐 weddingphotography.co.in
              </a>
            </div>
            <div className="border-t border-gray-600 pt-6">
              <p className="text-gray-400 text-sm">
                Owned by <a href="https://scalium.in" className="text-primary hover:underline">Scalium.in</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
