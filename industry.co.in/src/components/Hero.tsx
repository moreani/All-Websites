
import React from 'react';
import { ArrowDown, Sparkles, TrendingUp, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Sparkles className="text-yellow-400" size={20} />
                <span className="text-white/90 text-sm font-medium">AI-Powered Intelligence</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              AI-Powered Market Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Harness the power of artificial intelligence to analyze market trends, 
              consumer behavior, and competitive landscapes across industries
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button className="group relative bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300">
                <span className="relative z-10">Start Analysis</span>
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-96">
              {/* Main Card */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Market Analysis</h3>
                  <TrendingUp className="text-green-400" size={24} />
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-red-400 rounded-full"></div>
                  <div className="h-2 bg-purple-400 rounded-full w-3/4"></div>
                  <div className="h-2 bg-blue-400 rounded-full w-1/2"></div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/70 text-sm">Growth Rate</div>
                    <div className="text-green-400 font-bold text-xl">+24.5%</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-white/70 text-sm">Market Size</div>
                    <div className="text-blue-400 font-bold text-xl">$2.4B</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-orange-500 rounded-2xl p-4 animate-bounce delay-1000">
                <BarChart3 className="text-white" size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 animate-pulse">
                <Sparkles className="text-white" size={20} />
              </div>

              {/* Data Points */}
              <div className="absolute top-1/4 -left-8 bg-white/20 backdrop-blur-sm rounded-lg p-2 animate-pulse delay-700">
                <div className="text-white text-xs font-medium">AI Accuracy</div>
                <div className="text-green-400 font-bold">99.9%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/70 text-sm">Explore</span>
            <ArrowDown className="text-red-400" size={32} />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-20 w-2 h-16 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-16 w-2 h-12 bg-purple-500 rounded-full opacity-60 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
