
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-cinema-dark mb-6">
            Transform Your Entertainment Strategy
          </h2>
          <div className="w-24 h-1 bg-gold-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to unlock the power of AI-driven cinema analytics? Let's discuss how we can revolutionize your content strategy.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-outfit font-bold text-cinema-dark mb-6">
              Get Started Today
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-cinema-dark hover:bg-cinema-dark/90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-outfit font-bold text-cinema-dark mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-accent p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-cinema-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cinema-dark mb-1">Address</h4>
                    <p className="text-gray-600">
                      701, Stellar Tower, Chembur East<br />
                      Sion Opposite, Diamond Garden<br />
                      Basant Garden, Chembur<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-accent p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-cinema-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cinema-dark mb-1">Phone</h4>
                    <a href="tel:+918369848475" className="text-gray-600 hover:text-gold-accent transition-colors">
                      +91 8369848475
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-accent p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cinema-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cinema-dark mb-1">Email</h4>
                    <a href="mailto:info@moviereviews.in" className="text-gray-600 hover:text-gold-accent transition-colors">
                      info@moviereviews.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-accent p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-cinema-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cinema-dark mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/918369848475" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gold-accent transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8946094849847!2d72.89954831489255!3d19.042453187096894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2d3f5c5555%3A0x9b7f9b7f9b7f9b7f!2sChembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MovieReviews.AI Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
