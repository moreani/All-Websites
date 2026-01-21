
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-open-sans">
            Contact <span className="gradient-text">Us</span>
          </h2>
          
          <p className="text-xl text-slate-300 text-center mb-12 font-roboto-mono max-w-3xl mx-auto">
            Ready to experience the future of file transfer? Contact us today to learn more about our AI-powered solutions.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white font-open-sans text-2xl mb-4">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-600 border-slate-500 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-600 border-slate-500 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-slate-300">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-slate-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-slate-600 border-slate-500 text-white min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-wire-green hover:bg-green-600 text-white py-3 font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-wire-green mt-1" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Address</h3>
                      <p className="text-slate-300 font-roboto-mono text-sm">
                        701, Stellar Tower, Chembur East,<br />
                        Sion Opposite, Diamond Garden,<br />
                        Basant Garden, Chembur,<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-wire-blue" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Phone</h3>
                      <a 
                        href="tel:+918369848475" 
                        className="text-wire-blue hover:text-blue-400 transition-colors font-roboto-mono"
                      >
                        +91 8369848475
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-wire-green" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">Email</h3>
                      <a 
                        href="mailto:info@wiretransfer.in" 
                        className="text-wire-green hover:text-green-400 transition-colors font-roboto-mono"
                      >
                        info@wiretransfer.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-6 h-6 text-wire-blue" />
                    <div>
                      <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                      <a 
                        href="https://wa.me/918369848475"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-wire-blue hover:text-blue-400 transition-colors font-roboto-mono"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0234567890123!2d72.8777!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAzLjQiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="250"
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

export default Contact;
