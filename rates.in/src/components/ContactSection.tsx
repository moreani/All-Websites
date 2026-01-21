
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 8369848475",
      link: "tel:+918369848475"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info@rates.in",
      link: "mailto:info@rates.in"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Website",
      content: "rates.in",
      link: "https://rates.in"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-rates-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-roboto text-rates-text mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg font-lato text-rates-text/70 max-w-lg mx-auto">
            Have a question or want to learn more? Contact us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-roboto text-rates-text mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-lato font-semibold text-rates-text">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary hover:underline font-lato"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-rates-text/70 font-lato">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <a
                href="https://wa.me/918369848475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-lato"
              >
                <span>Contact us via WhatsApp</span>
              </a>
            </div>

            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-rates-text/60">Google Maps Integration</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-roboto text-rates-text">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="font-lato"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="font-lato"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="font-lato"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-lato"
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

export default ContactSection;
