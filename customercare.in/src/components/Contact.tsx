import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      content: '701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071',
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 8369848475',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@customercare.in',
      action: 'Send Email'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/918369848475?text=Hello! I would like to know more about your AI customer care solutions.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-backgroundLight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-800 mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your customer care experience? Let's connect and discover how our 
            AI Automation Solutions can revolutionize your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="section-reveal">
            <div className="space-y-8 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-gray-800 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {info.content}
                    </p>
                    <button className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center">
                      {info.action}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-gray-800">
                      Quick Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Get instant answers via WhatsApp
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Chat Now
                </button>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8947234523956!2d72.89065197519168!3d19.041917982116033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f5b4f5b5b5%3A0x1234567890abcdef!2sChembur%20East%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1635123456789!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CustomerCare AI Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;