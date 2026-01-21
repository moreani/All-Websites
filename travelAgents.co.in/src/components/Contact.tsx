import { MapPin, Phone, Mail, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-primary text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Partner with Us to Lead the Future of Travel.
          </h2>
          
          <p className="text-lg text-white/80">
            Let's have a conversation about the specific challenges your business is facing. We can provide a tailored demonstration of how TravelAgents AI will drive tangible results, from increased profitability to enhanced customer satisfaction. Contact our team in Mumbai today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h3 className="text-xl font-bold font-poppins mb-6">
              Get in Touch
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-white/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-white/80 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-white/50"
                    placeholder="Your company"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-white/50"
                    placeholder="you@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-white/50"
                    placeholder="Your phone"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-white/50"
                  placeholder="Tell us about your needs and challenges"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Request Consultation
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold font-poppins mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-white/80">
                    701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="mr-3 text-accent flex-shrink-0" size={20} />
                  <a href="tel:+918369848475" className="text-white hover:text-accent transition-colors">
                    +91 8369848475
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="mr-3 text-accent flex-shrink-0" size={20} />
                  <a href="mailto:info@travelagents.co.in" className="text-white hover:text-accent transition-colors">
                    info@travelagents.co.in
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Globe className="mr-3 text-accent flex-shrink-0" size={20} />
                  <a href="https://travelagents.co.in" className="text-white hover:text-accent transition-colors">
                    travelagents.co.in
                  </a>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href="https://wa.me/918369848475"
                  className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#22BF5B] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  <MessageSquare size={18} />
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl h-64">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7862227148946!2d72.89937867406513!3d19.069020853024684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c69761cb4e9d%3A0xddbbb79a2e467965!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687341029919!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
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

export default Contact;
