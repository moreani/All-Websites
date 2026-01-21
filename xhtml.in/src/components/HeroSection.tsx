
import { ArrowRight, Bot, Sparkles, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-deepIndigo to-calmTeal pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <Bot className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white font-open-sans">AI-Powered Solutions</span>
              <Sparkles className="w-4 h-4 text-softSaffron" />
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-softSaffron to-warmIvory rounded-full flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-deepIndigo" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-roboto text-white">XHTML.IN</h1>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-roboto text-white mb-6 leading-tight">
            Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-softSaffron to-warmIvory"> Digital Presence </span>
            with AI Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-warmIvory/90 mb-8 max-w-3xl mx-auto font-open-sans font-light leading-relaxed">
            Empowering Businesses to Achieve Excellence Through Intelligent Software Development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-softSaffron hover:bg-softSaffron/90 text-deepIndigo px-8 py-4 text-lg font-roboto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="border-softSaffron text-softSaffron hover:bg-softSaffron hover:text-deepIndigo px-8 py-4 text-lg font-roboto transition-all duration-300"
            >
              Explore Services
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-softSaffron font-roboto">50+</div>
              <div className="text-warmIvory font-open-sans">AI Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-softSaffron font-roboto">98%</div>
              <div className="text-warmIvory font-open-sans">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-softSaffron font-roboto">24/7</div>
              <div className="text-warmIvory font-open-sans">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
