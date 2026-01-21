
import { useState } from 'react';
import { Phone, Mail, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-0 font-poppins">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Ctrl</div>
          <div className="flex items-center space-x-4">
            <a href="tel:+918369848475" className="text-primary hover:text-secondary transition-colors">
              <Phone size={20} />
            </a>
            <a href="mailto:info@ctrl.co.in" className="text-primary hover:text-secondary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Unlock Exponential Growth with AI-Powered Automation
              </h1>
              <p className="text-xl mb-8 opacity-90 font-roboto-mono">
                Ctrl empowers Indian enterprises to streamline operations, boost productivity, and achieve unprecedented success through intelligent automation solutions.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-semibold"
              >
                Request a Demo
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Technology and Automation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Content */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 font-roboto-mono leading-relaxed">
              In today's hyper-competitive landscape, Indian enterprises need every possible advantage. Ctrl delivers that advantage by harnessing the power of Artificial Intelligence to automate key business processes. From manufacturing and logistics to customer service and data analysis, our AI-powered solutions are designed to optimize efficiency, reduce costs, and drive revenue growth. We understand the unique challenges and opportunities facing Indian businesses, and we tailor our solutions to meet your specific needs. Partner with Ctrl and unlock the full potential of your organization.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Team Collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ctrl: Your Partner in AI-Driven Transformation
              </h2>
              <p className="text-gray-700 mb-6 font-roboto-mono leading-relaxed">
                Ctrl is a leading provider of AI automation solutions for Indian enterprises. Founded by a team of seasoned AI experts and business strategists, we are committed to helping our clients leverage the transformative power of AI to achieve their business goals.
              </p>
              <p className="text-gray-700 font-roboto-mono leading-relaxed">
                We understand that AI is not just about technology; it's about people, processes, and strategy. That's why we take a holistic approach to AI implementation, working closely with our clients to identify their specific needs and develop customized solutions that deliver tangible results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              AI Automation Solutions Tailored for Your Business
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Intelligent Process Automation"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-primary mb-4">Intelligent Process Automation (IPA)</h3>
                <p className="text-gray-700 mb-4 font-roboto-mono">
                  Streamline your workflows and eliminate manual tasks with our IPA solutions. We leverage AI and robotic process automation (RPA) to automate repetitive tasks.
                </p>
                <p className="text-gray-600 text-sm font-roboto-mono">
                  Free up your employees to focus on higher-value activities like strategic planning and customer relationship management.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Predictive Maintenance"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-primary mb-4">AI-Powered Predictive Maintenance</h3>
                <p className="text-gray-700 mb-4 font-roboto-mono">
                  Minimize downtime and optimize asset performance with our predictive maintenance solutions using AI to analyze sensor data.
                </p>
                <p className="text-gray-600 text-sm font-roboto-mono">
                  Predict equipment failures before they occur, reducing maintenance costs and maximizing asset lifespan.
                </p>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Customer Service Automation"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-primary mb-4">AI-Driven Customer Service Automation</h3>
                <p className="text-gray-700 mb-4 font-roboto-mono">
                  Enhance customer satisfaction with AI-driven automation. Deploy chatbots and virtual assistants for personalized support.
                </p>
                <p className="text-gray-600 text-sm font-roboto-mono">
                  Handle routine inquiries efficiently while your team focuses on complex customer relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Connect with Ctrl Today
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
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
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2" size={16} />
                    Send Message
                  </Button>
                </form>

                {/* WhatsApp Button */}
                <div className="mt-6">
                  <a 
                    href="https://wa.me/918369848475" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-2 text-xl"></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">Get in Touch</h3>
                  <div className="space-y-4 font-roboto-mono">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-primary" size={20} />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+918369848475" className="text-secondary hover:underline">+91 8369848475</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-primary" size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@ctrl.co.in" className="text-secondary hover:underline">info@ctrl.co.in</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card>
                <CardContent className="p-0">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.544384194938!2d72.89471797424613!3d19.07276438201433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6e623b3b121%3A0x916ddc24a270c955!2sStellar%20Tower!5e0!3m2!1sen!2sin!4v1719139287759!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-roboto-mono">&copy; 2024 Ctrl. All rights reserved.</p>
              <p className="text-sm opacity-75 font-roboto-mono">Owned by Scalium.in</p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-roboto-mono text-sm opacity-90">ctrl.co.in</p>
              <p className="text-xs opacity-75 font-roboto-mono">Orchestrating Intelligent Automation for India's Enterprise Future</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
