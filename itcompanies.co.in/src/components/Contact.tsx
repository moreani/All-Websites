import React from 'react';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-primary">Ready to Transform Your IT Business?</h2>
        <p className="text-text-medium text-center mb-12 max-w-2xl mx-auto">
          Contact us today to discover how our AI solutions can elevate your IT operations
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-text-dark">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-primary mr-3 mt-1" size={20} />
                  <p className="text-text-medium">
                    701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-primary mr-3" size={20} />
                  <a href="tel:+918369848475" className="text-text-medium hover:text-primary">
                    +91 8369848475
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-primary mr-3" size={20} />
                  <a href="mailto:info@itcompanies.co.in" className="text-text-medium hover:text-primary">
                    info@itcompanies.co.in
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-primary mr-3" size={20} />
                  <div className="text-text-medium">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                
                <div>
                  <a 
                    href="https://wa.me/918369848475" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-[#25D366] text-white px-4 py-2 rounded-md font-medium hover:bg-[#20BD5C] transition-colors"
                  >
                    <MessageSquare size={18} className="mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.963064675288!2d72.89843231537997!3d19.060877687097244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f39a7325c3%3A0x7f8bd92fe6e14a13!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1656595052732!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
