import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-light-gray via-white to-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="px-3 py-1 bg-accent/10 rounded-full">
                <span className="text-accent font-roboto text-sm font-medium">🚀 AI-Powered</span>
              </div>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-primary leading-tight mb-6">
              AI-Driven<br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Examination Insights
              </span>
            </h1>
            
            <p className="font-roboto text-lg text-gray-600 mb-8 leading-relaxed">
              Revolutionizing how educational results are analyzed and understood. 
              Harness the power of artificial intelligence to transform exam data into actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-accent to-red-600 text-white px-8 py-4 rounded-lg font-poppins font-semibold 
                         hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-poppins font-semibold 
                         hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Learn More</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-primary mb-2">500+</div>
                <div className="font-roboto text-gray-600 text-sm">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-primary mb-2">1M+</div>
                <div className="font-roboto text-gray-600 text-sm">Results Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-primary mb-2">99.9%</div>
                <div className="font-roboto text-gray-600 text-sm">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-poppins font-semibold text-xl text-primary">Performance Analytics</h3>
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-roboto text-gray-600">Overall Score</span>
                    <span className="font-poppins font-semibold text-primary">92.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full w-[92.5%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-roboto text-gray-600">AI Predictions</span>
                    <span className="font-poppins font-semibold text-primary">96.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full w-[96.8%]"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-accent to-primary p-4 rounded-full animate-float">
                <Zap className="h-6 w-6 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-blue-600 p-4 rounded-full animate-float" style={{animationDelay: '1s'}}>
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;