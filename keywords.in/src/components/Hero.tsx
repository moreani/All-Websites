import React from 'react';
import { ArrowRight, BarChart3, Brain, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-poppins font-bold text-dark leading-tight mb-6">
              Unlock the Power of 
              <span className="text-primary"> AI-Driven</span>
              <span className="text-accent"> Insights</span>
            </h1>
            <p className="text-xl text-gray-600 font-roboto mb-8 leading-relaxed">
              Transform your business strategy with KeywordAI's advanced data analytics solutions. 
              Empower your enterprise with intelligent insights that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-lg font-roboto font-medium text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-roboto font-medium text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Advanced Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-accent" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Real-time Insights</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="AI Data Analytics Dashboard" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
            {/* Floating stats cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;