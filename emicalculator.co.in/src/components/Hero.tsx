import React from 'react';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-text leading-tight">
                Unlock Your{' '}
                <span className="text-primary">Financial</span>{' '}
                Potential!
              </h1>
              <p className="font-opensans text-lg sm:text-xl text-gray-600 leading-relaxed">
                Personalized AI-driven insights for smarter loan choices. Make informed decisions 
                that optimize your financial future with our advanced analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-red-600 text-white font-opensans font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-opensans font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-sm text-text">AI-Powered</h3>
                  <p className="font-opensans text-xs text-gray-600">Smart Analysis</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-sm text-text">Secure</h3>
                  <p className="font-opensans text-xs text-gray-600">Data Protection</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-sm text-text">Instant</h3>
                  <p className="font-opensans text-xs text-gray-600">Results</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
                alt="Financial planning and calculator"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;