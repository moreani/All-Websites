import React from 'react';
import { ArrowRight, Zap, Brain } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/10 via-neutral-0 to-accent/10 flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in-up">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <Brain className="w-8 h-8 text-primary animate-float" />
            <span className="text-primary font-poppins font-medium text-lg">AI-Powered</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-primary mb-6 leading-tight">
            Launch Your Website in 
            <span className="text-accent"> Minutes</span> with AI
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 font-poppins mb-8 max-w-2xl mx-auto lg:mx-0">
            Webpages.in uses cutting-edge AI to generate stunning, fully functional websites for your business. Get online faster than ever before.
          </p>
          
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-poppins font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
          >
            Start Building Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-gray-600 font-poppins">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-accent" />
              <span className="text-gray-600 font-poppins">AI-Powered</span>
            </div>
          </div>
        </div>
        
        <div className="relative animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="AI Website Automation"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          <div className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg animate-float">
            <Brain className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;