
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
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
        <h2 className="font-lato font-bold text-4xl md:text-5xl text-center mb-16 text-gray-800">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-lato font-bold text-xl mb-2 text-gray-800">Address</h3>
                <p className="font-roboto text-gray-600 leading-relaxed">
                  701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, 
                  Basant Garden, Chembur, Mumbai, Maharashtra 400071
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <div>
                <h3 className="font-lato font-bold text-xl mb-2 text-gray-800">Phone</h3>
                <a 
                  href="tel:+918369848475" 
                  className="font-roboto text-brand-blue hover:text-brand-green transition-colors duration-300"
                >
                  +91 8369848475
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <div>
                <h3 className="font-lato font-bold text-xl mb-2 text-gray-800">Email</h3>
                <a 
                  href="mailto:info@englishspeaking.com" 
                  className="font-roboto text-brand-blue hover:text-brand-green transition-colors duration-300"
                >
                  info@englishspeaking.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Globe className="w-6 h-6 text-brand-blue flex-shrink-0" />
              <div>
                <h3 className="font-lato font-bold text-xl mb-2 text-gray-800">Website</h3>
                <span className="font-roboto text-gray-600">englishspeaking.com</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-4">
              <a 
                href="https://wa.me/918369848475" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand-green hover:bg-green-600 text-white font-roboto font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Chat with Us on WhatsApp
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8876896234567!2d72.8856!3d19.0176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzAzLjQiTiA3MsKwNTMnMDguMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-bg rounded-lg p-8">
            <h3 className="font-lato font-bold text-2xl mb-6 text-gray-800">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-roboto font-bold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-roboto font-bold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-roboto font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all duration-300 resize-vertical"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-brand-blue hover:bg-blue-600 text-white font-roboto font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
                <Send className="ml-2" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
