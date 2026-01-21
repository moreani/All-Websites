
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-poppins font-bold text-2xl text-primary">
            HairWeaving.in
          </div>
          <div className="flex space-x-4">
            <a href="tel:+918369848475" className="text-primary hover:text-accent transition-colors">
              <i className="fas fa-phone-alt text-lg"></i>
            </a>
            <a href="mailto:info@hairweaving.in" className="text-primary hover:text-accent transition-colors">
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }}>
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6 animate-fade-in">
            Transform Your Look with AI-Powered Hair Weaving
          </h1>
          <p className="font-roboto text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Experience the future of hair restoration with personalized solutions designed for you.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 text-lg animate-fade-in"
            onClick={scrollToContact}
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-poppins font-bold text-4xl text-primary mb-6">
                The HairWeaving.in Difference: AI-Driven Precision
              </h2>
              <p className="font-roboto text-gray-700 leading-relaxed">
                At HairWeaving.in, we are revolutionizing the art of hair weaving by integrating cutting-edge artificial intelligence. Our journey began with a simple vision: to provide every individual in India with access to personalized, high-quality hair restoration solutions that are as unique as they are.
              </p>
              <p className="font-roboto text-gray-700 leading-relaxed">
                Using advanced AI algorithms, we analyze your hair type, scalp condition, and facial features to create a bespoke weaving plan that seamlessly blends with your natural hair. Our commitment extends beyond aesthetics; we prioritize your comfort and confidence, ensuring a natural look and a revitalized sense of self.
              </p>
              <p className="font-roboto text-gray-700 leading-relaxed">
                We source only the finest quality materials and employ highly skilled technicians trained in the latest AI-assisted techniques. From initial consultation to final styling, our team is dedicated to providing an exceptional experience tailored to your specific needs.
              </p>
              <p className="font-roboto text-gray-700 leading-relaxed font-medium">
                Discover the HairWeaving.in advantage – where technology meets artistry to transform your life, one strand at a time. We are based in the heart of Mumbai, ready to serve you with integrity and expertise.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Hair Analysis Technology" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-4xl text-primary text-center mb-16">
            Our AI-Enhanced Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
              }}></div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                  AI-Powered Hair Analysis & Matching
                </h3>
                <p className="font-roboto text-gray-700">
                  Our advanced AI algorithms analyze your hair's texture, color, and density to create a perfect match for your weave. Say goodbye to unnatural-looking extensions!
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
              }}></div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                  Virtual Weave Try-On
                </h3>
                <p className="font-roboto text-gray-700">
                  Visualize your new look before you commit! Our virtual try-on tool uses AI to simulate different weave styles and colors on your face.
                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
              }}></div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                  Custom Weave Design & Creation
                </h3>
                <p className="font-roboto text-gray-700">
                  Our AI-driven design process ensures a flawless fit and natural look. We create custom weaves tailored to your unique head shape and hairline.
                </p>
              </CardContent>
            </Card>

            {/* Service 4 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
              }}></div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                  AI-Optimized Maintenance & Care
                </h3>
                <p className="font-roboto text-gray-700">
                  Extend the life of your weave with our AI-powered care recommendations. Receive personalized tips and product suggestions based on your hair type and weave material.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins font-bold text-4xl text-primary text-center mb-16">
            Book Your Free Consultation Today
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-12"
                />
                <Textarea
                  name="message"
                  placeholder="Tell us about your hair restoration goals..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                />
                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-poppins font-semibold text-xl text-primary">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt text-accent text-lg"></i>
                    <p className="font-roboto text-gray-700">
                      701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-phone-alt text-accent text-lg"></i>
                    <a href="tel:+918369848475" className="font-roboto text-gray-700 hover:text-primary">
                      +91 8369848475
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-envelope text-accent text-lg"></i>
                    <a href="mailto:info@hairweaving.in" className="font-roboto text-gray-700 hover:text-primary">
                      info@hairweaving.in
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-globe text-accent text-lg"></i>
                    <span className="font-roboto text-gray-700">hairweaving.in</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://wa.me/918369848475" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span className="font-roboto font-medium">Chat on WhatsApp</span>
                </a>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.698245345716!2d72.89494637425373!3d19.001499682025763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5c2a66e9d1d%3A0x5514e249ef075816!2s701%2C%20Stellar%20Tower%2C%20Chembur%20East%2C%20Sion%20Opposite%2C%20Diamond%20Garden%2C%20Basant%20Garden%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1719148488921!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HairWeaving.in Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-roboto">
            © 2025 HairWeaving.in. All rights reserved.
          </p>
          <p className="font-roboto text-sm mt-2 opacity-80">
            Owned by Scalium.in
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
