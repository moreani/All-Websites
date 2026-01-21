
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918369848475', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-cricket-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-cricket-text mb-6">
              Get In <span className="text-cricket-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-cricket-accent mx-auto mb-8"></div>
            <p className="text-xl font-body text-cricket-text/70 max-w-3xl mx-auto leading-relaxed">
              For inquiries, suggestions, or support, please reach out to us. We value your feedback and are here to assist you in your analytical journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in">
              <Card className="bg-gradient-to-br from-cricket-primary/10 to-cricket-accent/10 border-0 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold text-cricket-text">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cricket-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-cricket-text mb-2">Address</h4>
                      <p className="font-body text-cricket-text/70 leading-relaxed">
                        701, Stellar Tower, Chembur East,<br />
                        Sion Opposite, Diamond Garden,<br />
                        Basant Garden, Chembur,<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cricket-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-cricket-text mb-2">Phone</h4>
                      <p className="font-body text-cricket-text/70">+91 8369848475</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cricket-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-cricket-text mb-2">Email</h4>
                      <p className="font-body text-cricket-text/70">info@cricketscore.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cricket-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-cricket-text mb-2">Website</h4>
                      <p className="font-body text-cricket-text/70">cricketscore.org</p>
                    </div>
                  </div>

                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    💬 WhatsApp Us
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-cricket-background border-0 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold text-cricket-text">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-cricket-text mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cricket-text mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-cricket-text mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-cricket-primary hover:bg-cricket-primary/90 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
