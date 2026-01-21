import { useState } from 'react';
import { Mail, Phone, MapPin, Shield, Zap, Eye, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
const Index = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    challenges: '',
    preferredTime: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-cyber-navy text-white font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full bg-cyber-navy/95 backdrop-blur-sm border-b border-cyber-blue/20 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">HACKING</span>
            <span className="text-cyber-blue">.IN</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+918369848475" className="flex items-center space-x-2 hover:text-cyber-blue transition-colors">
              <Phone size={18} />
              <span className="hidden sm:inline">+91 8369848475</span>
            </a>
            <a href="mailto:info@hacking.in" className="flex items-center space-x-2 hover:text-cyber-blue transition-colors">
              <Mail size={18} />
              <span className="hidden sm:inline">info@hacking.in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-navy via-cyber-navy to-cyber-navy/80"></div>
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Circuit board background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Defend Your <span className="text-cyber-blue">Digital Empire</span> with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            India's most advanced AI-powered cybersecurity platform. Predict threats, prevent breaches, protect profits.
          </p>
          <p className="text-lg mb-10 text-cyber-blue font-medium">
            AI-Powered Cybersecurity for India's Digital Future
          </p>
          <Button className="bg-alert-red hover:bg-alert-red/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Secure Your Enterprise Now
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            The Future of <span className="text-cyber-blue">Cybersecurity</span> is Here
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                In an era where Indian businesses are experiencing unprecedented digital transformation, cyber threats have evolved into sophisticated, AI-driven attacks that traditional security measures simply cannot counter. Hacking.in represents the next generation of cybersecurity intelligence—where artificial intelligence doesn't just respond to threats, it anticipates them.
              </p>
              <p>
                Our platform combines advanced machine learning algorithms with real-time threat intelligence to create an impenetrable digital fortress around your enterprise. We understand that for Indian businesses competing in global markets, a single security breach can destroy years of reputation building and market positioning.
              </p>
              <p>
                What sets us apart is our deep understanding of the Indian business landscape. From traditional manufacturing companies embracing Industry 4.0 to fintech startups handling sensitive financial data, we've tailored our AI security solutions to address the unique challenges facing Indian enterprises.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="AI cybersecurity visualization" className="rounded-lg shadow-2xl" />
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyber-navy to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            AI-Powered <span className="text-cyber-blue">Security Arsenal</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-cyber-blue/30 hover:border-cyber-blue transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="text-cyber-blue mr-4" size={32} />
                  <h3 className="text-2xl font-bold text-white">Intelligent Threat Detection</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Our AI algorithms analyze network traffic patterns, user behaviors, and system anomalies in real-time, identifying potential threats up to 90% faster than traditional security systems. Using advanced neural networks trained on Indian cyber-threat landscapes, our platform recognizes both global attack vectors and region-specific threats targeting Indian businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-cyber-blue/30 hover:border-cyber-blue transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Shield className="text-cyber-blue mr-4" size={32} />
                  <h3 className="text-2xl font-bold text-white">Automated Penetration Testing</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Revolutionary AI-driven ethical hacking that continuously tests your security perimeters. Our intelligent bots simulate real-world attacks, identifying vulnerabilities before malicious actors can exploit them. This isn't just automated scanning—it's AI that thinks like a hacker, providing detailed reports and remediation strategies tailored for Indian compliance requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-cyber-blue/30 hover:border-cyber-blue transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Zap className="text-cyber-blue mr-4" size={32} />
                  <h3 className="text-2xl font-bold text-white">Predictive Security Analytics</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Transform your security data into actionable intelligence. Our AI processes thousands of security events per second, creating predictive models that forecast attack probabilities, identify high-risk periods, and recommend proactive security measures. Perfect for Indian enterprises managing complex digital ecosystems across multiple locations and time zones.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-cyber-blue/30 hover:border-cyber-blue transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Bot className="text-cyber-blue mr-4" size={32} />
                  <h3 className="text-2xl font-bold text-white">AI-Enhanced Incident Response</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  When threats are detected, our AI doesn't just alert—it acts. Automated response protocols isolate threats, preserve evidence, and initiate recovery procedures while keeping your security team informed through intelligent prioritization. Our system understands Indian business hours and operational patterns, ensuring responses are contextually appropriate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-cyber-navy">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Secure Your <span className="text-cyber-blue">Digital Future</span> Today
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Ready to transform your cybersecurity posture with cutting-edge AI? Our team of security experts and AI specialists is standing by to design a customized protection strategy for your enterprise.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-cyber-blue/30">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Company Name</label>
                      <Input name="companyName" value={formData.companyName} onChange={handleInputChange} className="bg-gray-700/50 border-gray-600 text-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Contact Person</label>
                      <Input name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} className="bg-gray-700/50 border-gray-600 text-white" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} className="bg-gray-700/50 border-gray-600 text-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="bg-gray-700/50 border-gray-600 text-white" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Current Security Challenges</label>
                    <Textarea name="challenges" value={formData.challenges} onChange={handleInputChange} className="bg-gray-700/50 border-gray-600 text-white min-h-[120px]" placeholder="Describe your current security concerns and challenges..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Preferred Contact Time</label>
                    <select name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-md px-3 py-2">
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-cyber-blue hover:bg-cyber-blue/90 text-cyber-navy font-semibold py-3">
                    Send Secure Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-cyber-blue/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyber-blue">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-cyber-blue" size={24} />
                      <div>
                        <p className="font-medium text-slate-50">Office Address</p>
                        <p className="text-gray-300 text-sm">701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-cyber-blue" size={24} />
                      <div>
                        <p className="font-medium text-slate-50">Phone</p>
                        <a href="tel:+918369848475" className="text-gray-300 hover:text-cyber-blue transition-colors">+91 8369848475</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-cyber-blue" size={24} />
                      <div>
                        <p className="font-medium text-slate-50">Email</p>
                        <a href="mailto:info@hacking.in" className="text-gray-300 hover:text-cyber-blue transition-colors">info@hacking.in</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open('https://wa.me/918369848475', '_blank')}>
                  WhatsApp Chat
                </Button>
                <Button className="flex-1 bg-cyber-blue hover:bg-cyber-blue/90 text-cyber-navy font-semibold" onClick={() => window.open('https://hacking.in', '_blank')}>
                  Visit Website
                </Button>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden border border-cyber-blue/30">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4616283987756!2d72.89846!3d19.041337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="200" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 border-t border-cyber-blue/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            Securing India's Digital Transformation | Owned by <span className="text-cyber-blue">Scalium.in</span>
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;