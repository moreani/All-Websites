
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
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
          <h2 className="text-4xl md:text-5xl font-bold font-roboto text-accent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl font-lora text-gray-600 max-w-2xl mx-auto">
            Ready to transform your fashion business with AI? Let's discuss your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-roboto font-semibold text-lg transition-colors"
              >
                Send Message
              </Button>
            </form>
            
            <div className="mt-8">
              <a
                href="https://wa.me/918369848475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-roboto font-semibold text-lg transition-colors"
              >
                📱 Contact Us on WhatsApp
              </a>
            </div>
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-bg-dark p-8 rounded-xl">
              <h3 className="text-2xl font-bold font-roboto text-accent mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <strong className="text-accent">Address:</strong>
                  <p className="text-gray-700 mt-1">
                    701, Stellar Tower, Chembur East, Sion Opposite,<br />
                    Diamond Garden, Basant Garden, Chembur,<br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
                <div>
                  <strong className="text-accent">Phone:</strong>
                  <p className="text-gray-700 mt-1">
                    <a href="tel:+918369848475" className="hover:text-primary">+91 8369848475</a>
                  </p>
                </div>
                <div>
                  <strong className="text-accent">Email:</strong>
                  <p className="text-gray-700 mt-1">
                    <a href="mailto:info@fashiondesigning.in" className="hover:text-primary">info@fashiondesigning.in</a>
                  </p>
                </div>
                <div>
                  <strong className="text-accent">Website:</strong>
                  <p className="text-gray-700 mt-1">fashiondesigning.in</p>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2638890564486!2d72.8976315!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c7e0b3f3d7%3A0x1b9e1b9e1b9e1b9e!2sChembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1625731234567!5m2!1sen!2sin"
                width="100%"
                height="300"
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
