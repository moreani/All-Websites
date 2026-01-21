
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-roboto text-gray-900 mb-6 leading-tight">
            Master Music with
            <span className="block text-primary">Cutting-Edge AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-lora text-gray-600 mb-8 leading-relaxed">
            Unleash your musical potential through personalized AI-driven lessons
          </p>
          
          <div className="mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-roboto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today!
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-in-left" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-roboto font-semibold text-lg mb-2">AI-Powered Learning</h3>
              <p className="text-gray-600 font-roboto">Personalized lessons that adapt to your pace</p>
            </div>
            
            <div className="text-center animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="font-roboto font-semibold text-lg mb-2">Real-time Feedback</h3>
              <p className="text-gray-600 font-roboto">Instant analysis and performance insights</p>
            </div>
            
            <div className="text-center animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-roboto font-semibold text-lg mb-2">Community Connect</h3>
              <p className="text-gray-600 font-roboto">Learn with fellow musicians across India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
