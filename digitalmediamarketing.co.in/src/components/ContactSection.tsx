
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-roboto text-primary mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl font-lato text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out with any queries or discuss how we can help elevate your marketing strategies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="bg-gradient-to-br from-primary to-accent text-white shadow-2xl border-0 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-roboto mb-6">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold font-roboto mb-2">📍 Address</h4>
                    <p className="font-lato leading-relaxed">
                      701, Stellar Tower, Chembur East, Sion Opposite,<br />
                      Diamond Garden, Basant Garden, Chembur,<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold font-roboto mb-2">📞 Phone</h4>
                    <p className="font-lato">+91 8369848475</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold font-roboto mb-2">✉️ Email</h4>
                    <p className="font-lato">info@digitalmediamarketing.co.in</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold font-roboto mb-2">🌐 Website</h4>
                    <p className="font-lato">digitalmediamarketing.co.in</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <a 
                    href="https://wa.me/918369848475" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-roboto text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 font-lato"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 font-lato"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="font-lato"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-accent text-white h-12 font-bold font-roboto text-lg transition-colors duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="mt-16 animate-fade-in">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5967234678623!2d72.8997!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e5d2b8c5c7%3A0x2e4f5c6d8e9a1b2c!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Digital Media Marketing Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
