
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Connect With{' '}
            <span className="text-marriageBlue">Us</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-50 border-0 rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 text-lg border-2 border-gray-200 focus:border-marriageBlue rounded-xl"
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
                    className="h-12 text-lg border-2 border-gray-200 focus:border-marriageBlue rounded-xl"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="text-lg border-2 border-gray-200 focus:border-marriageBlue rounded-xl resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full h-12 bg-marriageBlue hover:bg-marriageBlue/90 text-white font-poppins font-semibold text-lg rounded-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-marriageBlue/10 p-3 rounded-full">
                  <Phone className="text-marriageBlue" size={24} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+918369848475" className="text-gray-700 hover:text-marriageBlue transition-colors">
                    +91 8369848475
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-marriageRed/10 p-3 rounded-full">
                  <Mail className="text-marriageRed" size={24} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">Email</h3>
                  <a href="mailto:info@marriage.co.in" className="text-gray-700 hover:text-marriageRed transition-colors">
                    info@marriage.co.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-marriageBlue/10 p-3 rounded-full">
                  <MapPin className="text-marriageBlue" size={24} />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    701, Stellar Tower, Chembur East,<br />
                    Sion Opposite, Diamond Garden,<br />
                    Basant Garden, Chembur,<br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <div className="pt-6">
              <a 
                href="https://wa.me/918369848475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4628535838396!2d72.89089797507043!3d19.053943982136477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c634be5c9a87%3A0x5f4c3c3f4c3c3c3c!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679827386951!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
