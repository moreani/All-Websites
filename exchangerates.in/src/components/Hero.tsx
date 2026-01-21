
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-blue-800 text-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-roboto leading-tight">
            Unlock the Secrets of <span className="text-accent">Currency Exchange</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-lora text-blue-100 leading-relaxed">
            Delve into the dynamic world of currency exchange with ExchangeRates Academy. 
            Our AI-powered tools make learning about currency fluctuations accessible and insightful. 
            Start your journey toward financial literacy today!
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-roboto font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Button>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-float">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-2">AI-Powered</div>
                <div className="text-sm">Advanced Technology</div>
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-2">Real-Time</div>
                <div className="text-sm">Market Insights</div>
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-accent mb-2">Expert</div>
                <div className="text-sm">Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bgColor to-transparent"></div>
    </section>
  );
};

export default Hero;
