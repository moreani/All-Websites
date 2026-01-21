import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Brain, 
  Target, 
  BarChart3, 
  FileText, 
  BookOpen, 
  MessageCircle,
  MapPin,
  Send,
  CheckCircle,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    educationLevel: '',
    fieldOfInterest: '',
    message: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full bg-brand-lime/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-poppins font-semibold text-brand-emerald">
                Scholarships.in
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+918369848475" 
                className="flex items-center space-x-2 text-gray-700 hover:text-brand-emerald transition-colors"
              >
                <Phone size={18} />
                <span className="hidden sm:inline">+91 8369848475</span>
              </a>
              <a 
                href="mailto:info@scholarships.in" 
                className="flex items-center space-x-2 text-gray-700 hover:text-brand-emerald transition-colors"
              >
                <Mail size={18} />
                <span className="hidden sm:inline">info@scholarships.in</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-brand-lime via-white to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-gray-900 leading-tight">
                  Unlock Your Academic Future with{' '}
                  <span className="text-brand-emerald">AI-Powered</span>{' '}
                  Scholarship Intelligence
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join 50,000+ Indian students who've discovered life-changing scholarships through our revolutionary AI platform
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-emerald text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg">
                  Start Your Scholarship Journey
                </button>
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Users className="text-brand-emerald" size={20} />
                    <span>50,000+ Students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="text-brand-emerald" size={20} />
                    <span>10,000+ Scholarships</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students studying with technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Engine Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
              Revolutionizing Education Access Through{' '}
              <span className="text-brand-emerald">Artificial Intelligence</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                India's educational landscape is transforming, and at Scholarships.in, we're leading this revolution with cutting-edge AI technology. Our platform doesn't just list scholarships—it intelligently matches students with opportunities that align with their unique academic profiles, career aspirations, and personal circumstances.
              </p>
              
              <p>
                Founded with the vision of democratizing quality education access across India, we've developed sophisticated machine learning algorithms that analyze over 10,000 scholarship programs, government schemes, and educational grants in real-time. Our AI engine considers factors like academic performance, family income, geographic location, field of study, and even extracurricular achievements to provide personalized recommendations that traditional search methods simply cannot match.
              </p>
              
              <p>
                What sets us apart is our deep understanding of the Indian education ecosystem. From rural students seeking agricultural scholarships to urban tech enthusiasts pursuing engineering grants, our AI platform bridges the gap between deserving candidates and life-changing opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-brand-lime p-6 rounded-xl text-center">
                <TrendingUp className="text-brand-emerald mx-auto mb-3" size={40} />
                <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl text-center">
                <Brain className="text-brand-emerald mx-auto mb-3" size={40} />
                <h3 className="text-2xl font-bold text-gray-900">AI-Powered</h3>
                <p className="text-gray-600">Matching System</p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl text-center">
                <Users className="text-brand-emerald mx-auto mb-3" size={40} />
                <h3 className="text-2xl font-bold text-gray-900">50,000+</h3>
                <p className="text-gray-600">Students Helped</p>
              </div>
              <div className="bg-brand-lime p-6 rounded-xl text-center">
                <Award className="text-brand-emerald mx-auto mb-3" size={40} />
                <h3 className="text-2xl font-bold text-gray-900">10,000+</h3>
                <p className="text-gray-600">Scholarships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-neutral-50 to-brand-lime/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
              AI-Powered Educational Solutions for Modern India
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-brand-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-brand-emerald" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                Intelligent Scholarship Matching
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our proprietary AI engine analyzes your academic profile, financial background, and career goals to identify scholarships with the highest success probability. Students receive personalized matches within 24 hours, complete with application strategies and deadline alerts.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-brand-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FileText className="text-brand-emerald" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                AI-Driven Application Assistance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transform your scholarship applications with our AI writing assistant that helps craft compelling personal statements, essays, and recommendation letter drafts. Our system analyzes winning applications to provide data-driven suggestions for improving your content.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-brand-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="text-brand-emerald" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                Predictive Analytics for Career Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Make informed educational decisions with our AI-powered career prediction models. By analyzing industry trends and job market data, we provide insights into future career prospects and corresponding scholarship opportunities.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-brand-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-brand-emerald" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                Automated Documentation & Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline your application process with our AI-powered document management system. Our OCR technology digitizes certificates while our smart tracking system monitors deadlines and required follow-ups.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="bg-brand-emerald/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-brand-emerald" size={32} />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">
                Personalized Learning Pathways
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access curated educational content and skill development programs based on your scholarship goals. Our AI tutoring system adapts to your learning pace, offering targeted preparation for entrance exams and interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
              Start Your AI-Powered Educational Journey Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your educational future? Our AI experts are here to guide you through every step of your scholarship discovery and application process.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-brand-lime to-neutral-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Education Level</label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                      required
                    >
                      <option value="">Select Level</option>
                      <option value="high-school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Field of Interest</label>
                  <input
                    type="text"
                    name="fieldOfInterest"
                    value={formData.fieldOfInterest}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                    placeholder="e.g., Engineering, Medicine, Arts"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message/Requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
                    placeholder="Tell us about your goals and requirements"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-brand-emerald text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-emerald/10 p-3 rounded-lg">
                      <MapPin className="text-brand-emerald" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office Address</h4>
                      <p className="text-gray-600">701, Stellar Tower, Chembur East<br />Sion Opposite, Diamond Garden<br />Basant Garden, Chembur<br />Mumbai, Maharashtra 400071</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-emerald/10 p-3 rounded-lg">
                      <Phone className="text-brand-emerald" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <a href="tel:+918369848475" className="text-brand-emerald hover:underline">+91 8369848475</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-emerald/10 p-3 rounded-lg">
                      <Mail className="text-brand-emerald" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href="mailto:info@scholarships.in" className="text-brand-emerald hover:underline">info@scholarships.in</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="bg-neutral-50 rounded-2xl p-8 text-center">
                <MapPin className="text-brand-emerald mx-auto mb-4" size={48} />
                <h4 className="font-semibold text-gray-900 mb-2">Visit Our Office</h4>
                <p className="text-gray-600">Located in the heart of Mumbai's educational district</p>
                <button className="mt-4 text-brand-emerald font-medium hover:underline">
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-brand-lime mb-4">Scholarships.in</h3>
              <p className="text-gray-400 mb-4">Empowering India's Future Through AI-Driven Education</p>
              <div className="flex space-x-4">
                <a href="tel:+918369848475" className="text-gray-400 hover:text-brand-lime transition-colors">
                  <Phone size={20} />
                </a>
                <a href="mailto:info@scholarships.in" className="text-gray-400 hover:text-brand-lime transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-brand-lime transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-lime transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-lime transition-colors">Additional Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Phone: +91 8369848475</p>
                <p>Email: info@scholarships.in</p>
                <p>Website: scholarships.in</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Scholarships.in - Empowering Education Through AI</p>
            <p className="mt-2">Owned by Scalium.in</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918369848475?text=Hi! I'm interested in AI-powered scholarship services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default App;