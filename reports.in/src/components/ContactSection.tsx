
import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
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
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
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
    <section id="contact" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-roboto font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for inquiries, support, or feedback
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-roboto font-semibold text-lg text-gray-900 mb-2">Address</h4>
                  <p className="font-open-sans text-gray-600">
                    701, Stellar Tower, Chembur East, Sion Opposite,<br />
                    Diamond Garden, Basant Garden, Chembur,<br />
                    Mumbai, Maharashtra 400071
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-roboto font-semibold text-lg text-gray-900 mb-2">Phone</h4>
                  <a 
                    href="tel:+918369848475" 
                    className="font-open-sans text-primary hover:text-primary/80 transition-colors"
                  >
                    +91 8369848475
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-roboto font-semibold text-lg text-gray-900 mb-2">Email</h4>
                  <a 
                    href="mailto:info@reportgenai.com" 
                    className="font-open-sans text-primary hover:text-primary/80 transition-colors"
                  >
                    info@reportgenai.com
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918369848475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-roboto font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-roboto font-bold text-2xl text-gray-900 mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-open-sans font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-open-sans font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-open-sans font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your message or inquiry"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-roboto font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 animate-fade-in">
          <div className="bg-white p-4 rounded-2xl shadow-xl">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.0316310830604!2d72.89235621470468!3d19.05801748705388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c60ff120da91%3A0x493dcb5a383758ad!2s701%2C%20Stellar%20Tower%2C%20Chembur%20East%2C%20Sion%20Opposite%2C%20Diamond%20Garden%2C%20Basant%20Garden%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1625599341717!5m2!1sen!2sin"
              title="ReportGen AI Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
