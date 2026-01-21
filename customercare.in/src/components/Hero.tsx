import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply floating-element"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent rounded-full mix-blend-multiply floating-element" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          <div className="lg:w-1/2 text-white hero-animation">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-accent mr-2" />
              <span className="text-accent font-medium">AI-Powered Customer Care</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight mb-6">
              Revolutionize Your{' '}
              <span className="text-accent">Customer Care</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Experience the Future of Customer Support with AI Automation
            </p>
            
            <p className="text-lg mb-10 text-blue-100 max-w-2xl">
              Transform your customer interactions with intelligent automation that enhances satisfaction, 
              reduces costs, and delivers exceptional experiences 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-accent text-gray-800 px-8 py-4 rounded-lg font-montserrat font-semibold text-lg flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 hero-animation" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-12 h-12 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                    AI-Powered Excellence
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Join thousands of businesses already transforming their customer care with our intelligent solutions.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">24/7</div>
                      <div className="text-sm text-blue-100">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">95%</div>
                      <div className="text-sm text-blue-100">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">50%</div>
                      <div className="text-sm text-blue-100">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;