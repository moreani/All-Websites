
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-bg-light to-bg-dark flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-roboto text-accent mb-6 leading-tight">
            Where AI Meets{' '}
            <span className="text-primary">Fashion Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-lora text-gray-600 mb-8 max-w-3xl mx-auto">
            Unlocking the Future of Design with Intelligent Insights
          </p>
          
          <Button 
            onClick={scrollToServices}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-roboto font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Solutions
          </Button>
        </div>
        
        <div className="mt-16 animate-slide-in-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-roboto font-semibold text-accent mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-sm">Advanced machine learning algorithms</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="font-roboto font-semibold text-accent mb-2">Fashion Forward</h3>
              <p className="text-gray-600 text-sm">Cutting-edge design solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-roboto font-semibold text-accent mb-2">Data-Driven</h3>
              <p className="text-gray-600 text-sm">Intelligent trend forecasting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
