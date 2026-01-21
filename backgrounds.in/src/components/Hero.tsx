import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-xl animate-bounce-subtle"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/20 rounded-full blur-xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-lg animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-width text-center text-white relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-accent mr-3" size={32} />
            <span className="text-accent font-semibold text-lg">Welcome to Backgrounds AI!</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
            Your Vision, Realized in{' '}
            <span className="block text-accent">Pixel-Perfect Backgrounds</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
            Elevate your creative vision with uniquely generated backgrounds. Our AI technology turns your ideas into stunning, high-resolution visuals that captivate and inspire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="group bg-accent hover:bg-accent/90 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center"
            >
              Start Creating Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 border border-white/20"
            >
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
              <div className="text-white/80">Backgrounds Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4K+</div>
              <div className="text-white/80">Happy Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/80">AI Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;