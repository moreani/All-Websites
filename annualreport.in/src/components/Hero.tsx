import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-accent rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-neutral-800 leading-tight mb-6">
              Transform Your{' '}
              <span className="text-primary">Reporting</span>{' '}
              <span className="text-accent">Process</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-roboto mb-8 leading-relaxed">
              Effortlessly generate compelling annual reports with our innovative AI solution. 
              Discover insights, trends, and narratives that bring your data to life.
            </p>
            
            {/* Features Icons */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-neutral-700">AI-Powered Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-neutral-700">Instant Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-neutral-700">Lightning Fast</span>
              </div>
            </div>

            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business professionals working on annual reports"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;