
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-purple-700 to-accent flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-roboto text-white mb-6 leading-tight">
            Unlock Your Marketing Potential with{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              AI-Powered Tools
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-lato text-gray-200 mb-8 max-w-2xl mx-auto">
            Transforming Data into Strategic Insights
          </p>
          
          <p className="text-lg font-lato text-gray-300 mb-10 max-w-3xl mx-auto">
            Elevating Marketing with Intelligent Solutions
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
