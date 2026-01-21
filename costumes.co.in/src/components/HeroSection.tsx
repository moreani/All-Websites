
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="font-nunito font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
              Stop Guessing,{" "}
              <span className="text-primary">Start Predicting</span>:<br />
              AI for Costume Rental Success
            </h1>
            <p className="text-xl text-gray-600 font-lato leading-relaxed mb-8">
              Costumes AI empowers your business with intelligent inventory management and demand forecasting, 
              ensuring you have the right costumes, in the right place, at the right time. 
              <span className="text-primary font-semibold"> Maximize revenue and minimize waste.</span>
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Request a Demo
            </Button>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format" 
                alt="AI and Data Analytics for Costume Rental"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-xl shadow-lg animate-fade-in">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Accuracy</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-lg animate-fade-in">
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm">Cost Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
