
import ContactForm from './ContactForm';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918369848475', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-lato font-bold text-4xl md:text-5xl text-primary mb-6">
            Get In Touch
          </h2>
          <p className="font-roboto text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about currency trading or want to learn more about our services? We're here to help!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-lato font-bold text-2xl text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="font-roboto text-gray-700">
                      701, Stellar Tower, Chembur East,<br />
                      Sion Opposite, Diamond Garden,<br />
                      Basant Garden, Chembur,<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">📞</div>
                  <a 
                    href="tel:+918369848475" 
                    className="font-roboto text-primary hover:underline"
                  >
                    +91 83698 48475
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">✉️</div>
                  <a 
                    href="mailto:info@currencyconverter.in" 
                    className="font-roboto text-primary hover:underline"
                  >
                    info@currencyconverter.in
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">🌐</div>
                  <a 
                    href="https://currencyconverter.in" 
                    className="font-roboto text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    currencyconverter.in
                  </a>
                </div>
              </div>
            </div>
            
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-roboto font-medium transition-colors"
            >
              💬 Contact Us on WhatsApp
            </Button>
          </div>
          
          <div>
            <h3 className="font-lato font-bold text-2xl text-primary mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4567382842484!2d72.89934431490248!3d19.045240987096867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f0c4b8c4a7%3A0x1b2c3d4e5f6g7h8i!2sChembur%20East%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CurrencyWise Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
