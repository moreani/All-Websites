
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Brain className="w-3 h-3 text-accent" />
                </div>
              </div>
              <h1 className="text-4xl font-montserrat font-bold text-gray-800">
                Near.Co.In
              </h1>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-gray-800 mb-6 animate-fade-in leading-tight">
            Discover Your Local
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Community with AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 font-roboto mb-8 animate-fade-in delay-200 max-w-3xl mx-auto leading-relaxed">
            Dive into personalized insights, services, and attractions around you.
            Experience your neighborhood like never before.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in delay-400">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-600">
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-gray-800 mb-2">Local Discovery</h3>
              <p className="text-gray-600 text-center font-roboto">Find hidden gems and essential services in your neighborhood</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-montserrat font-semibold text-gray-800 mb-2">AI-Powered</h3>
              <p className="text-gray-600 text-center font-roboto">Smart recommendations tailored to your preferences</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              <h3 className="font-montserrat font-semibold text-gray-800 mb-2">Real-time Insights</h3>
              <p className="text-gray-600 text-center font-roboto">Live data and updates from your local community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
