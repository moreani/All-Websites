
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop&q=80" 
          alt="Indian family with children and technology"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nurturing-teal/90 via-nurturing-teal/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding py-32 md:py-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-scale-in">
                🤖 AI-Powered Parenting Solutions
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-6">
                Transform Your 
                <span className="block text-warm-coral">Parenting Journey</span>
                <span className="block">with AI-Powered Insights</span>
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
                Discover personalized parenting strategies, track your child's development, and build stronger family bonds with India's most advanced AI parenting platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-warm-coral text-white rounded-full font-semibold text-lg hover:bg-warm-coral/90 transition-all duration-300 hover-scale flex items-center justify-center gap-2 group"
                >
                  Start Your Smart Parenting Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 hover-scale flex items-center justify-center gap-2">
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-warm-coral mb-2">10K+</div>
                  <div className="text-white/80 text-sm md:text-base">Families Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-warm-coral mb-2">95%</div>
                  <div className="text-white/80 text-sm md:text-base">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-warm-coral mb-2">24/7</div>
                  <div className="text-white/80 text-sm md:text-base">AI Support</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="text-white">
                    <h3 className="text-2xl font-playfair font-semibold mb-4">
                      Nurturing Tomorrow's Leaders with AI-Driven Intelligence
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Empowering Indian parents with cutting-edge AI technology to make informed parenting decisions, foster healthy child development, and build stronger family bonds in the digital age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-warm-coral/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-white/20 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;
