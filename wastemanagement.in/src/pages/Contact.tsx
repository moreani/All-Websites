import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Hero from '../components/Hero';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <title>Contact Us - Waste Management India Information Center</title>
      
      <Hero
        title="Connect With Our Environmental Team"
        subtitle="Get information, resources, and support for waste management initiatives."
        backgroundImage="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
      />

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">How Can We Help You?</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our environmental information center provides comprehensive support for waste management education, 
              resources, and community initiatives throughout India. Expert staff members offer guidance on composting, 
              recycling, waste reduction, and program implementation. Educational materials, workshop scheduling, and 
              community program support available for schools, organizations, and local governments. Resource library 
              includes guides, toolkits, and research materials supporting environmental awareness and sustainable practices. 
              Partnership opportunities available for collaborative initiatives and knowledge sharing between organizations 
              and communities nationwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-green-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Information</option>
                      <option value="composting">Composting Guidance</option>
                      <option value="recycling">Recycling Support</option>
                      <option value="community">Community Programs</option>
                      <option value="education">Educational Resources</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Please describe how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Contact our team for waste management information, educational resources, and program support. 
                  We respond to inquiries within 24 hours and provide personalized assistance for individual and 
                  organizational needs. Whether seeking guidance on home composting, community programs, or policy 
                  advocacy, our knowledgeable staff provides reliable information and practical solutions for 
                  environmental challenges.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Phone Support</h4>
                      <p className="text-slate-600">+91 8369848475</p>
                      <p className="text-sm text-slate-500">Monday to Friday, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Email Support</h4>
                      <p className="text-slate-600">info@wastemanagement.in</p>
                      <p className="text-sm text-slate-500">24-hour response time</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Visit Our Office</h4>
                      <p className="text-slate-600">
                        701, Stellar Tower, Chembur East<br />
                        Sion Opposite, Diamond Garden<br />
                        Basant Garden, Chembur<br />
                        Mumbai, Maharashtra 400071
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-800">Office Hours & Support</h3>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Our information center operates Monday through Friday, 9:00 AM to 6:00 PM, providing telephone 
                  and email support for waste management inquiries. Weekend support available for urgent environmental 
                  issues and community emergency situations. Multilingual support available in Hindi, English, and 
                  regional languages for broader accessibility. Educational workshop scheduling and community program 
                  consultations available by appointment for detailed planning and implementation support.
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Monday - Friday:</span>
                    <span className="text-slate-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Weekend Emergency:</span>
                    <span className="text-slate-600">On-call support</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">Languages:</span>
                    <span className="text-slate-600">Hindi, English, Regional</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Quick answers to common questions about waste management and our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How do I start composting at home?',
                answer: 'Download our free home composting guide and start with organic kitchen waste, maintaining proper brown-to-green material ratios.'
              },
              {
                question: 'What materials can be recycled?',
                answer: 'Most paper, plastic bottles, glass containers, and metal cans can be recycled. Check our recycling identification guide for details.'
              },
              {
                question: 'How can my community start a waste management program?',
                answer: 'Our community program toolkit provides step-by-step guidance. Contact us for personalized consultation and support.'
              },
              {
                question: 'Do you provide educational workshops?',
                answer: 'Yes, we offer workshops for schools, communities, and organizations. Contact us to schedule a session for your group.'
              },
              {
                question: 'How can businesses improve their waste management?',
                answer: 'Use our business waste audit template to assess current practices, then implement our recommended improvement strategies.'
              },
              {
                question: 'What support is available for policy advocacy?',
                answer: 'We provide research data, policy briefs, and guidance for engaging with local government on waste management issues.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;