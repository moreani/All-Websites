import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-green-800/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-accent text-primary p-4 rounded-full animate-float">
              <TrendingUp size={48} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-primary animate-fade-in">
            Fight Inflation with{' '}
            <span className="text-accent">Intelligent Automation</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-gray-100 font-secondary animate-slide-up">
            Secure Your Financial Future
          </h2>
          
          <p className="text-lg md:text-xl mb-12 text-gray-200 leading-relaxed animate-slide-up">
            Streamline your financial processes, reduce costs, and boost efficiency with 
            AI-powered automation solutions, built for Indian businesses.
          </p>
          
          <button
            onClick={scrollToContact}
            className="bg-accent text-primary font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 animate-slide-up"
          >
            Request a Demo
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;