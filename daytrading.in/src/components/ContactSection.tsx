
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
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-brand-dark mb-4 text-center">
            Get In <span className="text-brand-primary">Touch</span>
          </h2>
          <p className="text-xl font-open-sans text-brand-dark text-center mb-16 opacity-80">
            Ready to revolutionize your trading? Let's talk about your needs.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-roboto font-bold text-brand-dark">
                  Send us a Message
                </CardTitle>
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-brand-primary"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-brand-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-blue-700 text-brand-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-brand-primary to-blue-700 text-brand-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-roboto font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold font-open-sans">Address:</h4>
                      <p className="font-open-sans opacity-90">
                        701, Stellar Tower,<br />
                        Chembur East, Sion Opposite,<br />
                        Diamond Garden,<br />
                        Basant Garden, Chembur,<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold font-open-sans">Phone:</h4>
                      <a 
                        href="tel:+918369848475" 
                        className="font-open-sans opacity-90 hover:opacity-100 transition-opacity"
                      >
                        +91 8369848475
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold font-open-sans">Email:</h4>
                      <a 
                        href="mailto:info@daytrading.in" 
                        className="font-open-sans opacity-90 hover:opacity-100 transition-opacity"
                      >
                        info@daytrading.in
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold font-open-sans">Website:</h4>
                      <p className="font-open-sans opacity-90">daytrading.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Button */}
              <div className="text-center">
                <a
                  href="https://wa.me/918369848475?text=Hi! I'm interested in your AI trading solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-brand-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span className="mr-2">💬</span>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.804423315374!2d72.8883603!3d19.0466872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f0f7b1e5e3%3A0x8f4c4c4c4c4c4c4c!2sChembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
