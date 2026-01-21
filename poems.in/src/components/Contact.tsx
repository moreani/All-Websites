
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918369848475', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-text mb-6">
            We'd Love to <span className="text-primary">Hear from You!</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-roboto text-lg text-accent max-w-2xl mx-auto">
            Our team is always ready to assist you. Please reach out via the contact form, or connect with us on WhatsApp.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-text text-center">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="font-roboto"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-roboto"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="font-roboto min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-roboto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div className="bg-bg-light p-6 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold text-text mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">📍</span>
                  <div>
                    <h4 className="font-roboto font-bold text-text">Address</h4>
                    <p className="font-roboto text-accent">
                      701, Stellar Tower, Chembur East, Sion Opposite,<br />
                      Diamond Garden, Basant Garden, Chembur,<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-primary text-xl">📞</span>
                  <div>
                    <h4 className="font-roboto font-bold text-text">Phone</h4>
                    <a href="tel:+918369848475" className="font-roboto text-accent hover:text-primary transition-colors">
                      +91 8369848475
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-primary text-xl">✉️</span>
                  <div>
                    <h4 className="font-roboto font-bold text-text">Email</h4>
                    <a href="mailto:info@poems.in" className="font-roboto text-accent hover:text-primary transition-colors">
                      info@poems.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-primary text-xl">🌐</span>
                  <div>
                    <h4 className="font-roboto font-bold text-text">Website</h4>
                    <a href="https://poems.in" className="font-roboto text-accent hover:text-primary transition-colors">
                      poems.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-roboto text-lg py-6"
            >
              💬 Connect with Us on WhatsApp
            </Button>
            
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="font-roboto text-gray-600">Interactive Map Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
