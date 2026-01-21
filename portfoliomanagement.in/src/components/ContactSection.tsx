
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-backgroundLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg font-roboto text-gray-600 max-w-2xl mx-auto">
            We would love to hear from you! Reach out to learn more about how we can assist you in transforming your portfolio management.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-backgroundDark p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-backgroundDark p-6 rounded-xl">
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <p className="font-roboto text-gray-700">
                      701, Stellar Tower, Chembur East, Sion Opposite,<br />
                      Diamond Garden, Basant Garden, Chembur,<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <a href="tel:+918369848475" className="font-roboto text-gray-700 hover:text-accent">
                    +91 8369848475
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <a href="mailto:info@portfoliomanagement.in" className="font-roboto text-gray-700 hover:text-accent">
                    info@portfoliomanagement.in
                  </a>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="font-montserrat font-semibold text-green-800 mb-2">
                    Chat with us on WhatsApp
                  </h4>
                  <Button 
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a 
                      href="https://wa.me/918369848475" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Start Chat
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="bg-backgroundDark p-6 rounded-xl">
              <h4 className="font-montserrat font-semibold text-primary mb-4">
                Visit Our Office
              </h4>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.878588658896!2d72.8898!3d19.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e1b4ea0b93%3A0x3b84b5b0a5a6b1a7!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
