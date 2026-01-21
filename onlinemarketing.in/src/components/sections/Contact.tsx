import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, you would send the form data to a server here
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Get In Touch</h2>
          <p className="text-[#6B7280] text-lg">
            Ready to transform your digital presence? Contact us for a free consultation and personalized strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-[#F5F5F5] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1F2937] mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#0F7DFF] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#1F2937]">Office Address</h4>
                    <p className="text-[#6B7280]">
                      701, Stellar Tower, Chembur East,<br />
                      Diamond Garden, Basant Garden,<br />
                      Chembur, Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#0F7DFF] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#1F2937]">Phone Number</h4>
                    <a href="tel:+918369848475" className="text-[#6B7280] hover:text-[#0F7DFF]">
                      +91 8369848475
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#0F7DFF] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-[#1F2937]">Email Address</h4>
                    <a href="mailto:info@onlinemarketing.in" className="text-[#6B7280] hover:text-[#0F7DFF]">
                      info@onlinemarketing.in
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-[#1F2937] mb-3">Business Hours</h4>
                <div className="space-y-2 text-[#6B7280]">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-[#1F2937] mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map((platform, index) => (
                    <a 
                      key={index} 
                      href={`https://${platform}.com/onlinemarketing.in`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:bg-[#0F7DFF] hover:text-white transition-colors"
                    >
                      <img 
                        src={`https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/5ebf348f-cdb3-432f-aba8-748d1339fe30.jpg`} 
                        alt={`${platform} icon`} 
                        className="w-5 h-5 object-contain" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5F5F5] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">Our Location</h3>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-300">
                <img 
                  src="https://pub-cdn.sider.ai/u/U0KAH964791/web-coder/684fd112060d7d85c7238b74/resource/345ec273-2a9c-4439-9c02-3961c26bef47.jpg" 
                  alt="Office Location Map" 
                  className="w-full h-full object-cover"
                />
              </div>
              <a 
                href="https://maps.google.com/?q=701, Stellar Tower, Chembur East, Mumbai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center mt-4 text-[#0F7DFF] hover:text-[#0B5DC7]"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1F2937] mb-6">Send us a message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-xl mb-2">Thank You!</div>
                  <p className="text-green-700">
                    Your message has been received. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F7DFF] focus:border-[#0F7DFF] outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1F2937] mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F7DFF] focus:border-[#0F7DFF] outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1F2937] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F7DFF] focus:border-[#0F7DFF] outline-none transition-colors"
                        placeholder="Enter your phone"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[#1F2937] mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F7DFF] focus:border-[#0F7DFF] outline-none transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="SEO">Search Engine Optimization</option>
                        <option value="SMM">Social Media Marketing</option>
                        <option value="Content">Content Marketing</option>
                        <option value="PPC">Performance Marketing</option>
                        <option value="Web">Web Development</option>
                        <option value="Analytics">Analytics & Reporting</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1F2937] mb-2">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F7DFF] focus:border-[#0F7DFF] outline-none transition-colors"
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-[#0F7DFF] border-gray-300 rounded focus:ring-[#0F7DFF]"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-[#6B7280]">
                      I agree to the <a href="#" className="text-[#0F7DFF] hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#0F7DFF] hover:bg-[#0B5DC7] text-white font-medium py-3 rounded-lg transition-colors flex justify-center items-center"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
