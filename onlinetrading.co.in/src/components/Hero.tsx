import React from 'react';
import { ArrowRight, BarChart3, Brain, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
            Navigate the Markets with 
            <span className="text-accent block mt-2">AI Precision</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-roboto mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Unlock unparalleled insights into market dynamics through advanced AI analytics 
            tailored for the modern trader.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold font-poppins flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>Start Your Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold font-poppins transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center animate-float">
              <Brain className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold font-poppins mb-2">AI-Powered</h3>
              <p className="text-sm opacity-80 font-roboto">Advanced machine learning algorithms</p>
            </div>
            
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.5s' }}>
              <BarChart3 className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold font-poppins mb-2">Real-Time Analytics</h3>
              <p className="text-sm opacity-80 font-roboto">Live market data processing</p>
            </div>
            
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '1s' }}>
              <Zap className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold font-poppins mb-2">Lightning Fast</h3>
              <p className="text-sm opacity-80 font-roboto">Instant insights and alerts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;