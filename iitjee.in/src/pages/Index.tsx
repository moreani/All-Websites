
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background-white font-lato">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-roboto font-bold mb-6 leading-tight">
            Prepare for Greatness with{' '}
            <span className="text-accent">IITJEE Academy</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Harness the power of AI-based learning tailored for IIT JEE aspirants.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-roboto font-bold text-primary mb-8">
              About IITJEE Academy
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="mb-6 text-lg">
                At IITJEE Academy, we understand that the journey towards securing a seat in the Indian Institutes of Technology is challenging yet rewarding. Our mission is to empower students through cutting-edge AI-driven educational methodologies.
              </p>
              <p className="mb-6 text-lg">
                By utilizing sophisticated algorithms and data analysis, we tailor our study programs to meet the unique needs of each learner. Our experienced educators provide foundational knowledge and advanced techniques that ensure students excel not just in examinations but in their future academic endeavors.
              </p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">AI</span>
                  </div>
                  <h3 className="font-roboto font-bold text-primary mb-2">AI-Powered</h3>
                  <p className="text-gray-600">Advanced algorithms personalize your learning experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">📊</span>
                  </div>
                  <h3 className="font-roboto font-bold text-primary mb-2">Data-Driven</h3>
                  <p className="text-gray-600">Performance analytics guide your preparation strategy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">🎯</span>
                  </div>
                  <h3 className="font-roboto font-bold text-primary mb-2">Results-Focused</h3>
                  <p className="text-gray-600">Proven methodologies for IIT JEE success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-roboto font-bold text-primary text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">📚</span>
                  </div>
                  <h3 className="font-roboto font-bold text-primary text-xl mb-3">
                    Personalized Study Plans
                  </h3>
                  <p className="text-gray-600">
                    Our AI systems analyze students' strengths and weaknesses to devise customized study schedules, ensuring efficient use of time and resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary text-xl">🎮</span>
                  </div>
                  <h3 className="font-roboto font-bold text-primary text-xl mb-3">
                    Interactive Learning Modules
                  </h3>
                  <p className="text-gray-600">
                    Engage with our modern, interactive learning materials, including video lectures, quizzes, and simulated exams, designed to enhance understanding and retention.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">📈</span>
                  </div>
                  <h3 className="font-roboto font-bold text-primary text-xl mb-3">
                    Performance Analytics
                  </h3>
                  <p className="text-gray-600">
                    Track your progress through our comprehensive analytics platform, allowing students to view their performance trends and improvement areas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <span className="text-primary text-xl">🎯</span>
                  </div>
                  <h3 className="font-roboto font-bold text-primary text-xl mb-3">
                    24/7 Mentorship Support
                  </h3>
                  <p className="text-gray-600">
                    Our team of expert mentors is available around the clock to provide guidance, answer questions, and foster an encouraging learning environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-xl">👥</span>
                  </div>
                  <h3 className="font-roboto font-bold text-primary text-xl mb-3">
                    Group Study Sessions
                  </h3>
                  <p className="text-gray-600">
                    Join our group sessions that facilitate collaborative learning and peer support, enhancing motivation and deeper comprehension of complex subjects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-roboto font-bold text-primary text-center mb-12">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-roboto font-bold text-primary mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  To get in touch with us, please fill out the contact form or reach out directly via our WhatsApp button for quick queries.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">701, Stellar Tower, Chembur East, Sion Opposite, Diamond Garden, Basant Garden, Chembur, Mumbai, Maharashtra 400071</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+918369848475" className="text-primary hover:underline">+91 8369848475</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@iitjee.in" className="text-primary hover:underline">info@iitjee.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary">🌐</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Website</p>
                      <a href="https://iitjee.in" className="text-primary hover:underline">iitjee.in</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-roboto font-bold text-primary mb-6">Send us a Message</h3>
                <ContactForm />
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-12">
              <h3 className="text-2xl font-roboto font-bold text-primary mb-6 text-center">Our Location</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3986645507797!2d72.8896969!3d19.0473831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c6b3b7f7f7%3A0x1234567890abcdef!2sChembur%2C%20Mumbai%2C%20Maharashtra%20400071!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IITJEE Academy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">© 2025 IITJEE Academy | All Rights Reserved</p>
            <p className="text-gray-300">Owned by <a href="https://scalium.in" className="text-accent hover:underline">Scalium.in</a></p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
