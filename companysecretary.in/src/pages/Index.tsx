
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary font-source">
            Company Secretary AI
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+918369848475" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
              <Phone size={18} />
              <span>+91 8369848475</span>
            </a>
            <a href="mailto:info@companysecretary.in" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
              <Mail size={18} />
              <span>info@companysecretary.in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-accent to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business Operations with 
                <span className="text-primary"> AI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Say goodbye to inefficient manual processes and hello to streamlined compliance and governance.
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Empowering Businesses with Intelligent Compliance Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Started
                </Button>
                <a 
                  href="https://wa.me/918369848475" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4 text-center"
                >
                  Chat with Us
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=center"
                alt="AI Technology and Business"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-gray-600">Businesses Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Company Secretary AI</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                At Company Secretary AI, we are committed to transforming the landscape of company administration through artificial intelligence. Our team of experts combines deep industry knowledge with technical proficiency to develop solutions that cater to the dynamic needs of businesses in India.
              </p>
              <p>
                We leverage AI to create tools that simplify compliance management, enhance data accuracy, and free up valuable resources for strategic initiatives. With our innovative approach, we empower CEOs and business leaders to navigate the complexities of regulatory frameworks effortlessly, ensuring that they remain focused on growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive tools designed for modern businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Compliance Management Software",
                description: "Automate routine compliance tasks, monitor legal updates, and ensure adherence to regulations effortlessly.",
                icon: "📊"
              },
              {
                title: "Document Management Tools", 
                description: "Harness AI-based recognition technology to manage corporate documents, ensuring accuracy and accessibility.",
                icon: "📁"
              },
              {
                title: "Data Analytics for Governance",
                description: "Utilize our AI insights to gain a comprehensive view of your company's governance and risk management processes.",
                icon: "📈"
              },
              {
                title: "Regulatory Effectiveness Tracker",
                description: "Stay ahead with real-time updates on compliance requirements and changes in regulatory environments.",
                icon: "🎯"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Ready to transform your business? Let's talk.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-accent/20 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>
                <Button type="submit" className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-lightGray p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-primary" size={24} />
                    <a href="tel:+918369848475" className="text-lg text-gray-700 hover:text-primary transition-colors">
                      +91 8369848475
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-primary" size={24} />
                    <a href="mailto:info@companysecretary.in" className="text-lg text-gray-700 hover:text-primary transition-colors">
                      info@companysecretary.in
                    </a>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1" size={24} />
                    <div className="text-lg text-gray-700">
                      701, Stellar Tower, Chembur East,<br />
                      Sion Opposite, Diamond Garden,<br />
                      Basant Garden, Chembur,<br />
                      Mumbai, Maharashtra 400071
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2044516789747!2d72.89894997590713!3d19.05291538213156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d2f25e23d5%3A0x7f8e9c8d2f25e23d!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">Company Secretary AI</div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              "Our innovative solutions are designed not just to meet the needs of today but to anticipate the challenges of tomorrow."
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400">
                © 2024 Company Secretary AI. All rights reserved. | Owned by 
                <a href="https://scalium.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  Scalium.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
