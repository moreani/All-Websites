
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    investmentSize: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent Successfully!",
      description: "Our AI trading experts will contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      investmentSize: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-trade-blue/10 rounded-full px-4 py-2 text-sm text-trade-blue mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Get Started Today</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your <span className="trade-gradient-text">Trading Performance</span> with AI Intelligence
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Connect with our AI trading experts and discover how our solutions can revolutionize your Bank Nifty trading strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="trading-card border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-trade-blue">Start Your AI Trading Journey</CardTitle>
              <p className="text-gray-600">Fill out the form below and our experts will contact you within 24 hours</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="border-gray-200 focus:border-trade-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 9999999999"
                      required
                      className="border-gray-200 focus:border-trade-blue"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="border-gray-200 focus:border-trade-blue"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Trading Experience</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger className="border-gray-200 focus:border-trade-blue">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                        <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                        <SelectItem value="expert">Expert (5+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Investment Size</Label>
                    <Select onValueChange={(value) => handleInputChange('investmentSize', value)}>
                      <SelectTrigger className="border-gray-200 focus:border-trade-blue">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5l">₹1L - ₹5L</SelectItem>
                        <SelectItem value="5-10l">₹5L - ₹10L</SelectItem>
                        <SelectItem value="10-25l">₹10L - ₹25L</SelectItem>
                        <SelectItem value="25l+">₹25L+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your trading goals and how we can help..."
                    className="border-gray-200 focus:border-trade-blue min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-trade-blue hover:bg-trade-blue/90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message & Get Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="trading-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trade-blue/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-trade-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                      <p className="text-gray-600 leading-relaxed">
                        701, Stellar Tower, Chembur East<br/>
                        Sion Opposite, Diamond Garden<br/>
                        Basant Garden, Chembur<br/>
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="trading-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-profit-green/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-profit-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600 mb-2">+91 8369848475</p>
                      <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="trading-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600 mb-2">info@banknifty.in</p>
                      <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-r from-profit-green to-green-400 text-white border-0">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Get Instant Support on WhatsApp</h3>
                <p className="mb-4 text-white/90">Chat with our AI trading experts now</p>
                <a 
                  href="https://wa.me/918369848475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-profit-green font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  Start WhatsApp Chat
                </a>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5536465746536!2d72.89656207519283!3d19.04369425311953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b5a5e2e6af%3A0x6b3e9d2a8f4e8b3a!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645123456789!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BankNifty Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
