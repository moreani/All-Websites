
import { ArrowRight, Play, FileText, Video } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-roboto font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
              Effortless Reporting 
              <span className="text-primary block">with AI</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your videos and documents into professional PDF reports in minutes. 
              Our AI-powered platform automates the extraction of vital information, 
              saving you time and streamlining your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToServices}
                className="bg-primary hover:bg-primary/90 text-white font-roboto font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Generating Reports
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-roboto font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="AI-powered reporting dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-primary text-white p-4 rounded-xl shadow-lg animate-float">
              <FileText size={24} />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <Video size={24} />
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
