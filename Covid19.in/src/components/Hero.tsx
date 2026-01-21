import React from 'react';
import { ChevronDown, Shield, Brain, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bruised-violet via-cobalt to-crimson"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-saffron/20 rounded-full blur-xl animate-bounce-gentle"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald/20 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-terracotta/20 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-white mb-6 leading-tight">
            Harnessing AI to<br />
            <span className="text-saffron">Combat COVID-19</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-roboto leading-relaxed">
            Empowering Health Through Data-Driven Decisions
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-emerald" />
              <span className="text-white font-medium">Health Protection</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Brain className="h-5 w-5 text-saffron" />
              <span className="text-white font-medium">AI-Powered Insights</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <TrendingUp className="h-5 w-5 text-terracotta" />
              <span className="text-white font-medium">Predictive Analytics</span>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-white text-bruised-violet font-semibold rounded-full hover:bg-light-gray transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discover How
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce-gentle" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-8 w-8 text-white/70 animate-bounce-gentle" />
      </div>
    </section>
  );
};

export default Hero