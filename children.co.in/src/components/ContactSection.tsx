import { MapPin, Phone, Mail, Globe, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-20 bg-primary-blue text-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Begin Your Child's Transformative Journey
          </h2>
          <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with our educational consultants in Mumbai to schedule a personalized demo and assessment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9992211895566!2d72.89723931477828!3d19.05030485712449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5ddcb5842bd%3A0x76a0db76903c1df9!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1656587355975!5m2!1sen!2sin" 
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                aria-hidden="false" 
                tabIndex={0}
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-poppins font-medium text-lg">Address</h4>
                    <p className="font-inter text-gray-300">
                      701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, 
                      Basant Garden, Chembur, Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-poppins font-medium text-lg">Phone</h4>
                    <a href="tel:+918369848475" className="font-inter text-gray-300 hover:text-accent-orange transition-colors">
                      +91 8369848475
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-poppins font-medium text-lg">Email</h4>
                    <a href="mailto:info@children.co.in" className="font-inter text-gray-300 hover:text-accent-orange transition-colors">
                      info@children.co.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-accent-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-poppins font-medium text-lg">Website</h4>
                    <a href="https://children.co.in" className="font-inter text-gray-300 hover:text-accent-orange transition-colors">
                      children.co.in
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <a 
                  href="https://wa.me/918369848475" 
                  className="flex items-center justify-center bg-accent-orange hover:bg-white hover:text-accent-orange font-poppins font-medium rounded-lg px-6 py-3 transition-colors w-full text-white"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat With Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
