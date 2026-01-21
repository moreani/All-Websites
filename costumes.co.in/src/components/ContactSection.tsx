
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Demo Request Submitted!",
      description: "We'll get back to you within 24 hours to schedule your personalized demo.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-nunito font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Get a <span className="text-primary">Personalized Demo</span> Today
          </h2>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            See how Costumes AI can transform your costume rental business. Request a personalized demo to learn how our AI solutions can help you optimize your inventory, maximize revenue, and gain a competitive edge.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="font-nunito font-bold text-2xl text-gray-900 mb-6">
                Request Your Demo
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-lato">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-lato">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-lato">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-lato">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your costume rental business and what you'd like to learn more about..."
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Demo Request
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information & Map */}
          <div className="animate-fade-in space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="font-nunito font-bold text-2xl text-gray-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div className="font-lato">
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">
                      701, Stellar Tower, Chembur East,<br />
                      Sion Opposite, Diamond Garden,<br />
                      Basant Garden, Chembur,<br />
                      Mumbai, Maharashtra 400071
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary flex-shrink-0" size={24} />
                  <div className="font-lato">
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a href="tel:+918369848475" className="text-primary hover:text-primary/80 transition-colors">
                      +91 8369848475
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary flex-shrink-0" size={24} />
                  <div className="font-lato">
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:info@costumes.co.in" className="text-primary hover:text-primary/80 transition-colors">
                      info@costumes.co.in
                    </a>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Button */}
              <div className="mt-6">
                <a 
                  href="https://wa.me/918369848475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2648234567!2d72.89765!3d19.0410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b2a1234567%3A0xabcdef1234567890!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Costumes AI Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
