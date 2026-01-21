import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <BarChart3 className="h-8 w-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <TrendingUp className="h-12 w-12 text-accent/40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Zap className="h-10 w-10 text-primary/20" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Transform Your Trading with{' '}
            <span className="text-accent">AI Insights</span>
          </h1>
          <p className="font-opensans text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Nifty Trading AI provides intelligent solutions that empower traders to make data-driven decisions and maximize their potential.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToServices}
              className="group bg-primary text-white px-8 py-4 rounded-full font-opensans font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Explore Our Tools
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/918369848475', '_blank')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-opensans font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;