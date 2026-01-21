
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in Medical Transcription AI services. Could you provide more information?");
    window.open(`https://wa.me/918369848475?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+918369848475';
  };

  return (
    <section id="contact" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-lato text-gray-900 mb-6">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your medical transcription? Contact us for a demo or consultation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-lato text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-700">
                    701, Stellar Tower, Chembur East, Sion Opposite,<br />
                    Diamond Garden, Basant Garden, Chembur,<br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <Button 
                    variant="link" 
                    onClick={handleCall}
                    className="text-primary hover:text-primary/80 p-0 h-auto font-normal"
                  >
                    +91 8369848475
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:info@medicaltranscription.in" className="text-primary hover:text-primary/80">
                    info@medicaltranscription.in
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Website</h4>
                  <a href="https://medicaltranscription.in" className="text-primary hover:text-primary/80">
                    medicaltranscription.in
                  </a>
                </div>
                
                <div className="pt-4">
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white w-full"
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Map */}
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2969434349394!2d72.89947!3d19.054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bc8e9d6c5b%3A0x1234567890123456!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Medical Transcription AI Location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-2xl font-lato text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your transcription needs..."
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
