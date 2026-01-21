
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-white/25 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6 leading-tight">
              Revolutionize Your 
              <span className="text-accent block">Advertising Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Automate your campaigns with cutting-edge AI solutions for ultimate efficiency and effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToAbout}
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Discover How
                <ArrowRight className="ml-2" size={20} />
              </button>
              <a 
                href="tel:+918369848475"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                Get Started Today
              </a>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center text-white/90 fade-in-up stagger-1">
                <Zap className="mr-3 text-accent" size={24} />
                <span className="font-semibold">AI-Powered Automation</span>
              </div>
              <div className="flex items-center text-white/90 fade-in-up stagger-2">
                <Target className="mr-3 text-accent" size={24} />
                <span className="font-semibold">Precision Targeting</span>
              </div>
              <div className="flex items-center text-white/90 fade-in-up stagger-3">
                <TrendingUp className="mr-3 text-accent" size={24} />
                <span className="font-semibold">Maximize ROI</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative fade-in-up stagger-2">
            <div className="hero-animation">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format"
                alt="Digital Marketing Automation Dashboard"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg hero-animation">
              <TrendingUp size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-primary p-4 rounded-full shadow-lg hero-animation" style={{animationDelay: '1s'}}>
              <Target size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
